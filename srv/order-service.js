const cds = require("@sap/cds");
const LOG = cds.log("order-service");
const { getUserdetails, getAuthorizations } = require("./helper/userdetails");
const { sendMail, MailConfig } = require("@sap-cloud-sdk/mail-client");

module.exports = async function (srv) {
  const { Orders, OrderItems } = srv.entities;

  this.after("each", Orders, (order) => {
    order.VirtualTotalWithTax =
      order.total + (order.total * order.taxPercentage) / 100;
  });

  srv.on(
    ["checkConsistency", "checkConsistencyInline"],
    Orders,
    async (req) => {
      LOG.info("checkConsistency - Request Parameters:", req.params[0]);
      // 1	sap.ui.core.MessageType.Success	Positive feedback - no action required
      var tx = cds.transaction(req);
      var orders = await tx.run(
        SELECT.from(Orders).where({ ID: req.params[0].ID })
      );
      var order = orders[0];
      let totalWithTax = order.total * 1 + order.totalTax * 1;
      var orderId = req.params[0].ID;
      var msgInfo = {
        code: "SY001",
        message: "ORDER_CONSISTENT",
        numericSeverity: 1,
        persistent: true,
        args: [order.OrderNo],
      };
      var msgError = {
        code: "SY002",
        message: "ORDER_INCONSISTENT",
        numericSeverity: 4,
        args: [order.OrderNo],
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
          case "d3924131-0870-44bc-b0c1-2ea3808cdaae":
            msgInfo.numericSeverity = 4;
            break;
          case "d3924131-0870-44bc-b0c1-2ea3808cda5f":
            req.xx.xx;
        }
        switch (msgInfo.numericSeverity) {
          case 3:
            req.warn(msgInfo);
            break;
          case 1:
            req.notify(msgInfo);
            break;
          default:
            if (orderId === "d3924131-0870-44bc-b0c1-2ea3808cdaae") {
              req.error(msgInfo);
            } else {
              req.info(msgInfo);
            }
            break;
        }
      }
      return {};
    }
  );

  srv.on(["setOrderParameters"], Orders, async (req) => {
    LOG.info("setOrderParameters - Request Parameters:", req.params[0]);
  });

  srv.on(["deleteOrder"], Orders, async (req) => {
    LOG.info("delete Orders - Request Parameters:", req.params[0]);
    return DELETE.from(Orders).where({
      ID: req.params[0].ID,
    });
  });

  srv.on(["deleteOrderItems"], Orders, async (req) => {
    LOG.info("delete Order Items");
    LOG.info("req.params: ", req.params);
    return DELETE.from(OrderItems).where({
      parent_ID: req.params[0].ID,
    });
  });

  // Based on the blogpost:
  // https://blogs.sap.com/2019/11/28/send-an-email-from-a-nodejs-application/
  // by Joachim Van Praet
  srv.on(["sendmail"], async (req) => {
    if (!req.data.sender) {
      return req.error("You must specify a sender");
    }
    if (!req.data.to) {
      return req.error("You must specify a recipient");
    }
    if (!req.data.subject) {
      return req.error("You must specify a subject");
    }
    if (!req.data.body) {
      return req.error("You must specify a body");
    }
    const destination = req.data.destination || "inbucket";
    try {
      const mailConfig = {
        from: req.data.sender,
        to: req.data.to,
        subject: req.data.subject,
        text: req.data.body,
      };
      // use sendmail as you should use it in nodemailer
      const result = await sendMail({ destinationName: destination }, [
        mailConfig,
      ]);
      return JSON.stringify(result);
    } catch (error) {
      LOG.info(error);
      return req.error(error);
    }
  });

  srv.on(["readCdsEnv"], (req) => {
    return JSON.stringify(cds.env);
  });

  srv.on("READ", "Userdetails", (req) => {
    return getUserdetails(req);
  });

  srv.on("READ", "Authorizations", (req) => {
    const authorizations = getAuthorizations(req);
    // authorizations.is_admin = false;
    return authorizations;
  });

  srv.on(["addComment"], Orders, async (req) => {
    LOG.info("addComment - Request Parameters:", req.params[0]);

    const orderId = req.params[0].ID;
    const commentText = req.data.comment;
    const user = req.user?.id || "Anonymous";

    // Create a new comment and associate it with the order
    await INSERT.into("my.bookshop.Comments").entries({
      parent_ID: orderId,
      text: commentText,
      author: user,
    });

    return {}; // Return empty response
  });
};
