"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantPlanningApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantPlanning_1 = require("./ProductPlantPlanning");
const ProductPlantPlanningRequestBuilder_1 = require("./ProductPlantPlanningRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantPlanningApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantPlanning_1.ProductPlantPlanning;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantPlanningApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantPlanningRequestBuilder_1.ProductPlantPlanningRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantPlanning_1.ProductPlantPlanning, this.deSerializers);
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
                 * Static representation of the {@link planningMaterial} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_MATERIAL: fieldBuilder.buildEdmTypeField('PlanningMaterial', 'Edm.String', false),
                /**
                 * Static representation of the {@link planningPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_PLANT: fieldBuilder.buildEdmTypeField('PlanningPlant', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodPlntPlngMatlConversionFctr} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_PLNT_PLNG_MATL_CONVERSION_FCTR: fieldBuilder.buildEdmTypeField('ProdPlntPlngMatlConversionFctr', 'Edm.Double', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantPlanning_1.ProductPlantPlanning)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantPlanningApi = ProductPlantPlanningApi;
//# sourceMappingURL=ProductPlantPlanningApi.js.map