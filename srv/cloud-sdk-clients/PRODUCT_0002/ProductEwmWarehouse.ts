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
export class ProductEwmWarehouse<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductEwmWarehouseType<T>
{
  /**
   * Technical entity name for ProductEwmWarehouse.
   */
  static override _entityName = 'ProductEWMWarehouse';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductEwmWarehouse entity.
   */
  static _keys = ['Product', 'EWMWarehouse', 'EntitledToDisposeParty'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Warehouse.
   * Maximum length: 4.
   */
  declare ewmWarehouse: DeserializedType<T, 'Edm.String'>;
  /**
   * Entitled To Dispose Party.
   * Maximum length: 10.
   */
  declare entitledToDisposeParty: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Internal Uuid.
   * @nullable
   */
  declare productInternalUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Supply Chain Unit Uuid.
   * @nullable
   */
  declare supplyChainUnitUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Ewm Party Entitled To Dispose Uuid.
   * @nullable
   */
  declare ewmPartyEntitledToDisposeUuid?: DeserializedType<
    T,
    'Edm.Guid'
  > | null;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  declare baseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Iso Unit.
   * Maximum length: 3.
   */
  declare baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Product Process Block Profile.
   * Maximum length: 2.
   */
  declare ewmProductProcessBlockProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Process Type Control Code.
   * Maximum length: 2.
   */
  declare ewmProcessTypeControlCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stgg Area Determination Group.
   * Maximum length: 4.
   */
  declare ewmStggAreaDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Required Min Shelf Life.
   */
  declare requiredMinShelfLife: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Ptwy Control Strategy.
   * Maximum length: 4.
   */
  declare ewmPtwyControlStrategy: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Storage Section Method.
   * Maximum length: 4.
   */
  declare ewmStorageSectionMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Storage Bin Type.
   * Maximum length: 4.
   */
  declare ewmStorageBinType: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Bulk Storage Method.
   * Maximum length: 2.
   */
  declare ewmBulkStorageMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stock Removal Control Strategy.
   * Maximum length: 4.
   */
  declare ewmStockRemovalControlStrategy: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Stock Determination Group.
   * Maximum length: 2.
   */
  declare ewmStockDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Phys Inventory Counting Cycle.
   * Maximum length: 1.
   */
  declare ewmPhysInventoryCountingCycle: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Preferred Unit.
   * Maximum length: 3.
   */
  declare ewmPreferredUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Preferred Unit Iso Code.
   * Maximum length: 3.
   */
  declare ewmPreferredUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Quality Inspection Group.
   * Maximum length: 4.
   */
  declare ewmQualityInspectionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductEwmStorageType} entity.
   */
  declare productEwmStorageType: ProductEwmStorageType<T>[];

  constructor(_entityApi: ProductEwmWarehouseApi<T>) {
    super(_entityApi);
  }
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
