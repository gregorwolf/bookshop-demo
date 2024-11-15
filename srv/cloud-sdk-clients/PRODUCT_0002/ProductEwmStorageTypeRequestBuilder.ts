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
import { ProductEwmStorageType } from './ProductEwmStorageType';

/**
 * Request builder class for operations supported on the {@link ProductEwmStorageType} entity.
 */
export class ProductEwmStorageTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductEwmStorageType<T>, T> {
  /**
   * Returns a request builder for querying all `ProductEwmStorageType` entities.
   * @returns A request builder for creating requests to retrieve all `ProductEwmStorageType` entities.
   */
  getAll(): GetAllRequestBuilder<ProductEwmStorageType<T>, T> {
    return new GetAllRequestBuilder<ProductEwmStorageType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductEwmStorageType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductEwmStorageType`.
   */
  create(
    entity: ProductEwmStorageType<T>
  ): CreateRequestBuilder<ProductEwmStorageType<T>, T> {
    return new CreateRequestBuilder<ProductEwmStorageType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductEwmStorageType` entity based on its keys.
   * @param product Key property. See {@link ProductEwmStorageType.product}.
   * @param ewmWarehouse Key property. See {@link ProductEwmStorageType.ewmWarehouse}.
   * @param entitledToDisposeParty Key property. See {@link ProductEwmStorageType.entitledToDisposeParty}.
   * @param ewmStorageType Key property. See {@link ProductEwmStorageType.ewmStorageType}.
   * @returns A request builder for creating requests to retrieve one `ProductEwmStorageType` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    ewmWarehouse: DeserializedType<T, 'Edm.String'>,
    entitledToDisposeParty: DeserializedType<T, 'Edm.String'>,
    ewmStorageType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductEwmStorageType<T>, T> {
    return new GetByKeyRequestBuilder<ProductEwmStorageType<T>, T>(
      this.entityApi,
      {
        Product: product,
        EWMWarehouse: ewmWarehouse,
        EntitledToDisposeParty: entitledToDisposeParty,
        EWMStorageType: ewmStorageType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductEwmStorageType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductEwmStorageType`.
   */
  update(
    entity: ProductEwmStorageType<T>
  ): UpdateRequestBuilder<ProductEwmStorageType<T>, T> {
    return new UpdateRequestBuilder<ProductEwmStorageType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductEwmStorageType`.
   * @param product Key property. See {@link ProductEwmStorageType.product}.
   * @param ewmWarehouse Key property. See {@link ProductEwmStorageType.ewmWarehouse}.
   * @param entitledToDisposeParty Key property. See {@link ProductEwmStorageType.entitledToDisposeParty}.
   * @param ewmStorageType Key property. See {@link ProductEwmStorageType.ewmStorageType}.
   * @returns A request builder for creating requests that delete an entity of type `ProductEwmStorageType`.
   */
  delete(
    product: string,
    ewmWarehouse: string,
    entitledToDisposeParty: string,
    ewmStorageType: string
  ): DeleteRequestBuilder<ProductEwmStorageType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductEwmStorageType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductEwmStorageType` by taking the entity as a parameter.
   */
  delete(
    entity: ProductEwmStorageType<T>
  ): DeleteRequestBuilder<ProductEwmStorageType<T>, T>;
  delete(
    productOrEntity: any,
    ewmWarehouse?: string,
    entitledToDisposeParty?: string,
    ewmStorageType?: string
  ): DeleteRequestBuilder<ProductEwmStorageType<T>, T> {
    return new DeleteRequestBuilder<ProductEwmStorageType<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductEwmStorageType
        ? productOrEntity
        : {
            Product: productOrEntity!,
            EWMWarehouse: ewmWarehouse!,
            EntitledToDisposeParty: entitledToDisposeParty!,
            EWMStorageType: ewmStorageType!
          }
    );
  }
}
