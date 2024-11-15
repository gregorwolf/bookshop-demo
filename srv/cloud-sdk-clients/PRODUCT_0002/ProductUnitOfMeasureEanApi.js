"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitOfMeasureEanApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductUnitOfMeasureEan_1 = require("./ProductUnitOfMeasureEan");
const ProductUnitOfMeasureEanRequestBuilder_1 = require("./ProductUnitOfMeasureEanRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductUnitOfMeasureEanApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductUnitOfMeasureEan_1.ProductUnitOfMeasureEan;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductUnitOfMeasureEanApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_UNIT_OF_MEASURE: new odata_v4_1.OneToOneLink('_ProductUnitOfMeasure', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductUnitOfMeasureEanRequestBuilder_1.ProductUnitOfMeasureEanRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductUnitOfMeasureEan_1.ProductUnitOfMeasureEan, this.deSerializers);
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
                 * Static representation of the {@link alternativeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_UNIT: fieldBuilder.buildEdmTypeField('AlternativeUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link consecutiveNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSECUTIVE_NUMBER: fieldBuilder.buildEdmTypeField('ConsecutiveNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link alternativeIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_ISO_UNIT: fieldBuilder.buildEdmTypeField('AlternativeISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link productStandardId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_STANDARD_ID: fieldBuilder.buildEdmTypeField('ProductStandardID', 'Edm.String', false),
                /**
                 * Static representation of the {@link internationalArticleNumberCat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_ARTICLE_NUMBER_CAT: fieldBuilder.buildEdmTypeField('InternationalArticleNumberCat', 'Edm.String', false),
                /**
                 * Static representation of the {@link isMainGlobalTradeItemNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField('IsMainGlobalTradeItemNumber', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductUnitOfMeasureEan_1.ProductUnitOfMeasureEan)
            };
        }
        return this._schema;
    }
}
exports.ProductUnitOfMeasureEanApi = ProductUnitOfMeasureEanApi;
//# sourceMappingURL=ProductUnitOfMeasureEanApi.js.map