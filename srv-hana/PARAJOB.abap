REPORT PARAJOB.
*
* Data declarations
*
DATA: GROUP LIKE RZLLITAB-CLASSNAME VALUE ' ', 
                               "Parallel processing group. 
                                "SPACE = group default (all
                                "servers)
      WP_AVAILABLE TYPE I,      "Number of dialog work processes
                                "available for parallel processing
                                "(free work processes) 
      WP_TOTAL TYPE I,          "Total number of dialog work 
                                "processes in the group
      MSG(80) VALUE SPACE,      "Container for error message in 
                                "case of remote RFC exception.
      INFO LIKE RFCSI, C,       "Message text                  
      JOBS TYPE I VALUE 10,     "Number of parallel jobs     
      SND_JOBS TYPE I VALUE 1,  "Work packets sent for processing                
      RCV_JOBS TYPE I VALUE 1,  "Work packet replies received 
      EXCP_FLAG(1) TYPE C,      "Number of RESOURCE_FAILUREs  
      TASKNAME(4) TYPE N VALUE '0001',  "Task name (name of 
                                "parallel processing work unit)
      BEGIN OF TASKLIST OCCURS 10,  "Task administration 
         TASKNAME(4) TYPE C, 
         RFCDEST     LIKE RFCSI-RFCDEST,
         RFCHOST     LIKE RFCSI-RFCHOST,                             
      END OF TASKLIST.                              
*
* Optional call to SBPT_INITIALIZE to check the 
* group in which parallel processing is to take place. 
* Could be used to optimize sizing of work packets
* work / WP_AVAILABLE).
*
CALL FUNCTION 'SPBT_INITIALIZE'                      
  EXPORTING                                        
    GROUP_NAME                   = GROUP    
                                   "Name of group to check
  IMPORTING          
    MAX_PBT_WPS                  = WP_TOTAL 
                                   "Total number of dialog work
                                   "processes available in group
                                   "for parallel processing
    FREE_PBT_WPS                 = WP_AVAILABLE     
                                   "Number of work processes 
                                   "available in group for 
                                   "parallel processing at this
                                   "moment
  EXCEPTIONS                                      
    INVALID_GROUP_NAME           = 1 
                                   "Incorrect group name; RFC 
                                   "group not defined. See  
                                   "transaction RZ12 
    INTERNAL_ERROR               = 2 
                                   "SAP system error; see the
                                   "system log (transaction 
                                   "SM21) for diagnostic info        
    PBT_ENV_ALREADY_INITIALIZED  = 3 
                                   "Function module may be 
                                   "called only once; is called
                                   "automatically by the SAP system if you
                                   "do not call before starting
                                   "parallel processing         
    CURRENTLY_NO_RESOURCES_AVAIL = 4 
                                   "No dialog work processes 
                                   "in the group are available;
                                   "they are busy or server load
                                   "is too high         
    NO_PBT_RESOURCES_FOUND       = 5 
                                   "No servers in the group 
                                   "met the criteria of >  
                                   "two work processes 
                                   "defined.          
    CANT_INIT_DIFFERENT_PBT_GROUPS = 6
                                   "You have already initialized 
                                   "one group and have now tried 
                                   "initialize a different group.
    OTHERS                        = 7..            

CASE SY-SUBRC.
    WHEN 0.
       "Everything's ok. Optionally set up for optimizing size of 
       "work packets.
    WHEN 1.
       "Non-existent group name.  Stop report.
       MESSAGE E836. "Group not defined.
    WHEN 2. 
       "System error.  Stop and check system log for error 
       "analysis.
    WHEN 3. 
       "Programming error.  Stop and correct program.
       MESSAGE E833. "PBT environment was already initialized.
    WHEN 4. 
       "No resources: this may be a temporary problem.  You 
       "may wish to pause briefly and repeat the call.  Otherwise
       "check your RFC group administration:  Group defined 
       "in accordance with your requirements? 
       MESSAGE E837. "All servers currently busy.
    WHEN 5. 
       "Check your servers, network, operation modes.  
    WHEN 6. 

