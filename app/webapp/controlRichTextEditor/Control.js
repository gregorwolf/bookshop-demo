sap.ui.define(
  [
    'sap/ui/core/Control',
    'sap/m/VBox',
    'sap/fe/macros/richtexteditor/RichTextEditorWithMetadata.block',
    'sap/ui/model/Context',
  ],
  function (Control, VBox, RichTextEditor, Context) {
    'use strict';

    return Control.extend('custom.control.Control', {
      metadata: {
        properties: {
          metaPath: { type: 'string', defaultValue: '' },
          // Add a new property to hold the binding path
          contextPath: { type: 'string', defaultValue: '' },
        },
        aggregations: {
          _content: {
            type: 'sap.ui.core.Control',
            multiple: false,
            visibility: 'hidden',
          },
        },
        events: {},
      },

      init: function () {
        Control.prototype.init.apply(this, arguments);
        // Create the VBox
        var vbox = new VBox();
        // Set the VBox as the content aggregation
        this.setAggregation('_content', vbox);
        // Set up binding context change handler
        this.attachModelContextChange(this._onContextChange, this);
      },

      _onContextChange: function (oEvent) {
        var context = this.getBindingContext();
        if (context) {
            let contextPathWithoutID = '';
            // Check if a custom context path is provided
            if (!this.getContextPath()) {
                // If not, extract the context path from the binding context
                const contextPath = context.getPath(); // e.g., '/Orders(ID=1e2f2640-6866-4dcf-8f4d-3027aa831cad,IsActiveEntity=false)'
                contextPathWithoutID = contextPath.split('(')[0]; // Remove the ID part, e.g., '/Orders'
            } else {
                // Use the provided custom context path
                contextPathWithoutID = this.getContextPath();
            }
            // Combine the context path with the meta path to get the full meta path
            const metaPath = `${contextPathWithoutID}/${this.getMetaPath()}`; // e.g., "/Orders/headerText"
            // Create Context objects for the RichTextEditor
            const contextPathRichText = new Context(this.getModel().getMetaModel(), contextPathWithoutID);
            const metaPathRichText = new Context(this.getModel().getMetaModel(), metaPath);
            // Create a new RichTextEditor instance
            // https://ui5.sap.com/#/api/sap.fe.macros.RichTextEditorWithMetadata
            const oRichTextEditor = new RichTextEditor({
                contextPath: contextPathRichText,
                metaPath: metaPathRichText,
                buttonGroups: [
                    // Configuration for various button groups in the editor
                    // https://ui5.sap.com/#/api/sap.fe.macros.richtexteditor.ButtonGroup
                    { name: "font-style", visible: true, priority: 10, buttons: "bold,italic,underline,strikethrough" },
                    { name: "styleselect", visible: true, priority: 10, customPriority: 10, buttons: "styleselect" },
                    { name: "font", visible: true, priority: 10, customPriority: 10, buttons: "fontfamily,fontsize,forecolor,backcolor" },
                    { name: "clipboard", visible: true, priority: 10, customPriority: 10, buttons: "cut,copy,paste" },
                    { name: "structure", visible: true, priority: 10, customPriority: 10, buttons: "bullist,numlist,outdent,indent" },
                    { name: "insert", visible: true, priority: 10, customPriority: 10, buttons: "image,emoticons" },
                    { name: "link", visible: true, priority: 10, customPriority: 10, buttons: "link,unlink" },
                    { name: "table", visible: true, priority: 10, customPriority: 10, buttons: "table" },
                    { name: "text-align", visible: true, priority: 10, customPriority: 10, buttons: "alignleft,aligncenter,alignright,alignjustify" }
                  ]
                });

            // Get the control of the RichTextEditor
            const content = oRichTextEditor.getContent();
            // Get the VBox aggregation
            var vbox = this.getAggregation('_content');
            // Clear existing items in the VBox
            vbox.removeAllItems();
            // Add the RichTextEditor content to the VBox
            vbox.addItem(content);
        }
      },

      renderer: function (rm, control) {
        rm.renderControl(control.getAggregation('_content'));
      },
    });
  }
);
