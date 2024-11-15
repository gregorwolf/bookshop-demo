"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantSupplyPlanningRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantSupplyPlanning_1 = require("./ProductPlantSupplyPlanning");
/**
 * Request builder class for operations supported on the {@link ProductPlantSupplyPlanning} entity.
 */
class ProductPlantSupplyPlanningRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantSupplyPlanning` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantSupplyPlanning` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantSupplyPlanning` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantSupplyPlanning`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantSupplyPlanning` entity based on its keys.
     * @param product Key property. See {@link ProductPlantSupplyPlanning.product}.
     * @param plant Key property. See {@link ProductPlantSupplyPlanning.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantSupplyPlanning` entity based on its keys.
     */
    getByKey(product, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantSupplyPlanning`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantSupplyPlanning`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantSupplyPlanning_1.ProductPlantSupplyPlanning
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant
            });
    }
}
exports.ProductPlantSupplyPlanningRequestBuilder = ProductPlantSupplyPlanningRequestBuilder;
//# sourceMappingURL=ProductPlantSupplyPlanningRequestBuilder.js.map