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
import { ProductPlantForecast } from './ProductPlantForecast';
/**
 * Request builder class for operations supported on the {@link ProductPlantForecast} entity.
 */
export declare class ProductPlantForecastRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantForecast<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantForecast` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantForecast` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantForecast<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantForecast` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantForecast`.
   */
  create(
    entity: ProductPlantForecast<T>
  ): CreateRequestBuilder<ProductPlantForecast<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantForecast` entity based on its keys.
   * @param product Key property. See {@link ProductPlantForecast.product}.
   * @param plant Key property. See {@link ProductPlantForecast.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantForecast` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantForecast<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantForecast`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantForecast`.
   */
  update(
    entity: ProductPlantForecast<T>
  ): UpdateRequestBuilder<ProductPlantForecast<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantForecast`.
   * @param product Key property. See {@link ProductPlantForecast.product}.
   * @param plant Key property. See {@link ProductPlantForecast.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantForecast`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantForecast<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantForecast`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantForecast` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantForecast<T>
  ): DeleteRequestBuilder<ProductPlantForecast<T>, T>;
}
