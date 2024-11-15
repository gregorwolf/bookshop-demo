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
import { ProductPlantSupplyPlanning } from './ProductPlantSupplyPlanning';

/**
 * Request builder class for operations supported on the {@link ProductPlantSupplyPlanning} entity.
 */
export class ProductPlantSupplyPlanningRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantSupplyPlanning<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantSupplyPlanning` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantSupplyPlanning` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantSupplyPlanning<T>, T> {
    return new GetAllRequestBuilder<ProductPlantSupplyPlanning<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductPlantSupplyPlanning` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantSupplyPlanning`.
   */
  create(
    entity: ProductPlantSupplyPlanning<T>
  ): CreateRequestBuilder<ProductPlantSupplyPlanning<T>, T> {
    return new CreateRequestBuilder<ProductPlantSupplyPlanning<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantSupplyPlanning` entity based on its keys.
   * @param product Key property. See {@link ProductPlantSupplyPlanning.product}.
   * @param plant Key property. See {@link ProductPlantSupplyPlanning.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantSupplyPlanning` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantSupplyPlanning<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantSupplyPlanning<T>, T>(
      this.entityApi,
      {
        Product: product,
        Plant: plant
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantSupplyPlanning`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantSupplyPlanning`.
   */
  update(
    entity: ProductPlantSupplyPlanning<T>
  ): UpdateRequestBuilder<ProductPlantSupplyPlanning<T>, T> {
    return new UpdateRequestBuilder<ProductPlantSupplyPlanning<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantSupplyPlanning`.
   * @param product Key property. See {@link ProductPlantSupplyPlanning.product}.
   * @param plant Key property. See {@link ProductPlantSupplyPlanning.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantSupplyPlanning`.
   */
  delete(
    product: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantSupplyPlanning<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantSupplyPlanning`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantSupplyPlanning` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantSupplyPlanning<T>
  ): DeleteRequestBuilder<ProductPlantSupplyPlanning<T>, T>;
  delete(
    productOrEntity: any,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantSupplyPlanning<T>, T> {
    return new DeleteRequestBuilder<ProductPlantSupplyPlanning<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantSupplyPlanning
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Plant: plant!
          }
    );
  }
}
