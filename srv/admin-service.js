const { resolve } = require("@sap/cds");
const JobSchedulerClient = require("@sap/jobs-client");
const xsenv = require("@sap/xsenv");

function getJobscheduler(req) {
  xsenv.loadEnv();
  const services = xsenv.getServices({
    jobscheduler: { tags: "jobscheduler" },
  });
  if (services.jobscheduler) {
    const options = {
      baseURL: services.jobscheduler.url,
      user: services.jobscheduler.user,
      password: services.jobscheduler.password,
    };
    return new JobSchedulerClient.Scheduler(options);
  } else {
    req.error("no jobscheduler service instance found");
  }
}

module.exports = async function (srv) {
  const {
    Role_BusinessObject,
    Role_User,
    Orders,
    Books,
    Authors,
  } = srv.entities;

  srv.before("READ", [Books, Authors], async (req) => {
    var tx = cds.transaction(req);
    var targetName = req.entity;
    var logonName = req.user.id;
    console.log("READ - logonName: " + logonName);
    console.log("READ - req.target.name: " + targetName);
    var targetNameElements = targetName.split(".");
    var entity = targetNameElements[targetNameElements.length - 1];
    console.log("READ - entity: " + entity);
    // Check if User is assigned to a Role that contains the entity
    // var query = SELECT.from(Role)
    var roleuser = await tx.run(
      SELECT.from(Role_User, ["parent_ID"]).where({ user: logonName })
    );

    if (roleuser.length === 0) {
      req.error(409, `user ${logonName} isn't assigned to any role`);
    } else {
      console.log("READ - roleuser: " + JSON.stringify(roleuser));
      var roleBusinessObject = await tx.run(
        SELECT.from(Role_BusinessObject, ["BusinessObject"]).where({
          parent_ID: roleuser[0].parent_ID,
        })
      );
      if (roleBusinessObject.length === 0) {
        req.error(
          409,
          `The role ${roleuser[0].parent_ID} isn't assigned to any business object`
        );
      } else {
        console.log(
          "READ - roleBusinessObject: " + JSON.stringify(roleBusinessObject)
        );
        var allowed = false;
        for (let i in roleBusinessObject) {
          if (roleBusinessObject[i].BusinessObject === entity) {
            allowed = true;
          }
        }
        if (!allowed) {
          req.error(
            409,
            `user ${logonName} isn't assigned to the business object ${entity}`
          );
        }
      }
    }
  });

  srv.before("UPDATE", Books, (req) => {
    var where = req.query.UPDATE.where;
    var changedEntity = JSON.stringify(req.query.UPDATE.entity);
    var changedEntityKey = JSON.stringify(where);
    var changedEntityData = JSON.stringify(req.query.UPDATE.data);
    // Log output to see the data we need to store in the approval table
    console.log("before UPDATE - Books: " + JSON.stringify(req.data));
    console.log("before UPDATE - req.query.UPDATE.entity: " + changedEntity);
    console.log("before UPDATE - req.query.UPDATE.where: " + changedEntityKey);
    console.log("before UPDATE - req.query.UPDATE.data: " + changedEntityData);
  });

  srv.on("READ", "UserScopes", (req) => {
    const users = [
      {
        username: req.user.id,
        is_admin: req.user.is("admin"),
        is_roleadmin: req.user.is("roleadmin"),
        is_booksadmin: req.user.is("booksadmin"),
      },
    ];
    return users;
  });

  srv.on(["readJobs"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req)
      if (scheduler) {
        var query = {}
        scheduler.fetchAllJobs(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving jobs"))
          }
          //Jobs retrieved successfully
          if (result && result.results && result.results.length > 0) {
            resolve(result.results);
          } else {
            reject(req.warn("Can't find any job"))
          }
        })
      }
    })
  })
  
  srv.on(["readJobDetails"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {
          //by Id
          jobId: req.data.jobId,
        };
        scheduler.fetchJob(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving job"));
          } else {
            // job was created successfully
            resolve(result);
          }
        });
      }
    });
  });

  srv.on(["readJobSchedules"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {
          //by Id
          jobId: req.data.jobId,
        };
        scheduler.fetchJobSchedules(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving job schedules"));
          } else {
            // job was created successfully
            resolve(result.results);
          }
        });
      }
    });
  });

  srv.on(["readJobActionLogs"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {
          jobId: req.data.jobId,
        };
        scheduler.getJobActionLogs(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving job action logs"));
          } else {
            console.log(result.results)
            resolve(JSON.stringify(result.results))
          }
        });
      }
    });
  });

  srv.on(["readJobRunLogs"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {
          jobId: req.data.jobId,
          scheduleId: req.data.scheduleId,
          page_size: req.data.page_size,
          offset: req.data.offset
        }
        scheduler.getRunLogs(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving job run logs"))
          } else {
            // console.log(result.results)
            resolve(result.results)
          }
        });
      }
    });
  });

  srv.on(["createJob"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var myJob = {
          name: "validateSalesOrder",
          description: "cron job that validates sales order requests",
          action: req.data.url,
          active: true,
          httpMethod: "POST",
          schedules: [
            {
              cron: req.data.cron,
              description:
                "this schedule runs as defined from the input paramter",
              data: {},
              active: true,
              startTime: {
                date: "2021-01-04 15:00 +0000",
                format: "YYYY-MM-DD HH:mm Z",
              },
            },
          ],
        };
        var scJob = { job: myJob };
        scheduler.createJob(scJob, function (err, result) {
          if (err) {
            reject(req.error(err.message));
          } else {
            // job was created successfully
            resolve(result._id);
          }
        });
      }
    });
  });

  srv.on(["updateJob"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var theJob = {
          active: req.data.active,
        };

        var suJob = { jobId: req.data.jobId, job: theJob };
        scheduler.updateJob(suJob, (err, result) => {
          if (err) {
            reject(req.error(err.message));
          } else {
            // job was created successfully
            resolve(JSON.stringify(result));
          }
        });
      }
    });
  });

  srv.on(["deleteJob"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var jreq = {
          jobId: req.data.jobId,
        };
        scheduler.deleteJob(jreq, (err, result) => {
          if (err) {
            reject(req.error(err.message));
          } else {
            // job was created successfully
            resolve(JSON.stringify(result));
          }
        });
      }
    });
  });

  srv.on(
    ["checkConsistency", "checkConsistencyInline"],
    Orders,
    async (req) => {
      console.log("checkConsistency - Request Parameters:", req.params[0]);
      // 1	sap.ui.core.MessageType.Success	Positive feedback - no action required
      var tx = cds.transaction(req);
      var orders = await tx.run(
        SELECT.from("Orders").where({ ID: req.params[0].ID })
      );
      var order = orders[0];
      var orderId = req.params[0].ID;
      var msgInfo = {
        code: "SY001",
        message: `Order ${order.OrderNo} is consistent - Special Character - German Umlauts: öäü ÖÄÜ ß`,
        numericSeverity: 1,
        persistent: true,
      };
      var msgError = {
        code: "SY002",
        message: `Order ${order.OrderNo} is not consistent`,
        numericSeverity: 4,
      };
      if (orderId === "7e2f2640-6866-4dcf-8f4d-3027aa831cad") {
        req.error(msgError);
      } else {
        switch (orderId) {
          case "d3924131-0870-44bc-b0c1-2ea3808cda5a":
            msgInfo.code = "OSS001";
            break;
          case "d3924131-0870-44bc-b0c1-2ea3808cda5c":
            // 2	sap.ui.core.MessageType.Information	Additional information - no action required
            msgInfo.numericSeverity = 2;
            break;
          case "d3924131-0870-44bc-b0c1-2ea3808cda5d":
            // 3	sap.ui.core.MessageType.Warning	Warning - action may be required
            msgInfo.numericSeverity = 3;
            break;
          case "d3924131-0870-44bc-b0c1-2ea3808cda5e":
            // 4	sap.ui.core.MessageType.Error	Error - action is required
            msgInfo.numericSeverity = 4;
            break;
        }
        if (msgInfo.numericSeverity === 3) {
          req.warn(msgInfo);
        } else {
          req.info(msgInfo);
        }
      }
      return {};
    }
  );

  /*
  srv.on('UPDATE','Books', req => {
    var where = req.query.UPDATE.where;
    var changedEntity = JSON.stringify(req.query.UPDATE.entity)
    var changedEntityKey = JSON.stringify(where)
    var changedEntityData = JSON.stringify(req.query.UPDATE.data)
    var approver = 'SAPPROVER'
    // Log output to see the data we need to store in the approval table
    console.log("UPDATE - Books: " + JSON.stringify(req.data))
    console.log("UPDATE - req.query.UPDATE.entity: " + changedEntity)
    console.log("UPDATE - req.query.UPDATE.where: " + changedEntityKey)
    console.log("UPDATE - req.query.UPDATE.data: " + changedEntityData)
    // Do not update anything on the original Object
    // req.query.UPDATE.data = {}
    var data = {
      'ID': uuidv4(), 
      'approver': approver, 
      'changedEntity': changedEntity,
      'changedEntityKey': changedEntityKey,
      'changedEntityData': changedEntityData,
      'status': 'R',
      'createdAt': new Date(),
      'createdBy': req.attr.userInfo.logonName
    }
    // var res = srv.insert(data) .into ("Approval")
    // var res = srv.create("Approval").entries(data)
    // Get a transaciton context
    // const tx = cds.transaction (req)
    req.info(
      {
        type: "sap.ui.core.MessageType.Information", 
        message: "Change was requested at approver: " + approver
      }
    )
    return cds.transaction(req) 
    .run(
      INSERT.into('my.bookshop.Approval').entries (data)
    )
    .then(() => {})
    // var res = srv.run(INSERT.into ("Approval") .columns (
    // 	'ID', 'approver', 'changedEntity', 'changedEntityKey', 'changedEntityData', 'status'
    // 	, 'createdAt', 'createdBy', 'modifiedAt', 'modifiedBy'
    // ) .values (
    // 	uuidv4(), approver, changedEntity, changedEntityKey, changedEntityData, 'R'
    // 	, new Date(), 'SUSER', new Date(), 'SUSER'
    // ))
    // console.log("UPDATE - result: " + JSON.stringify(res))
  })
*/
  /*
  srv.on('READ', 'Images', (req, next) => {
    if (!req.data.ID) {
      return next()
    }
    console.log(req.data.ID)

    return {
      value: _getObjectStream(req.data.ID)
    }
  })

  function _getObjectStream(objectKey) {
    console.log(objectKey)
    return "Test"
  }
*/
};
