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
export declare class ProductUnitOfMeasureEan<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitOfMeasureEanType<T>
{
  /**
   * Technical entity name for ProductUnitOfMeasureEan.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductUnitOfMeasureEan entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Unit.
   * Maximum length: 3.
   */
  alternativeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Consecutive Number.
   * Maximum length: 5.
   */
  consecutiveNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Iso Unit.
   * Maximum length: 3.
   */
  alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Standard Id.
   * Maximum length: 18.
   */
  productStandardId: DeserializedType<T, 'Edm.String'>;
  /**
   * International Article Number Cat.
   * Maximum length: 2.
   */
  internationalArticleNumberCat: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Main Global Trade Item Number.
   */
  isMainGlobalTradeItemNumber: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductUnitOfMeasure} entity.
   */
  productUnitOfMeasure?: ProductUnitOfMeasure<T> | null;
  constructor(_entityApi: ProductUnitOfMeasureEanApi<T>);
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
