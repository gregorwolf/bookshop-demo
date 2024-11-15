"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProcurementRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductProcurement_1 = require("./ProductProcurement");
/**
 * Request builder class for operations supported on the {@link ProductProcurement} entity.
 */
class ProductProcurementRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductProcurement` entities.
     * @returns A request builder for creating requests to retrieve all `ProductProcurement` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductProcurement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductProcurement`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductProcurement` entity based on its keys.
     * @param product Key property. See {@link ProductProcurement.product}.
     * @returns A request builder for creating requests to retrieve one `ProductProcurement` entity based on its keys.
     */
    getByKey(product) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, { Product: product });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductProcurement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductProcurement`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductProcurement_1.ProductProcurement
            ? productOrEntity
            : { Product: productOrEntity });
    }
}
exports.ProductProcurementRequestBuilder = ProductProcurementRequestBuilder;
//# sourceMappingURL=ProductProcurementRequestBuilder.js.map