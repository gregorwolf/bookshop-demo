"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationAccountingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductValuationAccounting_1 = require("./ProductValuationAccounting");
/**
 * Request builder class for operations supported on the {@link ProductValuationAccounting} entity.
 */
class ProductValuationAccountingRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductValuationAccounting` entities.
     * @returns A request builder for creating requests to retrieve all `ProductValuationAccounting` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductValuationAccounting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductValuationAccounting`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductValuationAccounting` entity based on its keys.
     * @param product Key property. See {@link ProductValuationAccounting.product}.
     * @param valuationArea Key property. See {@link ProductValuationAccounting.valuationArea}.
     * @param valuationType Key property. See {@link ProductValuationAccounting.valuationType}.
     * @returns A request builder for creating requests to retrieve one `ProductValuationAccounting` entity based on its keys.
     */
    getByKey(product, valuationArea, valuationType) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ValuationArea: valuationArea,
            ValuationType: valuationType
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductValuationAccounting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductValuationAccounting`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, valuationArea, valuationType) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductValuationAccounting_1.ProductValuationAccounting
            ? productOrEntity
            : {
                Product: productOrEntity,
                ValuationArea: valuationArea,
                ValuationType: valuationType
            });
    }
}
exports.ProductValuationAccountingRequestBuilder = ProductValuationAccountingRequestBuilder;
//# sourceMappingURL=ProductValuationAccountingRequestBuilder.js.map