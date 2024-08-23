sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'orderreportv4',
            componentId: 'OrderReportList',
            contextPath: '/OrderReport'
        },
        CustomPageDefinitions
    );
});