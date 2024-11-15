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
import { Sap_Message } from './Sap_Message';
import type { ProductDescriptionApi } from './ProductDescriptionApi';
import { Product, ProductType } from './Product';

/**
 * This class represents the entity "ProductDescription" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductDescription<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductDescriptionType<T>
{
  /**
   * Technical entity name for ProductDescription.
   */
  static override _entityName = 'ProductDescription';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductDescription entity.
   */
  static _keys = ['Product', 'Language'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description.
   * Maximum length: 40.
   */
  declare productDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;

  constructor(_entityApi: ProductDescriptionApi<T>) {
    super(_entityApi);
  }
}

export interface ProductDescriptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  productDescription: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
