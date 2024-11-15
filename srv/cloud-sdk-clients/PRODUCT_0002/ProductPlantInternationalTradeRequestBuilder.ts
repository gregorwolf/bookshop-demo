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
import { ProductPlantInternationalTrade } from './ProductPlantInternationalTrade';

/**
 * Request builder class for operations supported on the {@link ProductPlantInternationalTrade} entity.
 */
export class ProductPlantInternationalTradeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantInternationalTrade<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantInternationalTrade` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantInternationalTrade` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantInternationalTrade<T>, T> {
    return new GetAllRequestBuilder<ProductPlantInternationalTrade<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantInternationalTrade` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantInternationalTrade`.
   */
  create(
    entity: ProductPlantInternationalTrade<T>
  ): CreateRequestBuilder<ProductPlantInternationalTrade<T>, T> {
    return new CreateRequestBuilder<ProductPlantInternationalTrade<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantInternationalTrade` entity based on its keys.
   * @param product Key property. See {@link ProductPlantInternationalTrade.product}.
   * @param plant Key property. See {@link ProductPlantInternationalTrade.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantInternationalTrade` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantInternationalTrade<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantInternationalTrade<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantInternationalTrade`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantInternationalTrade`.
   */
  update(
    entity: ProductPlantInternationalTrade<T>
  ): UpdateRequestBuilder<ProductPlantInternationalTrade<T>, T> {
    return new UpdateRequestBuilder<ProductPlantInternationalTrade<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantInternationalTrade`.
   * @param product Key property. See {@link ProductPlantInternationalTrade.product}.
   * @param plant Key property. See {@link ProductPlantInternationalTrade.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantInternationalTrade`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantInternationalTrade<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantInternationalTrade`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantInternationalTrade` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantInternationalTrade<T>
  ): DeleteRequestBuilder<ProductPlantInternationalTrade<T>, T>;
  delete(
    productOrEntity: any,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantInternationalTrade<T>, T> {
    return new DeleteRequestBuilder<ProductPlantInternationalTrade<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantInternationalTrade
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Plant: plant!
          }
    );
  }
}
