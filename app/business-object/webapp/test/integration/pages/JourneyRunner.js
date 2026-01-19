sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"businessobject/test/integration/pages/BusinessObjectsList",
	"businessobject/test/integration/pages/BusinessObjectsObjectPage"
], function (JourneyRunner, BusinessObjectsList, BusinessObjectsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('businessobject') + '/test/flpSandbox.html#businessobject-tile',
        pages: {
			onTheBusinessObjectsList: BusinessObjectsList,
			onTheBusinessObjectsObjectPage: BusinessObjectsObjectPage
        },
        async: true
    });

    return runner;
});

