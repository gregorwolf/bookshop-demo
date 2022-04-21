/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"v2/books-freestyle--app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
