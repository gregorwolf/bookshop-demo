"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductChangeMasterRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductChangeMaster_1 = require("./ProductChangeMaster");
/**
 * Request builder class for operations supported on the {@link ProductChangeMaster} entity.
 */
class ProductChangeMasterRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductChangeMaster` entities.
     * @returns A request builder for creating requests to retrieve all `ProductChangeMaster` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductChangeMaster` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductChangeMaster`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductChangeMaster` entity based on its keys.
     * @param product Key property. See {@link ProductChangeMaster.product}.
     * @param changeNumber Key property. See {@link ProductChangeMaster.changeNumber}.
     * @returns A request builder for creating requests to retrieve one `ProductChangeMaster` entity based on its keys.
     */
    getByKey(product, changeNumber) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ChangeNumber: changeNumber
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductChangeMaster`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductChangeMaster`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, changeNumber) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductChangeMaster_1.ProductChangeMaster
            ? productOrEntity
            : {
                Product: productOrEntity,
                ChangeNumber: changeNumber
            });
    }
}
exports.ProductChangeMasterRequestBuilder = ProductChangeMasterRequestBuilder;
//# sourceMappingURL=ProductChangeMasterRequestBuilder.js.map