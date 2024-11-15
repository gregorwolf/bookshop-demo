"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantStorageLocationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantStorageLocation_1 = require("./ProductPlantStorageLocation");
/**
 * Request builder class for operations supported on the {@link ProductPlantStorageLocation} entity.
 */
class ProductPlantStorageLocationRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantStorageLocation` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantStorageLocation` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantStorageLocation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantStorageLocation`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantStorageLocation` entity based on its keys.
     * @param product Key property. See {@link ProductPlantStorageLocation.product}.
     * @param plant Key property. See {@link ProductPlantStorageLocation.plant}.
     * @param storageLocation Key property. See {@link ProductPlantStorageLocation.storageLocation}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantStorageLocation` entity based on its keys.
     */
    getByKey(product, plant, storageLocation) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant,
            StorageLocation: storageLocation
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantStorageLocation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantStorageLocation`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant, storageLocation) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantStorageLocation_1.ProductPlantStorageLocation
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant,
                StorageLocation: storageLocation
            });
    }
}
exports.ProductPlantStorageLocationRequestBuilder = ProductPlantStorageLocationRequestBuilder;
//# sourceMappingURL=ProductPlantStorageLocationRequestBuilder.js.map