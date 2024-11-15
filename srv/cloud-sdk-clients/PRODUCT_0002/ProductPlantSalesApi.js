"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantSalesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantSales_1 = require("./ProductPlantSales");
const ProductPlantSalesRequestBuilder_1 = require("./ProductPlantSalesRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantSalesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantSales_1.ProductPlantSales;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantSalesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantSalesRequestBuilder_1.ProductPlantSalesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantSales_1.ProductPlantSales, this.deSerializers);
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
                 * Static representation of the {@link loadingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOADING_GROUP: fieldBuilder.buildEdmTypeField('LoadingGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link capPlanningQuantityInBaseUoM} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAP_PLANNING_QUANTITY_IN_BASE_UO_M: fieldBuilder.buildEdmTypeField('CapPlanningQuantityInBaseUoM', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link prodShipgProcgDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_SHIPG_PROCG_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('ProdShipgProcgDurationInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link wrkCentersShipgSetupTimeInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WRK_CENTERS_SHIPG_SETUP_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField('WrkCentersShipgSetupTimeInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link replacementPartType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REPLACEMENT_PART_TYPE: fieldBuilder.buildEdmTypeField('ReplacementPartType', 'Edm.String', false),
                /**
                 * Static representation of the {@link availabilityCheckType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVAILABILITY_CHECK_TYPE: fieldBuilder.buildEdmTypeField('AvailabilityCheckType', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantSales_1.ProductPlantSales)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantSalesApi = ProductPlantSalesApi;
//# sourceMappingURL=ProductPlantSalesApi.js.map