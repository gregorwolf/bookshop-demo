sap.ui.controller("v2.orders.ext.controller.ListReportExtension", {
  onInit: function () { 
    this.getView().byId("listReport").setProperty("useExportToExcel", true) 
  },
  adaptTransientMessageExtension:function() {
    var messages = sap.ui.getCore().getMessageManager().getMessageModel().oData;
    if(messages.length) {
        var message = messages[0];
        if(message.code === "OSS001") {
          var msgText = "This message has beed added through List Extension" ;
          var consolidatedMessage = new sap.ui.core.message.Message({
            message: message.message,
            type: message.type,
            target: '',
            persistent: true
          });
          sap.ui.getCore().getMessageManager().addMessages(consolidatedMessage);  
        }
    }
  }
});