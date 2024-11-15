"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationAccountingApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductValuationAccounting_1 = require("./ProductValuationAccounting");
const ProductValuationAccountingRequestBuilder_1 = require("./ProductValuationAccountingRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductValuationAccountingApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductValuationAccounting_1.ProductValuationAccounting;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductValuationAccountingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_VALUATION: new odata_v4_1.OneToOneLink('_ProductValuation', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductValuationAccountingRequestBuilder_1.ProductValuationAccountingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductValuationAccounting_1.ProductValuationAccounting, this.deSerializers);
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
                 * Static representation of the {@link valuationArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUATION_AREA: fieldBuilder.buildEdmTypeField('ValuationArea', 'Edm.String', false),
                /**
                 * Static representation of the {@link valuationType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUATION_TYPE: fieldBuilder.buildEdmTypeField('ValuationType', 'Edm.String', false),
                /**
                 * Static representation of the {@link commercialPrice1InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMERCIAL_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('CommercialPrice1InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link commercialPrice2InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMERCIAL_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('CommercialPrice2InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link commercialPrice3InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMERCIAL_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('CommercialPrice3InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link devaluationYearCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEVALUATION_YEAR_COUNT: fieldBuilder.buildEdmTypeField('DevaluationYearCount', 'Edm.String', false),
                /**
                 * Static representation of the {@link futurePrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUTURE_PRICE: fieldBuilder.buildEdmTypeField('FuturePrice', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link futurePriceValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUTURE_PRICE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('FuturePriceValidityStartDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link lifoValuationPoolNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFO_VALUATION_POOL_NUMBER: fieldBuilder.buildEdmTypeField('LIFOValuationPoolNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link taxPricel1InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_PRICEL_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('TaxPricel1InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link taxPrice2InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('TaxPrice2InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link taxPrice3InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('TaxPrice3InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link taxBasedPricesPriceUnitQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_BASED_PRICES_PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField('TaxBasedPricesPriceUnitQty', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link isLifoAndFifoRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_LIFO_AND_FIFO_RELEVANT: fieldBuilder.buildEdmTypeField('IsLIFOAndFIFORelevant', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductValuationAccounting_1.ProductValuationAccounting)
            };
        }
        return this._schema;
    }
}
exports.ProductValuationAccountingApi = ProductValuationAccountingApi;
//# sourceMappingURL=ProductValuationAccountingApi.js.map