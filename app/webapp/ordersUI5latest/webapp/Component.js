sap.ui.define(['sap/fe/core/AppComponent', 'ordersUI5latest/ext/RTEBlock','ordersUI5latest/ext/RTEWithMetadataBlock' ], function(AppComponent, RTEBlock, RTEWithMetadataBlock) {
    'use strict';

    RTEBlock.register();
    RTEWithMetadataBlock.register();
    return AppComponent.extend('ordersUI5latest.Component', {
        metadata: {
            manifest: 'json'
        }
    });
});

