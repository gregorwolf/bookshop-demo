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
import { ProductChangeMaster } from './ProductChangeMaster';
/**
 * Request builder class for operations supported on the {@link ProductChangeMaster} entity.
 */
export declare class ProductChangeMasterRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductChangeMaster<T>, T> {
  /**
   * Returns a request builder for querying all `ProductChangeMaster` entities.
   * @returns A request builder for creating requests to retrieve all `ProductChangeMaster` entities.
   */
  getAll(): GetAllRequestBuilder<ProductChangeMaster<T>, T>;
  /**
   * Returns a request builder for creating a `ProductChangeMaster` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductChangeMaster`.
   */
  create(
    entity: ProductChangeMaster<T>
  ): CreateRequestBuilder<ProductChangeMaster<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductChangeMaster` entity based on its keys.
   * @param product Key property. See {@link ProductChangeMaster.product}.
   * @param changeNumber Key property. See {@link ProductChangeMaster.changeNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductChangeMaster` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    changeNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductChangeMaster<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductChangeMaster`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductChangeMaster`.
   */
  update(
    entity: ProductChangeMaster<T>
  ): UpdateRequestBuilder<ProductChangeMaster<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductChangeMaster`.
   * @param product Key property. See {@link ProductChangeMaster.product}.
   * @param changeNumber Key property. See {@link ProductChangeMaster.changeNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductChangeMaster`.
   */
  delete(
    product: string,
    changeNumber: string
  ): DeleteRequestBuilder<ProductChangeMaster<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductChangeMaster`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductChangeMaster` by taking the entity as a parameter.
   */
  delete(
    entity: ProductChangeMaster<T>
  ): DeleteRequestBuilder<ProductChangeMaster<T>, T>;
}
