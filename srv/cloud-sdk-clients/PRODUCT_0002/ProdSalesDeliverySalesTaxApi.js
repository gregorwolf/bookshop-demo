"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdSalesDeliverySalesTaxApi = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProdSalesDeliverySalesTax_1 = require("./ProdSalesDeliverySalesTax");
const ProdSalesDeliverySalesTaxRequestBuilder_1 = require("./ProdSalesDeliverySalesTaxRequestBuilder");
const Sap_Message_1 = require("./Sap_Message");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
class ProdSalesDeliverySalesTaxApi {
    constructor(deSerializers = odata_v4_1.defaultDeSerializers) {
        this.entityConstructor = ProdSalesDeliverySalesTax_1.ProdSalesDeliverySalesTax;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v4_1.defaultDeSerializers) {
        return new ProdSalesDeliverySalesTaxApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRODUCT_1: new odata_v4_1.OneToOneLink('_Product', this, linkedApis[0]),
            PRODUCT_SALES_DELIVERY: new odata_v4_1.OneToOneLink('_ProductSalesDelivery', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new ProdSalesDeliverySalesTaxRequestBuilder_1.ProdSalesDeliverySalesTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v4_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v4_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v4_1.FieldBuilder(ProdSalesDeliverySalesTax_1.ProdSalesDeliverySalesTax, this.deSerializers);
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
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', false),
                /**
                 * Static representation of the {@link productSalesTaxCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_SALES_TAX_CATEGORY: fieldBuilder.buildEdmTypeField('ProductSalesTaxCategory', 'Edm.String', false),
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
                 * Static representation of the {@link productTaxClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCT_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('ProductTaxClassification', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v4_1.AllFields('*', ProdSalesDeliverySalesTax_1.ProdSalesDeliverySalesTax)
            };
        }
        return this._schema;
    }
}
exports.ProdSalesDeliverySalesTaxApi = ProdSalesDeliverySalesTaxApi;
//# sourceMappingURL=ProdSalesDeliverySalesTaxApi.js.map