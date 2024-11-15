"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEwmWarehouseRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductEwmWarehouse_1 = require("./ProductEwmWarehouse");
/**
 * Request builder class for operations supported on the {@link ProductEwmWarehouse} entity.
 */
class ProductEwmWarehouseRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductEwmWarehouse` entities.
     * @returns A request builder for creating requests to retrieve all `ProductEwmWarehouse` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductEwmWarehouse` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductEwmWarehouse`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductEwmWarehouse` entity based on its keys.
     * @param product Key property. See {@link ProductEwmWarehouse.product}.
     * @param ewmWarehouse Key property. See {@link ProductEwmWarehouse.ewmWarehouse}.
     * @param entitledToDisposeParty Key property. See {@link ProductEwmWarehouse.entitledToDisposeParty}.
     * @returns A request builder for creating requests to retrieve one `ProductEwmWarehouse` entity based on its keys.
     */
    getByKey(product, ewmWarehouse, entitledToDisposeParty) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            EWMWarehouse: ewmWarehouse,
            EntitledToDisposeParty: entitledToDisposeParty
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductEwmWarehouse`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductEwmWarehouse`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, ewmWarehouse, entitledToDisposeParty) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductEwmWarehouse_1.ProductEwmWarehouse
            ? productOrEntity
            : {
                Product: productOrEntity,
                EWMWarehouse: ewmWarehouse,
                EntitledToDisposeParty: entitledToDisposeParty
            });
    }
}
exports.ProductEwmWarehouseRequestBuilder = ProductEwmWarehouseRequestBuilder;
//# sourceMappingURL=ProductEwmWarehouseRequestBuilder.js.map