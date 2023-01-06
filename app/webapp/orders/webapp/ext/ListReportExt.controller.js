sap.ui.define(
  ["sap/ui/core/mvc/ControllerExtension"],
  function (ControllerExtension) {
    "use strict";
    return ControllerExtension.extend("orders.ext.ListReportExt", {
      override: {
        // override onInit of base controller
        onInit: function () {
          this.base
            .getView()
            .byId("orders::OrdersList--fe::PageVariantManagement")
            .attachSave(this.logFilters, this);
        },
      },

      logFilters(oEvent) {
        // Variant Name in Variant Management
        var variantName = oEvent.getParameter("name");
        // get Filter Bar 'sap.fe.core.controls.FilterBar'
        var filterBar = this.base
          .getView()
          .byId("orders::OrdersList--fe::FilterBar::Orders");
        var filterConditions = filterBar.getFilterConditions();
        console.log(`The Variant Name is ${variantName}`);
        // log complete filter conditions
        console.log(`Filter Conditions:`, "\n", filterConditions);
        // loop over all conditions to console log
        for (const key in filterConditions) {
          const fieldFilters = filterConditions[key];
          fieldFilters.forEach((filter) => {
            filter.values.forEach((value) => {
              console.log(
                `Field: ${key}`,
                "\n",
                `Operator: ${filter.operator}`,
                "\n",
                `Value: ${value}`
              );
            });
          });
        }
      },
    });
  }
);
