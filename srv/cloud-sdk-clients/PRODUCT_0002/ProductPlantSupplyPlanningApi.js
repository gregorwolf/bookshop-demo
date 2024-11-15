"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantSupplyPlanningApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantSupplyPlanning_1 = require("./ProductPlantSupplyPlanning");
const ProductPlantSupplyPlanningRequestBuilder_1 = require("./ProductPlantSupplyPlanningRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantSupplyPlanningApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantSupplyPlanning_1.ProductPlantSupplyPlanning;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantSupplyPlanningApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantSupplyPlanningRequestBuilder_1.ProductPlantSupplyPlanningRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantSupplyPlanning_1.ProductPlantSupplyPlanning, this.deSerializers);
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
                 * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('FixedLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('MaximumLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link minimumLotSizeQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField('MinimumLotSizeQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link lotSizeRoundingQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZE_ROUNDING_QUANTITY: fieldBuilder.buildEdmTypeField('LotSizeRoundingQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link lotSizingProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZING_PROCEDURE: fieldBuilder.buildEdmTypeField('LotSizingProcedure', 'Edm.String', false),
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
                 * Static representation of the {@link safetyStockQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField('SafetyStockQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link minimumSafetyStockQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField('MinimumSafetyStockQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link planningTimeFence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_TIME_FENCE: fieldBuilder.buildEdmTypeField('PlanningTimeFence', 'Edm.String', false),
                /**
                 * Static representation of the {@link consumptionValueCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_VALUE_CATEGORY: fieldBuilder.buildEdmTypeField('ConsumptionValueCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link maximumStockQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField('MaximumStockQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link reorderThresholdQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REORDER_THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField('ReorderThresholdQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link plannedDeliveryDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNED_DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('PlannedDeliveryDurationInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link safetySupplyDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAFETY_SUPPLY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('SafetySupplyDurationInDays', 'Edm.String', false),
                /**
                 * Static representation of the {@link planningStrategyGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLANNING_STRATEGY_GROUP: fieldBuilder.buildEdmTypeField('PlanningStrategyGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link totalReplenishmentLeadTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL_REPLENISHMENT_LEAD_TIME: fieldBuilder.buildEdmTypeField('TotalReplenishmentLeadTime', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link procurementType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField('ProcurementType', 'Edm.String', false),
                /**
                 * Static representation of the {@link procurementSubType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCUREMENT_SUB_TYPE: fieldBuilder.buildEdmTypeField('ProcurementSubType', 'Edm.String', false),
                /**
                 * Static representation of the {@link assemblyScrapPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField('AssemblyScrapPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link availabilityCheckType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AVAILABILITY_CHECK_TYPE: fieldBuilder.buildEdmTypeField('AvailabilityCheckType', 'Edm.String', false),
                /**
                 * Static representation of the {@link goodsReceiptDuration} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_RECEIPT_DURATION: fieldBuilder.buildEdmTypeField('GoodsReceiptDuration', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link planAndOrderDayDetermination} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PLAN_AND_ORDER_DAY_DETERMINATION: fieldBuilder.buildEdmTypeField('PlanAndOrderDayDetermination', 'Edm.String', false),
                /**
                 * Static representation of the {@link roundingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link dfltStorageLocationExtProcmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DFLT_STORAGE_LOCATION_EXT_PROCMT: fieldBuilder.buildEdmTypeField('DfltStorageLocationExtProcmt', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_GROUP: fieldBuilder.buildEdmTypeField('MRPGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link lotSizeIndependentCosts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOT_SIZE_INDEPENDENT_COSTS: fieldBuilder.buildEdmTypeField('LotSizeIndependentCosts', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link rqmtQtyRcptTaktTmeInWrkgDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: fieldBuilder.buildEdmTypeField('RqmtQtyRcptTaktTmeInWrkgDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link mrpPlanningCalendar} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_PLANNING_CALENDAR: fieldBuilder.buildEdmTypeField('MRPPlanningCalendar', 'Edm.String', false),
                /**
                 * Static representation of the {@link rangeOfCvrgPrflCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RANGE_OF_CVRG_PRFL_CODE: fieldBuilder.buildEdmTypeField('RangeOfCvrgPrflCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link productSafetyTimeMrpRelevance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SAFETY_TIME_MRP_RELEVANCE: fieldBuilder.buildEdmTypeField('ProductSafetyTimeMRPRelevance', 'Edm.String', false),
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
                 * Static representation of the {@link productServiceLevelInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SERVICE_LEVEL_IN_PERCENT: fieldBuilder.buildEdmTypeField('ProductServiceLevelInPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link prodInhProdnDurationInWorkDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_INH_PRODN_DURATION_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField('ProdInhProdnDurationInWorkDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link mrpAvailabilityType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_AVAILABILITY_TYPE: fieldBuilder.buildEdmTypeField('MRPAvailabilityType', 'Edm.String', false),
                /**
                 * Static representation of the {@link crossProjectProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CROSS_PROJECT_PRODUCT: fieldBuilder.buildEdmTypeField('CrossProjectProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link storageCostsPercentageCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORAGE_COSTS_PERCENTAGE_CODE: fieldBuilder.buildEdmTypeField('StorageCostsPercentageCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link followUpProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOLLOW_UP_PRODUCT: fieldBuilder.buildEdmTypeField('FollowUpProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link repetitiveManufacturingIsAllwd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REPETITIVE_MANUFACTURING_IS_ALLWD: fieldBuilder.buildEdmTypeField('RepetitiveManufacturingIsAllwd', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link dependentRequirementsType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPENDENT_REQUIREMENTS_TYPE: fieldBuilder.buildEdmTypeField('DependentRequirementsType', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsBulkComponent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_BULK_COMPONENT: fieldBuilder.buildEdmTypeField('ProductIsBulkComponent', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link repetitiveManufacturingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REPETITIVE_MANUFACTURING_PROFILE: fieldBuilder.buildEdmTypeField('RepetitiveManufacturingProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link backwardCnsmpnPeriodInWorkDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BACKWARD_CNSMPN_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField('BackwardCnsmpnPeriodInWorkDays', 'Edm.String', false),
                /**
                 * Static representation of the {@link fwdConsumptionPeriodInWorkDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FWD_CONSUMPTION_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField('FwdConsumptionPeriodInWorkDays', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodRqmtsConsumptionMode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_RQMTS_CONSUMPTION_MODE: fieldBuilder.buildEdmTypeField('ProdRqmtsConsumptionMode', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodFcstRequirementsSplitCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_FCST_REQUIREMENTS_SPLIT_CODE: fieldBuilder.buildEdmTypeField('ProdFcstRequirementsSplitCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link effectiveOutDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_OUT_DATE: fieldBuilder.buildEdmTypeField('EffectiveOutDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link schedulingFloatProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCHEDULING_FLOAT_PROFILE: fieldBuilder.buildEdmTypeField('SchedulingFloatProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link componentScrapInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField('ComponentScrapInPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productDiscontinuationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DISCONTINUATION_CODE: fieldBuilder.buildEdmTypeField('ProductDiscontinuationCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link productRequirementsGrouping} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_REQUIREMENTS_GROUPING: fieldBuilder.buildEdmTypeField('ProductRequirementsGrouping', 'Edm.String', false),
                /**
                 * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField('ProductionInvtryManagedLoc', 'Edm.String', false),
                /**
                 * Static representation of the {@link productComponentBackflushCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_COMPONENT_BACKFLUSH_CODE: fieldBuilder.buildEdmTypeField('ProductComponentBackflushCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link proposedProductSupplyArea} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROPOSED_PRODUCT_SUPPLY_AREA: fieldBuilder.buildEdmTypeField('ProposedProductSupplyArea', 'Edm.String', false),
                /**
                 * Static representation of the {@link mrpSafetyStockMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MRP_SAFETY_STOCK_METHOD: fieldBuilder.buildEdmTypeField('MRPSafetyStockMethod', 'Edm.String', false),
                /**
                 * Static representation of the {@link jitProdnConfProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                JIT_PRODN_CONF_PROFILE: fieldBuilder.buildEdmTypeField('JITProdnConfProfile', 'Edm.String', false),
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
                 * Static representation of the {@link prodnPlngAndControlCalendar} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODN_PLNG_AND_CONTROL_CALENDAR: fieldBuilder.buildEdmTypeField('ProdnPlngAndControlCalendar', 'Edm.String', false),
                /**
                 * Static representation of the {@link baseIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_ISO_UNIT: fieldBuilder.buildEdmTypeField('BaseISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link consignmentControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSIGNMENT_CONTROL: fieldBuilder.buildEdmTypeField('ConsignmentControl', 'Edm.String', false),
                /**
                 * Static representation of the {@link atpCheckHorizonInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATP_CHECK_HORIZON_IN_DAYS: fieldBuilder.buildEdmTypeField('ATPCheckHorizonInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link atpCheckHorizonFactoryCalendar} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATP_CHECK_HORIZON_FACTORY_CALENDAR: fieldBuilder.buildEdmTypeField('ATPCheckHorizonFactoryCalendar', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantSupplyPlanning_1.ProductPlantSupplyPlanning)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantSupplyPlanningApi = ProductPlantSupplyPlanningApi;
//# sourceMappingURL=ProductPlantSupplyPlanningApi.js.map