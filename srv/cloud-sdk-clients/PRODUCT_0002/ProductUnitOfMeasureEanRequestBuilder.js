"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitOfMeasureEanRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductUnitOfMeasureEan_1 = require("./ProductUnitOfMeasureEan");
/**
 * Request builder class for operations supported on the {@link ProductUnitOfMeasureEan} entity.
 */
class ProductUnitOfMeasureEanRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductUnitOfMeasureEan` entities.
     * @returns A request builder for creating requests to retrieve all `ProductUnitOfMeasureEan` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductUnitOfMeasureEan` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductUnitOfMeasureEan`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductUnitOfMeasureEan` entity based on its keys.
     * @param product Key property. See {@link ProductUnitOfMeasureEan.product}.
     * @param alternativeUnit Key property. See {@link ProductUnitOfMeasureEan.alternativeUnit}.
     * @param consecutiveNumber Key property. See {@link ProductUnitOfMeasureEan.consecutiveNumber}.
     * @returns A request builder for creating requests to retrieve one `ProductUnitOfMeasureEan` entity based on its keys.
     */
    getByKey(product, alternativeUnit, consecutiveNumber) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            AlternativeUnit: alternativeUnit,
            ConsecutiveNumber: consecutiveNumber
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductUnitOfMeasureEan`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductUnitOfMeasureEan`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, alternativeUnit, consecutiveNumber) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductUnitOfMeasureEan_1.ProductUnitOfMeasureEan
            ? productOrEntity
            : {
                Product: productOrEntity,
                AlternativeUnit: alternativeUnit,
                ConsecutiveNumber: consecutiveNumber
            });
    }
}
exports.ProductUnitOfMeasureEanRequestBuilder = ProductUnitOfMeasureEanRequestBuilder;
//# sourceMappingURL=ProductUnitOfMeasureEanRequestBuilder.js.map