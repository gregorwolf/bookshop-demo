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
import { ProductPlantPurchaseTax } from './ProductPlantPurchaseTax';
/**
 * Request builder class for operations supported on the {@link ProductPlantPurchaseTax} entity.
 */
export declare class ProductPlantPurchaseTaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantPurchaseTax<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantPurchaseTax` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantPurchaseTax` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantPurchaseTax<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantPurchaseTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantPurchaseTax`.
   */
  create(
    entity: ProductPlantPurchaseTax<T>
  ): CreateRequestBuilder<ProductPlantPurchaseTax<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantPurchaseTax` entity based on its keys.
   * @param product Key property. See {@link ProductPlantPurchaseTax.product}.
   * @param plant Key property. See {@link ProductPlantPurchaseTax.plant}.
   * @param departureCountry Key property. See {@link ProductPlantPurchaseTax.departureCountry}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantPurchaseTax` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>,
    departureCountry: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantPurchaseTax<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantPurchaseTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantPurchaseTax`.
   */
  update(
    entity: ProductPlantPurchaseTax<T>
  ): UpdateRequestBuilder<ProductPlantPurchaseTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantPurchaseTax`.
   * @param product Key property. See {@link ProductPlantPurchaseTax.product}.
   * @param plant Key property. See {@link ProductPlantPurchaseTax.plant}.
   * @param departureCountry Key property. See {@link ProductPlantPurchaseTax.departureCountry}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantPurchaseTax`.
   */
  delete(
    product: string,
    plant: string,
    departureCountry: string
  ): DeleteRequestBuilder<ProductPlantPurchaseTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantPurchaseTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantPurchaseTax` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantPurchaseTax<T>
  ): DeleteRequestBuilder<ProductPlantPurchaseTax<T>, T>;
}
