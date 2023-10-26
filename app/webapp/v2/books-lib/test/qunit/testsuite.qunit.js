sap.ui.define(function () {
	'use strict'
  
	return {
	  name: 'QUnit TestSuite for books library',
	  defaults: {
		bootCore: true,
		qunit: {
		  version: 2,
		  reorder: false
		},
		sinon: {
		  version: 4,
		  qunitBridge: true,
		  useFakeTimers: false
		},
		module: './controls/{name}.qunit'
	  },
	  tests: {
		GhostButton: {
		  title: 'QUnit Test for GhostButton'
		}
	  }
	}
  })
  