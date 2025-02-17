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
import type { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantProcurement" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantProcurement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantProcurementType<T>
{
  /**
   * Technical entity name for ProductPlantProcurement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantProcurement entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Auto Pur Ord Creation Allowed.
   */
  isAutoPurOrdCreationAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Source List Required.
   */
  isSourceListRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Just In Time Delivery Schedule Code.
   * Maximum length: 1.
   */
  justInTimeDeliveryScheduleCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   */
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Of Supply Category.
   * Maximum length: 1.
   */
  sourceOfSupplyCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  productPlant?: ProductPlant<T> | null;
  constructor(_entityApi: ProductPlantProcurementApi<T>);
}
export interface ProductPlantProcurementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  isAutoPurOrdCreationAllowed: DeserializedType<T, 'Edm.Boolean'>;
  isSourceListRequired: DeserializedType<T, 'Edm.Boolean'>;
  justInTimeDeliveryScheduleCode: DeserializedType<T, 'Edm.String'>;
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  sourceOfSupplyCategory: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
