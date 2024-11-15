/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProductChangeMasterApi } from './ProductChangeMasterApi';
import { Product, ProductType } from './Product';

/**
 * This class represents the entity "ProductChangeMaster" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductChangeMaster<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductChangeMasterType<T>
{
  /**
   * Technical entity name for ProductChangeMaster.
   */
  static override _entityName = 'ProductChangeMaster';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductChangeMaster entity.
   */
  static _keys = ['Product', 'ChangeNumber'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Change Number.
   * Maximum length: 12.
   */
  declare changeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Revision Level.
   * Maximum length: 2.
   */
  declare revisionLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;

  constructor(_entityApi: ProductChangeMasterApi<T>) {
    super(_entityApi);
  }
}

export interface ProductChangeMasterType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  changeNumber: DeserializedType<T, 'Edm.String'>;
  revisionLevel: DeserializedType<T, 'Edm.String'>;
  product_1?: ProductType<T> | null;
}
