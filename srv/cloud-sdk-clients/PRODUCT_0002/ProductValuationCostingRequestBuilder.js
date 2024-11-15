"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationCostingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductValuationCosting_1 = require("./ProductValuationCosting");
/**
 * Request builder class for operations supported on the {@link ProductValuationCosting} entity.
 */
class ProductValuationCostingRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductValuationCosting` entities.
     * @returns A request builder for creating requests to retrieve all `ProductValuationCosting` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductValuationCosting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductValuationCosting`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductValuationCosting` entity based on its keys.
     * @param product Key property. See {@link ProductValuationCosting.product}.
     * @param valuationArea Key property. See {@link ProductValuationCosting.valuationArea}.
     * @param valuationType Key property. See {@link ProductValuationCosting.valuationType}.
     * @returns A request builder for creating requests to retrieve one `ProductValuationCosting` entity based on its keys.
     */
    getByKey(product, valuationArea, valuationType) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ValuationArea: valuationArea,
            ValuationType: valuationType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductValuationCosting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductValuationCosting`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, valuationArea, valuationType) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductValuationCosting_1.ProductValuationCosting
            ? productOrEntity
            : {
                Product: productOrEntity,
                ValuationArea: valuationArea,
                ValuationType: valuationType
            });
    }
}
exports.ProductValuationCostingRequestBuilder = ProductValuationCostingRequestBuilder;
//# sourceMappingURL=ProductValuationCostingRequestBuilder.js.map