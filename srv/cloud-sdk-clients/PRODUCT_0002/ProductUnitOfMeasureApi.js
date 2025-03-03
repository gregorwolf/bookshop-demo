"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitOfMeasureApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductUnitOfMeasure_1 = require("./ProductUnitOfMeasure");
const ProductUnitOfMeasureRequestBuilder_1 = require("./ProductUnitOfMeasureRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductUnitOfMeasureApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductUnitOfMeasure_1.ProductUnitOfMeasure;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductUnitOfMeasureApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_UNIT_OF_MEASURE_EAN: new odata_v4_1.OneToManyLink('_ProductUnitOfMeasureEAN', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductUnitOfMeasureRequestBuilder_1.ProductUnitOfMeasureRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductUnitOfMeasure_1.ProductUnitOfMeasure, this.deSerializers);
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
                 * Static representation of the {@link alternativeSapUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_SAP_UNIT: fieldBuilder.buildEdmTypeField('AlternativeSAPUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link alternativeIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_ISO_UNIT: fieldBuilder.buildEdmTypeField('AlternativeISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link quantityNumerator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_NUMERATOR: fieldBuilder.buildEdmTypeField('QuantityNumerator', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link quantityDenominator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField('QuantityDenominator', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productVolume} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField('ProductVolume', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link volumeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VOLUME_UNIT: fieldBuilder.buildEdmTypeField('VolumeUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link volumeIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField('VolumeISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link grossWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GROSS_WEIGHT: fieldBuilder.buildEdmTypeField('GrossWeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link weightUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WEIGHT_UNIT: fieldBuilder.buildEdmTypeField('WeightUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link weightIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField('WeightISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link globalTradeItemNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField('GlobalTradeItemNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link globalTradeItemNumberCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: fieldBuilder.buildEdmTypeField('GlobalTradeItemNumberCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link unitSpecificProductLength} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_SPECIFIC_PRODUCT_LENGTH: fieldBuilder.buildEdmTypeField('UnitSpecificProductLength', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link unitSpecificProductWidth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_SPECIFIC_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField('UnitSpecificProductWidth', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link unitSpecificProductHeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_SPECIFIC_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField('UnitSpecificProductHeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productMeasurementUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MEASUREMENT_UNIT: fieldBuilder.buildEdmTypeField('ProductMeasurementUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link productMeasurementIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MEASUREMENT_ISO_UNIT: fieldBuilder.buildEdmTypeField('ProductMeasurementISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link lowerLevelPackagingUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOWER_LEVEL_PACKAGING_UNIT: fieldBuilder.buildEdmTypeField('LowerLevelPackagingUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link lowerLevelPackagingIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOWER_LEVEL_PACKAGING_ISO_UNIT: fieldBuilder.buildEdmTypeField('LowerLevelPackagingISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link maximumStackingFactor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_STACKING_FACTOR: fieldBuilder.buildEdmTypeField('MaximumStackingFactor', 'Edm.Byte', false),
                /**
                 * Static representation of the {@link capacityUsage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAPACITY_USAGE: fieldBuilder.buildEdmTypeField('CapacityUsage', 'Edm.Decimal', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductUnitOfMeasure_1.ProductUnitOfMeasure)
            };
        }
        return this._schema;
    }
}
exports.ProductUnitOfMeasureApi = ProductUnitOfMeasureApi;
//# sourceMappingURL=ProductUnitOfMeasureApi.js.map