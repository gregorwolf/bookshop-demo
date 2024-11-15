"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantInspTypeSettingApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantInspTypeSetting_1 = require("./ProductPlantInspTypeSetting");
const ProductPlantInspTypeSettingRequestBuilder_1 = require("./ProductPlantInspTypeSettingRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantInspTypeSettingApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantInspTypeSetting_1.ProductPlantInspTypeSetting;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantInspTypeSettingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantInspTypeSettingRequestBuilder_1.ProductPlantInspTypeSettingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantInspTypeSetting_1.ProductPlantInspTypeSetting, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link inspectionLotType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSPECTION_LOT_TYPE: fieldBuilder.buildEdmTypeField('InspectionLotType', 'Edm.String', false),
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
                 * Static representation of the {@link inspLotIsTaskListRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_IS_TASK_LIST_REQUIRED: fieldBuilder.buildEdmTypeField('InspLotIsTaskListRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasMaterialSpec} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_MATERIAL_SPEC: fieldBuilder.buildEdmTypeField('InspLotHasMaterialSpec', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasConfignSpecification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_CONFIGN_SPECIFICATION: fieldBuilder.buildEdmTypeField('InspLotHasConfignSpecification', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasBatchCharc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_BATCH_CHARC: fieldBuilder.buildEdmTypeField('InspLotHasBatchCharc', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasAutomSpecAssgmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_AUTOM_SPEC_ASSGMT: fieldBuilder.buildEdmTypeField('InspLotHasAutomSpecAssgmt', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasCharc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_CHARC: fieldBuilder.buildEdmTypeField('InspLotHasCharc', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link hasPostToInspectionStock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_POST_TO_INSPECTION_STOCK: fieldBuilder.buildEdmTypeField('HasPostToInspectionStock', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotIsAutomUsgeDcsnPossible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_IS_AUTOM_USGE_DCSN_POSSIBLE: fieldBuilder.buildEdmTypeField('InspLotIsAutomUsgeDcsnPossible', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link samplingProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SAMPLING_PROCEDURE: fieldBuilder.buildEdmTypeField('SamplingProcedure', 'Edm.String', false),
                /**
                 * Static representation of the {@link inspLotDynamicRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_DYNAMIC_RULE: fieldBuilder.buildEdmTypeField('InspLotDynamicRule', 'Edm.String', false),
                /**
                 * Static representation of the {@link inspLotSampleQuantityInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_SAMPLE_QUANTITY_IN_PERCENT: fieldBuilder.buildEdmTypeField('InspLotSampleQuantityInPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link inspectionLotIsFullInspection} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSPECTION_LOT_IS_FULL_INSPECTION: fieldBuilder.buildEdmTypeField('InspectionLotIsFullInspection', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotSkipIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_SKIP_IS_ALLOWED: fieldBuilder.buildEdmTypeField('InspLotSkipIsAllowed', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasManualSampleSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_MANUAL_SAMPLE_SIZE: fieldBuilder.buildEdmTypeField('InspLotHasManualSampleSize', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotIsSmplCalcMnlTriggered} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_IS_SMPL_CALC_MNL_TRIGGERED: fieldBuilder.buildEdmTypeField('InspLotIsSmplCalcMnlTriggered', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotIsSerialNmbrPossible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_IS_SERIAL_NMBR_POSSIBLE: fieldBuilder.buildEdmTypeField('InspLotIsSerialNmbrPossible', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotDurationInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('InspLotDurationInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link inspLotSummaryControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_SUMMARY_CONTROL: fieldBuilder.buildEdmTypeField('InspLotSummaryControl', 'Edm.String', false),
                /**
                 * Static representation of the {@link inspQualityScoreProcedure} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_QUALITY_SCORE_PROCEDURE: fieldBuilder.buildEdmTypeField('InspQualityScoreProcedure', 'Edm.String', false),
                /**
                 * Static representation of the {@link inspLotAcceptedScrapRatioInPct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_ACCEPTED_SCRAP_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField('InspLotAcceptedScrapRatioInPct', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link inspectionLotHasAppraisalCosts} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSPECTION_LOT_HAS_APPRAISAL_COSTS: fieldBuilder.buildEdmTypeField('InspectionLotHasAppraisalCosts', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link qualityCostCollector} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUALITY_COST_COLLECTOR: fieldBuilder.buildEdmTypeField('QualityCostCollector', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodInspTypeSettingIsActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_INSP_TYPE_SETTING_IS_ACTIVE: fieldBuilder.buildEdmTypeField('ProdInspTypeSettingIsActive', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspTypeIsPrfrd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_TYPE_IS_PRFRD: fieldBuilder.buildEdmTypeField('InspTypeIsPrfrd', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasHandlingUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_HANDLING_UNIT: fieldBuilder.buildEdmTypeField('InspLotHasHandlingUnit', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotHasMultipleSpec} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_HAS_MULTIPLE_SPEC: fieldBuilder.buildEdmTypeField('InspLotHasMultipleSpec', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link inspLotOfEwmSummaryControl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INSP_LOT_OF_EWM_SUMMARY_CONTROL: fieldBuilder.buildEdmTypeField('InspLotOfEWMSummaryControl', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantInspTypeSetting_1.ProductPlantInspTypeSetting)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantInspTypeSettingApi = ProductPlantInspTypeSettingApi;
//# sourceMappingURL=ProductPlantInspTypeSettingApi.js.map