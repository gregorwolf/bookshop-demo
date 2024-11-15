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
export class ProductPlantStorageLocation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantStorageLocationType<T>
{
  /**
   * Technical entity name for ProductPlantStorageLocation.
   */
  static override _entityName = 'ProductPlantStorageLocation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantStorageLocation entity.
   */
  static _keys = ['Product', 'Plant', 'StorageLocation'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Location.
   * Maximum length: 4.
   */
  declare storageLocation: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Storage Bin.
   * Maximum length: 10.
   */
  declare warehouseStorageBin: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  declare isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  declare productPlant?: ProductPlant<T> | null;

  constructor(_entityApi: ProductPlantStorageLocationApi<T>) {
    super(_entityApi);
  }
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
