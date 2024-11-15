"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEwmStorageTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductEwmStorageType_1 = require("./ProductEwmStorageType");
/**
 * Request builder class for operations supported on the {@link ProductEwmStorageType} entity.
 */
class ProductEwmStorageTypeRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductEwmStorageType` entities.
     * @returns A request builder for creating requests to retrieve all `ProductEwmStorageType` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductEwmStorageType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductEwmStorageType`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductEwmStorageType` entity based on its keys.
     * @param product Key property. See {@link ProductEwmStorageType.product}.
     * @param ewmWarehouse Key property. See {@link ProductEwmStorageType.ewmWarehouse}.
     * @param entitledToDisposeParty Key property. See {@link ProductEwmStorageType.entitledToDisposeParty}.
     * @param ewmStorageType Key property. See {@link ProductEwmStorageType.ewmStorageType}.
     * @returns A request builder for creating requests to retrieve one `ProductEwmStorageType` entity based on its keys.
     */
    getByKey(product, ewmWarehouse, entitledToDisposeParty, ewmStorageType) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            EWMWarehouse: ewmWarehouse,
            EntitledToDisposeParty: entitledToDisposeParty,
            EWMStorageType: ewmStorageType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductEwmStorageType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductEwmStorageType`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, ewmWarehouse, entitledToDisposeParty, ewmStorageType) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductEwmStorageType_1.ProductEwmStorageType
            ? productOrEntity
            : {
                Product: productOrEntity,
                EWMWarehouse: ewmWarehouse,
                EntitledToDisposeParty: entitledToDisposeParty,
                EWMStorageType: ewmStorageType
            });
    }
}
exports.ProductEwmStorageTypeRequestBuilder = ProductEwmStorageTypeRequestBuilder;
//# sourceMappingURL=ProductEwmStorageTypeRequestBuilder.js.map