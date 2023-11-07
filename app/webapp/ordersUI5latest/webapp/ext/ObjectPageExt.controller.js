sap.ui.define(
  ['sap/ui/core/mvc/ControllerExtension'],
  function (ControllerExtension) {
    'use strict';
    return ControllerExtension.extend('ordersUI5latest.ext.ObjectPageExt', {

      override: {
        onInit: function () {
          console.log('onAfterRendering');
        },
        editFlow: {
          onAfterEdit: function (oBindingContext, mParameters) {
            this.getView().byId("myRichTextEditor").attachReady(this.RTELoaded, this);
          },

        },
        pageReady:{
          onPageReady: function (oBindingContext, mParameters) {
            console.log('onPageReady');
          }
        }
      },
      RTELoaded: function (oEvent) {
        this.getView().byId("myRichTextEditor").addPlugin("autoresize");
      }
    });
  }
);
