sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'uommapping/test/integration/FirstJourney',
		'uommapping/test/integration/pages/XRechnungUOMsList',
		'uommapping/test/integration/pages/XRechnungUOMsObjectPage',
		'uommapping/test/integration/pages/XRechnungToB1UOMMappingsObjectPage'
    ],
    function(JourneyRunner, opaJourney, XRechnungUOMsList, XRechnungUOMsObjectPage, XRechnungToB1UOMMappingsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('uommapping') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheXRechnungUOMsList: XRechnungUOMsList,
					onTheXRechnungUOMsObjectPage: XRechnungUOMsObjectPage,
					onTheXRechnungToB1UOMMappingsObjectPage: XRechnungToB1UOMMappingsObjectPage
                }
            },
            opaJourney.run
        );
    }
);