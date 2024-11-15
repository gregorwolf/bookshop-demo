"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlant_1 = require("./ProductPlant");
const ProductPlantRequestBuilder_1 = require("./ProductPlantRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlant_1.ProductPlant;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROD_PLANT_INTERNATIONAL_TRADE: new odata_v4_1.OneToOneLink('_ProdPlantInternationalTrade', this, linkedApis[0]),
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[1]),
            PRODUCT_PLANT_COSTING: new odata_v4_1.OneToOneLink('_ProductPlantCosting', this, linkedApis[2]),
            PRODUCT_PLANT_FORECAST: new odata_v4_1.OneToOneLink('_ProductPlantForecast', this, linkedApis[3]),
            PRODUCT_PLANT_INSP_TYPE_SETTING: new odata_v4_1.OneToManyLink('_ProductPlantInspTypeSetting', this, linkedApis[4]),
            PRODUCT_PLANT_MRP: new odata_v4_1.OneToManyLink('_ProductPlantMRP', this, linkedApis[5]),
            PRODUCT_PLANT_PLANNING: new odata_v4_1.OneToOneLink('_ProductPlantPlanning', this, linkedApis[6]),
            PRODUCT_PLANT_PROCUREMENT: new odata_v4_1.OneToOneLink('_ProductPlantProcurement', this, linkedApis[7]),
            PRODUCT_PLANT_PURCHASE_TAX: new odata_v4_1.OneToManyLink('_ProductPlantPurchaseTax', this, linkedApis[8]),
            PRODUCT_PLANT_QUALITY_MANAGEMENT: new odata_v4_1.OneToOneLink('_ProductPlantQualityManagement', this, linkedApis[9]),
            PRODUCT_PLANT_SALES: new odata_v4_1.OneToOneLink('_ProductPlantSales', this, linkedApis[10]),
            PRODUCT_PLANT_STORAGE: new odata_v4_1.OneToOneLink('_ProductPlantStorage', this, linkedApis[11]),
            PRODUCT_PLANT_STORAGE_LOCATION: new odata_v4_1.OneToManyLink('_ProductPlantStorageLocation', this, linkedApis[12]),
            PRODUCT_PLANT_SUPPLY_PLANNING: new odata_v4_1.OneToOneLink('_ProductPlantSupplyPlanning', this, linkedApis[13]),
            PRODUCT_PLANT_WORK_SCHEDULING: new odata_v4_1.OneToOneLink('_ProductPlantWorkScheduling', this, linkedApis[14])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantRequestBuilder_1.ProductPlantRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlant_1.ProductPlant, this.deSerializers);
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
                 * Static representation of the {@link profileCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFILE_CODE: fieldBuilder.buildEdmTypeField('ProfileCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link profileValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFILE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ProfileValidityStartDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link fiscalYearVariant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FISCAL_YEAR_VARIANT: fieldBuilder.buildEdmTypeField('FiscalYearVariant', 'Edm.String', false),
                /**
                 * Static representation of the {@link periodType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERIOD_TYPE: fieldBuilder.buildEdmTypeField('PeriodType', 'Edm.String', false),
                /**
                 * Static representation of the {@link profitCenter} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROFIT_CENTER: fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', false),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link configurableProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField('ConfigurableProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link stockDeterminationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STOCK_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField('StockDeterminationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link isBatchManagementRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_BATCH_MANAGEMENT_REQUIRED: fieldBuilder.buildEdmTypeField('IsBatchManagementRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link serialNumberProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERIAL_NUMBER_PROFILE: fieldBuilder.buildEdmTypeField('SerialNumberProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link isNegativeStockAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_NEGATIVE_STOCK_ALLOWED: fieldBuilder.buildEdmTypeField('IsNegativeStockAllowed', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productCfopCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CFOP_CATEGORY: fieldBuilder.buildEdmTypeField('ProductCFOPCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsExciseTaxRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_EXCISE_TAX_RELEVANT: fieldBuilder.buildEdmTypeField('ProductIsExciseTaxRelevant', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link goodsIssueUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_ISSUE_UNIT: fieldBuilder.buildEdmTypeField('GoodsIssueUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link goodsIssueIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GOODS_ISSUE_ISO_UNIT: fieldBuilder.buildEdmTypeField('GoodsIssueISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link distrCntrDistributionProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTR_CNTR_DISTRIBUTION_PROFILE: fieldBuilder.buildEdmTypeField('DistrCntrDistributionProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsCriticalPrt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_CRITICAL_PRT: fieldBuilder.buildEdmTypeField('ProductIsCriticalPrt', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productLogisticsHandlingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_LOGISTICS_HANDLING_GROUP: fieldBuilder.buildEdmTypeField('ProductLogisticsHandlingGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link productFreightGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_FREIGHT_GROUP: fieldBuilder.buildEdmTypeField('ProductFreightGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link originalBatchReferenceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGINAL_BATCH_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField('OriginalBatchReferenceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link origlBatchManagementIsRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGL_BATCH_MANAGEMENT_IS_REQUIRED: fieldBuilder.buildEdmTypeField('OriglBatchManagementIsRequired', 'Edm.String', false),
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
                 * Static representation of the {@link productMinControlTemperature} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MIN_CONTROL_TEMPERATURE: fieldBuilder.buildEdmTypeField('ProductMinControlTemperature', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productMaxControlTemperature} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MAX_CONTROL_TEMPERATURE: fieldBuilder.buildEdmTypeField('ProductMaxControlTemperature', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productControlTemperatureUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_CONTROL_TEMPERATURE_UNIT: fieldBuilder.buildEdmTypeField('ProductControlTemperatureUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodCtrlTemperatureUnitIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_CTRL_TEMPERATURE_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField('ProdCtrlTemperatureUnitISOCode', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlant_1.ProductPlant)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantApi = ProductPlantApi;
//# sourceMappingURL=ProductPlantApi.js.map