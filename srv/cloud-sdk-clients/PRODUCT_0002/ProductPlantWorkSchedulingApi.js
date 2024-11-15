"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantWorkSchedulingApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductPlantWorkScheduling_1 = require("./ProductPlantWorkScheduling");
const ProductPlantWorkSchedulingRequestBuilder_1 = require("./ProductPlantWorkSchedulingRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductPlantWorkSchedulingApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductPlantWorkScheduling_1.ProductPlantWorkScheduling;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductPlantWorkSchedulingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_PLANT: new odata_v4_1.OneToOneLink('_ProductPlant', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProductPlantWorkSchedulingRequestBuilder_1.ProductPlantWorkSchedulingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductPlantWorkScheduling_1.ProductPlantWorkScheduling, this.deSerializers);
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
                 * Static representation of the {@link productBaseQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_BASE_QUANTITY: fieldBuilder.buildEdmTypeField('ProductBaseQuantity', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link unlimitedOverDelivIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNLIMITED_OVER_DELIV_IS_ALLOWED: fieldBuilder.buildEdmTypeField('UnlimitedOverDelivIsAllowed', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link overDeliveryTolerancePercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVER_DELIVERY_TOLERANCE_PERCENT: fieldBuilder.buildEdmTypeField('OverDeliveryTolerancePercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link underDeliveryTolerancePercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNDER_DELIVERY_TOLERANCE_PERCENT: fieldBuilder.buildEdmTypeField('UnderDeliveryTolerancePercent', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField('ProductionInvtryManagedLoc', 'Edm.String', false),
                /**
                 * Static representation of the {@link productionOrderBatchCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_ORDER_BATCH_CODE: fieldBuilder.buildEdmTypeField('ProductionOrderBatchCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodIsWithdrawnFrmProdnBin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_IS_WITHDRAWN_FRM_PRODN_BIN: fieldBuilder.buildEdmTypeField('ProdIsWithdrawnFrmProdnBin', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link transitionMatrixProductsGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSITION_MATRIX_PRODUCTS_GROUP: fieldBuilder.buildEdmTypeField('TransitionMatrixProductsGroup', 'Edm.String', false),
                /**
                 * Static representation of the {@link orderChangeManagementProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_CHANGE_MANAGEMENT_PROFILE: fieldBuilder.buildEdmTypeField('OrderChangeManagementProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link productComponentBackflushCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_COMPONENT_BACKFLUSH_CODE: fieldBuilder.buildEdmTypeField('ProductComponentBackflushCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link setupAndTeardownTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SETUP_AND_TEARDOWN_TIME: fieldBuilder.buildEdmTypeField('SetupAndTeardownTime', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productionSchedulingProfile} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_SCHEDULING_PROFILE: fieldBuilder.buildEdmTypeField('ProductionSchedulingProfile', 'Edm.String', false),
                /**
                 * Static representation of the {@link transitionTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSITION_TIME: fieldBuilder.buildEdmTypeField('TransitionTime', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link processingTimeInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCESSING_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField('ProcessingTimeInDays', 'Edm.Decimal', false),
                /**
                 * Static representation of the {@link productionSupervisor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTION_SUPERVISOR: fieldBuilder.buildEdmTypeField('ProductionSupervisor', 'Edm.String', false),
                /**
                 * Static representation of the {@link productProductionQuantityUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_PRODUCTION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField('ProductProductionQuantityUnit', 'Edm.String', false),
                /**
                 * Static representation of the {@link prodProductionQuantityIsoUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROD_PRODUCTION_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField('ProdProductionQuantityISOUnit', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductPlantWorkScheduling_1.ProductPlantWorkScheduling)
            };
        }
        return this._schema;
    }
}
exports.ProductPlantWorkSchedulingApi = ProductPlantWorkSchedulingApi;
//# sourceMappingURL=ProductPlantWorkSchedulingApi.js.map