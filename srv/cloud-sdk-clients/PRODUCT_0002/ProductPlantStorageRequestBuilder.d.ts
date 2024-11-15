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
import { ProductPlantStorage } from './ProductPlantStorage';
/**
 * Request builder class for operations supported on the {@link ProductPlantStorage} entity.
 */
export declare class ProductPlantStorageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantStorage<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantStorage` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantStorage` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantStorage<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantStorage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantStorage`.
   */
  create(
    entity: ProductPlantStorage<T>
  ): CreateRequestBuilder<ProductPlantStorage<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantStorage` entity based on its keys.
   * @param product Key property. See {@link ProductPlantStorage.product}.
   * @param plant Key property. See {@link ProductPlantStorage.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantStorage` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantStorage<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantStorage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantStorage`.
   */
  update(
    entity: ProductPlantStorage<T>
  ): UpdateRequestBuilder<ProductPlantStorage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantStorage`.
   * @param product Key property. See {@link ProductPlantStorage.product}.
   * @param plant Key property. See {@link ProductPlantStorage.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantStorage`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantStorage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantStorage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantStorage` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantStorage<T>
  ): DeleteRequestBuilder<ProductPlantStorage<T>, T>;
}
