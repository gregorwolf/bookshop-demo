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
import { ProductStorage } from './ProductStorage';
/**
 * Request builder class for operations supported on the {@link ProductStorage} entity.
 */
export declare class ProductStorageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStorage<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStorage` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStorage` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStorage<T>, T>;
  /**
   * Returns a request builder for creating a `ProductStorage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStorage`.
   */
  create(entity: ProductStorage<T>): CreateRequestBuilder<ProductStorage<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductStorage` entity based on its keys.
   * @param product Key property. See {@link ProductStorage.product}.
   * @returns A request builder for creating requests to retrieve one `ProductStorage` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStorage<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductStorage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStorage`.
   */
  update(entity: ProductStorage<T>): UpdateRequestBuilder<ProductStorage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStorage`.
   * @param product Key property. See {@link ProductStorage.product}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStorage`.
   */
  delete(product: string): DeleteRequestBuilder<ProductStorage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStorage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStorage` by taking the entity as a parameter.
   */
  delete(entity: ProductStorage<T>): DeleteRequestBuilder<ProductStorage<T>, T>;
}
