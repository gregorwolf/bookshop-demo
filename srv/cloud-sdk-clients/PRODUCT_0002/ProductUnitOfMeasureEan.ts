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
import type { ProductUnitOfMeasureEanApi } from './ProductUnitOfMeasureEanApi';
import { Product, ProductType } from './Product';
import {
  ProductUnitOfMeasure,
  ProductUnitOfMeasureType
} from './ProductUnitOfMeasure';

/**
 * This class represents the entity "ProductUnitOfMeasureEAN" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductUnitOfMeasureEan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitOfMeasureEanType<T>
{
  /**
   * Technical entity name for ProductUnitOfMeasureEan.
   */
  static override _entityName = 'ProductUnitOfMeasureEAN';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductUnitOfMeasureEan entity.
   */
  static _keys = ['Product', 'AlternativeUnit', 'ConsecutiveNumber'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Unit.
   * Maximum length: 3.
   */
  declare alternativeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Consecutive Number.
   * Maximum length: 5.
   */
  declare consecutiveNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Iso Unit.
   * Maximum length: 3.
   */
  declare alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Standard Id.
   * Maximum length: 18.
   */
  declare productStandardId: DeserializedType<T, 'Edm.String'>;
  /**
   * International Article Number Cat.
   * Maximum length: 2.
   */
  declare internationalArticleNumberCat: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Main Global Trade Item Number.
   */
  declare isMainGlobalTradeItemNumber: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductUnitOfMeasure} entity.
   */
  declare productUnitOfMeasure?: ProductUnitOfMeasure<T> | null;

  constructor(_entityApi: ProductUnitOfMeasureEanApi<T>) {
    super(_entityApi);
  }
}

export interface ProductUnitOfMeasureEanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  alternativeUnit: DeserializedType<T, 'Edm.String'>;
  consecutiveNumber: DeserializedType<T, 'Edm.String'>;
  alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  productStandardId: DeserializedType<T, 'Edm.String'>;
  internationalArticleNumberCat: DeserializedType<T, 'Edm.String'>;
  isMainGlobalTradeItemNumber: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productUnitOfMeasure?: ProductUnitOfMeasureType<T> | null;
}
