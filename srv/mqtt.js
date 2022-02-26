var mqtt = require("mqtt");
const { getDestination } = require("@sap-cloud-sdk/core");

getDestination("mqtt").then((mqttDest) => {
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

    client.on("message", function (topic, message) {
      // message is Buffer
      console.log(topic.toString());
      console.log(message.toString());
    });

    module.exports = client;
  }
});
