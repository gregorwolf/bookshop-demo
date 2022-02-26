const cds = require("@sap/cds");
const xsenv = require("@sap/xsenv");
var mqtt = require("mqtt");
const { getDestination } = require("@sap-cloud-sdk/core");

xsenv.loadEnv();
try {
  const { mqtt } = xsenv.getServices({ mqtt: { name: "mqtt" } });
  mqttConnect(mqtt);
} catch (error) {
  getDestination("mqtt").then((mqttDest) => {
    if (mqttDest) {
      mqttConnect(mqttDest);
    } else {
      console.log("[mqtt] can't connect via destination");
      connectWithUserProvidedService();
    }
  });
}

async function mqttConnect(mqttDest) {
  const db = await cds.connect.to("db");
  if (mqttDest) {
    var opts = {
      rejectUnauthorized: false,
      connectTimeout: 5000,
      username: mqttDest.username,
      password: mqttDest.password,
      //  ca: [caFile],
    };
    const mqttServer = mqttDest.url.replace("https", "mqtts");

    var client = mqtt.connect(mqttServer, opts);
    var subscribeTo = "#";
    client.on("connect", function () {
      client.subscribe(subscribeTo, function (err) {
        if (!err) {
          console.log(`Subscribed to ${subscribeTo}`);
        } else {
          console.error(`Subscription to ${subscribeTo} failed`);
        }
      });
    });

    client.on("close", function () {
      console.log("MQTT connection was closed");
    });

    client.on("error", function (error) {
      console.log(error.toString());
    });

    client.on("message", async function (topic, message) {
      // message is Buffer
      // console.log(topic.toString());
      // console.log(message.toString());
      let messageJson = JSON.parse(message.toString());
      if (messageJson.uplink_message?.f_port === 7) {
        let data = messageJson.uplink_message.decoded_payload;
        delete data.bytes;
        delete data.port;
        data.device_id = messageJson.end_device_ids.device_id;
        data.received_at = messageJson.received_at;
        let insert = await db.insert(data).into("iot.Environment");
        console.log(
          "inserted " +
            insert.results[0].affectedRows +
            " row for device " +
            data.device_id
        );
      }
    });

    module.exports = client;
  }
}
