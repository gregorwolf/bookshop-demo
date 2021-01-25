/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"v2/booksfreestyle/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});