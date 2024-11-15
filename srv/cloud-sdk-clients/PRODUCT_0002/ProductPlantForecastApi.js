"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantForecastApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantForecast_1 = require("./ProductPlantForecast");
const ProductPlantForecastRequestBuilder_1 = require("./ProductPlantForecastRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantForecastApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantForecast_1.ProductPlantForecast;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantForecastApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantForecastRequestBuilder_1.ProductPlantForecastRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantForecast_1.ProductPlantForecast, this.deSerializers);
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
                 * Static representation of the {@link consumptionRefUsageEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_REF_USAGE_END_DATE: fieldBuilder.buildEdmTypeField('ConsumptionRefUsageEndDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link cnsmpnQuantityMultiplierValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CNSMPN_QUANTITY_MULTIPLIER_VALUE: fieldBuilder.buildEdmTypeField('CnsmpnQuantityMultiplierValue', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link consumptionReferenceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField('ConsumptionReferenceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link consumptionReferencePlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_REFERENCE_PLANT: fieldBuilder.buildEdmTypeField('ConsumptionReferencePlant', 'Edm.String', false),
                /**
                 * Static representation of the {@link correctionFactorIsRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRECTION_FACTOR_IS_REQUIRED: fieldBuilder.buildEdmTypeField('CorrectionFactorIsRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link forecastModelIsReset} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORECAST_MODEL_IS_RESET: fieldBuilder.buildEdmTypeField('ForecastModelIsReset', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantForecast_1.ProductPlantForecast)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantForecastApi = ProductPlantForecastApi;
//# sourceMappingURL=ProductPlantForecastApi.js.map