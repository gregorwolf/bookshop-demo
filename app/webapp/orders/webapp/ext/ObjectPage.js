sap.ui.define([
    "./CommentDialogUtil"
], function(CommentDialogUtil) {
    'use strict';

    return {
        addComment: function(oEvent) {
            // Create context object for the utility
            const context = {
                editFlow: this.editFlow,
                getContexts: () => {
                    return this.editFlow.getView().getBindingContext();
                },
                onSuccess: () => {
                    // Refresh the comments table after successful comment addition
                    this.editFlow.getView().byId("orders::OrdersObjectPage--fe::table::Comments::LineItem-innerTable").getBinding("items").refresh();
                },
                // These will be set by the utility
                commentModel: this.commentModel,
                commentDialog: this.commentDialog,
                richTextEditor: this.richTextEditor
            };
            
            // Use the shared utility
            CommentDialogUtil.openCommentDialog(context);
            
            // Update local references after utility creates them
            this.commentModel = context.commentModel;
            this.commentDialog = context.commentDialog;
            this.richTextEditor = context.richTextEditor;
        }
    };
});
