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
import type { ProductProcurementApi } from './ProductProcurementApi';
import { Product, ProductType } from './Product';
/**
 * This class represents the entity "ProductProcurement" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductProcurement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductProcurementType<T>
{
  /**
   * Technical entity name for ProductProcurement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductProcurement entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Quantity Unit.
   * Maximum length: 3.
   */
  purchaseOrderQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Quantity Iso Unit.
   * Maximum length: 3.
   */
  purchaseOrderQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Varbl Pur Ord Unit Status.
   * Maximum length: 1.
   */
  varblPurOrdUnitStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Ackn Profile.
   * Maximum length: 4.
   */
  purchasingAcknProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  constructor(_entityApi: ProductProcurementApi<T>);
}
export interface ProductProcurementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  purchaseOrderQuantityUnit: DeserializedType<T, 'Edm.String'>;
  purchaseOrderQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  varblPurOrdUnitStatus: DeserializedType<T, 'Edm.String'>;
  purchasingAcknProfile: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
