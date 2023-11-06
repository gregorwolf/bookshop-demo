sap.ui.define(
  ['sap/ui/core/mvc/ControllerExtension'],
  function (ControllerExtension) {
    'use strict';
    return ControllerExtension.extend('ordersUI5latest.ext.ListReportExt', {
      override: {
        routing: {
          onBeforeBinding: function (oBindingContext, mParameters) {
            this.initRichTextEditor();
          },
          onAfterBinding: function (oBindingContext, mParameters) {
            console.log('onAfterBinding: Data received');
          },
        },
      },
      initRichTextEditor: function (bIsTinyMCE5) {
        var that = this,
          sHtmlValue =""
        sap.ui.require(
          [
            'sap/ui/richtexteditor/RichTextEditor',
            'sap/ui/richtexteditor/library',
          ],
          function (RTE, library) {
            var EditorType = library.EditorType;
            that.oRichTextEditor = new RTE('myRTE', {
              editorType: EditorType.TinyMCE6,
              width: '100%',
              height: '600px',
              customToolbar: false,
              // showGroupFont: true,
              // showGroupLink: true,
              // showGroupInsert: true,
              plugins: [{
                name: "fullscreen"
              }],
              value: sHtmlValue,
              ready: function () {
                this.addButtonGroup('styles').addButtonGroup('table');
                this.addButtonGroup({
                  name: "fullscreen",
                  visible: true,
                  priority: 10,
                  customToolbarPriority: 10,
                  buttons: [
                    "fullscreen"
                  ]
                });
              },
            });

            that
              .getView()
              .byId(
                'ordersUI5latest::OrdersObjectPage--fe::CustomSubSection::customSection2--idVerticalLayout'
              )
              .addContent(that.oRichTextEditor);
          }
        );
      },
    });
  }
);
