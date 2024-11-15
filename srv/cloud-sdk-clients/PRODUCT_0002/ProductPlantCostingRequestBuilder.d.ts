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
import { ProductPlantCosting } from './ProductPlantCosting';
/**
 * Request builder class for operations supported on the {@link ProductPlantCosting} entity.
 */
export declare class ProductPlantCostingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantCosting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantCosting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantCosting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantCosting<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantCosting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantCosting`.
   */
  create(
    entity: ProductPlantCosting<T>
  ): CreateRequestBuilder<ProductPlantCosting<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantCosting` entity based on its keys.
   * @param product Key property. See {@link ProductPlantCosting.product}.
   * @param plant Key property. See {@link ProductPlantCosting.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantCosting` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantCosting<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantCosting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantCosting`.
   */
  update(
    entity: ProductPlantCosting<T>
  ): UpdateRequestBuilder<ProductPlantCosting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantCosting`.
   * @param product Key property. See {@link ProductPlantCosting.product}.
   * @param plant Key property. See {@link ProductPlantCosting.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantCosting`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantCosting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantCosting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantCosting` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantCosting<T>
  ): DeleteRequestBuilder<ProductPlantCosting<T>, T>;
}
