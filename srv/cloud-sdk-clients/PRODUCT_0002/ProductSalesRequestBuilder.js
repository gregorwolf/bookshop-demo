"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSalesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductSales_1 = require("./ProductSales");
/**
 * Request builder class for operations supported on the {@link ProductSales} entity.
 */
class ProductSalesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductSales` entities.
     * @returns A request builder for creating requests to retrieve all `ProductSales` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductSales` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductSales`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductSales` entity based on its keys.
     * @param product Key property. See {@link ProductSales.product}.
     * @returns A request builder for creating requests to retrieve one `ProductSales` entity based on its keys.
     */
    getByKey(product) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductSales`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductSales`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductSales_1.ProductSales
            ? productOrEntity
            : { Product: productOrEntity });
    }
}
exports.ProductSalesRequestBuilder = ProductSalesRequestBuilder;
//# sourceMappingURL=ProductSalesRequestBuilder.js.map