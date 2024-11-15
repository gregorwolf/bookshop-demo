"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantCostingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantCosting_1 = require("./ProductPlantCosting");
/**
 * Request builder class for operations supported on the {@link ProductPlantCosting} entity.
 */
class ProductPlantCostingRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantCosting` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantCosting` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantCosting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantCosting`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantCosting` entity based on its keys.
     * @param product Key property. See {@link ProductPlantCosting.product}.
     * @param plant Key property. See {@link ProductPlantCosting.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantCosting` entity based on its keys.
     */
    getByKey(product, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantCosting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantCosting`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantCosting_1.ProductPlantCosting
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant
            });
    }
}
exports.ProductPlantCostingRequestBuilder = ProductPlantCostingRequestBuilder;
//# sourceMappingURL=ProductPlantCostingRequestBuilder.js.map