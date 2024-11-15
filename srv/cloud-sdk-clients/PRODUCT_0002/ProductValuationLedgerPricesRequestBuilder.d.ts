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
import { ProductValuationLedgerPrices } from './ProductValuationLedgerPrices';
/**
 * Request builder class for operations supported on the {@link ProductValuationLedgerPrices} entity.
 */
export declare class ProductValuationLedgerPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationLedgerPrices<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationLedgerPrices` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationLedgerPrices` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationLedgerPrices<T>, T>;
  /**
   * Returns a request builder for creating a `ProductValuationLedgerPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationLedgerPrices`.
   */
  create(
    entity: ProductValuationLedgerPrices<T>
  ): CreateRequestBuilder<ProductValuationLedgerPrices<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductValuationLedgerPrices` entity based on its keys.
   * @param product Key property. See {@link ProductValuationLedgerPrices.product}.
   * @param valuationArea Key property. See {@link ProductValuationLedgerPrices.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationLedgerPrices.valuationType}.
   * @param currencyRole Key property. See {@link ProductValuationLedgerPrices.currencyRole}.
   * @param ledger Key property. See {@link ProductValuationLedgerPrices.ledger}.
   * @returns A request builder for creating requests to retrieve one `ProductValuationLedgerPrices` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>,
    currencyRole: DeserializedType<T, 'Edm.String'>,
    ledger: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationLedgerPrices<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductValuationLedgerPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationLedgerPrices`.
   */
  update(
    entity: ProductValuationLedgerPrices<T>
  ): UpdateRequestBuilder<ProductValuationLedgerPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationLedgerPrices`.
   * @param product Key property. See {@link ProductValuationLedgerPrices.product}.
   * @param valuationArea Key property. See {@link ProductValuationLedgerPrices.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationLedgerPrices.valuationType}.
   * @param currencyRole Key property. See {@link ProductValuationLedgerPrices.currencyRole}.
   * @param ledger Key property. See {@link ProductValuationLedgerPrices.ledger}.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationLedgerPrices`.
   */
  delete(
    product: string,
    valuationArea: string,
    valuationType: string,
    currencyRole: string,
    ledger: string
  ): DeleteRequestBuilder<ProductValuationLedgerPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationLedgerPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationLedgerPrices` by taking the entity as a parameter.
   */
  delete(
    entity: ProductValuationLedgerPrices<T>
  ): DeleteRequestBuilder<ProductValuationLedgerPrices<T>, T>;
}
