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
import { ProdSalesDeliverySalesTax } from './ProdSalesDeliverySalesTax';
/**
 * Request builder class for operations supported on the {@link ProdSalesDeliverySalesTax} entity.
 */
export declare class ProdSalesDeliverySalesTaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProdSalesDeliverySalesTax<T>, T> {
  /**
   * Returns a request builder for querying all `ProdSalesDeliverySalesTax` entities.
   * @returns A request builder for creating requests to retrieve all `ProdSalesDeliverySalesTax` entities.
   */
  getAll(): GetAllRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
  /**
   * Returns a request builder for creating a `ProdSalesDeliverySalesTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProdSalesDeliverySalesTax`.
   */
  create(
    entity: ProdSalesDeliverySalesTax<T>
  ): CreateRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
  /**
   * Returns a request builder for retrieving one `ProdSalesDeliverySalesTax` entity based on its keys.
   * @param product Key property. See {@link ProdSalesDeliverySalesTax.product}.
   * @param country Key property. See {@link ProdSalesDeliverySalesTax.country}.
   * @param productSalesTaxCategory Key property. See {@link ProdSalesDeliverySalesTax.productSalesTaxCategory}.
   * @param productSalesOrg Key property. See {@link ProdSalesDeliverySalesTax.productSalesOrg}.
   * @param productDistributionChnl Key property. See {@link ProdSalesDeliverySalesTax.productDistributionChnl}.
   * @returns A request builder for creating requests to retrieve one `ProdSalesDeliverySalesTax` entity based on its keys.
   */
  getByKey(
    product: DeserializedType<T, 'Edm.String'>,
    country: DeserializedType<T, 'Edm.String'>,
    productSalesTaxCategory: DeserializedType<T, 'Edm.String'>,
    productSalesOrg: DeserializedType<T, 'Edm.String'>,
    productDistributionChnl: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ProdSalesDeliverySalesTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProdSalesDeliverySalesTax`.
   */
  update(
    entity: ProdSalesDeliverySalesTax<T>
  ): UpdateRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProdSalesDeliverySalesTax`.
   * @param product Key property. See {@link ProdSalesDeliverySalesTax.product}.
   * @param country Key property. See {@link ProdSalesDeliverySalesTax.country}.
   * @param productSalesTaxCategory Key property. See {@link ProdSalesDeliverySalesTax.productSalesTaxCategory}.
   * @param productSalesOrg Key property. See {@link ProdSalesDeliverySalesTax.productSalesOrg}.
   * @param productDistributionChnl Key property. See {@link ProdSalesDeliverySalesTax.productDistributionChnl}.
   * @returns A request builder for creating requests that delete an entity of type `ProdSalesDeliverySalesTax`.
   */
  delete(
    product: string,
    country: string,
    productSalesTaxCategory: string,
    productSalesOrg: string,
    productDistributionChnl: string
  ): DeleteRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProdSalesDeliverySalesTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProdSalesDeliverySalesTax` by taking the entity as a parameter.
   */
  delete(
    entity: ProdSalesDeliverySalesTax<T>
  ): DeleteRequestBuilder<ProdSalesDeliverySalesTax<T>, T>;
}