* Do parallel processing.  Use CALL FUNCTION STARTING NEW TASK
* DESTINATION IN GROUP to call the function module that does the 
* work.  Make a call for each record that is to be processed, or 
* divide the records into work packets.  In each case, provide the 
* set of records as an internal table in the CALL FUNCTION 
* keyword (EXPORT, TABLES arguments).  

DO.                                                                  
  CALL FUNCTION 'RFC_SYSTEM_INFO'    "Function module to perform 
                                     "in parallel  
       STARTING NEW TASK TASKNAME    "Name for identifying this 
                                     "RFC call
       DESTINATION IN GROUP group    "Name of group of servers to 
                                     "use for parallel processing.
                                     "Enter group name exactly 
                                     "as it appears in transaction 
                                     "RZ12 (all caps).  You may 
                                     "use only one group name in a 
                                     "particular ABAP program.
       PERFORMING RETURN_INFO ON END OF TASK 
                                     "This form is called when the 
                                     "RFC call completes. It can 
                                     "collect IMPORT and TABLES 
                                     "parameters from the called 
                                     "function with RECEIVE. 
       EXCEPTIONS                                                    
         COMMUNICATION_FAILURE = 1 MESSAGE msg 
                                     "Destination server not 
                                     "reached or communication 
                                     "interrupted.  MESSAGE msg 
                                     "captures any message 
                                     "returned with this 
                                     "exception (E or A messages
                                     "from the called FM, for   
                                     "example.  After exception
                                     "1 or 2, instead of aborting 
                                     "your program, you could use 
                                     "SPBT_GET_PP_DESTINATION and
                                     "SPBT_DO_NOT_USE_SERVER to 
                                     "exclude this server from 
                                     "further parallel processing.
                                     "You could then re-try this 
                                     "call using a different 
                                     "server.
         SYSTEM_FAILURE        = 2  MESSAGE msg
                                     "Program or other internal 
                                     "SAP error.  MESSAGE msg 
                                     "captures any message 
                                     "returned with this 
                                     "exception.  
         RESOURCE_FAILURE      = 3.  "No work processes are 
                                     "currently available.  Your 
                                     "program MUST handle this 
                                     "exception. 
         YOUR_EXCEPTIONS        = X. "Add exceptions generated by 
                                     "the called function module 
                                     "here.  Exceptions are 
                                     "returned to you and you can 
                                     "respond to them here. 
                                                                     
  CASE SY-SUBRC.                                                     
    WHEN 0.                                                          
      "Administration of asynchronous RFC tasks                               
      "Save name of task...
      TASKLIST-TASKNAME = TASKNAME.  
      "... and get server that is performing RFC call. 
      CALL FUNCTION 'SPBT_GET_PP_DESTINATION'   
        EXPORTING                             
          RFCDEST = TASKLIST-RFCDEST       
        EXCEPTIONS                           
          OTHERS  = 1.                          
      APPEND TASKLIST.                                               
      WRITE: /  'Started task: ', TASKLIST-TASKNAME COLOR 2.         
                                                                     
      TASKNAME = TASKNAME + 1.                                       
      SND_JOBS = SND_JOBS + 1.                                 
      "Mechanism for determining when to leave the loop.  Here, a 
      "simple counter of the number of parallel processing tasks.  
      "In production use, you would end the loop when you have 
      "finished dispatching the data that is to be processed. 
      JOBS     = JOBS - 1.  "Number of existing jobs                 
      IF JOBS = 0.                                                   
        EXIT.  "Job processing finished                              
      ENDIF.                                                         
    WHEN 1 OR 2.
      "Handle communication and system failure.  Your program must 
      "catch these exceptions and arrange for a recoverable 
      "termination of the background processing job.  
      "Recommendation:  Log the data that has been processed when
      "an RFC task is started and when it returns, so that the 
      "job can be restarted with unprocessed data.   
      WRITE msg.  
      "Remove server from further consideration for 
      "parallel processing tasks in this program. 
      "Get name of server just called... 
      CALL FUNCTION 'SPBT_GET_PP_DESTINATION'   
        EXPORTING                             
          RFCDEST = TASKLIST-RFCDEST       
        EXCEPTIONS                           
          OTHERS  = 1.                          
      "Then remove from list of available servers.
      CALL FUNCTION 'SPBT_DO_NOT_USE_SERVER'
        IMPORTING 
          SERVERNAME = TASKLIST-RFCDEST
        EXCEPTIONS 
          INVALID_SERVER_NAME         = 1  
          NO_MORE_RESOURCES_LEFT      = 2  
                                        "No servers left in group.
          PBT_ENV_NOT_INITIALIZED_YET = 3
          OTHERS                      = 4.
    WHEN 3.  
      "No resources (dialog work processes) available at 
      "present.  You need to handle this exception, waiting
      "and repeating the CALL FUNCTION until processing 
      "can continue or it is apparent that there is a 
      "problem that prevents continuation.  
      MESSAGE I837. "All servers currently busy.
      "Wait for replies to asynchronous RFC calls.  Each 
      "reply should make a dialog work process available again. 
      IF EXCP_FLAG = SPACE.                                     
         EXCP_FLAG = 'X'.                                       
         "First attempt at RESOURCE_FAILURE handling.  Wait 
         "until all RFC calls have returned or up to 1 second.
         "Then repeat CALL FUNCTION.                    
         WAIT UNTIL RCV_JOBS >= SND_JOBS UP TO '1' SECONDS.  
      ELSE.                                                     
         "Second attempt at RESOURCE_FAILURE handling                  
         WAIT UNTIL RCV_JOBS >= SND_JOBS UP TO '5' SECONDS.   
         "SY-SUBRC 0 from WAIT shows that replies have returned.  
         "The resource problem was therefore probably temporary
         "and due to the workload.  A non-zero RC suggests that
         "no RFC calls have been completed, and there may be 
         "problems.    
         IF SY-SUBRC = 0.                                          
           CLEAR EXCP_FLAG.
         ELSE.  "No replies                                        
           "Endless loop handling                                  
         ...                                                     
         ENDIF.                                                            
       ENDIF.
    ENDCASE.                                                    
