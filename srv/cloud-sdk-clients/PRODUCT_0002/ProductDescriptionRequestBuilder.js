"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDescriptionRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductDescription_1 = require("./ProductDescription");
/**
 * Request builder class for operations supported on the {@link ProductDescription} entity.
 */
class ProductDescriptionRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductDescription` entities.
     * @returns A request builder for creating requests to retrieve all `ProductDescription` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductDescription` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductDescription`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductDescription` entity based on its keys.
     * @param product Key property. See {@link ProductDescription.product}.
     * @param language Key property. See {@link ProductDescription.language}.
     * @returns A request builder for creating requests to retrieve one `ProductDescription` entity based on its keys.
     */
    getByKey(product, language) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Language: language
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductDescription`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductDescription`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, language) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductDescription_1.ProductDescription
            ? productOrEntity
            : {
                Product: productOrEntity,
                Language: language
            });
    }
}
exports.ProductDescriptionRequestBuilder = ProductDescriptionRequestBuilder;
//# sourceMappingURL=ProductDescriptionRequestBuilder.js.map