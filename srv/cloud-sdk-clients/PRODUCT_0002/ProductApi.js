"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Product_1 = require("./Product");
const ProductRequestBuilder_1 = require("./ProductRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = Product_1.Product;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_CHANGE_MASTER: new odata_v4_1.OneToManyLink('_ProductChangeMaster', this, linkedApis[0]),
            PRODUCT_DESCRIPTION: new odata_v4_1.OneToManyLink('_ProductDescription', this, linkedApis[1]),
            PRODUCT_EWM_WAREHOUSE: new odata_v4_1.OneToManyLink('_ProductEWMWarehouse', this, linkedApis[2]),
            PRODUCT_PLANT: new odata_v4_1.OneToManyLink('_ProductPlant', this, linkedApis[3]),
            PRODUCT_PROCUREMENT: new odata_v4_1.OneToOneLink('_ProductProcurement', this, linkedApis[4]),
            PRODUCT_QUALITY_MANAGEMENT: new odata_v4_1.OneToOneLink('_ProductQualityManagement', this, linkedApis[5]),
            PRODUCT_SALES: new odata_v4_1.OneToOneLink('_ProductSales', this, linkedApis[6]),
            PRODUCT_SALES_DELIVERY: new odata_v4_1.OneToManyLink('_ProductSalesDelivery', this, linkedApis[7]),
            PRODUCT_STORAGE: new odata_v4_1.OneToOneLink('_ProductStorage', this, linkedApis[8]),
            PRODUCT_UNIT_OF_MEASURE: new odata_v4_1.OneToManyLink('_ProductUnitOfMeasure', this, linkedApis[9]),
            PRODUCT_VALUATION: new odata_v4_1.OneToManyLink('_ProductValuation', this, linkedApis[10])
        };
        return this;
    }
    requestBuilder() {
        return new ProductRequestBuilder_1.ProductRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(Product_1.Product, this.deSerializers);
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
                 * Static representation of the {@link productType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_TYPE: fieldBuilder.buildEdmTypeField('ProductType', 'Edm.String', false),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.TimeOfDay', false),
                /**
                 * Static representation of the {@link creationDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField('CreationDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', false),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link crossPlantStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CROSS_PLANT_STATUS: fieldBuilder.buildEdmTypeField('CrossPlantStatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link crossPlantStatusValidityDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CROSS_PLANT_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField('CrossPlantStatusValidityDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link productOldId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_OLD_ID: fieldBuilder.buildEdmTypeField('ProductOldID', 'Edm.String', false),
                /**
                 * Static representation of the {@link grossWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GROSS_WEIGHT: fieldBuilder.buildEdmTypeField('GrossWeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link weightUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WEIGHT_UNIT: fieldBuilder.buildEdmTypeField('WeightUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link weightIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField('WeightISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link productGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('ProductGroup', 'Edm.String', false),
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
                 * Static representation of the {@link itemCategoryGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_CATEGORY_GROUP: fieldBuilder.buildEdmTypeField('ItemCategoryGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link netWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NET_WEIGHT: fieldBuilder.buildEdmTypeField('NetWeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false),
                /**
                 * Static representation of the {@link volumeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VOLUME_UNIT: fieldBuilder.buildEdmTypeField('VolumeUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link volumeIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField('VolumeISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link productVolume} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField('ProductVolume', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link anpCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ANP_CODE: fieldBuilder.buildEdmTypeField('ANPCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link sizeOrDimensionText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SIZE_OR_DIMENSION_TEXT: fieldBuilder.buildEdmTypeField('SizeOrDimensionText', 'Edm.String', false),
                /**
                 * Static representation of the {@link industryStandardName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDUSTRY_STANDARD_NAME: fieldBuilder.buildEdmTypeField('IndustryStandardName', 'Edm.String', false),
                /**
                 * Static representation of the {@link productStandardId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_STANDARD_ID: fieldBuilder.buildEdmTypeField('ProductStandardID', 'Edm.String', false),
                /**
                 * Static representation of the {@link internationalArticleNumberCat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERNATIONAL_ARTICLE_NUMBER_CAT: fieldBuilder.buildEdmTypeField('InternationalArticleNumberCat', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsConfigurable} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_CONFIGURABLE: fieldBuilder.buildEdmTypeField('ProductIsConfigurable', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isBatchManagementRequired} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_BATCH_MANAGEMENT_REQUIRED: fieldBuilder.buildEdmTypeField('IsBatchManagementRequired', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link externalProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('ExternalProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link crossPlantConfigurableProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CROSS_PLANT_CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField('CrossPlantConfigurableProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link serialNoExplicitnessLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERIAL_NO_EXPLICITNESS_LEVEL: fieldBuilder.buildEdmTypeField('SerialNoExplicitnessLevel', 'Edm.String', false),
                /**
                 * Static representation of the {@link isApprovedBatchRecordReqd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_APPROVED_BATCH_RECORD_REQD: fieldBuilder.buildEdmTypeField('IsApprovedBatchRecordReqd', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link handlingIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HANDLING_INDICATOR: fieldBuilder.buildEdmTypeField('HandlingIndicator', 'Edm.String', false),
                /**
                 * Static representation of the {@link warehouseProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('WarehouseProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link warehouseStorageCondition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WAREHOUSE_STORAGE_CONDITION: fieldBuilder.buildEdmTypeField('WarehouseStorageCondition', 'Edm.String', false),
                /**
                 * Static representation of the {@link standardHandlingUnitType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STANDARD_HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField('StandardHandlingUnitType', 'Edm.String', false),
                /**
                 * Static representation of the {@link serialNumberProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERIAL_NUMBER_PROFILE: fieldBuilder.buildEdmTypeField('SerialNumberProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link isPilferable} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PILFERABLE: fieldBuilder.buildEdmTypeField('IsPilferable', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isRelevantForHzdsSubstances} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_RELEVANT_FOR_HZDS_SUBSTANCES: fieldBuilder.buildEdmTypeField('IsRelevantForHzdsSubstances', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link quarantinePeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField('QuarantinePeriod', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link timeUnitForQuarantinePeriod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_UNIT_FOR_QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField('TimeUnitForQuarantinePeriod', 'Edm.String', false),
                /**
                 * Static representation of the {@link quarantinePeriodIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUARANTINE_PERIOD_ISO_UNIT: fieldBuilder.buildEdmTypeField('QuarantinePeriodISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link qualityInspectionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUALITY_INSPECTION_GROUP: fieldBuilder.buildEdmTypeField('QualityInspectionGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link handlingUnitType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField('HandlingUnitType', 'Edm.String', false),
                /**
                 * Static representation of the {@link hasVariableTareWeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_VARIABLE_TARE_WEIGHT: fieldBuilder.buildEdmTypeField('HasVariableTareWeight', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link maximumPackagingLength} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_PACKAGING_LENGTH: fieldBuilder.buildEdmTypeField('MaximumPackagingLength', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumPackagingWidth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_PACKAGING_WIDTH: fieldBuilder.buildEdmTypeField('MaximumPackagingWidth', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumPackagingHeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_PACKAGING_HEIGHT: fieldBuilder.buildEdmTypeField('MaximumPackagingHeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link maximumCapacity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_CAPACITY: fieldBuilder.buildEdmTypeField('MaximumCapacity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link overcapacityTolerance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERCAPACITY_TOLERANCE: fieldBuilder.buildEdmTypeField('OvercapacityTolerance', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link unitForMaxPackagingDimensions} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_FOR_MAX_PACKAGING_DIMENSIONS: fieldBuilder.buildEdmTypeField('UnitForMaxPackagingDimensions', 'Edm.String', false),
                /**
                 * Static representation of the {@link maxPackggDimensionIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAX_PACKGG_DIMENSION_ISO_UNIT: fieldBuilder.buildEdmTypeField('MaxPackggDimensionISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link baseUnitSpecificProductLength} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT_SPECIFIC_PRODUCT_LENGTH: fieldBuilder.buildEdmTypeField('BaseUnitSpecificProductLength', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link baseUnitSpecificProductWidth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT_SPECIFIC_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField('BaseUnitSpecificProductWidth', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link baseUnitSpecificProductHeight} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_UNIT_SPECIFIC_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField('BaseUnitSpecificProductHeight', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productMeasurementUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MEASUREMENT_UNIT: fieldBuilder.buildEdmTypeField('ProductMeasurementUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link productMeasurementIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MEASUREMENT_ISO_UNIT: fieldBuilder.buildEdmTypeField('ProductMeasurementISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link articleCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTICLE_CATEGORY: fieldBuilder.buildEdmTypeField('ArticleCategory', 'Edm.String', false),
                /**
                 * Static representation of the {@link industrySector} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDUSTRY_SECTOR: fieldBuilder.buildEdmTypeField('IndustrySector', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastChangeDateTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField('LastChangeDateTime', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastChangeTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.TimeOfDay', false),
                /**
                 * Static representation of the {@link dangerousGoodsIndProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DANGEROUS_GOODS_IND_PROFILE: fieldBuilder.buildEdmTypeField('DangerousGoodsIndProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentChangeNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_CHANGE_NUMBER: fieldBuilder.buildEdmTypeField('ProductDocumentChangeNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentPageCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_PAGE_COUNT: fieldBuilder.buildEdmTypeField('ProductDocumentPageCount', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentPageNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_PAGE_NUMBER: fieldBuilder.buildEdmTypeField('ProductDocumentPageNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link documentIsCreatedByCad} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DOCUMENT_IS_CREATED_BY_CAD: fieldBuilder.buildEdmTypeField('DocumentIsCreatedByCAD', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productionOrInspectionMemoTxt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_OR_INSPECTION_MEMO_TXT: fieldBuilder.buildEdmTypeField('ProductionOrInspectionMemoTxt', 'Edm.String', false),
                /**
                 * Static representation of the {@link productionMemoPageFormat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_MEMO_PAGE_FORMAT: fieldBuilder.buildEdmTypeField('ProductionMemoPageFormat', 'Edm.String', false),
                /**
                 * Static representation of the {@link productIsHighlyViscous} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_IS_HIGHLY_VISCOUS: fieldBuilder.buildEdmTypeField('ProductIsHighlyViscous', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link transportIsInBulk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORT_IS_IN_BULK: fieldBuilder.buildEdmTypeField('TransportIsInBulk', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link prodEffctyParamValsAreAssigned} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_EFFCTY_PARAM_VALS_ARE_ASSIGNED: fieldBuilder.buildEdmTypeField('ProdEffctyParamValsAreAssigned', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link prodIsEnvironmentallyRelevant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_IS_ENVIRONMENTALLY_RELEVANT: fieldBuilder.buildEdmTypeField('ProdIsEnvironmentallyRelevant', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link laboratoryOrDesignOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LABORATORY_OR_DESIGN_OFFICE: fieldBuilder.buildEdmTypeField('LaboratoryOrDesignOffice', 'Edm.String', false),
                /**
                 * Static representation of the {@link packagingProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKAGING_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('PackagingProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link packingReferenceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKING_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField('PackingReferenceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link basicProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASIC_PRODUCT: fieldBuilder.buildEdmTypeField('BasicProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField('ProductDocumentNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_VERSION: fieldBuilder.buildEdmTypeField('ProductDocumentVersion', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField('ProductDocumentType', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDocumentPageFormat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DOCUMENT_PAGE_FORMAT: fieldBuilder.buildEdmTypeField('ProductDocumentPageFormat', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodChmlCmplncRelevanceCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_CHML_CMPLNC_RELEVANCE_CODE: fieldBuilder.buildEdmTypeField('ProdChmlCmplncRelevanceCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link discountInKindEligibility} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISCOUNT_IN_KIND_ELIGIBILITY: fieldBuilder.buildEdmTypeField('DiscountInKindEligibility', 'Edm.String', false),
                /**
                 * Static representation of the {@link productManufacturerNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField('ProductManufacturerNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link manufacturerNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField('ManufacturerNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link manufacturerPartProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MANUFACTURER_PART_PROFILE: fieldBuilder.buildEdmTypeField('ManufacturerPartProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link ownInventoryManagedProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OWN_INVENTORY_MANAGED_PRODUCT: fieldBuilder.buildEdmTypeField('OwnInventoryManagedProduct', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', Product_1.Product)
            };
        }
        return this._schema;
    }
}
exports.ProductApi = ProductApi;
//# sourceMappingURL=ProductApi.js.map