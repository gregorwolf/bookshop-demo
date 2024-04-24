sap.ui.define(
    ['sap/ui/core/mvc/ControllerExtension'],
    function (ControllerExtension) {
      'use strict';
  
      return ControllerExtension.extend('orders.ext.ObjectPageExt', {
        override: {
          // Object that defines methods to override standard editing flow lifecycle hooks.
          editFlow: {
              // Called after the edit action has been performed.
              onAfterEdit: function (mParameters) {
                  // Update the button state based on the current data context.
                  this.setButtonState();
              },
              // Called after the save action has been completed.
              onAfterSave: function (mParameters) {
                  // Update the button state based on the current data context.
                  this.setButtonState();
              },
              // Called after a new entry has been created.
              onAfterCreate: function (mParameters) {
                  // Update the button state based on the current data context.
                  this.setButtonState();
              },
          },
          routing: {
            // Method to handle the binding context set up after navigation to this view.
            onAfterBinding: function (bindingContext) {
              // Update the button state based on the new binding context.
              this.setButtonState();
              // Get the current binding context of the view.
              const bindingContext2 = this.base.getView().getBindingContext();
              if(bindingContext.getBinding().getPath().startsWith("/Orders")){
                bindingContext2.requestObject().then(
                  function (dataObject) {
                    this.base.editFlow.editDocument(bindingContext2)
                  }.bind(this)
                );
              }
              },
          }
        },
        
        // Utility function to set the state of a specific button based on the entity's properties.
        setButtonState: function () {
          // Retrieve the button control using its ID.
          const button = this.base.getView().byId('orders::OrdersObjectPage--fe::DataFieldForAction::AdminService.EntityContainer::sendmail');
          // Get the current binding context of the view.
          const bindingContext = this.base.getView().getBindingContext();
          
          // Request the actual object bound to the context asynchronously.
          bindingContext.requestObject().then(function(dataObject) {
              // Check specific properties of the data object to determine the button's enabled state.
              // Disable the button if both IsActiveEntity and HasActiveEntity are false (indicating a draft record).
              if (!dataObject.IsActiveEntity && !dataObject.HasActiveEntity) {
                  button.setEnabled(false);
              } else {
                  // Enable the button otherwise.
                  button.setEnabled(true);
              }
          });
        }
      });
    } 
  );
  