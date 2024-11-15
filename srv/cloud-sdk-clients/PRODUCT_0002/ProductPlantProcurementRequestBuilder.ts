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
import { ProductPlantProcurement } from './ProductPlantProcurement';

/**
 * Request builder class for operations supported on the {@link ProductPlantProcurement} entity.
 */
export class ProductPlantProcurementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantProcurement<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantProcurement` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantProcurement` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantProcurement<T>, T> {
    return new GetAllRequestBuilder<ProductPlantProcurement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantProcurement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantProcurement`.
   */
  create(
    entity: ProductPlantProcurement<T>
  ): CreateRequestBuilder<ProductPlantProcurement<T>, T> {
    return new CreateRequestBuilder<ProductPlantProcurement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantProcurement` entity based on its keys.
   * @param product Key property. See {@link ProductPlantProcurement.product}.
   * @param plant Key property. See {@link ProductPlantProcurement.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantProcurement` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantProcurement<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantProcurement<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantProcurement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantProcurement`.
   */
  update(
    entity: ProductPlantProcurement<T>
  ): UpdateRequestBuilder<ProductPlantProcurement<T>, T> {
    return new UpdateRequestBuilder<ProductPlantProcurement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantProcurement`.
   * @param product Key property. See {@link ProductPlantProcurement.product}.
   * @param plant Key property. See {@link ProductPlantProcurement.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantProcurement`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantProcurement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantProcurement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantProcurement` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantProcurement<T>
  ): DeleteRequestBuilder<ProductPlantProcurement<T>, T>;
  delete(
    productOrEntity: any,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantProcurement<T>, T> {
    return new DeleteRequestBuilder<ProductPlantProcurement<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantProcurement
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Plant: plant!
          }
    );
  }
}
