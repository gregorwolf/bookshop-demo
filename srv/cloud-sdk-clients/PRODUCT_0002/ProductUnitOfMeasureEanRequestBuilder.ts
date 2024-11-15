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
import { ProductUnitOfMeasureEan } from './ProductUnitOfMeasureEan';

/**
 * Request builder class for operations supported on the {@link ProductUnitOfMeasureEan} entity.
 */
export class ProductUnitOfMeasureEanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductUnitOfMeasureEan<T>, T> {
  /**
   * Returns a request builder for querying all `ProductUnitOfMeasureEan` entities.
   * @returns A request builder for creating requests to retrieve all `ProductUnitOfMeasureEan` entities.
   */
  getAll(): GetAllRequestBuilder<ProductUnitOfMeasureEan<T>, T> {
    return new GetAllRequestBuilder<ProductUnitOfMeasureEan<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductUnitOfMeasureEan` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductUnitOfMeasureEan`.
   */
  create(
    entity: ProductUnitOfMeasureEan<T>
  ): CreateRequestBuilder<ProductUnitOfMeasureEan<T>, T> {
    return new CreateRequestBuilder<ProductUnitOfMeasureEan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductUnitOfMeasureEan` entity based on its keys.
   * @param product Key property. See {@link ProductUnitOfMeasureEan.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitOfMeasureEan.alternativeUnit}.
   * @param consecutiveNumber Key property. See {@link ProductUnitOfMeasureEan.consecutiveNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductUnitOfMeasureEan` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    alternativeUnit: DeserializedType<T, 'Edm.String'>,
    consecutiveNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductUnitOfMeasureEan<T>, T> {
    return new GetByKeyRequestBuilder<ProductUnitOfMeasureEan<T>, T>(
      this.entityApi,
      {
        Product: product,
        AlternativeUnit: alternativeUnit,
        ConsecutiveNumber: consecutiveNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductUnitOfMeasureEan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductUnitOfMeasureEan`.
   */
  update(
    entity: ProductUnitOfMeasureEan<T>
  ): UpdateRequestBuilder<ProductUnitOfMeasureEan<T>, T> {
    return new UpdateRequestBuilder<ProductUnitOfMeasureEan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasureEan`.
   * @param product Key property. See {@link ProductUnitOfMeasureEan.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitOfMeasureEan.alternativeUnit}.
   * @param consecutiveNumber Key property. See {@link ProductUnitOfMeasureEan.consecutiveNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasureEan`.
   */
  delete(
    product: string,
    alternativeUnit: string,
    consecutiveNumber: string
  ): DeleteRequestBuilder<ProductUnitOfMeasureEan<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasureEan`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasureEan` by taking the entity as a parameter.
   */
  delete(
    entity: ProductUnitOfMeasureEan<T>
  ): DeleteRequestBuilder<ProductUnitOfMeasureEan<T>, T>;
  delete(
    productOrEntity: any,
    alternativeUnit?: string,
    consecutiveNumber?: string
  ): DeleteRequestBuilder<ProductUnitOfMeasureEan<T>, T> {
    return new DeleteRequestBuilder<ProductUnitOfMeasureEan<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductUnitOfMeasureEan
        ? productOrEntity
        : {
            Product: productOrEntity!,
            AlternativeUnit: alternativeUnit!,
            ConsecutiveNumber: consecutiveNumber!
          }
    );
  }
}