ENDDO.                                                          
...                                                             
*
* Wait for end of job:  replies from all RFC tasks. 
* Receive remaining asynchronous replies                        
WAIT UNTIL RCV_JOBS >= SND_JOBS.                                
LOOP AT TASKLIST.                                               
  WRITE:/   'Received task:', TASKLIST-TASKNAME COLOR 1,        
        30  'Destination: ', TASKLIST-RFCDEST COLOR 1.          
ENDLOOP.                                                         
...
*
* This routine is triggered when an RFC call completes and 
* returns.  The routine uses RECEIVE to collect IMPORT and TABLE
* data from the RFC function module.  
*
* Note that the WRITE keyword is not supported in asynchronous 
* RFC.  If you need to generate a list, then your RFC function 
* module should return the list data in an internal table.  You 
* can then collect this data and output the list at the conclusion 
* of processing.  
*
FORM RETURN_INFO USING TASKNAME.                                

   DATA:  INFO_RFCDEST LIKE TASKLIST-RFCDEST.

   RECEIVE RESULTS FROM FUNCTION 'RFC_SYSTEM_INFO'               
     IMPORTING RFCSI_EXPORT = INFO                               
     EXCEPTIONS                                                  
       COMMUNICATION_FAILURE = 1                                 
       SYSTEM_FAILURE        = 2.                                
                                                                 
   RCV_JOBS = RCV_JOBS + 1.  "Receiving data                     
     IF SY-SUBRC NE 0.                                           
     * Handle communication and system failure                  
    ...                                                       
     ELSE.                                                       
       READ TABLE TASKLIST WITH KEY TASKNAME = TASKNAME.         
       IF SY-SUBRC = 0.  "Register data                          
         TASKLIST-RFCHOST = INFO_RFCHOST.                        
         MODIFY TASKLIST INDEX SY-TABIX.                         
       ENDIF.                                                    
     ENDIF.                                                      
...                                                           
ENDFORM

            