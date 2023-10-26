sap.ui.define(['sap/m/Button', 'sap/m/ButtonRenderer'], function (Button, ButtonRenderer) {
  'use strict'
  return Button.extend('books.lib.GhostButton', {
    metadata: {
      properties: {
        type: { type: 'sap.m.ButtonType', defaultValue: 'Ghost' }
      }
    },
    renderer: ButtonRenderer.render
  })
})
