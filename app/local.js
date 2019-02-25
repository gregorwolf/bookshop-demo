(function () {
    "use strict"
    /**
     * Note: While adding any new app to demokit/apps and here, make sure -
     * 1. Batch requests are turned off
     * 2. LocalUri for the metadata and annotations is correct in the manifest
     * 3. serviceRegex must be added to be able to detect web service calls
     * 4. mockDataSets values are used to detect web service calls entity set
     * ...
     *
     * @type {{defaultRenderer: string, renderers: {fiori2: {componentData: {config: {search: string}}}}, ClientSideTargetResolution: {}, NavTargetResolution: {config: {enableClientSideTargetResolution: boolean}}, applications: {v4gwsamplebasic-display: {additionalInformation: string, applicationType: string, title: string, description: string, url: string, mockDataSets: string[], serviceRegex: string}, v4music-display: {additionalInformation: string, applicationType: string, title: string, description: string, url: string, mockDataSets: string[], serviceRegex: string}}}}
     */


    var __aPrefixMatches = document.location.pathname.match(/(.*)\/test-resources\//);
	var __sPathPrefix = "http://localhost:8080/testsuite" || __aPrefixMatches && __aPrefixMatches[1] || "";

    window["sap-ushell-config"] = {
        defaultRenderer: "fiori2",
        applications: {
            "browse-books": {
                title: "Browse Books",
                description: "... testing FE v42",
                additionalInformation: "SAPUI5.Component=bookshop",
                applicationType : "URL",
                url: "/browse/webapp",
                navigationMode: "embedded"
            },
            "manage-books": {
                title: "Manage Books",
                description: "... testing FE v42",
                additionalInformation: "SAPUI5.Component=admin",
                applicationType : "URL",
                url: "/admin/webapp",
                navigationMode: "embedded"
            },
            "manage-orders": {
                title: "Manage Orders",
                description: "... testing FE v42",
                additionalInformation: "SAPUI5.Component=orders",
                applicationType : "URL",
                url: "/orders/webapp",
                navigationMode: "embedded"
            }
        }
    };

    window.onInit = function () {
        sap.ui.require([], function () {
                sap.ushell.Container.createRenderer().placeAt("content");   
        });
    };

    document.write('<script src="' + __sPathPrefix + '/test-resources/sap/ushell/bootstrap/sandbox.js" id="sap-ushell-bootstrap"><' + '/script>');
    document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"' +
        ' id="sap-ui-bootstrap"' +
        ' data-sap-ui-theme="sap_belize"' +
        ' data-sap-ui-language="en"' +
        ' data-sap-ui-libs="sap.m,sap.ushell,sap.ui.fl"' +
        ' data-sap-ui-compatVersion="edge"' +
        ' data-sap-ui-xx-lesssupport="false"' +
        ' data-sap-ui-frameOptions="allow"' +
        ' data-sap-ui-preload="off"' +
        ' data-sap-ui-resourceroots=\'{' +
        '	"sap.fe": "' + __sPathPrefix + '/resources/sap/fe",' +
        '	"reuselib": "./reuselib",' +
        '	"local": "."' +
        ' }\'' +
        ' data-sap-ui-onInit="onInit">' + '<' + '/script>');

})()