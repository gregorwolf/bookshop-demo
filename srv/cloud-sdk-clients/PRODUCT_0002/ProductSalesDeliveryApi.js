"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSalesDeliveryApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductSalesDelivery_1 = require("./ProductSalesDelivery");
const ProductSalesDeliveryRequestBuilder_1 = require("./ProductSalesDeliveryRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductSalesDeliveryApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductSalesDelivery_1.ProductSalesDelivery;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductSalesDeliveryApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROD_SALES_DELIVERY_SALES_TAX: new odata_v4_1.OneToManyLink('_ProdSalesDeliverySalesTax', this, linkedApis[0]),
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductSalesDeliveryRequestBuilder_1.ProductSalesDeliveryRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductSalesDelivery_1.ProductSalesDelivery, this.deSerializers);
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
                 * Static representation of the {@link productSalesOrg} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SALES_ORG: fieldBuilder.buildEdmTypeField('ProductSalesOrg', 'Edm.String', false),
                /**
                 * Static representation of the {@link productDistributionChnl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_DISTRIBUTION_CHNL: fieldBuilder.buildEdmTypeField('ProductDistributionChnl', 'Edm.String', false),
                /**
                 * Static representation of the {@link minimumOrderQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMUM_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField('MinimumOrderQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link supplyingPlant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField('SupplyingPlant', 'Edm.String', false),
                /**
                 * Static representation of the {@link priceSpecificationProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_SPECIFICATION_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('PriceSpecificationProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link accountDetnProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNT_DETN_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('AccountDetnProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryNoteProcMinDelivQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_NOTE_PROC_MIN_DELIV_QTY: fieldBuilder.buildEdmTypeField('DeliveryNoteProcMinDelivQty', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link itemCategoryGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_CATEGORY_GROUP: fieldBuilder.buildEdmTypeField('ItemCategoryGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryQuantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('DeliveryQuantityUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryQuantityIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('DeliveryQuantityISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link deliveryQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_QUANTITY: fieldBuilder.buildEdmTypeField('DeliveryQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productSalesStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SALES_STATUS: fieldBuilder.buildEdmTypeField('ProductSalesStatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link productSalesStatusValidityDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SALES_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField('ProductSalesStatusValidityDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link salesMeasureUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_MEASURE_UNIT: fieldBuilder.buildEdmTypeField('SalesMeasureUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesMeasureIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_MEASURE_ISO_UNIT: fieldBuilder.buildEdmTypeField('SalesMeasureISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link firstSalesSpecProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('FirstSalesSpecProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link secondSalesSpecProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SECOND_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('SecondSalesSpecProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link thirdSalesSpecProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                THIRD_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('ThirdSalesSpecProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link fourthSalesSpecProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOURTH_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('FourthSalesSpecProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link fifthSalesSpecProductGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIFTH_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField('FifthSalesSpecProductGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link logisticsStatisticsGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOGISTICS_STATISTICS_GROUP: fieldBuilder.buildEdmTypeField('LogisticsStatisticsGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link volumeRebateGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VOLUME_REBATE_GROUP: fieldBuilder.buildEdmTypeField('VolumeRebateGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link cashDiscountIsDeductible} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CASH_DISCOUNT_IS_DEDUCTIBLE: fieldBuilder.buildEdmTypeField('CashDiscountIsDeductible', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link roundingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField('RoundingProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link variableSalesUnitIsNotAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARIABLE_SALES_UNIT_IS_NOT_ALLOWED: fieldBuilder.buildEdmTypeField('VariableSalesUnitIsNotAllowed', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productCommissionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_COMMISSION_GROUP: fieldBuilder.buildEdmTypeField('ProductCommissionGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link pricingReferenceProduct} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICING_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField('PricingReferenceProduct', 'Edm.String', false),
                /**
                 * Static representation of the {@link productHasAttributeId01} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_01: fieldBuilder.buildEdmTypeField('ProductHasAttributeID01', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId02} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_02: fieldBuilder.buildEdmTypeField('ProductHasAttributeID02', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId03} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_03: fieldBuilder.buildEdmTypeField('ProductHasAttributeID03', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId04} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_04: fieldBuilder.buildEdmTypeField('ProductHasAttributeID04', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId05} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_05: fieldBuilder.buildEdmTypeField('ProductHasAttributeID05', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId06} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_06: fieldBuilder.buildEdmTypeField('ProductHasAttributeID06', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId07} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_07: fieldBuilder.buildEdmTypeField('ProductHasAttributeID07', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId08} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_08: fieldBuilder.buildEdmTypeField('ProductHasAttributeID08', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId09} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_09: fieldBuilder.buildEdmTypeField('ProductHasAttributeID09', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productHasAttributeId10} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_HAS_ATTRIBUTE_ID_10: fieldBuilder.buildEdmTypeField('ProductHasAttributeID10', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link prodIsEntlmntRlvt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_IS_ENTLMNT_RLVT: fieldBuilder.buildEdmTypeField('ProdIsEntlmntRlvt', 'Edm.Boolean', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductSalesDelivery_1.ProductSalesDelivery)
            };
        }
        return this._schema;
    }
}
exports.ProductSalesDeliveryApi = ProductSalesDeliveryApi;
//# sourceMappingURL=ProductSalesDeliveryApi.js.map