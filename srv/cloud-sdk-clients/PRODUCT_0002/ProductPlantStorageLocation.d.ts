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
import type { ProductPlantStorageLocationApi } from './ProductPlantStorageLocationApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantStorageLocation" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantStorageLocation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantStorageLocationType<T>
{
  /**
   * Technical entity name for ProductPlantStorageLocation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantStorageLocation entity.
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
   * Storage Location.
   * Maximum length: 4.
   */
  storageLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Storage Bin.
   * Maximum length: 10.
   */
  warehouseStorageBin: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
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
  constructor(_entityApi: ProductPlantStorageLocationApi<T>);
}
export interface ProductPlantStorageLocationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  storageLocation: DeserializedType<T, 'Edm.String'>;
  warehouseStorageBin: DeserializedType<T, 'Edm.String'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
