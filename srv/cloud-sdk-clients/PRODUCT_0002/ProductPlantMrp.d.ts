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
import type { ProductPlantMrpApi } from './ProductPlantMrpApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantMRP" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantMrp<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantMrpType<T>
{
  /**
   * Technical entity name for ProductPlantMrp.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantMrp entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Area.
   * Maximum length: 10.
   */
  mrpArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Type.
   * Maximum length: 2.
   */
  mrpType: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Responsible.
   * Maximum length: 3.
   */
  mrpResponsible: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Group.
   * Maximum length: 4.
   */
  mrpGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Reorder Threshold Quantity.
   */
  reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan And Order Day Determination.
   * Maximum length: 3.
   */
  planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Time Fence.
   * Maximum length: 3.
   */
  planningTimeFence: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Sizing Procedure.
   * Maximum length: 2.
   */
  lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Size Rounding Quantity.
   */
  lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Lot Size Quantity.
   */
  minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Lot Size Quantity.
   */
  maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Stock Quantity.
   */
  maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assembly Scrap Percent.
   */
  assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Sub Type.
   * Maximum length: 2.
   */
  procurementSubType: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Invtry Managed Loc.
   * Maximum length: 4.
   */
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  /**
   * Dflt Storage Location Ext Procmt.
   * Maximum length: 4.
   */
  dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Planning Calendar.
   * Maximum length: 3.
   */
  mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Safety Stock Quantity.
   */
  safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Range Of Cvrg Prfl Code.
   * Maximum length: 3.
   */
  rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Safety Supply Duration In Days.
   * Maximum length: 2.
   */
  safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Lot Size Quantity.
   */
  fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Size Independent Costs.
   */
  lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   */
  storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Service Level In Percent.
   */
  productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Safety Time Period Profile.
   * Maximum length: 3.
   */
  safetyTimePeriodProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependent Rqmt Mrp Relevance.
   * Maximum length: 1.
   */
  dependentRqmtMrpRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Safety Time Mrp Relevance.
   * Maximum length: 1.
   */
  productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Delivery Duration In Days.
   */
  plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Planned Delivery Time.
   */
  isPlannedDeliveryTime: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Rqmt Qty Rcpt Takt Tme In Wrkg Days.
   */
  rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Safety Stock Method.
   * Maximum length: 2.
   */
  mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   * Maximum length: 3.
   */
  currency: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  productPlant?: ProductPlant<T> | null;
  constructor(_entityApi: ProductPlantMrpApi<T>);
}
export interface ProductPlantMrpType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  mrpArea: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  mrpType: DeserializedType<T, 'Edm.String'>;
  mrpResponsible: DeserializedType<T, 'Edm.String'>;
  mrpGroup: DeserializedType<T, 'Edm.String'>;
  reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  planningTimeFence: DeserializedType<T, 'Edm.String'>;
  lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  procurementSubType: DeserializedType<T, 'Edm.String'>;
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  safetyTimePeriodProfile: DeserializedType<T, 'Edm.String'>;
  dependentRqmtMrpRelevance: DeserializedType<T, 'Edm.String'>;
  productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
  plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  isPlannedDeliveryTime: DeserializedType<T, 'Edm.Boolean'>;
  rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
