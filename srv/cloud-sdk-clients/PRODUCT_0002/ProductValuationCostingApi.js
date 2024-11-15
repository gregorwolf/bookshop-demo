"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationCostingApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductValuationCosting_1 = require("./ProductValuationCosting");
const ProductValuationCostingRequestBuilder_1 = require("./ProductValuationCostingRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductValuationCostingApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductValuationCosting_1.ProductValuationCosting;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductValuationCostingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_VALUATION: new odata_v4_1.OneToOneLink('_ProductValuation', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductValuationCostingRequestBuilder_1.ProductValuationCostingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductValuationCosting_1.ProductValuationCosting, this.deSerializers);
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
                 * Static representation of the {@link productIsCostedWithQtyStruc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_COSTED_WITH_QTY_STRUC: fieldBuilder.buildEdmTypeField('ProductIsCostedWithQtyStruc', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isMaterialRelatedOrigin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MATERIAL_RELATED_ORIGIN: fieldBuilder.buildEdmTypeField('IsMaterialRelatedOrigin', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link costOriginGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COST_ORIGIN_GROUP: fieldBuilder.buildEdmTypeField('CostOriginGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link costingOverheadGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COSTING_OVERHEAD_GROUP: fieldBuilder.buildEdmTypeField('CostingOverheadGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link plannedPrice1InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('PlannedPrice1InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link plannedPrice2InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('PlannedPrice2InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link plannedPrice3InCoCodeCrcy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('PlannedPrice3InCoCodeCrcy', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link futurePlndPrice1ValdtyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUTURE_PLND_PRICE_1_VALDTY_DATE: fieldBuilder.buildEdmTypeField('FuturePlndPrice1ValdtyDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link futurePlndPrice2ValdtyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUTURE_PLND_PRICE_2_VALDTY_DATE: fieldBuilder.buildEdmTypeField('FuturePlndPrice2ValdtyDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link futurePlndPrice3ValdtyDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUTURE_PLND_PRICE_3_VALDTY_DATE: fieldBuilder.buildEdmTypeField('FuturePlndPrice3ValdtyDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductValuationCosting_1.ProductValuationCosting)
            };
        }
        return this._schema;
    }
}
exports.ProductValuationCostingApi = ProductValuationCostingApi;
//# sourceMappingURL=ProductValuationCostingApi.js.map