"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductValuation_1 = require("./ProductValuation");
const ProductValuationRequestBuilder_1 = require("./ProductValuationRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductValuationApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductValuation_1.ProductValuation;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductValuationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_VALUATION_ACCOUNTING: new odata_v4_1.OneToOneLink('_ProductValuationAccounting', this, linkedApis[1]),
            PRODUCT_VALUATION_COSTING: new odata_v4_1.OneToOneLink('_ProductValuationCosting', this, linkedApis[2]),
            PRODUCT_VALUATION_LEDGER_ACCOUNT: new odata_v4_1.OneToManyLink('_ProductValuationLedgerAccount', this, linkedApis[3]),
            PRODUCT_VALUATION_LEDGER_PRICES: new odata_v4_1.OneToManyLink('_ProductValuationLedgerPrices', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new ProductValuationRequestBuilder_1.ProductValuationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductValuation_1.ProductValuation, this.deSerializers);
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
                 * Static representation of the {@link valuationClass} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUATION_CLASS: fieldBuilder.buildEdmTypeField('ValuationClass', 'Edm.String', false),
                /**
                 * Static representation of the {@link priceDeterminationControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DETERMINATION_CONTROL: fieldBuilder.buildEdmTypeField('PriceDeterminationControl', 'Edm.String', false),
                /**
                 * Static representation of the {@link standardPrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STANDARD_PRICE: fieldBuilder.buildEdmTypeField('StandardPrice', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productPriceUnitQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_PRICE_UNIT_QUANTITY: fieldBuilder.buildEdmTypeField('ProductPriceUnitQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link inventoryValuationProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INVENTORY_VALUATION_PROCEDURE: fieldBuilder.buildEdmTypeField('InventoryValuationProcedure', 'Edm.String', false),
                /**
                 * Static representation of the {@link movingAveragePrice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MOVING_AVERAGE_PRICE: fieldBuilder.buildEdmTypeField('MovingAveragePrice', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link valuationCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUATION_CATEGORY: fieldBuilder.buildEdmTypeField('ValuationCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link productUsageType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_USAGE_TYPE: fieldBuilder.buildEdmTypeField('ProductUsageType', 'Edm.String', false),
                /**
                 * Static representation of the {@link productOriginType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_ORIGIN_TYPE: fieldBuilder.buildEdmTypeField('ProductOriginType', 'Edm.String', false),
                /**
                 * Static representation of the {@link isProducedInhouse} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PRODUCED_INHOUSE: fieldBuilder.buildEdmTypeField('IsProducedInhouse', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link valuationClassSalesOrderStock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUATION_CLASS_SALES_ORDER_STOCK: fieldBuilder.buildEdmTypeField('ValuationClassSalesOrderStock', 'Edm.String', false),
                /**
                 * Static representation of the {@link projectStockValuationClass} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_STOCK_VALUATION_CLASS: fieldBuilder.buildEdmTypeField('ProjectStockValuationClass', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductValuation_1.ProductValuation)
            };
        }
        return this._schema;
    }
}
exports.ProductValuationApi = ProductValuationApi;
//# sourceMappingURL=ProductValuationApi.js.map