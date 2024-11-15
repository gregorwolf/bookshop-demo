/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { ProductValuationLedgerAccount } from './ProductValuationLedgerAccount';

/**
 * Request builder class for operations supported on the {@link ProductValuationLedgerAccount} entity.
 */
export class ProductValuationLedgerAccountRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationLedgerAccount<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationLedgerAccount` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationLedgerAccount` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationLedgerAccount<T>, T> {
    return new GetAllRequestBuilder<ProductValuationLedgerAccount<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductValuationLedgerAccount` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationLedgerAccount`.
   */
  create(
    entity: ProductValuationLedgerAccount<T>
  ): CreateRequestBuilder<ProductValuationLedgerAccount<T>, T> {
    return new CreateRequestBuilder<ProductValuationLedgerAccount<T>, T>(
      this.entityApi,
      entity
    );
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
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>,
    currencyRole: DeserializedType<T, 'Edm.String'>,
    ledger: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationLedgerAccount<T>, T> {
    return new GetByKeyRequestBuilder<ProductValuationLedgerAccount<T>, T>(
      this.entityApi,
      {
        Product: product,
        ValuationArea: valuationArea,
        ValuationType: valuationType,
        CurrencyRole: currencyRole,
        Ledger: ledger
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductValuationLedgerAccount`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationLedgerAccount`.
   */
  update(
    entity: ProductValuationLedgerAccount<T>
  ): UpdateRequestBuilder<ProductValuationLedgerAccount<T>, T> {
    return new UpdateRequestBuilder<ProductValuationLedgerAccount<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductValuationLedgerAccount`.
   * @param product Key property. See {@link ProductValuationLedgerAccount.product}.
   * @param valuationArea Key property. See {@link ProductValuationLedgerAccount.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationLedgerAccount.valuationType}.
   * @param currencyRole Key property. See {@link ProductValuationLedgerAccount.currencyRole}.
   * @param ledger Key property. See {@link ProductValuationLedgerAccount.ledger}.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationLedgerAccount`.
   */
  delete(
    product: string,
    valuationArea: string,
    valuationType: string,
    currencyRole: string,
    ledger: string
  ): DeleteRequestBuilder<ProductValuationLedgerAccount<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationLedgerAccount`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationLedgerAccount` by taking the entity as a parameter.
   */
  delete(
    entity: ProductValuationLedgerAccount<T>
  ): DeleteRequestBuilder<ProductValuationLedgerAccount<T>, T>;
  delete(
    productOrEntity: any,
    valuationArea?: string,
    valuationType?: string,
    currencyRole?: string,
    ledger?: string
  ): DeleteRequestBuilder<ProductValuationLedgerAccount<T>, T> {
    return new DeleteRequestBuilder<ProductValuationLedgerAccount<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductValuationLedgerAccount
        ? productOrEntity
        : {
            Product: productOrEntity!,
            ValuationArea: valuationArea!,
            ValuationType: valuationType!,
            CurrencyRole: currencyRole!,
            Ledger: ledger!
          }
    );
  }
}
