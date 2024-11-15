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
import { ProductPlantInspTypeSetting } from './ProductPlantInspTypeSetting';
/**
 * Request builder class for operations supported on the {@link ProductPlantInspTypeSetting} entity.
 */
export declare class ProductPlantInspTypeSettingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantInspTypeSetting<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantInspTypeSetting` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantInspTypeSetting` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
  /**
   * Returns a request builder for creating a `ProductPlantInspTypeSetting` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantInspTypeSetting`.
   */
  create(
    entity: ProductPlantInspTypeSetting<T>
  ): CreateRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProductPlantInspTypeSetting` entity based on its keys.
   * @param inspectionLotType Key property. See {@link ProductPlantInspTypeSetting.inspectionLotType}.
   * @param product Key property. See {@link ProductPlantInspTypeSetting.product}.
   * @param plant Key property. See {@link ProductPlantInspTypeSetting.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantInspTypeSetting` entity based on its keys.
   */
  getByKey(
    inspectionLotType: DeserializedType<T, 'Edm.String'>,
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProductPlantInspTypeSetting`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantInspTypeSetting`.
   */
  update(
    entity: ProductPlantInspTypeSetting<T>
  ): UpdateRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantInspTypeSetting`.
   * @param inspectionLotType Key property. See {@link ProductPlantInspTypeSetting.inspectionLotType}.
   * @param product Key property. See {@link ProductPlantInspTypeSetting.product}.
   * @param plant Key property. See {@link ProductPlantInspTypeSetting.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantInspTypeSetting`.
   */
  delete(
    inspectionLotType: string,
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantInspTypeSetting`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantInspTypeSetting` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantInspTypeSetting<T>
  ): DeleteRequestBuilder<ProductPlantInspTypeSetting<T>, T>;
}
