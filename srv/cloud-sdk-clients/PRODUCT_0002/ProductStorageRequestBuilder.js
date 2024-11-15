"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStorageRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductStorage_1 = require("./ProductStorage");
/**
 * Request builder class for operations supported on the {@link ProductStorage} entity.
 */
class ProductStorageRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductStorage` entities.
     * @returns A request builder for creating requests to retrieve all `ProductStorage` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductStorage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductStorage`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductStorage` entity based on its keys.
     * @param product Key property. See {@link ProductStorage.product}.
     * @returns A request builder for creating requests to retrieve one `ProductStorage` entity based on its keys.
     */
    getByKey(product) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductStorage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductStorage`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductStorage_1.ProductStorage
            ? productOrEntity
            : { Product: productOrEntity });
    }
}
exports.ProductStorageRequestBuilder = ProductStorageRequestBuilder;
//# sourceMappingURL=ProductStorageRequestBuilder.js.map