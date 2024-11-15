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
import type { ProductPlantStorageApi } from './ProductPlantStorageApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantStorage" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantStorage<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantStorageType<T>
{
  /**
   * Technical entity name for ProductPlantStorage.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantStorage entity.
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
   * Phys Inventory For Cycle Counting.
   * Maximum length: 1.
   */
  physInventoryForCycleCounting: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Storage Period.
   */
  maximumStoragePeriod: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prod Maximum Storage Period Unit.
   * Maximum length: 3.
   */
  prodMaximumStoragePeriodUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Storage Period Iso Unit.
   * Maximum length: 3.
   */
  maximumStoragePeriodIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Cycle Counting Indicator Is Fixed.
   */
  cycleCountingIndicatorIsFixed: DeserializedType<T, 'Edm.Boolean'>;
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
  constructor(_entityApi: ProductPlantStorageApi<T>);
}
export interface ProductPlantStorageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  physInventoryForCycleCounting: DeserializedType<T, 'Edm.String'>;
  maximumStoragePeriod: DeserializedType<T, 'Edm.Decimal'>;
  prodMaximumStoragePeriodUnit: DeserializedType<T, 'Edm.String'>;
  maximumStoragePeriodIsoUnit: DeserializedType<T, 'Edm.String'>;
  cycleCountingIndicatorIsFixed: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
