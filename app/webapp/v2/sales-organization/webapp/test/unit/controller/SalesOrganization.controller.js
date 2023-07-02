/*global QUnit*/

sap.ui.define([
	"v2/sales-organization/controller/SalesOrganization.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SalesOrganization Controller");

	QUnit.test("I should test the SalesOrganization controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
