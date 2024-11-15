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
import { ProductPlantMrp } from './ProductPlantMrp';

/**
 * Request builder class for operations supported on the {@link ProductPlantMrp} entity.
 */
export class ProductPlantMrpRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductPlantMrp<T>, T> {
  /**
   * Returns a request builder for querying all `ProductPlantMrp` entities.
   * @returns A request builder for creating requests to retrieve all `ProductPlantMrp` entities.
   */
  getAll(): GetAllRequestBuilder<ProductPlantMrp<T>, T> {
    return new GetAllRequestBuilder<ProductPlantMrp<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductPlantMrp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductPlantMrp`.
   */
  create(
    entity: ProductPlantMrp<T>
  ): CreateRequestBuilder<ProductPlantMrp<T>, T> {
    return new CreateRequestBuilder<ProductPlantMrp<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductPlantMrp` entity based on its keys.
   * @param product Key property. See {@link ProductPlantMrp.product}.
   * @param mrpArea Key property. See {@link ProductPlantMrp.mrpArea}.
   * @param plant Key property. See {@link ProductPlantMrp.plant}.
   * @returns A request builder for creating requests to retrieve one `ProductPlantMrp` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    mrpArea: DeserializedType<T, 'Edm.String'>,
    plant: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductPlantMrp<T>, T> {
    return new GetByKeyRequestBuilder<ProductPlantMrp<T>, T>(this.entityApi, {
      Product: product,
      MRPArea: mrpArea,
      Plant: plant
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductPlantMrp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductPlantMrp`.
   */
  update(
    entity: ProductPlantMrp<T>
  ): UpdateRequestBuilder<ProductPlantMrp<T>, T> {
    return new UpdateRequestBuilder<ProductPlantMrp<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductPlantMrp`.
   * @param product Key property. See {@link ProductPlantMrp.product}.
   * @param mrpArea Key property. See {@link ProductPlantMrp.mrpArea}.
   * @param plant Key property. See {@link ProductPlantMrp.plant}.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantMrp`.
   */
  delete(
    product: string,
    mrpArea: string,
    plant: string
  ): DeleteRequestBuilder<ProductPlantMrp<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductPlantMrp`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductPlantMrp` by taking the entity as a parameter.
   */
  delete(
    entity: ProductPlantMrp<T>
  ): DeleteRequestBuilder<ProductPlantMrp<T>, T>;
  delete(
    productOrEntity: any,
    mrpArea?: string,
    plant?: string
  ): DeleteRequestBuilder<ProductPlantMrp<T>, T> {
    return new DeleteRequestBuilder<ProductPlantMrp<T>, T>(
      this.entityApi,
      productOrEntity instanceof ProductPlantMrp
        ? productOrEntity
        : {
            Product: productOrEntity!,
            MRPArea: mrpArea!,
            Plant: plant!
          }
    );
  }
}
