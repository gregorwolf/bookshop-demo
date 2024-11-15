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
import { ProductPlantSales } from './ProductPlantSales';
/**
 * Request builder class for operations supported on the {@link ProductPlantSales} entity.
 */
export declare class ProductPlantSalesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantSales<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantSales` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantSales` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantSales<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantSales` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantSales`.
   */
  create(
    entity: ProductPlantSales<T>
  ): CreateRequestBuilder<ProductPlantSales<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantSales` entity based on its keys.
   * @param product Key property. See {@link ProductPlantSales.product}.
   * @param plant Key property. See {@link ProductPlantSales.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantSales` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantSales<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantSales`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantSales`.
   */
  update(
    entity: ProductPlantSales<T>
  ): UpdateRequestBuilder<ProductPlantSales<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantSales`.
   * @param product Key property. See {@link ProductPlantSales.product}.
   * @param plant Key property. See {@link ProductPlantSales.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantSales`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantSales<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantSales`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantSales` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantSales<T>
  ): DeleteRequestBuilder<ProductPlantSales<T>, T>;
}
