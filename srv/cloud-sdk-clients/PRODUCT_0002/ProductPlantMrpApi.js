"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantMrpApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantMrp_1 = require("./ProductPlantMrp");
const ProductPlantMrpRequestBuilder_1 = require("./ProductPlantMrpRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantMrpApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantMrp_1.ProductPlantMrp;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantMrpApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantMrpRequestBuilder_1.ProductPlantMrpRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantMrp_1.ProductPlantMrp, this.deSerializers);
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
                 * Static representation of the {@link mrpArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_AREA: fieldBuilder.buildEdmTypeField('MRPArea', 'Edm.String', false),
                /**
                 * Static representation of the {@link plant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_TYPE: fieldBuilder.buildEdmTypeField('MRPType', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpResponsible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_RESPONSIBLE: fieldBuilder.buildEdmTypeField('MRPResponsible', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_GROUP: fieldBuilder.buildEdmTypeField('MRPGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link reorderThresholdQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REORDER_THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField('ReorderThresholdQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link planAndOrderDayDetermination} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLAN_AND_ORDER_DAY_DETERMINATION: fieldBuilder.buildEdmTypeField('PlanAndOrderDayDetermination', 'Edm.String', false),
                /**
                 * Static representation of the {@link planningTimeFence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_TIME_FENCE: fieldBuilder.buildEdmTypeField('PlanningTimeFence', 'Edm.String', false),
                /**
                 * Static representation of the {@link lotSizingProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZING_PROCEDURE: fieldBuilder.buildEdmTypeField('LotSizingProcedure', 'Edm.String', false),
                /**
                 * Static representation of the {@link roundingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link lotSizeRoundingQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZE_ROUNDING_QUANTITY: fieldBuilder.buildEdmTypeField('LotSizeRoundingQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link minimumLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('MinimumLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('MaximumLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumStockQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField('MaximumStockQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link assemblyScrapPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField('AssemblyScrapPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link procurementSubType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCUREMENT_SUB_TYPE: fieldBuilder.buildEdmTypeField('ProcurementSubType', 'Edm.String', false),
                /**
                 * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField('ProductionInvtryManagedLoc', 'Edm.String', false),
                /**
                 * Static representation of the {@link dfltStorageLocationExtProcmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DFLT_STORAGE_LOCATION_EXT_PROCMT: fieldBuilder.buildEdmTypeField('DfltStorageLocationExtProcmt', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpPlanningCalendar} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_PLANNING_CALENDAR: fieldBuilder.buildEdmTypeField('MRPPlanningCalendar', 'Edm.String', false),
                /**
                 * Static representation of the {@link safetyStockQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField('SafetyStockQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link rangeOfCvrgPrflCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RANGE_OF_CVRG_PRFL_CODE: fieldBuilder.buildEdmTypeField('RangeOfCvrgPrflCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link safetySupplyDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAFETY_SUPPLY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('SafetySupplyDurationInDays', 'Edm.String', false),
                /**
                 * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('FixedLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link lotSizeIndependentCosts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZE_INDEPENDENT_COSTS: fieldBuilder.buildEdmTypeField('LotSizeIndependentCosts', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link storageCostsPercentageCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_COSTS_PERCENTAGE_CODE: fieldBuilder.buildEdmTypeField('StorageCostsPercentageCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link productServiceLevelInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SERVICE_LEVEL_IN_PERCENT: fieldBuilder.buildEdmTypeField('ProductServiceLevelInPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link safetyTimePeriodProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAFETY_TIME_PERIOD_PROFILE: fieldBuilder.buildEdmTypeField('SafetyTimePeriodProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link dependentRqmtMrpRelevance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPENDENT_RQMT_MRP_RELEVANCE: fieldBuilder.buildEdmTypeField('DependentRqmtMRPRelevance', 'Edm.String', false),
                /**
                 * Static representation of the {@link productSafetyTimeMrpRelevance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SAFETY_TIME_MRP_RELEVANCE: fieldBuilder.buildEdmTypeField('ProductSafetyTimeMRPRelevance', 'Edm.String', false),
                /**
                 * Static representation of the {@link plannedDeliveryDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('PlannedDeliveryDurationInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link isPlannedDeliveryTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PLANNED_DELIVERY_TIME: fieldBuilder.buildEdmTypeField('IsPlannedDeliveryTime', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link rqmtQtyRcptTaktTmeInWrkgDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: fieldBuilder.buildEdmTypeField('RqmtQtyRcptTaktTmeInWrkgDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link mrpSafetyStockMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_SAFETY_STOCK_METHOD: fieldBuilder.buildEdmTypeField('MRPSafetyStockMethod', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantMrp_1.ProductPlantMrp)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantMrpApi = ProductPlantMrpApi;
//# sourceMappingURL=ProductPlantMrpApi.js.map