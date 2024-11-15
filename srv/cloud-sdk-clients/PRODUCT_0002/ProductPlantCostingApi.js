"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantCostingApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantCosting_1 = require("./ProductPlantCosting");
const ProductPlantCostingRequestBuilder_1 = require("./ProductPlantCostingRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantCostingApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantCosting_1.ProductPlantCosting;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantCostingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantCostingRequestBuilder_1.ProductPlantCostingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantCosting_1.ProductPlantCosting, this.deSerializers);
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
                 * Static representation of the {@link isCoProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_CO_PRODUCT: fieldBuilder.buildEdmTypeField('IsCoProduct', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link costingLotSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COSTING_LOT_SIZE: fieldBuilder.buildEdmTypeField('CostingLotSize', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link taskListGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_LIST_GROUP: fieldBuilder.buildEdmTypeField('TaskListGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link taskListType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_LIST_TYPE: fieldBuilder.buildEdmTypeField('TaskListType', 'Edm.String', false),
                /**
                 * Static representation of the {@link costingSpecialProcurementType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COSTING_SPECIAL_PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField('CostingSpecialProcurementType', 'Edm.String', false),
                /**
                 * Static representation of the {@link sourceBomAlternative} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE_BOM_ALTERNATIVE: fieldBuilder.buildEdmTypeField('SourceBOMAlternative', 'Edm.String', false),
                /**
                 * Static representation of the {@link productBomUsage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_BOM_USAGE: fieldBuilder.buildEdmTypeField('ProductBOMUsage', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsCostingRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_COSTING_RELEVANT: fieldBuilder.buildEdmTypeField('ProductIsCostingRelevant', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link taskListGroupCounter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TASK_LIST_GROUP_COUNTER: fieldBuilder.buildEdmTypeField('TaskListGroupCounter', 'Edm.String', false),
                /**
                 * Static representation of the {@link varianceKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARIANCE_KEY: fieldBuilder.buildEdmTypeField('VarianceKey', 'Edm.String', false),
                /**
                 * Static representation of the {@link costingProductionVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COSTING_PRODUCTION_VERSION: fieldBuilder.buildEdmTypeField('CostingProductionVersion', 'Edm.String', false),
                /**
                 * Static representation of the {@link isFixedPriceCoProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_FIXED_PRICE_CO_PRODUCT: fieldBuilder.buildEdmTypeField('IsFixedPriceCoProduct', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantCosting_1.ProductPlantCosting)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantCostingApi = ProductPlantCostingApi;
//# sourceMappingURL=ProductPlantCostingApi.js.map