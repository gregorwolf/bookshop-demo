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
import type { ProductEwmStorageTypeApi } from './ProductEwmStorageTypeApi';
import { Product, ProductType } from './Product';
import {
  ProductEwmWarehouse,
  ProductEwmWarehouseType
} from './ProductEwmWarehouse';
/**
 * This class represents the entity "ProductEWMStorageType" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductEwmStorageType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductEwmStorageTypeType<T>
{
  /**
   * Technical entity name for ProductEwmStorageType.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductEwmStorageType entity.
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
   * Ewm Storage Type.
   * Maximum length: 4.
   */
  ewmStorageType: DeserializedType<T, 'Edm.String'>;
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
   * Ewm Maximum Number Of Bins.
   * Maximum length: 3.
   */
  ewmMaximumNumberOfBins: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Maximum Storage Quantity.
   */
  ewmMaximumStorageQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Max Stor Quantity Base Unit.
   * Maximum length: 3.
   */
  ewmMaxStorQuantityBaseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Max Stor Qty Base Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMaxStorQtyBaseUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Max Stor Quantity Display Unit.
   * Maximum length: 3.
   */
  ewmMaxStorQuantityDisplayUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Max Storage Qty Dsp Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMaxStorageQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Minimum Storage Quantity.
   */
  ewmMinimumStorageQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Min Stor Quantity Base Unit.
   * Maximum length: 3.
   */
  ewmMinStorQuantityBaseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Stor Qty Base Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMinStorQtyBaseUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Stor Quantity Display Unit.
   * Maximum length: 3.
   */
  ewmMinStorQuantityDisplayUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Storage Qty Dsp Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMinStorageQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Replnmt Quantity.
   */
  ewmMinReplnmtQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Min Replnmt Qty Base Unit.
   * Maximum length: 3.
   */
  ewmMinReplnmtQtyBaseUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Replnmt Qty Bs Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMinReplnmtQtyBsUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Replnmt Qty Display Unit.
   * Maximum length: 3.
   */
  ewmMinReplnmtQtyDisplayUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Replnmt Qty Dsp Unit Iso Code.
   * Maximum length: 3.
   */
  ewmMinReplnmtQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Min Stor Qty Of Max Stor Qty In Pct.
   */
  ewmMinStorQtyOfMaxStorQtyInPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Splt Ptwy Threshold In Percent.
   */
  ewmSpltPtwyThresholdInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ewm Prod Is Split On Ptwy.
   */
  ewmProdIsSplitOnPtwy: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Ewm Prod Is Skipped On Ptwy.
   */
  ewmProdIsSkippedOnPtwy: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Ewm Has No Replenishment.
   */
  ewmHasNoReplenishment: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Ewm Storage Bin Search Rule.
   * Maximum length: 1.
   */
  ewmStorageBinSearchRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Prod Quantity Classification.
   * Maximum length: 1.
   */
  ewmProdQuantityClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Prod Ptwy Qty Classification.
   * Maximum length: 1.
   */
  ewmProdPtwyQtyClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Ewm Ptwy Sequence.
   * Maximum length: 2.
   */
  ewmPtwySequence: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductEwmWarehouse} entity.
   */
  productEwmWarehouse?: ProductEwmWarehouse<T> | null;
  constructor(_entityApi: ProductEwmStorageTypeApi<T>);
}
export interface ProductEwmStorageTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  ewmWarehouse: DeserializedType<T, 'Edm.String'>;
  entitledToDisposeParty: DeserializedType<T, 'Edm.String'>;
  ewmStorageType: DeserializedType<T, 'Edm.String'>;
  productInternalUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  supplyChainUnitUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  ewmPartyEntitledToDisposeUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  ewmStorageSectionMethod: DeserializedType<T, 'Edm.String'>;
  ewmStorageBinType: DeserializedType<T, 'Edm.String'>;
  ewmMaximumNumberOfBins: DeserializedType<T, 'Edm.String'>;
  ewmMaximumStorageQuantity: DeserializedType<T, 'Edm.Decimal'>;
  ewmMaxStorQuantityBaseUnit: DeserializedType<T, 'Edm.String'>;
  ewmMaxStorQtyBaseUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMaxStorQuantityDisplayUnit: DeserializedType<T, 'Edm.String'>;
  ewmMaxStorageQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMinimumStorageQuantity: DeserializedType<T, 'Edm.Decimal'>;
  ewmMinStorQuantityBaseUnit: DeserializedType<T, 'Edm.String'>;
  ewmMinStorQtyBaseUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMinStorQuantityDisplayUnit: DeserializedType<T, 'Edm.String'>;
  ewmMinStorageQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMinReplnmtQuantity: DeserializedType<T, 'Edm.Decimal'>;
  ewmMinReplnmtQtyBaseUnit: DeserializedType<T, 'Edm.String'>;
  ewmMinReplnmtQtyBsUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMinReplnmtQtyDisplayUnit: DeserializedType<T, 'Edm.String'>;
  ewmMinReplnmtQtyDspUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  ewmMinStorQtyOfMaxStorQtyInPct: DeserializedType<T, 'Edm.Decimal'>;
  ewmSpltPtwyThresholdInPercent: DeserializedType<T, 'Edm.Decimal'>;
  ewmProdIsSplitOnPtwy: DeserializedType<T, 'Edm.Boolean'>;
  ewmProdIsSkippedOnPtwy: DeserializedType<T, 'Edm.Boolean'>;
  ewmHasNoReplenishment: DeserializedType<T, 'Edm.Boolean'>;
  ewmStorageBinSearchRule: DeserializedType<T, 'Edm.String'>;
  ewmProdQuantityClassification: DeserializedType<T, 'Edm.String'>;
  ewmProdPtwyQtyClassification: DeserializedType<T, 'Edm.String'>;
  ewmPtwySequence: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productEwmWarehouse?: ProductEwmWarehouseType<T> | null;
}
