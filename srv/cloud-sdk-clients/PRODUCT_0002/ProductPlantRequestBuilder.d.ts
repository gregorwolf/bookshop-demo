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
import { ProductPlant } from './ProductPlant';
/**
 * Request builder class for operations supported on the {@link ProductPlant} entity.
 */
export declare class ProductPlantRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlant<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlant` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlant` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlant<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlant` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlant`.
   */
  create(entity: ProductPlant<T>): CreateRequestBuilder<ProductPlant<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlant` entity based on its keys.
   * @param product Key property. See {@link ProductPlant.product}.
   * @param plant Key property. See {@link ProductPlant.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlant` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlant<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlant`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlant`.
   */
  update(entity: ProductPlant<T>): UpdateRequestBuilder<ProductPlant<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlant`.
   * @param product Key property. See {@link ProductPlant.product}.
   * @param plant Key property. See {@link ProductPlant.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlant`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlant<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlant`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlant` by taking the entity as a parameter.
   */
  delete(entity: ProductPlant<T>): DeleteRequestBuilder<ProductPlant<T>, T>;
}
