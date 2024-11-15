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
import { Product } from './Product';

/**
 * Request builder class for operations supported on the {@link Product} entity.
 */
export class ProductRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Product<T>, T> {
  /**
   * Returns a request builder for querying all `Product` entities.
   * @returns A request builder for creating requests to retrieve all `Product` entities.
   */
  getAll(): GetAllRequestBuilder<Product<T>, T> {
    return new GetAllRequestBuilder<Product<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Product` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Product`.
   */
  create(entity: Product<T>): CreateRequestBuilder<Product<T>, T> {
    return new CreateRequestBuilder<Product<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Product` entity based on its keys.
   * @param product Key property. See {@link Product.product}.
   * @returns A request builder for creating requests to retrieve one `Product` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Product<T>, T> {
    return new GetByKeyRequestBuilder<Product<T>, T>(this.entityApi, {
      Product: product
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Product`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Product`.
   */
  update(entity: Product<T>): UpdateRequestBuilder<Product<T>, T> {
    return new UpdateRequestBuilder<Product<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Product`.
   * @param product Key property. See {@link Product.product}.
   * @returns A request builder for creating requests that delete an entity of type `Product`.
   */
  delete(product: string): DeleteRequestBuilder<Product<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Product`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Product` by taking the entity as a parameter.
   */
  delete(entity: Product<T>): DeleteRequestBuilder<Product<T>, T>;
  delete(productOrEntity: any): DeleteRequestBuilder<Product<T>, T> {
    return new DeleteRequestBuilder<Product<T>, T>(
      this.entityApi,
      productOrEntity instanceof Product
        ? productOrEntity
        : { Product: productOrEntity! }
    );
  }
}
