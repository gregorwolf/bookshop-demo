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
import { ProductDescription } from './ProductDescription';

/**
 * Request builder class for operations supported on the {@link ProductDescription} entity.
 */
export class ProductDescriptionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductDescription<T>, T> {
  /**
   * Returns a request builder for querying all `ProductDescription` entities.
   * @returns A request builder for creating requests to retrieve all `ProductDescription` entities.
   */
  getAll(): GetAllRequestBuilder<ProductDescription<T>, T> {
    return new GetAllRequestBuilder<ProductDescription<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductDescription` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductDescription`.
   */
  create(
    entity: ProductDescription<T>
  ): CreateRequestBuilder<ProductDescription<T>, T> {
    return new CreateRequestBuilder<ProductDescription<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductDescription` entity based on its keys.
   * @param product Key property. See {@link ProductDescription.product}.
   * @param language Key property. See {@link ProductDescription.language}.
   * @returns A request builder for creating requests to retrieve one `ProductDescription` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductDescription<T>, T> {
    return new GetByKeyRequestBuilder<ProductDescription<T>, T>(
      this.entityApi,
      {
        Product: product,
        Language: language
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductDescription`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductDescription`.
   */
  update(
    entity: ProductDescription<T>
  ): UpdateRequestBuilder<ProductDescription<T>, T> {
    return new UpdateRequestBuilder<ProductDescription<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductDescription`.
   * @param product Key property. See {@link ProductDescription.product}.
   * @param language Key property. See {@link ProductDescription.language}.
   * @returns A request builder for creating requests that delete an entity of type `ProductDescription`.
   */
  delete(
    product: string,
    language: string
  ): DeleteRequestBuilder<ProductDescription<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductDescription`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductDescription` by taking the entity as a parameter.
   */
  delete(
    entity: ProductDescription<T>
  ): DeleteRequestBuilder<ProductDescription<T>, T>;
  delete(
    productOrEntity: any,
    language?: string
  ): DeleteRequestBuilder<ProductDescription<T>, T> {
    return new DeleteRequestBuilder<ProductDescription<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductDescription
        ? productOrEntity
        : {
            Product: productOrEntity!,
            Language: language!
          }
    );
  }
}
