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
import { ProductPlantStorageLocation } from './ProductPlantStorageLocation';
/**
 * Request builder class for operations supported on the {@link ProductPlantStorageLocation} entity.
 */
export declare class ProductPlantStorageLocationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantStorageLocation<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantStorageLocation` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantStorageLocation` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantStorageLocation<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantStorageLocation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantStorageLocation`.
   */
  create(
    entity: ProductPlantStorageLocation<T>
  ): CreateRequestBuilder<ProductPlantStorageLocation<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantStorageLocation` entity based on its keys.
   * @param product Key property. See {@link ProductPlantStorageLocation.product}.
   * @param plant Key property. See {@link ProductPlantStorageLocation.plant}.
   * @param storageLocation Key property. See {@link ProductPlantStorageLocation.storageLocation}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantStorageLocation` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    storageLocation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantStorageLocation<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantStorageLocation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantStorageLocation`.
   */
  update(
    entity: ProductPlantStorageLocation<T>
  ): UpdateRequestBuilder<ProductPlantStorageLocation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantStorageLocation`.
   * @param product Key property. See {@link ProductPlantStorageLocation.product}.
   * @param plant Key property. See {@link ProductPlantStorageLocation.plant}.
   * @param storageLocation Key property. See {@link ProductPlantStorageLocation.storageLocation}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantStorageLocation`.
   */
  delete(
    product: string,
    plant: string,
    storageLocation: string
  ): DeleteRequestBuilder<ProductPlantStorageLocation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantStorageLocation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantStorageLocation` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantStorageLocation<T>
  ): DeleteRequestBuilder<ProductPlantStorageLocation<T>, T>;
}
