"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationLedgerAccountApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductValuationLedgerAccount_1 = require("./ProductValuationLedgerAccount");
const ProductValuationLedgerAccountRequestBuilder_1 = require("./ProductValuationLedgerAccountRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductValuationLedgerAccountApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductValuationLedgerAccount_1.ProductValuationLedgerAccount;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductValuationLedgerAccountApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_VALUATION: new odata_v4_1.OneToOneLink('_ProductValuation', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductValuationLedgerAccountRequestBuilder_1.ProductValuationLedgerAccountRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductValuationLedgerAccount_1.ProductValuationLedgerAccount, this.deSerializers);
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
                 * Static representation of the {@link productPriceControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_PRICE_CONTROL: fieldBuilder.buildEdmTypeField('ProductPriceControl', 'Edm.String', false),
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
                 * Static representation of the {@link movingAveragePrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOVING_AVERAGE_PRICE: fieldBuilder.buildEdmTypeField('MovingAveragePrice', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link standardPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STANDARD_PRICE: fieldBuilder.buildEdmTypeField('StandardPrice', 'Edm.Decimal', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductValuationLedgerAccount_1.ProductValuationLedgerAccount)
            };
        }
        return this._schema;
    }
}
exports.ProductValuationLedgerAccountApi = ProductValuationLedgerAccountApi;
//# sourceMappingURL=ProductValuationLedgerAccountApi.js.map