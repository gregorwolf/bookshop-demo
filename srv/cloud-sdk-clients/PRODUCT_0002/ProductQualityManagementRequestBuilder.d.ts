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
import { ProductQualityManagement } from './ProductQualityManagement';
/**
 * Request builder class for operations supported on the {@link ProductQualityManagement} entity.
 */
export declare class ProductQualityManagementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductQualityManagement<T>, T> {
  /**
   * Returns a request builder for querying all `ProductQualityManagement` entities.
   * @returns A request builder for creating requests to retrieve all `ProductQualityManagement` entities.
   */
  getAll(): GetAllRequestBuilder<ProductQualityManagement<T>, T>;
  /**
   * Returns a request builder for creating a `ProductQualityManagement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductQualityManagement`.
   */
  create(
    entity: ProductQualityManagement<T>
  ): CreateRequestBuilder<ProductQualityManagement<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductQualityManagement` entity based on its keys.
   * @param product Key property. See {@link ProductQualityManagement.product}.
   * @returns A request builder for creating requests to retrieve one `ProductQualityManagement` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductQualityManagement<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductQualityManagement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductQualityManagement`.
   */
  update(
    entity: ProductQualityManagement<T>
  ): UpdateRequestBuilder<ProductQualityManagement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductQualityManagement`.
   * @param product Key property. See {@link ProductQualityManagement.product}.
   * @returns A request builder for creating requests that delete an entity of type `ProductQualityManagement`.
   */
  delete(product: string): DeleteRequestBuilder<ProductQualityManagement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductQualityManagement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductQualityManagement` by taking the entity as a parameter.
   */
  delete(
    entity: ProductQualityManagement<T>
  ): DeleteRequestBuilder<ProductQualityManagement<T>, T>;
}
