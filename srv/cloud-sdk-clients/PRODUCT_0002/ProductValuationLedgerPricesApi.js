"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationLedgerPricesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductValuationLedgerPrices_1 = require("./ProductValuationLedgerPrices");
const ProductValuationLedgerPricesRequestBuilder_1 = require("./ProductValuationLedgerPricesRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductValuationLedgerPricesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductValuationLedgerPrices_1.ProductValuationLedgerPrices;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductValuationLedgerPricesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_VALUATION: new odata_v4_1.OneToOneLink('_ProductValuation', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductValuationLedgerPricesRequestBuilder_1.ProductValuationLedgerPricesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductValuationLedgerPrices_1.ProductValuationLedgerPrices, this.deSerializers);
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
                 * Static representation of the {@link currencyRole} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_ROLE: fieldBuilder.buildEdmTypeField('CurrencyRole', 'Edm.String', false),
                /**
                 * Static representation of the {@link ledger} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', false),
                /**
                 * Static representation of the {@link productPriceUnitQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_PRICE_UNIT_QUANTITY: fieldBuilder.buildEdmTypeField('ProductPriceUnitQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductValuationLedgerPrices_1.ProductValuationLedgerPrices)
            };
        }
        return this._schema;
    }
}
exports.ProductValuationLedgerPricesApi = ProductValuationLedgerPricesApi;
//# sourceMappingURL=ProductValuationLedgerPricesApi.js.map