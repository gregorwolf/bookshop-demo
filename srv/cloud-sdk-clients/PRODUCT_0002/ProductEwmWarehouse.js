"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEwmWarehouse = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * This class represents the entity "ProductEWMWarehouse" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
class ProductEwmWarehouse extends odata_v4_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ProductEwmWarehouse = ProductEwmWarehouse;
/**
 * Technical entity name for ProductEwmWarehouse.
 */
ProductEwmWarehouse._entityName = 'ProductEWMWarehouse';
/**
 * Default url path for the according service.
 */
ProductEwmWarehouse._defaultBasePath = '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
/**
 * All key fields of the ProductEwmWarehouse entity.
 */
ProductEwmWarehouse._keys = ['Product', 'EWMWarehouse', 'EntitledToDisposeParty'];
//# sourceMappingURL=ProductEwmWarehouse.js.map