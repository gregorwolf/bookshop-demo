"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantProcurementApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantProcurement_1 = require("./ProductPlantProcurement");
const ProductPlantProcurementRequestBuilder_1 = require("./ProductPlantProcurementRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantProcurementApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantProcurement_1.ProductPlantProcurement;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantProcurementApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantProcurementRequestBuilder_1.ProductPlantProcurementRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantProcurement_1.ProductPlantProcurement, this.deSerializers);
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
                 * Static representation of the {@link isAutoPurOrdCreationAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_AUTO_PUR_ORD_CREATION_ALLOWED: fieldBuilder.buildEdmTypeField('IsAutoPurOrdCreationAllowed', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isSourceListRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_SOURCE_LIST_REQUIRED: fieldBuilder.buildEdmTypeField('IsSourceListRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link justInTimeDeliveryScheduleCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                JUST_IN_TIME_DELIVERY_SCHEDULE_CODE: fieldBuilder.buildEdmTypeField('JustInTimeDeliveryScheduleCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link purchasingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link sourceOfSupplyCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE_OF_SUPPLY_CATEGORY: fieldBuilder.buildEdmTypeField('SourceOfSupplyCategory', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantProcurement_1.ProductPlantProcurement)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantProcurementApi = ProductPlantProcurementApi;
//# sourceMappingURL=ProductPlantProcurementApi.js.map