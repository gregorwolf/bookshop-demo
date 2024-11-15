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
import { ProductEwmWarehouse } from './ProductEwmWarehouse';
/**
 * Request builder class for operations supported on the {@link ProductEwmWarehouse} entity.
 */
export declare class ProductEwmWarehouseRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductEwmWarehouse<T>, T> {
  /**
   * Returns a request builder for querying all `ProductEwmWarehouse` entities.
   * @returns A request builder for creating requests to retrieve all `ProductEwmWarehouse` entities.
   */
  getAll(): GetAllRequestBuilder<ProductEwmWarehouse<T>, T>;
  /**
   * Returns a request builder for creating a `ProductEwmWarehouse` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductEwmWarehouse`.
   */
  create(
    entity: ProductEwmWarehouse<T>
  ): CreateRequestBuilder<ProductEwmWarehouse<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductEwmWarehouse` entity based on its keys.
   * @param product Key property. See {@link ProductEwmWarehouse.product}.
   * @param ewmWarehouse Key property. See {@link ProductEwmWarehouse.ewmWarehouse}.
   * @param entitledToDisposeParty Key property. See {@link ProductEwmWarehouse.entitledToDisposeParty}.
   * @returns A request builder for creating requests to retrieve one `ProductEwmWarehouse` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    ewmWarehouse: DeserializedType<T, 'Edm.String'>,
    entitledToDisposeParty: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductEwmWarehouse<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductEwmWarehouse`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductEwmWarehouse`.
   */
  update(
    entity: ProductEwmWarehouse<T>
  ): UpdateRequestBuilder<ProductEwmWarehouse<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductEwmWarehouse`.
   * @param product Key property. See {@link ProductEwmWarehouse.product}.
   * @param ewmWarehouse Key property. See {@link ProductEwmWarehouse.ewmWarehouse}.
   * @param entitledToDisposeParty Key property. See {@link ProductEwmWarehouse.entitledToDisposeParty}.
   * @returns A request builder for creating requests that delete an entity of type `ProductEwmWarehouse`.
   */
  delete(
    product: string,
    ewmWarehouse: string,
    entitledToDisposeParty: string
  ): DeleteRequestBuilder<ProductEwmWarehouse<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductEwmWarehouse`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductEwmWarehouse` by taking the entity as a parameter.
   */
  delete(
    entity: ProductEwmWarehouse<T>
  ): DeleteRequestBuilder<ProductEwmWarehouse<T>, T>;
}
