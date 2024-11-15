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
import type { ProductPlantSupplyPlanningApi } from './ProductPlantSupplyPlanningApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantSupplyPlanning" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantSupplyPlanning<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantSupplyPlanningType<T>
{
  /**
   * Technical entity name for ProductPlantSupplyPlanning.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantSupplyPlanning entity.
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
   * Fixed Lot Size Quantity.
   */
  fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Lot Size Quantity.
   */
  maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Lot Size Quantity.
   */
  minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Size Rounding Quantity.
   */
  lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Sizing Procedure.
   * Maximum length: 2.
   */
  lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
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
   * Safety Stock Quantity.
   */
  safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Safety Stock Quantity.
   */
  minimumSafetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planning Time Fence.
   * Maximum length: 3.
   */
  planningTimeFence: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Value Category.
   * Maximum length: 1.
   */
  consumptionValueCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Stock Quantity.
   */
  maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reorder Threshold Quantity.
   */
  reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Delivery Duration In Days.
   */
  plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safety Supply Duration In Days.
   * Maximum length: 2.
   */
  safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Strategy Group.
   * Maximum length: 2.
   */
  planningStrategyGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Replenishment Lead Time.
   */
  totalReplenishmentLeadTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Type.
   * Maximum length: 1.
   */
  procurementType: DeserializedType<T, 'Edm.String'>;
  /**
   * Procurement Sub Type.
   * Maximum length: 2.
   */
  procurementSubType: DeserializedType<T, 'Edm.String'>;
  /**
   * Assembly Scrap Percent.
   */
  assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Availability Check Type.
   * Maximum length: 2.
   */
  availabilityCheckType: DeserializedType<T, 'Edm.String'>;
  /**
   * Goods Receipt Duration.
   */
  goodsReceiptDuration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan And Order Day Determination.
   * Maximum length: 3.
   */
  planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Dflt Storage Location Ext Procmt.
   * Maximum length: 4.
   */
  dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Group.
   * Maximum length: 4.
   */
  mrpGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Size Independent Costs.
   */
  lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rqmt Qty Rcpt Takt Tme In Wrkg Days.
   */
  rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Planning Calendar.
   * Maximum length: 3.
   */
  mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Range Of Cvrg Prfl Code.
   * Maximum length: 3.
   */
  rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Safety Time Mrp Relevance.
   * Maximum length: 1.
   */
  productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
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
   * Product Service Level In Percent.
   */
  productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prod Inh Prodn Duration In Work Days.
   */
  prodInhProdnDurationInWorkDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Availability Type.
   * Maximum length: 1.
   */
  mrpAvailabilityType: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Project Product.
   * Maximum length: 1.
   */
  crossProjectProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   */
  storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Follow Up Product.
   * Maximum length: 18.
   */
  followUpProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Repetitive Manufacturing Is Allwd.
   */
  repetitiveManufacturingIsAllwd: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Dependent Requirements Type.
   * Maximum length: 1.
   */
  dependentRequirementsType: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Bulk Component.
   */
  productIsBulkComponent: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Repetitive Manufacturing Profile.
   * Maximum length: 4.
   */
  repetitiveManufacturingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Backward Cnsmpn Period In Work Days.
   * Maximum length: 3.
   */
  backwardCnsmpnPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Fwd Consumption Period In Work Days.
   * Maximum length: 3.
   */
  fwdConsumptionPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Rqmts Consumption Mode.
   * Maximum length: 1.
   */
  prodRqmtsConsumptionMode: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Fcst Requirements Split Code.
   * Maximum length: 1.
   */
  prodFcstRequirementsSplitCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Out Date.
   * @nullable
   */
  effectiveOutDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Scheduling Float Profile.
   * Maximum length: 3.
   */
  schedulingFloatProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Component Scrap In Percent.
   */
  componentScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Discontinuation Code.
   * Maximum length: 1.
   */
  productDiscontinuationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Requirements Grouping.
   * Maximum length: 1.
   */
  productRequirementsGrouping: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Invtry Managed Loc.
   * Maximum length: 4.
   */
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Component Backflush Code.
   * Maximum length: 1.
   */
  productComponentBackflushCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Proposed Product Supply Area.
   * Maximum length: 10.
   */
  proposedProductSupplyArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Safety Stock Method.
   * Maximum length: 2.
   */
  mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Jit Prodn Conf Profile.
   * Maximum length: 4.
   */
  jitProdnConfProfile: DeserializedType<T, 'Edm.String'>;
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
   * Prodn Plng And Control Calendar.
   * Maximum length: 3.
   */
  prodnPlngAndControlCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Iso Unit.
   * Maximum length: 3.
   */
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Consignment Control.
   * Maximum length: 1.
   */
  consignmentControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Atp Check Horizon In Days.
   */
  atpCheckHorizonInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Check Horizon Factory Calendar.
   * Maximum length: 2.
   */
  atpCheckHorizonFactoryCalendar: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: ProductPlantSupplyPlanningApi<T>);
}
export interface ProductPlantSupplyPlanningType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
  mrpType: DeserializedType<T, 'Edm.String'>;
  mrpResponsible: DeserializedType<T, 'Edm.String'>;
  safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumSafetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  planningTimeFence: DeserializedType<T, 'Edm.String'>;
  consumptionValueCategory: DeserializedType<T, 'Edm.String'>;
  maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  planningStrategyGroup: DeserializedType<T, 'Edm.String'>;
  totalReplenishmentLeadTime: DeserializedType<T, 'Edm.Decimal'>;
  procurementType: DeserializedType<T, 'Edm.String'>;
  procurementSubType: DeserializedType<T, 'Edm.String'>;
  assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  availabilityCheckType: DeserializedType<T, 'Edm.String'>;
  goodsReceiptDuration: DeserializedType<T, 'Edm.Decimal'>;
  planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  mrpGroup: DeserializedType<T, 'Edm.String'>;
  lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
  safetyTimePeriodProfile: DeserializedType<T, 'Edm.String'>;
  dependentRqmtMrpRelevance: DeserializedType<T, 'Edm.String'>;
  productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  prodInhProdnDurationInWorkDays: DeserializedType<T, 'Edm.Decimal'>;
  mrpAvailabilityType: DeserializedType<T, 'Edm.String'>;
  crossProjectProduct: DeserializedType<T, 'Edm.String'>;
  storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  followUpProduct: DeserializedType<T, 'Edm.String'>;
  repetitiveManufacturingIsAllwd: DeserializedType<T, 'Edm.Boolean'>;
  dependentRequirementsType: DeserializedType<T, 'Edm.String'>;
  productIsBulkComponent: DeserializedType<T, 'Edm.Boolean'>;
  repetitiveManufacturingProfile: DeserializedType<T, 'Edm.String'>;
  backwardCnsmpnPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  fwdConsumptionPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  prodRqmtsConsumptionMode: DeserializedType<T, 'Edm.String'>;
  prodFcstRequirementsSplitCode: DeserializedType<T, 'Edm.String'>;
  effectiveOutDate?: DeserializedType<T, 'Edm.Date'> | null;
  schedulingFloatProfile: DeserializedType<T, 'Edm.String'>;
  componentScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  productDiscontinuationCode: DeserializedType<T, 'Edm.String'>;
  productRequirementsGrouping: DeserializedType<T, 'Edm.String'>;
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  productComponentBackflushCode: DeserializedType<T, 'Edm.String'>;
  proposedProductSupplyArea: DeserializedType<T, 'Edm.String'>;
  mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  jitProdnConfProfile: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  prodnPlngAndControlCalendar: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  consignmentControl: DeserializedType<T, 'Edm.String'>;
  atpCheckHorizonInDays: DeserializedType<T, 'Edm.Decimal'>;
  atpCheckHorizonFactoryCalendar: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
