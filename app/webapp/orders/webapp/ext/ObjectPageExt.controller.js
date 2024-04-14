sap.ui.define(
  ['sap/ui/core/mvc/ControllerExtension'],
  function (ControllerExtension) {
    'use strict';
    return ControllerExtension.extend('orders.ext.ObjectPageExt', {
      override: {
        editFlow: {
            onAfterEdit: function (mParameters) {
                this.setButtonState();
            },
            onAfterSave: function (mParameters) {
                this.setButtonState();
            },
            onAfterCreate: function (mParameters) {
                this.setButtonState();
            },
        },
        routing: {
          // override onInit of base controller
          onAfterBinding: function (bindingContext) {
            this.setButtonState();
          },
        }
      },
      setButtonState: function () {
        const button = this.base.getView().byId('orders::OrdersObjectPage--fe::DataFieldForAction::AdminService.EntityContainer::sendmail');
        const bindingContext = this.base.getView().getBindingContext();
        bindingContext.requestObject().then(function(dataObject) {
            // if IsActiveEntity and HasActiveEntity is false, then the record is draft so deactivate the button
            if (!dataObject.IsActiveEntity && !dataObject.HasActiveEntity) {
                button.setEnabled(false);
            } else {
                button.setEnabled(true);
            }
        });
      }
    });
  } 
);
