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
import { ProductProcurement } from './ProductProcurement';
/**
 * Request builder class for operations supported on the {@link ProductProcurement} entity.
 */
export declare class ProductProcurementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductProcurement<T>, T> {
  /**
   * Returns a request builder for querying all `ProductProcurement` entities.
   * @returns A request builder for creating requests to retrieve all `ProductProcurement` entities.
   */
  getAll(): GetAllRequestBuilder<ProductProcurement<T>, T>;
  /**
   * Returns a request builder for creating a `ProductProcurement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductProcurement`.
   */
  create(
    entity: ProductProcurement<T>
  ): CreateRequestBuilder<ProductProcurement<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductProcurement` entity based on its keys.
   * @param product Key property. See {@link ProductProcurement.product}.
   * @returns A request builder for creating requests to retrieve one `ProductProcurement` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductProcurement<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductProcurement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductProcurement`.
   */
  update(
    entity: ProductProcurement<T>
  ): UpdateRequestBuilder<ProductProcurement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductProcurement`.
   * @param product Key property. See {@link ProductProcurement.product}.
   * @returns A request builder for creating requests that delete an entity of type `ProductProcurement`.
   */
  delete(product: string): DeleteRequestBuilder<ProductProcurement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductProcurement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductProcurement` by taking the entity as a parameter.
   */
  delete(
    entity: ProductProcurement<T>
  ): DeleteRequestBuilder<ProductProcurement<T>, T>;
}
