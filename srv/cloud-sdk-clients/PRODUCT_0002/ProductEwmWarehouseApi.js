"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEwmWarehouseApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductEwmWarehouse_1 = require("./ProductEwmWarehouse");
const ProductEwmWarehouseRequestBuilder_1 = require("./ProductEwmWarehouseRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductEwmWarehouseApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductEwmWarehouse_1.ProductEwmWarehouse;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductEwmWarehouseApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_EWM_STORAGE_TYPE: new odata_v4_1.OneToManyLink('_ProductEWMStorageType', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductEwmWarehouseRequestBuilder_1.ProductEwmWarehouseRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductEwmWarehouse_1.ProductEwmWarehouse, this.deSerializers);
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
                 * Static representation of the {@link ewmWarehouse} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_WAREHOUSE: fieldBuilder.buildEdmTypeField('EWMWarehouse', 'Edm.String', false),
                /**
                 * Static representation of the {@link entitledToDisposeParty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITLED_TO_DISPOSE_PARTY: fieldBuilder.buildEdmTypeField('EntitledToDisposeParty', 'Edm.String', false),
                /**
                 * Static representation of the {@link productInternalUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_INTERNAL_UUID: fieldBuilder.buildEdmTypeField('ProductInternalUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link supplyChainUnitUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLY_CHAIN_UNIT_UUID: fieldBuilder.buildEdmTypeField('SupplyChainUnitUUID', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link ewmPartyEntitledToDisposeUuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: fieldBuilder.buildEdmTypeField('EWMPartyEntitledToDisposeUUID', 'Edm.Guid', true),
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
                 * Static representation of the {@link ewmProductProcessBlockProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PRODUCT_PROCESS_BLOCK_PROFILE: fieldBuilder.buildEdmTypeField('EWMProductProcessBlockProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmProcessTypeControlCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PROCESS_TYPE_CONTROL_CODE: fieldBuilder.buildEdmTypeField('EWMProcessTypeControlCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmStggAreaDeterminationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_STGG_AREA_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField('EWMStggAreaDeterminationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link requiredMinShelfLife} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUIRED_MIN_SHELF_LIFE: fieldBuilder.buildEdmTypeField('RequiredMinShelfLife', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link ewmPtwyControlStrategy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PTWY_CONTROL_STRATEGY: fieldBuilder.buildEdmTypeField('EWMPtwyControlStrategy', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmStorageSectionMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_STORAGE_SECTION_METHOD: fieldBuilder.buildEdmTypeField('EWMStorageSectionMethod', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmStorageBinType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_STORAGE_BIN_TYPE: fieldBuilder.buildEdmTypeField('EWMStorageBinType', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmBulkStorageMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_BULK_STORAGE_METHOD: fieldBuilder.buildEdmTypeField('EWMBulkStorageMethod', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmStockRemovalControlStrategy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_STOCK_REMOVAL_CONTROL_STRATEGY: fieldBuilder.buildEdmTypeField('EWMStockRemovalControlStrategy', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmStockDeterminationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_STOCK_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField('EWMStockDeterminationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmPhysInventoryCountingCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PHYS_INVENTORY_COUNTING_CYCLE: fieldBuilder.buildEdmTypeField('EWMPhysInventoryCountingCycle', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmPreferredUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PREFERRED_UNIT: fieldBuilder.buildEdmTypeField('EWMPreferredUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmPreferredUnitIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_PREFERRED_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField('EWMPreferredUnitISOCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link ewmQualityInspectionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EWM_QUALITY_INSPECTION_GROUP: fieldBuilder.buildEdmTypeField('EWMQualityInspectionGroup', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductEwmWarehouse_1.ProductEwmWarehouse)
            };
        }
        return this._schema;
    }
}
exports.ProductEwmWarehouseApi = ProductEwmWarehouseApi;
//# sourceMappingURL=ProductEwmWarehouseApi.js.map