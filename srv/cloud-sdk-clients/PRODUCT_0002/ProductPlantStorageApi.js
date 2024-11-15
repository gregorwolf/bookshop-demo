"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantStorageApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantStorage_1 = require("./ProductPlantStorage");
const ProductPlantStorageRequestBuilder_1 = require("./ProductPlantStorageRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantStorageApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantStorage_1.ProductPlantStorage;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantStorageApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantStorageRequestBuilder_1.ProductPlantStorageRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantStorage_1.ProductPlantStorage, this.deSerializers);
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
                 * Static representation of the {@link physInventoryForCycleCounting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PHYS_INVENTORY_FOR_CYCLE_COUNTING: fieldBuilder.buildEdmTypeField('PhysInventoryForCycleCounting', 'Edm.String', false),
                /**
                 * Static representation of the {@link maximumStoragePeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_STORAGE_PERIOD: fieldBuilder.buildEdmTypeField('MaximumStoragePeriod', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link prodMaximumStoragePeriodUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_MAXIMUM_STORAGE_PERIOD_UNIT: fieldBuilder.buildEdmTypeField('ProdMaximumStoragePeriodUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link maximumStoragePeriodIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_STORAGE_PERIOD_ISO_UNIT: fieldBuilder.buildEdmTypeField('MaximumStoragePeriodISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link cycleCountingIndicatorIsFixed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CYCLE_COUNTING_INDICATOR_IS_FIXED: fieldBuilder.buildEdmTypeField('CycleCountingIndicatorIsFixed', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantStorage_1.ProductPlantStorage)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantStorageApi = ProductPlantStorageApi;
//# sourceMappingURL=ProductPlantStorageApi.js.map