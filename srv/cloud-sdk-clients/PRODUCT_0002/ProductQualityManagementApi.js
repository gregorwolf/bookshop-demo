"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductQualityManagementApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductQualityManagement_1 = require("./ProductQualityManagement");
const ProductQualityManagementRequestBuilder_1 = require("./ProductQualityManagementRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductQualityManagementApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductQualityManagement_1.ProductQualityManagement;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductQualityManagementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ProductQualityManagementRequestBuilder_1.ProductQualityManagementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductQualityManagement_1.ProductQualityManagement, this.deSerializers);
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
                 * Static representation of the {@link qltyMgmtInProcmtIsActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QLTY_MGMT_IN_PROCMT_IS_ACTIVE: fieldBuilder.buildEdmTypeField('QltyMgmtInProcmtIsActive', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductQualityManagement_1.ProductQualityManagement)
            };
        }
        return this._schema;
    }
}
exports.ProductQualityManagementApi = ProductQualityManagementApi;
//# sourceMappingURL=ProductQualityManagementApi.js.map