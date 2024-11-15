"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProcurementApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductProcurement_1 = require("./ProductProcurement");
const ProductProcurementRequestBuilder_1 = require("./ProductProcurementRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductProcurementApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductProcurement_1.ProductProcurement;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductProcurementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ProductProcurementRequestBuilder_1.ProductProcurementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductProcurement_1.ProductProcurement, this.deSerializers);
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
                 * Static representation of the {@link purchaseOrderQuantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('PurchaseOrderQuantityUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link purchaseOrderQuantityIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('PurchaseOrderQuantityISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link varblPurOrdUnitStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARBL_PUR_ORD_UNIT_STATUS: fieldBuilder.buildEdmTypeField('VarblPurOrdUnitStatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link purchasingAcknProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_ACKN_PROFILE: fieldBuilder.buildEdmTypeField('PurchasingAcknProfile', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductProcurement_1.ProductProcurement)
            };
        }
        return this._schema;
    }
}
exports.ProductProcurementApi = ProductProcurementApi;
//# sourceMappingURL=ProductProcurementApi.js.map