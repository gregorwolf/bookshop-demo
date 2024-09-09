sap.ui.define(
  [
    'sap/ui/core/mvc/ControllerExtension',
    'sap/ui/core/dnd/DragInfo',
    'sap/ui/core/dnd/DropInfo',
    'sap/ui/mdc/enums/TableSelectionMode',
  ],
  function (ControllerExtension, DragInfo, DropInfo, TableSelectionMode) {
    'use strict';
    return ControllerExtension.extend('roleUI5latest.ext.ListReportExt', {
      addDragAndDrop: function () {
        const table = this.base
          .getView()
          .byId(
            'roleUI5latest::RolesList--fe::table::Roles::LineItem-innerTable'
          );
        this._enableDragAndDrop(table);
      },

      _enableDragAndDrop: function (table) {
        // set singleselectmaster
        table.setMode('SingleSelectMaster');
        // Enable drag and drop mode for the table
        table.addDragDropConfig(
          new DragInfo({
            sourceAggregation: 'items',
            groupName: 'DRAG_DROP_NAME',
          })
        );

        table.addDragDropConfig(
          new DropInfo({
            targetAggregation: 'items',
            dropPosition: 'Between',
            drop: this._onTableDrop.bind(this),
            groupName: 'DRAG_DROP_NAME',
          })
        );
      },

      // Handler for drop event
      _onTableDrop: function (oEvent) {
        var draggedControl = oEvent.getParameter('draggedControl');
        var droppedControl = oEvent.getParameter('droppedControl');
        var dropPosition = oEvent.getParameter('dropPosition');
        var table = draggedControl.getParent();
        var rows = table.getItems();
        var draggedIndex = rows.indexOf(draggedControl);
        var droppedIndex = rows.indexOf(droppedControl);

        // Adjust the dropped index based on the drop position
        if (dropPosition === 'After') {
          droppedIndex++;
        }

        const count = droppedIndex + 1;

        // call action countUp with OData V4
        const model = oEvent
          .getParameter('draggedControl')
          .getBindingContext()
          .getModel();
        const context = oEvent
          .getParameter('draggedControl')
          .getBindingContext();
        const boundAction = model.bindContext(
          'AdminService.setCount(...)',
          context
        );
        // set parameter count
        boundAction.setParameter('count', count);
        boundAction.execute();

        // refresh table
        table.getBinding('items').refresh();
      },
    });
  }
);
