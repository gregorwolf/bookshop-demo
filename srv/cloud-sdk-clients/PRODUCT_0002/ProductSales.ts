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
export class ProductSales<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSalesType<T>
{
  /**
   * Technical entity name for ProductSales.
   */
  static override _entityName = 'ProductSales';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductSales entity.
   */
  static _keys = ['Product'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Status.
   * Maximum length: 2.
   */
  declare salesStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Status Validity Date.
   * @nullable
   */
  declare salesStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Transportation Group.
   * Maximum length: 4.
   */
  declare transportationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Packaging Product Type.
   * Maximum length: 4.
   */
  declare packagingProductType: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowed Packaging Weight Qty.
   */
  declare allowedPackagingWeightQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Packaging Weight Qty Unit.
   * Maximum length: 3.
   */
  declare allowedPackagingWeightQtyUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allwd Packaging Weight Qty Iso Unit.
   * Maximum length: 3.
   */
  declare allwdPackagingWeightQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowed Packaging Volume Qty.
   */
  declare allowedPackagingVolumeQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Packaging Volume Qty Unit.
   * Maximum length: 3.
   */
  declare allowedPackagingVolumeQtyUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Allwd Packaging Volume Qty Iso Unit.
   * Maximum length: 3.
   */
  declare allwdPackagingVolumeQtyIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Level By Volume In Percent.
   */
  declare maximumLevelByVolumeInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excess Weight Tolerance Value.
   */
  declare excessWeightToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packgg Product Is Closed Packaging.
   */
  declare packggProductIsClosedPackaging: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Stacking Factor.
   */
  declare productStackingFactor: DeserializedType<T, 'Edm.Int16'>;
  /**
   * Prod Excess Volume Tolerance Value.
   */
  declare prodExcessVolumeToleranceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;

  constructor(_entityApi: ProductSalesApi<T>) {
    super(_entityApi);
  }
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
