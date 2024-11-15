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
import type { ProductEwmWarehouseApi } from './ProductEwmWarehouseApi';
import { Product, ProductType } from './Product';
import {
  ProductEwmStorageType,
  ProductEwmStorageTypeType
} from './ProductEwmStorageType';
/**
 * This class represents the entity "ProductEWMWarehouse" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductEwmWarehouse<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductEwmWarehouseType<T>
{
  /**
   * Technical entity name for ProductEwmWarehouse.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductEwmWarehouse entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Warehouse.
   * Maximum length: 4.
   */
  ewmWarehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * Entitled To Dispose Party.
   * Maximum length: 10.
   */
  entitledToDisposeParty: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Internal Uuid.
   * @nullable
   */
  productInternalUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Supply Chain Unit Uuid.
   * @nullable
   */
  supplyChainUnitUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Ewm Party Entitled To Dispose Uuid.
   * @nullable
   */
  ewmPartyEntitledToDisposeUuid?: DeserializedType<T, 'Edm.Guid'> | null;
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
   * Ewm Product Process Block Profile.
   * Maximum length: 2.
   */
  ewmProductProcessBlockProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Process Type Control Code.
   * Maximum length: 2.
   */
  ewmProcessTypeControlCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stgg Area Determination Group.
   * Maximum length: 4.
   */
  ewmStggAreaDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Required Min Shelf Life.
   */
  requiredMinShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Ptwy Control Strategy.
   * Maximum length: 4.
   */
  ewmPtwyControlStrategy: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Storage Section Method.
   * Maximum length: 4.
   */
  ewmStorageSectionMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Storage Bin Type.
   * Maximum length: 4.
   */
  ewmStorageBinType: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Bulk Storage Method.
   * Maximum length: 2.
   */
  ewmBulkStorageMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stock Removal Control Strategy.
   * Maximum length: 4.
   */
  ewmStockRemovalControlStrategy: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stock Determination Group.
   * Maximum length: 2.
   */
  ewmStockDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Phys Inventory Counting Cycle.
   * Maximum length: 1.
   */
  ewmPhysInventoryCountingCycle: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Preferred Unit.
   * Maximum length: 3.
   */
  ewmPreferredUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Preferred Unit Iso Code.
   * Maximum length: 3.
   */
  ewmPreferredUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Quality Inspection Group.
   * Maximum length: 4.
   */
  ewmQualityInspectionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductEwmStorageType} entity.
   */
  productEwmStorageType: ProductEwmStorageType<T>[];
  constructor(_entityApi: ProductEwmWarehouseApi<T>);
}
export interface ProductEwmWarehouseType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  ewmWarehouse: DeserializedType<T, 'Edm.String'>;
  entitledToDisposeParty: DeserializedType<T, 'Edm.String'>;
  productInternalUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  supplyChainUnitUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  ewmPartyEntitledToDisposeUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  ewmProductProcessBlockProfile: DeserializedType<T, 'Edm.String'>;
  ewmProcessTypeControlCode: DeserializedType<T, 'Edm.String'>;
  ewmStggAreaDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  requiredMinShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  ewmPtwyControlStrategy: DeserializedType<T, 'Edm.String'>;
  ewmStorageSectionMethod: DeserializedType<T, 'Edm.String'>;
  ewmStorageBinType: DeserializedType<T, 'Edm.String'>;
  ewmBulkStorageMethod: DeserializedType<T, 'Edm.String'>;
  ewmStockRemovalControlStrategy: DeserializedType<T, 'Edm.String'>;
  ewmStockDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  ewmPhysInventoryCountingCycle: DeserializedType<T, 'Edm.String'>;
  ewmPreferredUnit: DeserializedType<T, 'Edm.String'>;
  ewmPreferredUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmQualityInspectionGroup: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productEwmStorageType: ProductEwmStorageTypeType<T>[];
}
