sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'itempricingforkeydate/test/integration/pages/MainListReport' ,
        'itempricingforkeydate/test/integration/pages/MainObjectPage',
        'itempricingforkeydate/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('itempricingforkeydate') + '/index.html'
        });

        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
    }
);