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
import { ProductPlantPlanning } from './ProductPlantPlanning';
/**
 * Request builder class for operations supported on the {@link ProductPlantPlanning} entity.
 */
export declare class ProductPlantPlanningRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantPlanning<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantPlanning` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantPlanning` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantPlanning<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantPlanning` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantPlanning`.
   */
  create(
    entity: ProductPlantPlanning<T>
  ): CreateRequestBuilder<ProductPlantPlanning<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantPlanning` entity based on its keys.
   * @param product Key property. See {@link ProductPlantPlanning.product}.
   * @param plant Key property. See {@link ProductPlantPlanning.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantPlanning` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantPlanning<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantPlanning`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantPlanning`.
   */
  update(
    entity: ProductPlantPlanning<T>
  ): UpdateRequestBuilder<ProductPlantPlanning<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantPlanning`.
   * @param product Key property. See {@link ProductPlantPlanning.product}.
   * @param plant Key property. See {@link ProductPlantPlanning.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantPlanning`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantPlanning<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantPlanning`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantPlanning` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantPlanning<T>
  ): DeleteRequestBuilder<ProductPlantPlanning<T>, T>;
}
