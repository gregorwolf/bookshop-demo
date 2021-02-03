sap.ui.define([
	"../localService/mockserver",
	"./flpSandbox",
	"sap/ui/fl/FakeLrepConnectorLocalStorage",
	"sap/m/MessageBox"
], function (mockserver, flpSandbox, FakeLrepConnectorLocalStorage, MessageBox) {
	"use strict";

	var aInitializations = [];

	// initialize the mock server
	aInitializations.push(mockserver.init());
	aInitializations.push(flpSandbox.init());

	Promise.all(aInitializations).catch(function (oError) {
		MessageBox.error(oError.message);
	}).finally(function () {
		FakeLrepConnectorLocalStorage.enableFakeConnector();
	});
});