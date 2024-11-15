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
import type { ProductUnitOfMeasureApi } from './ProductUnitOfMeasureApi';
import { Product, ProductType } from './Product';
import {
  ProductUnitOfMeasureEan,
  ProductUnitOfMeasureEanType
} from './ProductUnitOfMeasureEan';

/**
 * This class represents the entity "ProductUnitOfMeasure" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductUnitOfMeasure<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitOfMeasureType<T>
{
  /**
   * Technical entity name for ProductUnitOfMeasure.
   */
  static override _entityName = 'ProductUnitOfMeasure';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductUnitOfMeasure entity.
   */
  static _keys = ['Product', 'AlternativeUnit'];
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
   * Alternative Sap Unit.
   * Maximum length: 3.
   */
  declare alternativeSapUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Iso Unit.
   * Maximum length: 3.
   */
  declare alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Numerator.
   */
  declare quantityNumerator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Volume Unit.
   * Maximum length: 3.
   */
  declare volumeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Iso Unit.
   * Maximum length: 3.
   */
  declare volumeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Gross Weight.
   */
  declare grossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Weight Unit.
   * Maximum length: 3.
   */
  declare weightUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Weight Iso Unit.
   * Maximum length: 3.
   */
  declare weightIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Global Trade Item Number.
   * Maximum length: 18.
   */
  declare globalTradeItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Global Trade Item Number Category.
   * Maximum length: 2.
   */
  declare globalTradeItemNumberCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Specific Product Length.
   */
  declare unitSpecificProductLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Specific Product Width.
   */
  declare unitSpecificProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Specific Product Height.
   */
  declare unitSpecificProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Measurement Unit.
   * Maximum length: 3.
   */
  declare productMeasurementUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Measurement Iso Unit.
   * Maximum length: 3.
   */
  declare productMeasurementIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Lower Level Packaging Unit.
   * Maximum length: 3.
   */
  declare lowerLevelPackagingUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Lower Level Packaging Iso Unit.
   * Maximum length: 3.
   */
  declare lowerLevelPackagingIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Stacking Factor.
   */
  declare maximumStackingFactor: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Capacity Usage.
   */
  declare capacityUsage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  declare baseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Iso Unit.
   * Maximum length: 3.
   */
  declare baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasureEan} entity.
   */
  declare productUnitOfMeasureEan: ProductUnitOfMeasureEan<T>[];

  constructor(_entityApi: ProductUnitOfMeasureApi<T>) {
    super(_entityApi);
  }
}

export interface ProductUnitOfMeasureType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  alternativeUnit: DeserializedType<T, 'Edm.String'>;
  alternativeSapUnit: DeserializedType<T, 'Edm.String'>;
  alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  quantityNumerator: DeserializedType<T, 'Edm.Decimal'>;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  volumeUnit: DeserializedType<T, 'Edm.String'>;
  volumeIsoUnit: DeserializedType<T, 'Edm.String'>;
  grossWeight: DeserializedType<T, 'Edm.Decimal'>;
  weightUnit: DeserializedType<T, 'Edm.String'>;
  weightIsoUnit: DeserializedType<T, 'Edm.String'>;
  globalTradeItemNumber: DeserializedType<T, 'Edm.String'>;
  globalTradeItemNumberCategory: DeserializedType<T, 'Edm.String'>;
  unitSpecificProductLength: DeserializedType<T, 'Edm.Decimal'>;
  unitSpecificProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  unitSpecificProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  productMeasurementUnit: DeserializedType<T, 'Edm.String'>;
  productMeasurementIsoUnit: DeserializedType<T, 'Edm.String'>;
  lowerLevelPackagingUnit: DeserializedType<T, 'Edm.String'>;
  lowerLevelPackagingIsoUnit: DeserializedType<T, 'Edm.String'>;
  maximumStackingFactor: DeserializedType<T, 'Edm.Byte'>;
  capacityUsage: DeserializedType<T, 'Edm.Decimal'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productUnitOfMeasureEan: ProductUnitOfMeasureEanType<T>[];
}
