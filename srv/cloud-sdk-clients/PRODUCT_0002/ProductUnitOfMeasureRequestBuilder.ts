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
import { ProductUnitOfMeasure } from './ProductUnitOfMeasure';

/**
 * Request builder class for operations supported on the {@link ProductUnitOfMeasure} entity.
 */
export class ProductUnitOfMeasureRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductUnitOfMeasure<T>, T> {
  /**
   * Returns a request builder for querying all `ProductUnitOfMeasure` entities.
   * @returns A request builder for creating requests to retrieve all `ProductUnitOfMeasure` entities.
   */
  getAll(): GetAllRequestBuilder<ProductUnitOfMeasure<T>, T> {
    return new GetAllRequestBuilder<ProductUnitOfMeasure<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductUnitOfMeasure` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductUnitOfMeasure`.
   */
  create(
    entity: ProductUnitOfMeasure<T>
  ): CreateRequestBuilder<ProductUnitOfMeasure<T>, T> {
    return new CreateRequestBuilder<ProductUnitOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductUnitOfMeasure` entity based on its keys.
   * @param product Key property. See {@link ProductUnitOfMeasure.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitOfMeasure.alternativeUnit}.
   * @returns A request builder for creating requests to retrieve one `ProductUnitOfMeasure` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    alternativeUnit: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductUnitOfMeasure<T>, T> {
    return new GetByKeyRequestBuilder<ProductUnitOfMeasure<T>, T>(
      this.entityApi,
      {
        Product: product,
        AlternativeUnit: alternativeUnit
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductUnitOfMeasure`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductUnitOfMeasure`.
   */
  update(
    entity: ProductUnitOfMeasure<T>
  ): UpdateRequestBuilder<ProductUnitOfMeasure<T>, T> {
    return new UpdateRequestBuilder<ProductUnitOfMeasure<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasure`.
   * @param product Key property. See {@link ProductUnitOfMeasure.product}.
   * @param alternativeUnit Key property. See {@link ProductUnitOfMeasure.alternativeUnit}.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasure`.
   */
  delete(
    product: string,
    alternativeUnit: string
  ): DeleteRequestBuilder<ProductUnitOfMeasure<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductUnitOfMeasure`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductUnitOfMeasure` by taking the entity as a parameter.
   */
  delete(
    entity: ProductUnitOfMeasure<T>
  ): DeleteRequestBuilder<ProductUnitOfMeasure<T>, T>;
  delete(
    productOrEntity: any,
    alternativeUnit?: string
  ): DeleteRequestBuilder<ProductUnitOfMeasure<T>, T> {
    return new DeleteRequestBuilder<ProductUnitOfMeasure<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductUnitOfMeasure
        ? productOrEntity
        : {
            Product: productOrEntity!,
            AlternativeUnit: alternativeUnit!
          }
    );
  }
}
