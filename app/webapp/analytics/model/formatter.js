sap.ui.define([], function () {
	"use strict";
	return {
		formatLabelBgColor: function(value) {
			if (value >= 500) {
				return "rgb(27,126,172)";
			} else if (value >= 200) {
				return "rgb(39,163,221)";
			} else if (value >= 90) {
				return "rgb(92,186,229)";
			} else if (value >= 30) {
				return "rgb(132,202,236)";
			} else {
				return "rgb(171,219,242)";
			}
		}
	};
});