"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantPurchaseTaxRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantPurchaseTax_1 = require("./ProductPlantPurchaseTax");
/**
 * Request builder class for operations supported on the {@link ProductPlantPurchaseTax} entity.
 */
class ProductPlantPurchaseTaxRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantPurchaseTax` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantPurchaseTax` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantPurchaseTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantPurchaseTax`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantPurchaseTax` entity based on its keys.
     * @param product Key property. See {@link ProductPlantPurchaseTax.product}.
     * @param plant Key property. See {@link ProductPlantPurchaseTax.plant}.
     * @param departureCountry Key property. See {@link ProductPlantPurchaseTax.departureCountry}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantPurchaseTax` entity based on its keys.
     */
    getByKey(product, plant, departureCountry) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Plant: plant,
            DepartureCountry: departureCountry
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantPurchaseTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantPurchaseTax`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, plant, departureCountry) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantPurchaseTax_1.ProductPlantPurchaseTax
            ? productOrEntity
            : {
                Product: productOrEntity,
                Plant: plant,
                DepartureCountry: departureCountry
            });
    }
}
exports.ProductPlantPurchaseTaxRequestBuilder = ProductPlantPurchaseTaxRequestBuilder;
//# sourceMappingURL=ProductPlantPurchaseTaxRequestBuilder.js.map