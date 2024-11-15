"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSalesApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductSales_1 = require("./ProductSales");
const ProductSalesRequestBuilder_1 = require("./ProductSalesRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductSalesApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductSales_1.ProductSales;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductSalesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ProductSalesRequestBuilder_1.ProductSalesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductSales_1.ProductSales, this.deSerializers);
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
                 * Static representation of the {@link salesStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_STATUS: fieldBuilder.buildEdmTypeField('SalesStatus', 'Edm.String', false),
                /**
                 * Static representation of the {@link salesStatusValidityDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField('SalesStatusValidityDate', 'Edm.Date', true),
                /**
                 * Static representation of the {@link transportationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSPORTATION_GROUP: fieldBuilder.buildEdmTypeField('TransportationGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link packagingProductType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKAGING_PRODUCT_TYPE: fieldBuilder.buildEdmTypeField('PackagingProductType', 'Edm.String', false),
                /**
                 * Static representation of the {@link allowedPackagingWeightQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLOWED_PACKAGING_WEIGHT_QTY: fieldBuilder.buildEdmTypeField('AllowedPackagingWeightQty', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link allowedPackagingWeightQtyUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLOWED_PACKAGING_WEIGHT_QTY_UNIT: fieldBuilder.buildEdmTypeField('AllowedPackagingWeightQtyUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link allwdPackagingWeightQtyIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLWD_PACKAGING_WEIGHT_QTY_ISO_UNIT: fieldBuilder.buildEdmTypeField('AllwdPackagingWeightQtyISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link allowedPackagingVolumeQty} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLOWED_PACKAGING_VOLUME_QTY: fieldBuilder.buildEdmTypeField('AllowedPackagingVolumeQty', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link allowedPackagingVolumeQtyUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLOWED_PACKAGING_VOLUME_QTY_UNIT: fieldBuilder.buildEdmTypeField('AllowedPackagingVolumeQtyUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link allwdPackagingVolumeQtyIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALLWD_PACKAGING_VOLUME_QTY_ISO_UNIT: fieldBuilder.buildEdmTypeField('AllwdPackagingVolumeQtyISOUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link maximumLevelByVolumeInPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAXIMUM_LEVEL_BY_VOLUME_IN_PERCENT: fieldBuilder.buildEdmTypeField('MaximumLevelByVolumeInPercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link excessWeightToleranceValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXCESS_WEIGHT_TOLERANCE_VALUE: fieldBuilder.buildEdmTypeField('ExcessWeightToleranceValue', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link packggProductIsClosedPackaging} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKGG_PRODUCT_IS_CLOSED_PACKAGING: fieldBuilder.buildEdmTypeField('PackggProductIsClosedPackaging', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link productStackingFactor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_STACKING_FACTOR: fieldBuilder.buildEdmTypeField('ProductStackingFactor', 'Edm.Int16', false),
                /**
                 * Static representation of the {@link prodExcessVolumeToleranceValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_EXCESS_VOLUME_TOLERANCE_VALUE: fieldBuilder.buildEdmTypeField('ProdExcessVolumeToleranceValue', 'Edm.Decimal', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductSales_1.ProductSales)
            };
        }
        return this._schema;
    }
}
exports.ProductSalesApi = ProductSalesApi;
//# sourceMappingURL=ProductSalesApi.js.map