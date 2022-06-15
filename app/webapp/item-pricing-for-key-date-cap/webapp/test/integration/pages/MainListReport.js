sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var AdditionalCustomListReportDefinition = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'itempricingforkeydatecap',
            componentId: 'Z_C_AItemPricingForKeyDateList',
            entitySet: 'Z_C_AItemPricingForKeyDate'
        },
        AdditionalCustomListReportDefinition
    );
});