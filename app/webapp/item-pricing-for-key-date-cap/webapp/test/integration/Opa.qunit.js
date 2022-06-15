sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'itempricingforkeydatecap/test/integration/pages/MainListReport' ,
        'itempricingforkeydatecap/test/integration/pages/MainObjectPage',
        'itempricingforkeydatecap/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('itempricingforkeydatecap') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);