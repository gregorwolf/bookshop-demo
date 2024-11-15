"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStorageApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductStorage_1 = require("./ProductStorage");
const ProductStorageRequestBuilder_1 = require("./ProductStorageRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductStorageApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductStorage_1.ProductStorage;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductStorageApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ProductStorageRequestBuilder_1.ProductStorageRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductStorage_1.ProductStorage, this.deSerializers);
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
                 * Static representation of the {@link storageConditions} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_CONDITIONS: fieldBuilder.buildEdmTypeField('StorageConditions', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodTemperatureConditionCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_TEMPERATURE_CONDITION_CODE: fieldBuilder.buildEdmTypeField('ProdTemperatureConditionCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link hazardousProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAZARDOUS_PRODUCT: fieldBuilder.buildEdmTypeField('HazardousProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link nmbrOfGrOrGiSlipsToPrintQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: fieldBuilder.buildEdmTypeField('NmbrOfGROrGISlipsToPrintQty', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link labelType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_TYPE: fieldBuilder.buildEdmTypeField('LabelType', 'Edm.String', false),
                /**
                 * Static representation of the {@link labelForm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABEL_FORM: fieldBuilder.buildEdmTypeField('LabelForm', 'Edm.String', false),
                /**
                 * Static representation of the {@link minRemainingShelfLife} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIN_REMAINING_SHELF_LIFE: fieldBuilder.buildEdmTypeField('MinRemainingShelfLife', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productExpirationDateType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_EXPIRATION_DATE_TYPE: fieldBuilder.buildEdmTypeField('ProductExpirationDateType', 'Edm.String', false),
                /**
                 * Static representation of the {@link storageBinInstruction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_BIN_INSTRUCTION: fieldBuilder.buildEdmTypeField('StorageBinInstruction', 'Edm.String', false),
                /**
                 * Static representation of the {@link shelfLifeExpirationDatePeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHELF_LIFE_EXPIRATION_DATE_PERIOD: fieldBuilder.buildEdmTypeField('ShelfLifeExpirationDatePeriod', 'Edm.String', false),
                /**
                 * Static representation of the {@link shelfLifeExprtnDateRndngRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHELF_LIFE_EXPRTN_DATE_RNDNG_RULE: fieldBuilder.buildEdmTypeField('ShelfLifeExprtnDateRndngRule', 'Edm.String', false),
                /**
                 * Static representation of the {@link totalShelfLifeStoragePercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_SHELF_LIFE_STORAGE_PERCENT: fieldBuilder.buildEdmTypeField('TotalShelfLifeStoragePercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link totalShelfLife} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_SHELF_LIFE: fieldBuilder.buildEdmTypeField('TotalShelfLife', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link baseUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT: fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link baseIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_ISO_UNIT: fieldBuilder.buildEdmTypeField('BaseISOUnit', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductStorage_1.ProductStorage)
            };
        }
        return this._schema;
    }
}
exports.ProductStorageApi = ProductStorageApi;
//# sourceMappingURL=ProductStorageApi.js.map