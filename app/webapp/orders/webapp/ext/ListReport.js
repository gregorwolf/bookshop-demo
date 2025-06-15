sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/ui/model/json/JSONModel",
    "sap/ui/layout/form/SimpleForm"
], function(MessageToast, Dialog, Button, JSONModel, SimpleForm) {
    'use strict';

    return {
        addComment: function(oEvent) {
            const view = this.editFlow.getView();
            const selectedContexts = this.getSelectedContexts();
            
            // Create dialog model if it doesn't exist
            if (!this.commentModel) {
                this.commentModel = new JSONModel({
                    comment: ""
                });
            }
            
            // Create dialog programmatically if it doesn't exist
            if (!this.commentDialog) {
                // Create SimpleForm to contain the rich text editor
                const form = new SimpleForm("commentForm", {
                    editable: true,
                    layout: "ResponsiveGridLayout"
                });
                
                // Create dialog
                this.commentDialog = new Dialog("commentDialog", {
                    title: "Add Comment",
                    contentWidth: "40rem",
                    resizable: true,
                    draggable: true,
                    content: [form],
                    beginButton: new Button("addButton", {
                        text: "Add",
                        type: "Emphasized",
                        press: function() {
                            const comment = this.commentModel.getProperty("/comment");

                            const selectedContexts = this.getSelectedContexts();

                            // Only send action to active entities
                            selectedContexts.forEach(context => {
                                const sPath = context.getPath();
                                if (sPath.includes("IsActiveEntity=false")) {
                                    // Update the path to activate the entity
                                    const activePath = sPath.replace("IsActiveEntity=false", "IsActiveEntity=true");
                                    // Update the context binding path
                                    context.sPath = activePath;
                                }
                            });

                             this.editFlow.invokeAction("OrderService.addComment", {
                                contexts: selectedContexts,
                                parameterValues: [{
                                    name: "comment",
                                    value: comment
                                }],
                                skipParameterDialog: true
                            }).then(() => {
                                MessageToast.show("Comments added successfully");
                            }).catch(error => {
                                MessageToast.show("Error adding comments: " + error.message);
                            });
                            
                            // Close the dialog
                            this.commentDialog.close();
                        }.bind(this)
                    }),
                    endButton: new Button("cancelButton", {
                        text: "Cancel",
                        press: function() {
                            // reset the comment
                            this.commentModel.setProperty("/comment", "");
                            // Close the dialog
                            this.commentDialog.close();
                        }.bind(this)
                    })
                });
                
                // Add dialog as dependent to view
                view.addDependent(this.commentDialog);
                this.commentDialog.setModel(this.commentModel);
                
                // Load RichTextEditor dynamically
                sap.ui.require(["sap/ui/richtexteditor/RichTextEditor", "sap/ui/richtexteditor/library"],
                    function(RichTextEditor, library) {
                        var EditorType = library.EditorType;
                        this.richTextEditor = new RichTextEditor("commentEditor", {
                            editorType: EditorType.TinyMCE6,
                            width: "100%",
                            height: "300px",
                            value: "{/comment}",
                            customToolbar: true,
                            showGroupFont: true,
                            showGroupLink: true,
                            showGroupInsert: true,
                            ready: function() {
                                this.addButtonGroup("styles").addButtonGroup("table");
                            }
                        });
                        
                        form.addContent(this.richTextEditor);
                    }.bind(this)
                );
            }
            
            // Reset comment before opening
            this.commentModel.setProperty("/comment", "");
            this.commentDialog.open();
        }
    };
});
