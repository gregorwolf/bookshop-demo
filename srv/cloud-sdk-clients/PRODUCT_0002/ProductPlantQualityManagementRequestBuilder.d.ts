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
import { ProductPlantQualityManagement } from './ProductPlantQualityManagement';
/**
 * Request builder class for operations supported on the {@link ProductPlantQualityManagement} entity.
 */
export declare class ProductPlantQualityManagementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantQualityManagement<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantQualityManagement` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantQualityManagement` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantQualityManagement<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantQualityManagement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantQualityManagement`.
   */
  create(
    entity: ProductPlantQualityManagement<T>
  ): CreateRequestBuilder<ProductPlantQualityManagement<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantQualityManagement` entity based on its keys.
   * @param product Key property. See {@link ProductPlantQualityManagement.product}.
   * @param plant Key property. See {@link ProductPlantQualityManagement.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantQualityManagement` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantQualityManagement<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantQualityManagement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantQualityManagement`.
   */
  update(
    entity: ProductPlantQualityManagement<T>
  ): UpdateRequestBuilder<ProductPlantQualityManagement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantQualityManagement`.
   * @param product Key property. See {@link ProductPlantQualityManagement.product}.
   * @param plant Key property. See {@link ProductPlantQualityManagement.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantQualityManagement`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantQualityManagement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantQualityManagement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantQualityManagement` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantQualityManagement<T>
  ): DeleteRequestBuilder<ProductPlantQualityManagement<T>, T>;
}
