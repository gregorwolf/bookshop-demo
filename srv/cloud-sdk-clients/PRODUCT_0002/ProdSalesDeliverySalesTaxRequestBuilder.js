"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdSalesDeliverySalesTaxRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProdSalesDeliverySalesTax_1 = require("./ProdSalesDeliverySalesTax");
/**
 * Request builder class for operations supported on the {@link ProdSalesDeliverySalesTax} entity.
 */
class ProdSalesDeliverySalesTaxRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProdSalesDeliverySalesTax` entities.
     * @returns A request builder for creating requests to retrieve all `ProdSalesDeliverySalesTax` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProdSalesDeliverySalesTax` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProdSalesDeliverySalesTax`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProdSalesDeliverySalesTax` entity based on its keys.
     * @param product Key property. See {@link ProdSalesDeliverySalesTax.product}.
     * @param country Key property. See {@link ProdSalesDeliverySalesTax.country}.
     * @param productSalesTaxCategory Key property. See {@link ProdSalesDeliverySalesTax.productSalesTaxCategory}.
     * @param productSalesOrg Key property. See {@link ProdSalesDeliverySalesTax.productSalesOrg}.
     * @param productDistributionChnl Key property. See {@link ProdSalesDeliverySalesTax.productDistributionChnl}.
     * @returns A request builder for creating requests to retrieve one `ProdSalesDeliverySalesTax` entity based on its keys.
     */
    getByKey(product, country, productSalesTaxCategory, productSalesOrg, productDistributionChnl) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            Country: country,
            ProductSalesTaxCategory: productSalesTaxCategory,
            ProductSalesOrg: productSalesOrg,
            ProductDistributionChnl: productDistributionChnl
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProdSalesDeliverySalesTax`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProdSalesDeliverySalesTax`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, country, productSalesTaxCategory, productSalesOrg, productDistributionChnl) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProdSalesDeliverySalesTax_1.ProdSalesDeliverySalesTax
            ? productOrEntity
            : {
                Product: productOrEntity,
                Country: country,
                ProductSalesTaxCategory: productSalesTaxCategory,
                ProductSalesOrg: productSalesOrg,
                ProductDistributionChnl: productDistributionChnl
            });
    }
}
exports.ProdSalesDeliverySalesTaxRequestBuilder = ProdSalesDeliverySalesTaxRequestBuilder;
//# sourceMappingURL=ProdSalesDeliverySalesTaxRequestBuilder.js.map