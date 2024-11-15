"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantInternationalTradeApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantInternationalTrade_1 = require("./ProductPlantInternationalTrade");
const ProductPlantInternationalTradeRequestBuilder_1 = require("./ProductPlantInternationalTradeRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantInternationalTradeApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantInternationalTrade_1.ProductPlantInternationalTrade;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantInternationalTradeApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantInternationalTradeRequestBuilder_1.ProductPlantInternationalTradeRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantInternationalTrade_1.ProductPlantInternationalTrade, this.deSerializers);
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
                 * Static representation of the {@link countryOfOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_OF_ORIGIN: fieldBuilder.buildEdmTypeField('CountryOfOrigin', 'Edm.String', false),
                /**
                 * Static representation of the {@link regionOfOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION_OF_ORIGIN: fieldBuilder.buildEdmTypeField('RegionOfOrigin', 'Edm.String', false),
                /**
                 * Static representation of the {@link consumptionTaxCtrlCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_TAX_CTRL_CODE: fieldBuilder.buildEdmTypeField('ConsumptionTaxCtrlCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link exportAndImportProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPORT_AND_IMPORT_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('ExportAndImportProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link productCasNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CAS_NUMBER: fieldBuilder.buildEdmTypeField('ProductCASNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodIntlTradeClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_INTL_TRADE_CLASSIFICATION: fieldBuilder.buildEdmTypeField('ProdIntlTradeClassification', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantInternationalTrade_1.ProductPlantInternationalTrade)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantInternationalTradeApi = ProductPlantInternationalTradeApi;
//# sourceMappingURL=ProductPlantInternationalTradeApi.js.map