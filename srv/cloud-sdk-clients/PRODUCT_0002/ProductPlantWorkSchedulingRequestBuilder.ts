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
import { ProductPlantWorkScheduling } from './ProductPlantWorkScheduling';

/**
 * Request builder class for operations supported on the {@link ProductPlantWorkScheduling} entity.
 */
export class ProductPlantWorkSchedulingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantWorkScheduling<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantWorkScheduling` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantWorkScheduling` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantWorkScheduling<T>, T> {
    return new GetAllRequestBuilder<ProductPlantWorkScheduling<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantWorkScheduling` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantWorkScheduling`.
   */
  create(
    entity: ProductPlantWorkScheduling<T>
  ): CreateRequestBuilder<ProductPlantWorkScheduling<T>, T> {
    return new CreateRequestBuilder<ProductPlantWorkScheduling<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantWorkScheduling` entity based on its keys.
   * @param product Key property. See {@link ProductPlantWorkScheduling.product}.
   * @param plant Key property. See {@link ProductPlantWorkScheduling.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantWorkScheduling` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantWorkScheduling<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantWorkScheduling<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantWorkScheduling`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantWorkScheduling`.
   */
  update(
    entity: ProductPlantWorkScheduling<T>
  ): UpdateRequestBuilder<ProductPlantWorkScheduling<T>, T> {
    return new UpdateRequestBuilder<ProductPlantWorkScheduling<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantWorkScheduling`.
   * @param product Key property. See {@link ProductPlantWorkScheduling.product}.
   * @param plant Key property. See {@link ProductPlantWorkScheduling.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantWorkScheduling`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantWorkScheduling<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantWorkScheduling`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantWorkScheduling` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantWorkScheduling<T>
  ): DeleteRequestBuilder<ProductPlantWorkScheduling<T>, T>;
  delete(
    productOrEntity: any,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantWorkScheduling<T>, T> {
    return new DeleteRequestBuilder<ProductPlantWorkScheduling<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantWorkScheduling
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Plant: plant!
          }
    );
  }
}
