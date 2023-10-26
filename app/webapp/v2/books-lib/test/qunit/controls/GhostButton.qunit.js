/* global QUnit */
sap.ui.define(
    [
      'sap/ui/qunit/QUnitUtils',
      'sap/ui/qunit/utils/createAndAppendDiv',
      'books-lib/controls/GhostButton'
    ],
    function (qutils, createAndAppendDiv, GhostButton) {
      'use strict'
  
      // prepare DOM
      createAndAppendDiv('uiArea1')
  
      // module for basic checks
      QUnit.module('GhostButton Tests')
  
      // example sync test
      QUnit.test('Sync', function (assert) {
        assert.expect(1)
        assert.ok(true, 'ok')
      })
  
      // example async test
      QUnit.test('Async', function (assert) {
        assert.expect(1)
        return new Promise(function (resolve, reject) {
          assert.ok(true, 'ok')
          resolve()
        })
      })
  
      // module for basic checks
      QUnit.module('Basic Control Checks')
  
      // some basic control checks
      QUnit.test('Test get properties', function (assert) {
        assert.expect(1)
        const oGhostButton = new GhostButton({
          text: 'Example'
        })
        assert.equal(oGhostButton.getText(), 'Example', "Check text equals 'Example'")
      })
    }
  )
  