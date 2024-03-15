/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"item-pricing-for-key-date-v2-freestyle/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
