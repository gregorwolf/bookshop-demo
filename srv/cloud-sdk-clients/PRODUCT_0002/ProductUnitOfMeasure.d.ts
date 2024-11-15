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
export declare class ProductUnitOfMeasure<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitOfMeasureType<T>
{
  /**
   * Technical entity name for ProductUnitOfMeasure.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductUnitOfMeasure entity.
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
   * Alternative Sap Unit.
   * Maximum length: 3.
   */
  alternativeSapUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Alternative Iso Unit.
   * Maximum length: 3.
   */
  alternativeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Numerator.
   */
  quantityNumerator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Denominator.
   */
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Volume.
   */
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Volume Unit.
   * Maximum length: 3.
   */
  volumeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Iso Unit.
   * Maximum length: 3.
   */
  volumeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Gross Weight.
   */
  grossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Weight Unit.
   * Maximum length: 3.
   */
  weightUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Weight Iso Unit.
   * Maximum length: 3.
   */
  weightIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Global Trade Item Number.
   * Maximum length: 18.
   */
  globalTradeItemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Global Trade Item Number Category.
   * Maximum length: 2.
   */
  globalTradeItemNumberCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Specific Product Length.
   */
  unitSpecificProductLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Specific Product Width.
   */
  unitSpecificProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Specific Product Height.
   */
  unitSpecificProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Measurement Unit.
   * Maximum length: 3.
   */
  productMeasurementUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Measurement Iso Unit.
   * Maximum length: 3.
   */
  productMeasurementIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Lower Level Packaging Unit.
   * Maximum length: 3.
   */
  lowerLevelPackagingUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Lower Level Packaging Iso Unit.
   * Maximum length: 3.
   */
  lowerLevelPackagingIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Stacking Factor.
   */
  maximumStackingFactor: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Capacity Usage.
   */
  capacityUsage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  baseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Iso Unit.
   * Maximum length: 3.
   */
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasureEan} entity.
   */
  productUnitOfMeasureEan: ProductUnitOfMeasureEan<T>[];
  constructor(_entityApi: ProductUnitOfMeasureApi<T>);
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
