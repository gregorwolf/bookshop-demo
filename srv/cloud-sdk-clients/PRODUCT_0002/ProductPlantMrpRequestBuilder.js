"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantMrpRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantMrp_1 = require("./ProductPlantMrp");
/**
 * Request builder class for operations supported on the {@link ProductPlantMrp} entity.
 */
class ProductPlantMrpRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantMrp` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantMrp` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantMrp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantMrp`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantMrp` entity based on its keys.
     * @param product Key property. See {@link ProductPlantMrp.product}.
     * @param mrpArea Key property. See {@link ProductPlantMrp.mrpArea}.
     * @param plant Key property. See {@link ProductPlantMrp.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantMrp` entity based on its keys.
     */
    getByKey(product, mrpArea, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            MRPArea: mrpArea,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantMrp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantMrp`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, mrpArea, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductPlantMrp_1.ProductPlantMrp
            ? productOrEntity
            : {
                Product: productOrEntity,
                MRPArea: mrpArea,
                Plant: plant
            });
    }
}
exports.ProductPlantMrpRequestBuilder = ProductPlantMrpRequestBuilder;
//# sourceMappingURL=ProductPlantMrpRequestBuilder.js.map