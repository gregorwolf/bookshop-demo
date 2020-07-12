sap.ui.controller("v2.users.admin.ext.controller.ListReportExtension", {
  onInit: function () { 
    this.getView().byId("listReport").setProperty("useExportToExcel", true) 
  }
});