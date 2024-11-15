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
export class ProductPlantMrp<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantMrpType<T>
{
  /**
   * Technical entity name for ProductPlantMrp.
   */
  static override _entityName = 'ProductPlantMRP';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantMrp entity.
   */
  static _keys = ['Product', 'MRPArea', 'Plant'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Area.
   * Maximum length: 10.
   */
  declare mrpArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Type.
   * Maximum length: 2.
   */
  declare mrpType: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Responsible.
   * Maximum length: 3.
   */
  declare mrpResponsible: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Group.
   * Maximum length: 4.
   */
  declare mrpGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Reorder Threshold Quantity.
   */
  declare reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan And Order Day Determination.
   * Maximum length: 3.
   */
  declare planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Time Fence.
   * Maximum length: 3.
   */
  declare planningTimeFence: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Sizing Procedure.
   * Maximum length: 2.
   */
  declare lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  declare roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Size Rounding Quantity.
   */
  declare lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Lot Size Quantity.
   */
  declare minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Lot Size Quantity.
   */
  declare maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Stock Quantity.
   */
  declare maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assembly Scrap Percent.
   */
  declare assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Sub Type.
   * Maximum length: 2.
   */
  declare procurementSubType: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Invtry Managed Loc.
   * Maximum length: 4.
   */
  declare productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  /**
   * Dflt Storage Location Ext Procmt.
   * Maximum length: 4.
   */
  declare dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Planning Calendar.
   * Maximum length: 3.
   */
  declare mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Safety Stock Quantity.
   */
  declare safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Range Of Cvrg Prfl Code.
   * Maximum length: 3.
   */
  declare rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Safety Supply Duration In Days.
   * Maximum length: 2.
   */
  declare safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Lot Size Quantity.
   */
  declare fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Size Independent Costs.
   */
  declare lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   */
  declare storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Service Level In Percent.
   */
  declare productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Marked For Deletion.
   */
  declare isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Safety Time Period Profile.
   * Maximum length: 3.
   */
  declare safetyTimePeriodProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependent Rqmt Mrp Relevance.
   * Maximum length: 1.
   */
  declare dependentRqmtMrpRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Safety Time Mrp Relevance.
   * Maximum length: 1.
   */
  declare productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Delivery Duration In Days.
   */
  declare plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Planned Delivery Time.
   */
  declare isPlannedDeliveryTime: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Rqmt Qty Rcpt Takt Tme In Wrkg Days.
   */
  declare rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Safety Stock Method.
   * Maximum length: 2.
   */
  declare mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   * Maximum length: 3.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductPlantMrpApi<T>) {
    super(_entityApi);
  }
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
