"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValuationLedgerAccountRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductValuationLedgerAccount_1 = require("./ProductValuationLedgerAccount");
/**
 * Request builder class for operations supported on the {@link ProductValuationLedgerAccount} entity.
 */
class ProductValuationLedgerAccountRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductValuationLedgerAccount` entities.
     * @returns A request builder for creating requests to retrieve all `ProductValuationLedgerAccount` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductValuationLedgerAccount` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductValuationLedgerAccount`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductValuationLedgerAccount` entity based on its keys.
     * @param product Key property. See {@link ProductValuationLedgerAccount.product}.
     * @param valuationArea Key property. See {@link ProductValuationLedgerAccount.valuationArea}.
     * @param valuationType Key property. See {@link ProductValuationLedgerAccount.valuationType}.
     * @param currencyRole Key property. See {@link ProductValuationLedgerAccount.currencyRole}.
     * @param ledger Key property. See {@link ProductValuationLedgerAccount.ledger}.
     * @returns A request builder for creating requests to retrieve one `ProductValuationLedgerAccount` entity based on its keys.
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
     * Returns a request builder for updating an entity of type `ProductValuationLedgerAccount`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductValuationLedgerAccount`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(productOrEntity, valuationArea, valuationType, currencyRole, ledger) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, productOrEntity instanceof ProductValuationLedgerAccount_1.ProductValuationLedgerAccount
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
exports.ProductValuationLedgerAccountRequestBuilder = ProductValuationLedgerAccountRequestBuilder;
//# sourceMappingURL=ProductValuationLedgerAccountRequestBuilder.js.map