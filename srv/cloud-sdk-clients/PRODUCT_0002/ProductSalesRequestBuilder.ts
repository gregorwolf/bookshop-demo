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
import { ProductSales } from './ProductSales';

/**
 * Request builder class for operations supported on the {@link ProductSales} entity.
 */
export class ProductSalesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSales<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSales` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSales` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSales<T>, T> {
    return new GetAllRequestBuilder<ProductSales<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSales` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSales`.
   */
  create(entity: ProductSales<T>): CreateRequestBuilder<ProductSales<T>, T> {
    return new CreateRequestBuilder<ProductSales<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductSales` entity based on its keys.
   * @param product Key property. See {@link ProductSales.product}.
   * @returns A request builder for creating requests to retrieve one `ProductSales` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSales<T>, T> {
    return new GetByKeyRequestBuilder<ProductSales<T>, T>(this.entityApi, {
      Product: product
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSales`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSales`.
   */
  update(entity: ProductSales<T>): UpdateRequestBuilder<ProductSales<T>, T> {
    return new UpdateRequestBuilder<ProductSales<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSales`.
   * @param product Key property. See {@link ProductSales.product}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSales`.
   */
  delete(product: string): DeleteRequestBuilder<ProductSales<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSales`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSales` by taking the entity as a parameter.
   */
  delete(entity: ProductSales<T>): DeleteRequestBuilder<ProductSales<T>, T>;
  delete(productOrEntity: any): DeleteRequestBuilder<ProductSales<T>, T> {
    return new DeleteRequestBuilder<ProductSales<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductSales
        ? productOrEntity
        : { Product: productOrEntity! }
    );
  }
}
