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
import { ProductValuationCosting } from './ProductValuationCosting';
/**
 * Request builder class for operations supported on the {@link ProductValuationCosting} entity.
 */
export declare class ProductValuationCostingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductValuationCosting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductValuationCosting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductValuationCosting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductValuationCosting<T>, T>;
  /**
   * Returns a request builder for creating a `ProductValuationCosting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductValuationCosting`.
   */
  create(
    entity: ProductValuationCosting<T>
  ): CreateRequestBuilder<ProductValuationCosting<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductValuationCosting` entity based on its keys.
   * @param product Key property. See {@link ProductValuationCosting.product}.
   * @param valuationArea Key property. See {@link ProductValuationCosting.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationCosting.valuationType}.
   * @returns A request builder for creating requests to retrieve one `ProductValuationCosting` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    valuationArea: DeserializedType<T, 'Edm.String'>,
    valuationType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductValuationCosting<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductValuationCosting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductValuationCosting`.
   */
  update(
    entity: ProductValuationCosting<T>
  ): UpdateRequestBuilder<ProductValuationCosting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationCosting`.
   * @param product Key property. See {@link ProductValuationCosting.product}.
   * @param valuationArea Key property. See {@link ProductValuationCosting.valuationArea}.
   * @param valuationType Key property. See {@link ProductValuationCosting.valuationType}.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationCosting`.
   */
  delete(
    product: string,
    valuationArea: string,
    valuationType: string
  ): DeleteRequestBuilder<ProductValuationCosting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductValuationCosting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductValuationCosting` by taking the entity as a parameter.
   */
  delete(
    entity: ProductValuationCosting<T>
  ): DeleteRequestBuilder<ProductValuationCosting<T>, T>;
}
