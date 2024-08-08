const cds = require("@sap/cds");
const LOG = cds.log("admin-service");
const JobSchedulerClient = require("@sap/jobs-client");
const xsenv = require("@sap/xsenv");
const SapCfMailer = require("sap-cf-mailer").default;
const metering = require("./metering");
const { executeHttpRequest, getDestination } = require("@sap-cloud-sdk/core");
const qs = require("qs");
const axios = require("axios");
const { cf } = require("cf-http-client");
const { getUserdetails, getAuthorizations } = require("./helper/userdetails");

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
    Approval,
    Roles,
  } = srv.entities;
  const external = await cds.connect.to("ZPDCDS_SRV");
  const externalFlow = await cds.connect.to("flow");
  const externalCF = await cds.connect.to("CloudFoundryAPI");
  const externalXsuaa = await cds.connect.to("xsuaa-api");
  var srvUrl = "http://localhost:4004/webapp";
  var uiUrl = srvUrl;
  if (process.env.VCAP_APPLICATION) {
    srvUrl =
      "https://" + JSON.parse(process.env.VCAP_APPLICATION).application_uris[0];
    uiUrl = srvUrl.replace("-srv", "-ui") + "/bookshopdemoapp";
  }

  if (process.env.NODE_ENV === "production") {
    srv.before("*", "*", (req) => metering.beforeHandler(req));
  }

  // As suggested in:
  // https://answers.sap.com/questions/14004696/fiori-elements-odata-v2-and-v4-composition-of-one.html
  /*
  srv.before("NEW", Orders.drafts, async (req) => {
    req.data.ShippingAddress ??= {};
  });
  */

  this.after("each", Orders, (order) => {
    order.VirtualTotalWithTax =
      order.total + (order.total * order.taxPercentage) / 100;
  });

  srv.after("CREATE", Approval, async (req) => {
    LOG.info("Approval - after CREATE. ID: " + req.ID);
    try {
      const response = await externalFlow.tx(req).post("/", {
        approver: "gregor@computerservice-wolf.com",
        subject: `Approval for ${req.changedEntity} requested`,
        url: `${uiUrl}/fiori-ui5-1.71.html#Approvals-manage&//Approval(ID=guid'${req.ID}',IsActiveEntity=true)`,
        body: "Please decide about this request",
        ID: `guid'${req.ID}'`,
      });
    } catch (error) {
      LOG.error("Error Message: " + error.message);
    }
  });

  srv.on(["approve"], Approval, async (req) => {
    LOG.info("Approval - approve");
    let approval = await cds
      .tx(req)
      .read(Approval)
      .where({ ID: req.params[0].ID });
    if (approval[0].status === "R") {
      let result = await cds
        .tx(req)
        .update(Approval, { ID: req.params[0].ID })
        .with({
          status: "A",
        });
    } else {
      req.error(409, `Approval is not is status requested`);
    }
  });

  srv.on(["rejection"], Approval, async (req) => {
    LOG.info("Approval - rejection");
    let approval = await cds
      .tx(req)
      .read(Approval)
      .where({ ID: req.params[0].ID });
    if (approval[0].status === "R") {
      let result = await cds
        .tx(req)
        .update(Approval, { ID: req.params[0].ID })
        .with({
          status: "N",
        });
    } else {
      req.error(409, `Approval is not is status requested`);
    }
  });

  srv.on("READ", "SEPMRA_I_Product_E", async (req) => {
    LOG.info("Read request for SEPMRA_I_Product_E");
    const result = await external.run(req.query);
    return result;
  });

  /*
  srv.before("READ", [Books, Authors], async (req) => {
    var tx = cds.transaction(req);
    var targetName = req.entity;
    var logonName = req.user.id;
    LOG.info("READ - logonName: " + logonName);
    LOG.info("READ - req.target.name: " + targetName);
    var targetNameElements = targetName.split(".");
    var entity = targetNameElements[targetNameElements.length - 1];
    LOG.info("READ - entity: " + entity);
    // Check if User is assigned to a Role that contains the entity
    // var query = SELECT.from(Role)
    var roleuser = await tx.run(
      SELECT.from(Role_User, ["parent_ID"]).where({ user: logonName })
    );

    if (roleuser.length === 0) {
      req.error(409, `user ${logonName} isn't assigned to any role`);
    } else {
      LOG.info("READ - roleuser: " + JSON.stringify(roleuser));
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
        LOG.info(
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
  */

  srv.before("UPDATE", Books, (req) => {
    var where = req.query.UPDATE.where;
    var changedEntity = JSON.stringify(req.query.UPDATE.entity);
    var changedEntityKey = JSON.stringify(where);
    var changedEntityData = JSON.stringify(req.query.UPDATE.data);
    // Log output to see the data we need to store in the approval table
    LOG.info("before UPDATE - Books: " + JSON.stringify(req.data));
    LOG.info("before UPDATE - req.query.UPDATE.entity: " + changedEntity);
    LOG.info("before UPDATE - req.query.UPDATE.where: " + changedEntityKey);
    LOG.info("before UPDATE - req.query.UPDATE.data: " + changedEntityData);
  });

  srv.after("PATCH", Books, (req) => {
    console.log("After PATCH Books");
  });

  srv.after("UPDATE", Books, async (req) => {
    const db = await cds.connect.to("db");
    const { Books: dbBooks } = db.entities;

    console.log("After request update triggered");
    await cds.tx(async (tx) => {
      const data = {
        title: "haha",
        stock: 0,
      };
      // Expectation: Throws an error if entity can not be locked because it was updated in the standard handler
      let exists = await SELECT(1).from(dbBooks, 11).forUpdate();
      console.log("before updating book in separate tx");
      const result = await tx.update(dbBooks, 11).with(data);
      console.log("after updating book in separate tx");
    });
  });

  srv.on("READ", "Userdetails", (req) => {
    return getUserdetails(req);
  });

  srv.on("READ", "Authorizations", (req) => {
    return getAuthorizations(req);
  });

  srv.on(["readJobs"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {};
        scheduler.fetchAllJobs(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving jobs"));
          }
          //Jobs retrieved successfully
          if (result && result.results && result.results.length > 0) {
            resolve(result.results);
          } else {
            reject(req.warn("Can't find any job"));
          }
        });
      }
    });
  });

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

  srv.on(["updateJobSchedule"], (req) => {
    return new Promise((resolve, reject) => {
      const scheduler = getJobscheduler(req);
      if (scheduler) {
        var query = {
          //by Id
          jobId: req.data.jobId,
          scheduleId: req.data.scheduleId,
          schedule: req.data.schedule,
        };
        scheduler.updateJobSchedule(query, function (err, result) {
          if (err) {
            reject(req.error("Error updating job schedule"));
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
            LOG.info(result.results);
            resolve(JSON.stringify(result.results));
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
          offset: req.data.offset,
        };
        scheduler.getRunLogs(query, function (err, result) {
          if (err) {
            reject(req.error("Error retrieving job run logs"));
          } else {
            // LOG.info(result.results)
            resolve(result.results);
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

  srv.on(["insertBookAndAuthor"], async (req) => {
    const db = await cds.connect.to("db");
    const { Books, Authors } = db.entities;
    const dataAuthor = [
      {
        ID: 42,
        name: "Douglas Adams",
        alive: false,
      },
    ];
    const dataBook = [
      {
        ID: 42,
        title: "Per Anhalter durch die Galaxis",
        genre_ID: null,
        stock: 5,
        price: 41,
        currency_code: "EUR",
        author_ID: 42,
      },
    ];

    cds.tx(async () => {
      await db.run(INSERT.into(Books).entries(dataBook));
      await db.run(INSERT.into(Authors).entries(dataAuthor));
    });
  });

  srv.on(["readUsers"], async (req) => {
    LOG.info("readUsers");
    try {
      const response = await externalXsuaa.get("/Users");
      return response.resources;
    } catch (error) {
      LOG.error("Error Message: " + error.message);
      LOG.error(error.stack);
    }
  });

  srv.on(["readUsersSDK"], async (req) => {
    LOG.info("readUsersSDK");
    try {
      const response = await executeHttpRequest(
        { destinationName: "bookshop-demo-uaa-apiaccess" },
        { url: "/Users" }
      );
      return response.data.resources;
    } catch (error) {
      LOG.error("Error Message: " + error.message);
      LOG.error(error.stack);
    }
  });

  async function getOAuth2PasswordToken(cfDest) {
    const response = await axios({
      method: "POST",
      url: cfDest.tokenServiceUrl,
      data: qs.stringify({
        grant_type: "password",
        username: cfDest.username,
        password: cfDest.password,
      }),
      headers: { "content-type": "application/x-www-form-urlencoded" },
      auth: {
        username: cfDest.clientId,
        password: cfDest.clientSecret,
      },
    });
    return response.data;
  }
  async function fillMissingValidityFrom(req) {
    if (req?.data?.validFrom === null) {
      // Assumption: User is willing to reset validity
      req.data.validFrom = new Date().toISOString();
    } else if (req?.data?.validFrom === undefined) {
      // Assumption: User does not want to change the validity
      let current = {};
      if (req.entity === "AdminService.Users") {
        current = await SELECT.from(req.entity).where({
          username: req.params[0].username,
        });
      } else {
        current = await SELECT.from(req.entity).where({
          ID: req.params[0],
        });
        req.data.validFrom = current[0].validFrom;
      }
    }
    return req;
  }
  async function fillMissingValidityTo(req) {
    if (req?.data?.validTo === null) {
      req.data.validTo = new Date("9999-12-31").toISOString();
    } else if (req?.data?.validTo === undefined) {
      let current = {};
      if (req.entity === "AdminService.Users") {
        current = await SELECT.from(req.entity).where({
          username: req.params[0].username,
        });
      } else {
        current = await SELECT.from(req.entity).where({
          ID: req.params[0],
        });
      }
      req.data.validTo = current[0].validTo;
    }
    return req;
  }
  function smallerGreaterConstraint(req, validFrom, toValidityTimestamp) {
    if (
      new Date(validFrom).getTime() > new Date(toValidityTimestamp).getTime()
    ) {
      req.reject({
        code: "400",
        message:
          'Please make sure, that the "Valid from" date is greater than the "Valid to" date.',
      });
    }
  }
  async function validateValidityUpdate(req) {
    // For Patches from the UI
    req = await fillMissingValidityFrom(req);
    req = await fillMissingValidityTo(req);
    // to-value must be greater than from-value
    smallerGreaterConstraint(req, req.data.validFrom, req.data.validTo);
    return req;
  }
  async function validateValidityCreate(req) {
    req.data.validFrom = req?.data?.validFrom || new Date().toISOString();
    req.data.validTo =
      req?.data?.validTo || new Date("9999-12-31").toISOString();
    // to-value must be greater than from-value
    smallerGreaterConstraint(req, req.data.validFrom, req.data.validTo);
    return req;
  }

  srv.on(["readOrganizations"], async (req) => {
    LOG.info("readOrganizations");
    try {
      // The destination used "OAuth2Password" as authentication type which is not supported by the SDK.
      // --> https://github.com/SAP/cloud-sdk-js/issues/1399
      /*
      const response = await executeHttpRequest(
        { destinationName: "CloudFoundryAPI" },
        { url: "/v3/organizations" }
      );
      */
      // Also CAP doesn't work with OAuth2Password (as Cloud SDK is used inside)
      // const response = await externalCF.tx(req).get("/v3/organizations");
      const cfDest = await getDestination("CloudFoundryAPI");
      const cfClient = await cf(cfDest.url).login(
        cfDest.username,
        cfDest.password
      );
      const organizations = await cfClient.organizations.list();
      return organizations;
      /*
      const token = await getOAuth2PasswordToken(cfDest);
      const response = await axios.get(cfDest.url + "/v3/organizations", {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      });
      return response.data.resources;
      */
    } catch (error) {
      LOG.error("Error Message: " + error.message);
      if (error.rootCause && error.rootCause.message) {
        LOG.error("Root Cause Message: " + error.rootCause.message);
      }
      LOG.error(error.stack);
    }
  });

  srv.on("resetCountOfAllRoles", async (req) => {
    const db = await cds.connect.to("db");
    const { Roles } = db.entities;
    await db.update(Roles).set({ count: 0 });
  });

  srv.before("NEW", "Roles", (req) => {
    // allows to set defaults
    req.data.read = true;
    return req.data;
  });
  /*
  srv.before("PATCH", "Roles", (req) => {
    if (req?.data?.description) {
      if (req.data.description.length <= 2) {
        req.warn({
          code: "description_TO_SHORT",
          message: "description must have more than 2 characters",
          target: "in/description",
        });
      }
    }
  });
  */
  srv.before("CREATE", "Roles", (req) => {
    if (req?.data?.description) {
      if (req.data.description.length <= 2) {
        req.error({
          code: "description_TO_SHORT",
          message: "description must have more than 2 characters",
          target: "in/description",
        });
      }
    }
    return validateValidityCreate(req);
  });

  /*
  // Deactivate to make mass updates possible
  srv.before("UPDATE", "Roles", (req) => {
    return validateValidityUpdate(req);
  });
  */

  srv.before("CREATE", "Users", (req) => {
    return validateValidityCreate(req);
  });

  srv.before("UPDATE", "Users", (req) => {
    return validateValidityUpdate(req);
  });
  // Is triggered when annotated as described in:
  // https://cap.cloud.sap/docs/java/fiori-drafts#fioridraftnew
  // and navigates to the detail screen in edit mode as described in
  // https://ui5.sap.com/#/topic/8cd6877568094e9daac480f6171dbafd.html
  srv.on(["createDraftRole"], async (req) => {
    const adminService = await cds.connect.to("AdminService");
    const { Roles } = adminService.entities;
    LOG.info("createDraftRole - Request Parameters:", req.data);
    const role = await srv.send({
      query: INSERT.into(Roles).entries([
        {
          ID: cds.utils.uuid(),
          rolename: req.data.rolename,
          description: req.data.description,
        },
      ]),
      event: "NEW",
    });
    return role;
  });
  srv.on(["countUp"], Roles, async (req) => {
    const update = await cds
      .tx(req)
      .run(UPDATE(Roles).where({ ID: req.params[0].ID }).set("count +=", 1));
    return cds.tx(req).run(SELECT.one(Roles).where({ ID: req.params[0].ID }));
  });
  srv.on(["countDown"], Roles, async (req) => {
    const update = await cds
      .tx(req)
      .run(UPDATE(Roles).where({ ID: req.params[0].ID }).set("count -=", 1));
    return cds.tx(req).run(SELECT.one(Roles).where({ ID: req.params[0].ID }));
  });
  srv.on(["setOrderParameters"], Orders, async (req) => {
    LOG.info("setOrderParameters - Request Parameters:", req.params[0]);
  });
  srv.on(["deleteOrder"], Orders, async (req) => {
    LOG.info("delete Orders - Request Parameters:", req.params[0]);
    return DELETE.from(Orders).where({
      ID: req.params[0].ID,
    });
  });

  srv.on("READ", `Destination`, async (req) => {
    const destination = await cds.connect.to("destination");
    destinations = await destination.get(
      "/destination-configuration/v1/subaccountDestinations"
    );
    return destinations.map((d) => {
      return { Name: d.Name, Description: d.Description };
    });
  });

  /*
  srv.on('UPDATE','Books', req => {
    var where = req.query.UPDATE.where;
    var changedEntity = JSON.stringify(req.query.UPDATE.entity)
    var changedEntityKey = JSON.stringify(where)
    var changedEntityData = JSON.stringify(req.query.UPDATE.data)
    var approver = 'SAPPROVER'
    // Log output to see the data we need to store in the approval table
    LOG.info("UPDATE - Books: " + JSON.stringify(req.data))
    LOG.info("UPDATE - req.query.UPDATE.entity: " + changedEntity)
    LOG.info("UPDATE - req.query.UPDATE.where: " + changedEntityKey)
    LOG.info("UPDATE - req.query.UPDATE.data: " + changedEntityData)
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
    // LOG.info("UPDATE - result: " + JSON.stringify(res))
  })
*/
  srv.on("READ", "Documents", async (req, next) => {
    if (!req.data.ID) {
      return next();
    }
    LOG.info(req.data.ID);
    if (req.data.ID === "2cac6337-86f2-4613-b71d-e8389b8a4e26") {
      // read metadata from database
      const metadata = await SELECT.one
        .from("my.bookshop.Documents")
        .where({ ID: req.data.ID });
      // read pdf from file system
      const fs = require("fs");
      const path = require("path");
      const { Readable } = require("stream");
      const filePath = path.join("./tests/app/", "test.pdf");
      const file = fs.readFileSync(filePath);
      // convert file to base64
      const base64 = file.toString("base64");
      // convert base64 to arraybuffer
      const buffer = Buffer.from(base64, "base64");
      return {
        value: Readable.from(buffer),
        $mediaContentType: metadata.mediatype,
        // If the file should be downloaded, the following header is needed
        // $mediaContentDispositionFilename: metadata.filename,
      };
    } else {
      return next();
    }
  });

  /*
  function _getObjectStream(objectKey) {
    LOG.info(objectKey)
    return "Test"
  }
*/
};
