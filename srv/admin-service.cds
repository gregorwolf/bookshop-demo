using my.bookshop as db from '../db/';
using {ZPDCDS_SRV as external} from './external/ZPDCDS_SRV';
using {sap} from '@sap/cds/common';

service AdminService @(
  impl    : './admin-service.js',
  requires: [
    'admin',
    'booksadmin',
    'jobscheduler'
  ]
) {
  @odata.draft.enabled
  entity Approval                as projection on db.Approval actions {
    action approve();
    action rejection();
  };

  entity Books @(
    restrict    : [
      {
        grant: 'READ',
        to   : 'admin'
      },
      {
        grant: '*',
        to   : 'booksadmin'
      },
    ],
    Capabilities: {
      InsertRestrictions: {Permissions: [{Scopes: [{Scope: 'booksadmin'}]}]},
      UpdateRestrictions: {Updatable: true},
      DeleteRestrictions: {Deletable: true}
    },
  )                              as projection on db.Books;

  @readonly
  entity BooksAnalytics          as projection on db.BooksAnalytics;
  /*
  @readonly
  entity BooksViewWOkey      as projection on db.BooksViewWOkey;

  @readonly
  entity BooksViewWOtype     as projection on db.BooksViewWOtype;
  */

  entity Documents               as projection on db.Documents;

  @odata.draft.enabled
  entity DocumentsWithDraft      as projection on db.Documents;

  entity BooksAuthorsAssignment  as projection on db.BooksAuthorsAssignment {
    *,
    ASSOC_Book : redirected to Books
  };

  // view BooksAnalytics as select from db.BooksAnalytics;
  entity Authors @(restrict: [{
    grant: 'READ',
    to   : 'admin'
  }, ])                          as projection on db.Authors {
    *
  };

  @(restrict: [
    {
      grant: [
        'READ',
        'CREATE',
        'UPDATE'
      ],
      to   : 'admin'
    },
    {
      grant: 'DELETE',
      where: `parent_ID <> ''`
    }
  ])
  entity Genres                  as projection on db.Genres;

  @odata.draft.enabled
  entity Orders                  as select from db.Orders actions {
                                      action deleteOrder();
                                      action checkConsistency();
                                                                                                       @(
                                        /*
                                        Core.OperationAvailable             : {$edmJson : {$Eq : [
                                          {$Path : 'in/orderstatus_code'},
                                          'N'
                                        ]}},
                                        */
                                        Core.OperationAvailable            : {$edmJson: {$In: [
                                          {$Path: 'in/orderstatus_code'},
                                          'N',
                                          'I'
                                        ]}},
                                        Common.SideEffects.TargetProperties: ['in/orderstatus_code'],
                                      )
                                      action checkConsistencyInline();
                                      action setOrderParameters(vipOrder : db.Orders:vipOrder not null @UI.ParameterDefaultValue: false,
                                             employeeOrder : db.Orders:employeeOrder not null @UI.ParameterDefaultValue: true );
                                      action NewAction(OrderNo : db.Orders:OrderNo not null, CustomerOrderNo : db.Orders:CustomerOrderNo);
                                    };

  annotate Orders with {
    ID @Core.Computed;
  }

  entity A_SalesOrganizationText as projection on db.A_SalesOrganizationText;
  annotate A_SalesOrganizationText with @cds.odata.valuelist;

  //------- auto-exposed --------
  entity OrderItems              as projection on db.OrderItems {
    *,
    book : redirected to Books
  };

  entity OrderShippingAddress    as projection on db.OrderShippingAddress;
  //> these shall be removed but this would break the Fiori UI
  entity Languages               as projection on sap.common.Languages;

  @odata.draft.enabled
  // @Common.DraftRoot.NewAction : 'AdminService.createDraftRole'
  entity Roles @(restrict: [{
    grant: ['*'],
    to   : 'roleadmin'
  }, ])                          as projection on db.Roles actions {
    @cds.odata.bindingparameter.collection
    action createDraftRole(rolename : String not null, description : String not null) returns Roles;
    @(Common.SideEffects.TargetEntities: ['/AdminService.EntityContainer/Roles'])
    action countUp()                                                                  returns Roles;
    @(Common.SideEffects.TargetEntities: ['/AdminService.EntityContainer/Roles'])
    action countDown()                                                                returns Roles;
  };

  //------- auto-exposed --------
  entity Role_BusinessObject     as projection on db.Role_BusinessObject;
  entity Role_User               as projection on db.Role_User;

  //> these shall be removed but this would break the Fiori UI
  entity BusinessObjects @(restrict: [{
    grant: ['READ'],
    to   : 'admin'
  }, ])                          as projection on db.BusinessObjects;

  @Common.SideEffects #responsibleChange: {
    SourceProperties: [responsible_ID],
    TargetEntities  : [responsible]
  }
  @Common.SideEffects #employeeChange   : {
    SourceProperties: [employee_ID],
    TargetEntities  : [employee]
  }
  entity Users @(restrict: [{
    grant: ['*'],
    to   : 'admin'
  }, ])                          as projection on db.Users;

  @readonly
  entity Employees               as projection on db.Employees;

  entity Address                 as projection on db.Address;

  @readonly
  @odata.singleton
  entity UserScopes {
    key username      : String;
        is_admin      : Boolean;
        is_roleadmin  : Boolean;
        is_booksadmin : Boolean;
  };

  @readonly
  entity SEPMRA_I_Product_E      as projection on external.SEPMRA_I_Product_E excluding {
    CreationDateTime,
    LastChangedDateTime
  };

  annotate SEPMRA_I_Product_E with @cds.odata.valuelist;

  @readonly
  entity MeteringAnalytics       as projection on db.MeteringAnalytics;

  function readCdsEnv()                                                                                                                    returns String;
  // XSUAA API

  function readUsers()                                                                                                                     returns array of db.XSUAAUsers;
  function readUsersSDK()                                                                                                                  returns array of db.XSUAAUsers;
  action   updateUsers()                                                                                                                   returns Boolean;
  // job-scheduler
  function readJobs()                                                                                                                      returns array of db.Jobs;
  function readJobDetails(jobId : Integer)                                                                                                 returns db.Jobs;
  function readJobSchedules(jobId : Integer)                                                                                               returns array of db.Schedules;
  function readJobActionLogs(jobId : Integer)                                                                                              returns String; // array of db.ActionLogs;
  function readJobRunLogs(jobId : Integer, scheduleId : String, page_size : Integer, offset : Integer)                                     returns array of db.RunLogs;
  action   createJob(url : String, cron : String)                                                                                          returns Integer;
  action   updateJob(jobId : Integer, active : Boolean)                                                                                    returns String;
  action   deleteJob(jobId : Integer)                                                                                                      returns String;
  action   sendmail(sender : String, to : String, @UI.ParameterDefaultValue: 'Test' subject : String, body : String, destination : String) returns String;
  // Cloud Foundry
  function readOrganizations()                                                                                                             returns array of db.Organization;
}
