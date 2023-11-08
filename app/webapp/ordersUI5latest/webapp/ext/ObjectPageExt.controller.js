sap.ui.define(
  ['sap/ui/core/mvc/ControllerExtension'],
  function (ControllerExtension) {
    'use strict';
    return ControllerExtension.extend('ordersUI5latest.ext.ObjectPageExt', {
      override: {
        onInit: function () {
          var oBinding = this.getView()
            .getModel('ui')
            .bindProperty('/isEditable');
          oBinding.attachChange(this.isEditablePropertyChanged, this);
        },
        isEditablePropertyChanged: function (event) {
          console.log('isEditable changed');
          if (this.getView().getModel('ui').getProperty('/isEditable')) {
            this.getView().byId('myRichTextEditor').addPlugin('autoresize');
          }
        },
      },
    });
  }
);
