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
import { ProductValuationAccounting } from './ProductValuationAccounting';
/**
 * Request builder class for operations supported on the {@link ProductValuationAccounting} entity.
 */
export declare class ProductValuationAccountingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationAccounting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationAccounting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationAccounting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationAccounting<T>, T>;
  /**
   * Returns a request builder for creating a `ProductValuationAccounting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationAccounting`.
   */
  create(
    entity: ProductValuationAccounting<T>
  ): CreateRequestBuilder<ProductValuationAccounting<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductValuationAccounting` entity based on its keys.
   * @param product Key property. See {@link ProductValuationAccounting.product}.
   * @param valuationArea Key property. See {@link ProductValuationAccounting.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationAccounting.valuationType}.
   * @returns A request builder for creating requests to retrieve one `ProductValuationAccounting` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationAccounting<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductValuationAccounting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationAccounting`.
   */
  update(
    entity: ProductValuationAccounting<T>
  ): UpdateRequestBuilder<ProductValuationAccounting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationAccounting`.
   * @param product Key property. See {@link ProductValuationAccounting.product}.
   * @param valuationArea Key property. See {@link ProductValuationAccounting.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationAccounting.valuationType}.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationAccounting`.
   */
  delete(
    product: string,
    valuationArea: string,
    valuationType: string
  ): DeleteRequestBuilder<ProductValuationAccounting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationAccounting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationAccounting` by taking the entity as a parameter.
   */
  delete(
    entity: ProductValuationAccounting<T>
  ): DeleteRequestBuilder<ProductValuationAccounting<T>, T>;
}
