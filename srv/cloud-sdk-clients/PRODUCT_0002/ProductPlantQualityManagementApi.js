"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantQualityManagementApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantQualityManagement_1 = require("./ProductPlantQualityManagement");
const ProductPlantQualityManagementRequestBuilder_1 = require("./ProductPlantQualityManagementRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantQualityManagementApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantQualityManagement_1.ProductPlantQualityManagement;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantQualityManagementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantQualityManagementRequestBuilder_1.ProductPlantQualityManagementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantQualityManagement_1.ProductPlantQualityManagement, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link product} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false),
                /**
                 * Static representation of the {@link plant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodQltyManagementControlKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_QLTY_MANAGEMENT_CONTROL_KEY: fieldBuilder.buildEdmTypeField('ProdQltyManagementControlKey', 'Edm.String', false),
                /**
                 * Static representation of the {@link hasPostToInspectionStock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_POST_TO_INSPECTION_STOCK: fieldBuilder.buildEdmTypeField('HasPostToInspectionStock', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotDocumentationIsRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_DOCUMENTATION_IS_REQUIRED: fieldBuilder.buildEdmTypeField('InspLotDocumentationIsRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link qualityMgmtSystemForSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUALITY_MGMT_SYSTEM_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('QualityMgmtSystemForSupplier', 'Edm.String', false),
                /**
                 * Static representation of the {@link recrrgInspIntervalTimeInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECRRG_INSP_INTERVAL_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField('RecrrgInspIntervalTimeInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productQualityCertificateType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_QUALITY_CERTIFICATE_TYPE: fieldBuilder.buildEdmTypeField('ProductQualityCertificateType', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodQualityAuthorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_QUALITY_AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('ProdQualityAuthorizationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link sapMessages} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAP_MESSAGES: fieldBuilder.buildCollectionField('SAP__Messages', Sap_Message_1.Sap_Message, false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantQualityManagement_1.ProductPlantQualityManagement)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantQualityManagementApi = ProductPlantQualityManagementApi;
//# sourceMappingURL=ProductPlantQualityManagementApi.js.map