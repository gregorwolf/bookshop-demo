sap.ui.define(
  [
    'sap/ui/core/Control',
    'sap/m/VBox',
    'sap/fe/macros/richtexteditor/RichTextEditor.block',
    // 'sap/fe/macros/richtexteditor/RichTextEditorWithMetadata.block',
    'sap/ui/model/Context',
  ],
  function (Control, VBox, RichTextEditor, Context) {
    'use strict';

    return Control.extend('custom.control.RichTextEditorWithMetadata', {
      metadata: {
        properties: {
          metaPath: { type: 'string', defaultValue: '' },
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
        // Create the VBox, only worked with VBox, not with RichTextEditor directly :/
        var vbox = new VBox();
        // Set the VBox as the content aggregation
        this.setAggregation('_content', vbox);
        // Set up binding context change handler
        this.attachModelContextChange(this._onContextChange, this);
      },

      _onContextChange: async function (oEvent) {
        var context = this.getBindingContext();
        if (context) {
          // this.detachModelContextChange(this._onContextChange, this);
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

            await RichTextEditor.load()
            // Create a new RichTextEditor instance
            // https://ui5.sap.com/#/api/sap.fe.macros.RichTextEditorWithMetadata
            const oRichTextEditor = new RichTextEditor({
                value: "{path: 'headerText', type: 'sap.ui.model.odata.type.String', formatOptions: {parseKeepsEmptyString: true}}",
                // contextPath: contextPathRichText,
                // metaPath: metaPathRichText
                });
            
            let content;
            // Get the control of the RichTextEditor
            if(this.getModel("ui").getProperty("/isEditable")){
              content = oRichTextEditor.getRTE()
            } else {
              content = oRichTextEditor.getContent();
            }
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
