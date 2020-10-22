sap.ui.define([
	"sap/ui/vbm/AnalyticMap",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device",
	"sap/m/MessageToast"
], function(AnalyticMap, Controller, JSONModel, Device, MessageToast) {
	"use strict";

	AnalyticMap.GeoJSONURL = "https://sapui5.hana.ondemand.com/test-resources/sap/ui/vbm/demokit/media/analyticmap/L0.json";

	return Controller.extend("sap.ui.vbm.sample.AnalyticMapRegions.Main", {

		onInit: function() {
			var oModel = new JSONModel("Data.json");
			this.getView().setModel(oModel);

			// set the device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.getView().setModel(oDeviceModel, "device");

			oModel.attachRequestCompleted(function(oEvent) {
				var modelJSON = JSON.parse(oModel.getJSON());
				for (var i = 0; i <= modelJSON.Regions.length; i++) {
					var totalStock = oModel.getProperty("/Regions/" + i + "/TotalStock");
					var code = oModel.getProperty("/Regions/" + i + "/code");
					oModel.setProperty("/Regions/" + i + "/county", code + ": " + totalStock);
					if (totalStock >= 800) {
						oModel.setProperty("/Regions/" + i + "/color", "rgb(27,126,172)");
					} else if (totalStock >= 200) {
						oModel.setProperty("/Regions/" + i + "/color", "rgb(39,163,221)");
					} else if (totalStock >= 100) {
						oModel.setProperty("/Regions/" + i + "/color", "rgb(92,186,229)");
					} else if (totalStock >= 50) {
						oModel.setProperty("/Regions/" + i + "/color", "rgb(132,202,236)");
					} else {
						oModel.setProperty("/Regions/" + i + "/color", "rgb(171,219,242)");
					}
				}
				modelJSON = JSON.parse(oModel.getJSON());
			});

			this.byId("vbi").setVisualFrame({
				"minLon": -120,
				"maxLon": 120,
				"minLat": -60,
				"maxLat": 70,
				"minLOD": 2
			});
		},

		onPressLegend: function() {
			if (this.byId("vbi").getLegendVisible() == true) {
				this.byId("vbi").setLegendVisible(false);
				this.byId("btnLegend").setTooltip("Show legend");
			} else {
				this.byId("vbi").setLegendVisible(true);
				this.byId("btnLegend").setTooltip("Hide legend");
			}
		},

		onPressResize: function() {
			if (this.byId("btnResize").getTooltip() == "Minimize") {
				if (Device.system.phone) {
					this.byId("vbi").minimize(132, 56, 1320, 560);// Height: 3,5 rem; Width: 8,25 rem
				} else {
					this.byId("vbi").minimize(168, 72, 1680, 720);// Height: 4,5 rem; Width: 10,5 rem
				}
				this.byId("btnResize").setTooltip("Maximize");
			} else {
				this.byId("vbi").maximize();
				this.byId("btnResize").setTooltip("Minimize");
			}
		},

		onRegionClick: function(e) {
			MessageToast.show("onRegionClick " + e.getParameter("code"));
		},

		onRegionContextMenu: function(e) {
			MessageToast.show("onRegionContextMenu " + e.getParameter("code"));
		},

		onClickItem: function(evt) {
			MessageToast.show("onClick");
		},

		onContextMenuItem: function(evt) {
			MessageToast.show("onContextMenu");
		}
	});

});
