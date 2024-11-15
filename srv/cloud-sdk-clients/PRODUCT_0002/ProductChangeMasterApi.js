"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChangeMasterApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProductChangeMaster_1 = require("./ProductChangeMaster");
const ProductChangeMasterRequestBuilder_1 = require("./ProductChangeMasterRequestBuilder");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProductChangeMasterApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProductChangeMaster_1.ProductChangeMaster;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProductChangeMasterApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ProductChangeMasterRequestBuilder_1.ProductChangeMasterRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProductChangeMaster_1.ProductChangeMaster, this.deSerializers);
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
                 * Static representation of the {@link changeNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGE_NUMBER: fieldBuilder.buildEdmTypeField('ChangeNumber', 'Edm.String', false),
                /**
                 * Static representation of the {@link revisionLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REVISION_LEVEL: fieldBuilder.buildEdmTypeField('RevisionLevel', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProductChangeMaster_1.ProductChangeMaster)
            };
        }
        return this._schema;
    }
}
exports.ProductChangeMasterApi = ProductChangeMasterApi;
//# sourceMappingURL=ProductChangeMasterApi.js.map