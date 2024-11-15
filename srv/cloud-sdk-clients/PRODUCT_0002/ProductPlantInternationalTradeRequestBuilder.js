"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantInternationalTradeRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantInternationalTrade_1 = require("./ProductPlantInternationalTrade");
/**
 * Request builder class for operations supported on the {@link ProductPlantInternationalTrade} entity.
 */
class ProductPlantInternationalTradeRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantInternationalTrade` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantInternationalTrade` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantInternationalTrade` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantInternationalTrade`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantInternationalTrade` entity based on its keys.
     * @param product Key property. See {@link ProductPlantInternationalTrade.product}.
     * @param plant Key property. See {@link ProductPlantInternationalTrade.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantInternationalTrade` entity based on its keys.
     */
    getByKey(product, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantInternationalTrade`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantInternationalTrade`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantInternationalTrade_1.ProductPlantInternationalTrade
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant
            });
    }
}
exports.ProductPlantInternationalTradeRequestBuilder = ProductPlantInternationalTradeRequestBuilder;
//# sourceMappingURL=ProductPlantInternationalTradeRequestBuilder.js.map