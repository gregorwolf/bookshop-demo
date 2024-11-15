"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSalesDeliveryRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductSalesDelivery_1 = require("./ProductSalesDelivery");
/**
 * Request builder class for operations supported on the {@link ProductSalesDelivery} entity.
 */
class ProductSalesDeliveryRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductSalesDelivery` entities.
     * @returns A request builder for creating requests to retrieve all `ProductSalesDelivery` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductSalesDelivery` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductSalesDelivery`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductSalesDelivery` entity based on its keys.
     * @param product Key property. See {@link ProductSalesDelivery.product}.
     * @param productSalesOrg Key property. See {@link ProductSalesDelivery.productSalesOrg}.
     * @param productDistributionChnl Key property. See {@link ProductSalesDelivery.productDistributionChnl}.
     * @returns A request builder for creating requests to retrieve one `ProductSalesDelivery` entity based on its keys.
     */
    getByKey(product, productSalesOrg, productDistributionChnl) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ProductSalesOrg: productSalesOrg,
            ProductDistributionChnl: productDistributionChnl
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductSalesDelivery`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductSalesDelivery`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, productSalesOrg, productDistributionChnl) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductSalesDelivery_1.ProductSalesDelivery
            ? productOrEntity
            : {
                Product: productOrEntity,
                ProductSalesOrg: productSalesOrg,
                ProductDistributionChnl: productDistributionChnl
            });
    }
}
exports.ProductSalesDeliveryRequestBuilder = ProductSalesDeliveryRequestBuilder;
//# sourceMappingURL=ProductSalesDeliveryRequestBuilder.js.map