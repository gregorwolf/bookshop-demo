"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantWorkSchedulingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantWorkScheduling_1 = require("./ProductPlantWorkScheduling");
/**
 * Request builder class for operations supported on the {@link ProductPlantWorkScheduling} entity.
 */
class ProductPlantWorkSchedulingRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantWorkScheduling` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantWorkScheduling` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantWorkScheduling` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantWorkScheduling`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantWorkScheduling` entity based on its keys.
     * @param product Key property. See {@link ProductPlantWorkScheduling.product}.
     * @param plant Key property. See {@link ProductPlantWorkScheduling.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantWorkScheduling` entity based on its keys.
     */
    getByKey(product, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantWorkScheduling`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantWorkScheduling`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantWorkScheduling_1.ProductPlantWorkScheduling
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant
            });
    }
}
exports.ProductPlantWorkSchedulingRequestBuilder = ProductPlantWorkSchedulingRequestBuilder;
//# sourceMappingURL=ProductPlantWorkSchedulingRequestBuilder.js.map