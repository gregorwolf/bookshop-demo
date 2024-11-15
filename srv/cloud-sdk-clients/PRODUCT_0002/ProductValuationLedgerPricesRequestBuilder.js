"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationLedgerPricesRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductValuationLedgerPrices_1 = require("./ProductValuationLedgerPrices");
/**
 * Request builder class for operations supported on the {@link ProductValuationLedgerPrices} entity.
 */
class ProductValuationLedgerPricesRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductValuationLedgerPrices` entities.
     * @returns A request builder for creating requests to retrieve all `ProductValuationLedgerPrices` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductValuationLedgerPrices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductValuationLedgerPrices`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductValuationLedgerPrices` entity based on its keys.
     * @param product Key property. See {@link ProductValuationLedgerPrices.product}.
     * @param valuationArea Key property. See {@link ProductValuationLedgerPrices.valuationArea}.
     * @param valuationType Key property. See {@link ProductValuationLedgerPrices.valuationType}.
     * @param currencyRole Key property. See {@link ProductValuationLedgerPrices.currencyRole}.
     * @param ledger Key property. See {@link ProductValuationLedgerPrices.ledger}.
     * @returns A request builder for creating requests to retrieve one `ProductValuationLedgerPrices` entity based on its keys.
     */
    getByKey(product, valuationArea, valuationType, currencyRole, ledger) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            Product: product,
            ValuationArea: valuationArea,
            ValuationType: valuationType,
            CurrencyRole: currencyRole,
            Ledger: ledger
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductValuationLedgerPrices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductValuationLedgerPrices`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, valuationArea, valuationType, currencyRole, ledger) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductValuationLedgerPrices_1.ProductValuationLedgerPrices
            ? productOrEntity
            : {
                Product: productOrEntity,
                ValuationArea: valuationArea,
                ValuationType: valuationType,
                CurrencyRole: currencyRole,
                Ledger: ledger
            });
    }
}
exports.ProductValuationLedgerPricesRequestBuilder = ProductValuationLedgerPricesRequestBuilder;
//# sourceMappingURL=ProductValuationLedgerPricesRequestBuilder.js.map