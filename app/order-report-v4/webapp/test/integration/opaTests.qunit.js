sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'orderreportv4/test/integration/FirstJourney',
		'orderreportv4/test/integration/pages/OrderReportList',
		'orderreportv4/test/integration/pages/OrderReportObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderReportList, OrderReportObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('orderreportv4') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderReportList: OrderReportList,
					onTheOrderReportObjectPage: OrderReportObjectPage
                }
            },
            opaJourney.run
        );
    }
);