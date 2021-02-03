sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function(Opa5, PropertyStrictEquals) {
	"use strict";

	var sViewName = "App",
		sAppControl = "app";

	Opa5.createPageObjects({
		onTheAppPage : {

			actions : {

				iCloseTheMessageBox : function () {
					return this.waitFor({
						id: "serviceErrorMessageBox",
						autoWait: false,
						success: function (oMessageBox) {
							oMessageBox.destroy();
							Opa5.assert.ok(true, "The MessageBox was closed");
						}
					});
				}
			},

			assertions : {

				iShouldSeeTheBusyIndicator : function () {
					return this.waitFor({
						id : sAppControl,
						viewName : sViewName,
						matchers: new PropertyStrictEquals({
							name: "busy",
							value: true
						}),
						autoWait: false,
						success : function () {
							Opa5.assert.ok(true, "The app is busy");
						},
						errorMessage : "The app is not busy"
					});
				},

				iShouldSeeTheMessageBox : function () {
					return this.waitFor({
						searchOpenDialogs: true,
						controlType: "sap.m.Dialog",
						matchers : new PropertyStrictEquals({ name: "type", value: "Message"}),
						success: function () {
							Opa5.assert.ok(true, "The correct MessageBox was shown");
						}
					});
				},

				theAppShowsFCLDesign: function (sLayout) {
					return this.waitFor({
						id : "layout",
						viewName : "App",
						matchers : new PropertyStrictEquals({name: "layout", value: sLayout}),
						success : function () {
							Opa5.assert.ok(true, "the app shows " + sLayout + " layout");
						},
						errorMessage : "The app does not show " + sLayout + " layout"
					});
				}

			}

		}

	});

});