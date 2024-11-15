"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductValuation_1 = require("./ProductValuation");
/**
 * Request builder class for operations supported on the {@link ProductValuation} entity.
 */
class ProductValuationRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductValuation` entities.
     * @returns A request builder for creating requests to retrieve all `ProductValuation` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductValuation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductValuation`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductValuation` entity based on its keys.
     * @param product Key property. See {@link ProductValuation.product}.
     * @param valuationArea Key property. See {@link ProductValuation.valuationArea}.
     * @param valuationType Key property. See {@link ProductValuation.valuationType}.
     * @returns A request builder for creating requests to retrieve one `ProductValuation` entity based on its keys.
     */
    getByKey(product, valuationArea, valuationType) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ValuationArea: valuationArea,
            ValuationType: valuationType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductValuation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductValuation`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, valuationArea, valuationType) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductValuation_1.ProductValuation
            ? productOrEntity
            : {
                Product: productOrEntity,
                ValuationArea: valuationArea,
                ValuationType: valuationType
            });
    }
}
exports.ProductValuationRequestBuilder = ProductValuationRequestBuilder;
//# sourceMappingURL=ProductValuationRequestBuilder.js.map