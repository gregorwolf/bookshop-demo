sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/ui/model/json/JSONModel",
    "sap/ui/layout/form/SimpleForm"
], function(MessageToast, Dialog, Button, JSONModel, SimpleForm) {
    'use strict';

    return {
        /**
         * Creates and opens a comment dialog
         * @param {object} context - The context object containing view, editFlow, and getContexts function
         * @param {function} context.getContexts - Function to get the contexts for the action
         * @param {object} context.editFlow - The editFlow object
         * @param {object} context.view - The view object
         */
        openCommentDialog: function(context) {
            const view = context.editFlow.getView();
            
            // Create dialog model if it doesn't exist
            if (!context.commentModel) {
                context.commentModel = new JSONModel({
                    comment: ""
                });
            }
            
            // Create dialog programmatically if it doesn't exist
            if (!context.commentDialog) {
                // Create SimpleForm to contain the rich text editor
                const form = new SimpleForm({
                    editable: true,
                    layout: "ResponsiveGridLayout"
                });
                
                // Create dialog
                context.commentDialog = new Dialog({
                    title: "Add Comment",
                    contentWidth: "40rem",
                    resizable: true,
                    draggable: true,
                    content: [form],
                    beginButton: new Button({
                        text: "Add",
                        type: "Emphasized",
                        press: function() {
                            this._handleAddComment(context);
                        }.bind(this)
                    }),
                    endButton: new Button({
                        text: "Cancel",
                        press: function() {
                            this._handleCancelComment(context);
                        }.bind(this)
                    })
                });
                
                // Add dialog as dependent to view
                view.addDependent(context.commentDialog);
                context.commentDialog.setModel(context.commentModel);
                
                // Load RichTextEditor dynamically
                this._loadRichTextEditor(form, context);
            }
            
            // Reset comment before opening
            context.commentModel.setProperty("/comment", "");
            context.commentDialog.open();
        },

        /**
         * Handles the add comment action
         * @param {object} context - The context object
         */
        _handleAddComment: function(context) {
            const comment = context.commentModel.getProperty("/comment");
            const contexts = context.getContexts();
            
            // Handle active entity conversion for list report contexts
            if (Array.isArray(contexts)) {
                contexts.forEach(ctx => {
                    const sPath = ctx.getPath();
                    if (sPath.includes("IsActiveEntity=false")) {
                        // Update the path to activate the entity
                        const activePath = sPath.replace("IsActiveEntity=false", "IsActiveEntity=true");
                        // Update the context binding path
                        ctx.sPath = activePath;
                    }
                });
            }

            // Call the addComment action with the comment parameter
            context.editFlow.invokeAction("OrderService.addComment", {
                contexts: contexts,
                parameterValues: [{
                    name: "comment",
                    value: comment
                }],
                skipParameterDialog: true
            }).then(function() {
                const message = Array.isArray(contexts) ? "Comments added successfully" : "Comment added successfully";
                MessageToast.show(message);
                
                // Execute optional refresh callback if provided
                if (context.onSuccess && typeof context.onSuccess === 'function') {
                    context.onSuccess();
                }
            }).catch(function(error) {
                const message = Array.isArray(contexts) ? "Error adding comments: " : "Error adding comment: ";
                MessageToast.show(message + error.message);
            });
            
            // Close the dialog
            context.commentDialog.close();
        },

        /**
         * Handles the cancel comment action
         * @param {object} context - The context object
         */
        _handleCancelComment: function(context) {
            // reset the comment
            context.commentModel.setProperty("/comment", "");
            // Close the dialog
            context.commentDialog.close();
        },

        /**
         * Loads the RichTextEditor dynamically
         * @param {object} form - The form to add the editor to
         * @param {object} context - The context object
         */
        _loadRichTextEditor: function(form, context) {
            sap.ui.require(["sap/ui/richtexteditor/RichTextEditor", "sap/ui/richtexteditor/library"],
                function(RichTextEditor, library) {
                    var EditorType = library.EditorType;
                    context.richTextEditor = new RichTextEditor({
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
                    
                    form.addContent(context.richTextEditor);
                }
            );
        }
    };
}); 