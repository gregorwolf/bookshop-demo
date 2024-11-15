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
import type { ProductStorageApi } from './ProductStorageApi';
import { Product, ProductType } from './Product';
/**
 * This class represents the entity "ProductStorage" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductStorage<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductStorageType<T>
{
  /**
   * Technical entity name for ProductStorage.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductStorage entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Conditions.
   * Maximum length: 2.
   */
  storageConditions: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Temperature Condition Code.
   * Maximum length: 2.
   */
  prodTemperatureConditionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Hazardous Product.
   * Maximum length: 18.
   */
  hazardousProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Nmbr Of Gr Or Gi Slips To Print Qty.
   */
  nmbrOfGrOrGiSlipsToPrintQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Label Type.
   * Maximum length: 2.
   */
  labelType: DeserializedType<T, 'Edm.String'>;
  /**
   * Label Form.
   * Maximum length: 2.
   */
  labelForm: DeserializedType<T, 'Edm.String'>;
  /**
   * Min Remaining Shelf Life.
   */
  minRemainingShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Expiration Date Type.
   * Maximum length: 1.
   */
  productExpirationDateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Bin Instruction.
   * Maximum length: 2.
   */
  storageBinInstruction: DeserializedType<T, 'Edm.String'>;
  /**
   * Shelf Life Expiration Date Period.
   * Maximum length: 1.
   */
  shelfLifeExpirationDatePeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Shelf Life Exprtn Date Rndng Rule.
   * Maximum length: 1.
   */
  shelfLifeExprtnDateRndngRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Shelf Life Storage Percent.
   */
  totalShelfLifeStoragePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Shelf Life.
   */
  totalShelfLife: DeserializedType<T, 'Edm.Decimal'>;
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
  constructor(_entityApi: ProductStorageApi<T>);
}
export interface ProductStorageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  storageConditions: DeserializedType<T, 'Edm.String'>;
  prodTemperatureConditionCode: DeserializedType<T, 'Edm.String'>;
  hazardousProduct: DeserializedType<T, 'Edm.String'>;
  nmbrOfGrOrGiSlipsToPrintQty: DeserializedType<T, 'Edm.Decimal'>;
  labelType: DeserializedType<T, 'Edm.String'>;
  labelForm: DeserializedType<T, 'Edm.String'>;
  minRemainingShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  productExpirationDateType: DeserializedType<T, 'Edm.String'>;
  storageBinInstruction: DeserializedType<T, 'Edm.String'>;
  shelfLifeExpirationDatePeriod: DeserializedType<T, 'Edm.String'>;
  shelfLifeExprtnDateRndngRule: DeserializedType<T, 'Edm.String'>;
  totalShelfLifeStoragePercent: DeserializedType<T, 'Edm.Decimal'>;
  totalShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
