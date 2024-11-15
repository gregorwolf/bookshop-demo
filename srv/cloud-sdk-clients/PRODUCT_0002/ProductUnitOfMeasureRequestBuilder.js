"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitOfMeasureRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductUnitOfMeasure_1 = require("./ProductUnitOfMeasure");
/**
 * Request builder class for operations supported on the {@link ProductUnitOfMeasure} entity.
 */
class ProductUnitOfMeasureRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductUnitOfMeasure` entities.
     * @returns A request builder for creating requests to retrieve all `ProductUnitOfMeasure` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductUnitOfMeasure` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductUnitOfMeasure`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductUnitOfMeasure` entity based on its keys.
     * @param product Key property. See {@link ProductUnitOfMeasure.product}.
     * @param alternativeUnit Key property. See {@link ProductUnitOfMeasure.alternativeUnit}.
     * @returns A request builder for creating requests to retrieve one `ProductUnitOfMeasure` entity based on its keys.
     */
    getByKey(product, alternativeUnit) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            AlternativeUnit: alternativeUnit
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductUnitOfMeasure`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductUnitOfMeasure`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, alternativeUnit) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductUnitOfMeasure_1.ProductUnitOfMeasure
            ? productOrEntity
            : {
                Product: productOrEntity,
                AlternativeUnit: alternativeUnit
            });
    }
}
exports.ProductUnitOfMeasureRequestBuilder = ProductUnitOfMeasureRequestBuilder;
//# sourceMappingURL=ProductUnitOfMeasureRequestBuilder.js.map