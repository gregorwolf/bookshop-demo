sap.ui.controller("v2.books.admin.ext.controller.ListReportExtension", {
  onInit: function () { 
    this.getView().byId("listReport").setProperty("useExportToExcel", true) 
  }
});