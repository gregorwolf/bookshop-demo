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
export declare class ProductChangeMaster<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductChangeMasterType<T>
{
  /**
   * Technical entity name for ProductChangeMaster.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductChangeMaster entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Change Number.
   * Maximum length: 12.
   */
  changeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Revision Level.
   * Maximum length: 2.
   */
  revisionLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  constructor(_entityApi: ProductChangeMasterApi<T>);
}
export interface ProductChangeMasterType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  changeNumber: DeserializedType<T, 'Edm.String'>;
  revisionLevel: DeserializedType<T, 'Edm.String'>;
  product_1?: ProductType<T> | null;
}
