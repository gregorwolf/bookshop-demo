const cds = require("@sap/cds");
const recipient = "gregor@computerservice-wolf.com";

class NotificationService extends cds.ApplicationService {
  async init() {
    const alert = await cds.connect.to("notifications");

    this.on("sendNotification", async (req) => {
      alert.notify({
        recipients: [recipient],
        priority: "HIGH",
        title: "New high priority incident is assigned to you!",
        description:
          "Incident titled 'Engine overheating' created by 'customer X' with priority high is assigned to you!",
      });
    });
    this.on("sendIncidentResolved", async (req) => {
      await alert.notify("IncidentResolved", {
        recipients: [recipient],
        data: {
          customer: "CSW",
          title: "Engine overheating",
          user: "Gregor Wolf",
        },
      });
    });

    // ensure to call super.init()
    await super.init();
  }
}
module.exports = NotificationService;
