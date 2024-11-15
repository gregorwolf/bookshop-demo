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
export class ProductPlantSupplyPlanning<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantSupplyPlanningType<T>
{
  /**
   * Technical entity name for ProductPlantSupplyPlanning.
   */
  static override _entityName = 'ProductPlantSupplyPlanning';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantSupplyPlanning entity.
   */
  static _keys = ['Product', 'Plant'];
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
   * Fixed Lot Size Quantity.
   */
  declare fixedLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Lot Size Quantity.
   */
  declare maximumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Lot Size Quantity.
   */
  declare minimumLotSizeQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Size Rounding Quantity.
   */
  declare lotSizeRoundingQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lot Sizing Procedure.
   * Maximum length: 2.
   */
  declare lotSizingProcedure: DeserializedType<T, 'Edm.String'>;
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
   * Safety Stock Quantity.
   */
  declare safetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Safety Stock Quantity.
   */
  declare minimumSafetyStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planning Time Fence.
   * Maximum length: 3.
   */
  declare planningTimeFence: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Value Category.
   * Maximum length: 1.
   */
  declare consumptionValueCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Stock Quantity.
   */
  declare maximumStockQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reorder Threshold Quantity.
   */
  declare reorderThresholdQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Delivery Duration In Days.
   */
  declare plannedDeliveryDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Safety Supply Duration In Days.
   * Maximum length: 2.
   */
  declare safetySupplyDurationInDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Strategy Group.
   * Maximum length: 2.
   */
  declare planningStrategyGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Total Replenishment Lead Time.
   */
  declare totalReplenishmentLeadTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Type.
   * Maximum length: 1.
   */
  declare procurementType: DeserializedType<T, 'Edm.String'>;
  /**
   * Procurement Sub Type.
   * Maximum length: 2.
   */
  declare procurementSubType: DeserializedType<T, 'Edm.String'>;
  /**
   * Assembly Scrap Percent.
   */
  declare assemblyScrapPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Availability Check Type.
   * Maximum length: 2.
   */
  declare availabilityCheckType: DeserializedType<T, 'Edm.String'>;
  /**
   * Goods Receipt Duration.
   */
  declare goodsReceiptDuration: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Plan And Order Day Determination.
   * Maximum length: 3.
   */
  declare planAndOrderDayDetermination: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  declare roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Dflt Storage Location Ext Procmt.
   * Maximum length: 4.
   */
  declare dfltStorageLocationExtProcmt: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Group.
   * Maximum length: 4.
   */
  declare mrpGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Lot Size Independent Costs.
   */
  declare lotSizeIndependentCosts: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rqmt Qty Rcpt Takt Tme In Wrkg Days.
   */
  declare rqmtQtyRcptTaktTmeInWrkgDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Planning Calendar.
   * Maximum length: 3.
   */
  declare mrpPlanningCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Range Of Cvrg Prfl Code.
   * Maximum length: 3.
   */
  declare rangeOfCvrgPrflCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Safety Time Mrp Relevance.
   * Maximum length: 1.
   */
  declare productSafetyTimeMrpRelevance: DeserializedType<T, 'Edm.String'>;
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
   * Product Service Level In Percent.
   */
  declare productServiceLevelInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prod Inh Prodn Duration In Work Days.
   */
  declare prodInhProdnDurationInWorkDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mrp Availability Type.
   * Maximum length: 1.
   */
  declare mrpAvailabilityType: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Project Product.
   * Maximum length: 1.
   */
  declare crossProjectProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Storage Costs Percentage Code.
   * Maximum length: 1.
   */
  declare storageCostsPercentageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Follow Up Product.
   * Maximum length: 18.
   */
  declare followUpProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Repetitive Manufacturing Is Allwd.
   */
  declare repetitiveManufacturingIsAllwd: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Dependent Requirements Type.
   * Maximum length: 1.
   */
  declare dependentRequirementsType: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Bulk Component.
   */
  declare productIsBulkComponent: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Repetitive Manufacturing Profile.
   * Maximum length: 4.
   */
  declare repetitiveManufacturingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Backward Cnsmpn Period In Work Days.
   * Maximum length: 3.
   */
  declare backwardCnsmpnPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Fwd Consumption Period In Work Days.
   * Maximum length: 3.
   */
  declare fwdConsumptionPeriodInWorkDays: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Rqmts Consumption Mode.
   * Maximum length: 1.
   */
  declare prodRqmtsConsumptionMode: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Fcst Requirements Split Code.
   * Maximum length: 1.
   */
  declare prodFcstRequirementsSplitCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Out Date.
   * @nullable
   */
  declare effectiveOutDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Scheduling Float Profile.
   * Maximum length: 3.
   */
  declare schedulingFloatProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Component Scrap In Percent.
   */
  declare componentScrapInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Discontinuation Code.
   * Maximum length: 1.
   */
  declare productDiscontinuationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Requirements Grouping.
   * Maximum length: 1.
   */
  declare productRequirementsGrouping: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Invtry Managed Loc.
   * Maximum length: 4.
   */
  declare productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Component Backflush Code.
   * Maximum length: 1.
   */
  declare productComponentBackflushCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Proposed Product Supply Area.
   * Maximum length: 10.
   */
  declare proposedProductSupplyArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Mrp Safety Stock Method.
   * Maximum length: 2.
   */
  declare mrpSafetyStockMethod: DeserializedType<T, 'Edm.String'>;
  /**
   * Jit Prodn Conf Profile.
   * Maximum length: 4.
   */
  declare jitProdnConfProfile: DeserializedType<T, 'Edm.String'>;
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
   * Prodn Plng And Control Calendar.
   * Maximum length: 3.
   */
  declare prodnPlngAndControlCalendar: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Iso Unit.
   * Maximum length: 3.
   */
  declare baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Consignment Control.
   * Maximum length: 1.
   */
  declare consignmentControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Atp Check Horizon In Days.
   */
  declare atpCheckHorizonInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Check Horizon Factory Calendar.
   * Maximum length: 2.
   */
  declare atpCheckHorizonFactoryCalendar: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductPlantSupplyPlanningApi<T>) {
    super(_entityApi);
  }
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
