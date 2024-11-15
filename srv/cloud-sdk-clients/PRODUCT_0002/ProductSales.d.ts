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
import type { ProductSalesApi } from './ProductSalesApi';
import { Product, ProductType } from './Product';
/**
 * This class represents the entity "ProductSales" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductSales<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSalesType<T>
{
  /**
   * Technical entity name for ProductSales.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductSales entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Status.
   * Maximum length: 2.
   */
  salesStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Status Validity Date.
   * @nullable
   */
  salesStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Transportation Group.
   * Maximum length: 4.
   */
  transportationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Packaging Product Type.
   * Maximum length: 4.
   */
  packagingProductType: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowed Packaging Weight Qty.
   */
  allowedPackagingWeightQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Packaging Weight Qty Unit.
   * Maximum length: 3.
   */
  allowedPackagingWeightQtyUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allwd Packaging Weight Qty Iso Unit.
   * Maximum length: 3.
   */
  allwdPackagingWeightQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowed Packaging Volume Qty.
   */
  allowedPackagingVolumeQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Packaging Volume Qty Unit.
   * Maximum length: 3.
   */
  allowedPackagingVolumeQtyUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allwd Packaging Volume Qty Iso Unit.
   * Maximum length: 3.
   */
  allwdPackagingVolumeQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Level By Volume In Percent.
   */
  maximumLevelByVolumeInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excess Weight Tolerance Value.
   */
  excessWeightToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packgg Product Is Closed Packaging.
   */
  packggProductIsClosedPackaging: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Stacking Factor.
   */
  productStackingFactor: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Prod Excess Volume Tolerance Value.
   */
  prodExcessVolumeToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  constructor(_entityApi: ProductSalesApi<T>);
}
export interface ProductSalesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  salesStatus: DeserializedType<T, 'Edm.String'>;
  salesStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  transportationGroup: DeserializedType<T, 'Edm.String'>;
  packagingProductType: DeserializedType<T, 'Edm.String'>;
  allowedPackagingWeightQty: DeserializedType<T, 'Edm.Decimal'>;
  allowedPackagingWeightQtyUnit: DeserializedType<T, 'Edm.String'>;
  allwdPackagingWeightQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  allowedPackagingVolumeQty: DeserializedType<T, 'Edm.Decimal'>;
  allowedPackagingVolumeQtyUnit: DeserializedType<T, 'Edm.String'>;
  allwdPackagingVolumeQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  maximumLevelByVolumeInPercent: DeserializedType<T, 'Edm.Decimal'>;
  excessWeightToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  packggProductIsClosedPackaging: DeserializedType<T, 'Edm.Boolean'>;
  productStackingFactor: DeserializedType<T, 'Edm.Int16'>;
  prodExcessVolumeToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
