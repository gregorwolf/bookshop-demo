sap.ui.define(['sap/ui/test/opaQunit'], function(opaTest) {
    'use strict';

    var Journey = {
        run: function() {
            QUnit.module('Sample journey');

            opaTest('#000: Start', function(Given, When, Then) {
                Given.iResetTestData().and.iStartMyApp();
                Then.onTheMainPage.iSeeThisPage();
            });
            
            opaTest('#1: ListReport: Check List Report Page loads', function(Given, When, Then) {
                When.onTheMainPage.onFilterBar().iExecuteSearch();
                Then.onTheMainPage.onTable().iCheckRows();
            });

            opaTest('#2: Object Page: Check Object Page loads', function(Given, When, Then) {
                Then.onTheMainPage.iSeeThisPage();
            });
            
            opaTest('#999: Tear down', function(Given, When, Then) {
                Given.iTearDownMyApp();
            });
        }
    };

    return Journey;
});
