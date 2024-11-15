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
import type { ProductPlantInspTypeSettingApi } from './ProductPlantInspTypeSettingApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantInspTypeSetting" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantInspTypeSetting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantInspTypeSettingType<T>
{
  /**
   * Technical entity name for ProductPlantInspTypeSetting.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantInspTypeSetting entity.
   */
  static _keys: string[];
  /**
   * Inspection Lot Type.
   * Maximum length: 8.
   */
  inspectionLotType: DeserializedType<T, 'Edm.String'>;
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
   * Insp Lot Is Task List Required.
   */
  inspLotIsTaskListRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Material Spec.
   */
  inspLotHasMaterialSpec: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Confign Specification.
   */
  inspLotHasConfignSpecification: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Batch Charc.
   */
  inspLotHasBatchCharc: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Autom Spec Assgmt.
   */
  inspLotHasAutomSpecAssgmt: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Charc.
   */
  inspLotHasCharc: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Post To Inspection Stock.
   */
  hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Autom Usge Dcsn Possible.
   */
  inspLotIsAutomUsgeDcsnPossible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sampling Procedure.
   * Maximum length: 8.
   */
  samplingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Dynamic Rule.
   * Maximum length: 3.
   */
  inspLotDynamicRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Sample Quantity In Percent.
   */
  inspLotSampleQuantityInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inspection Lot Is Full Inspection.
   */
  inspectionLotIsFullInspection: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Skip Is Allowed.
   */
  inspLotSkipIsAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Manual Sample Size.
   */
  inspLotHasManualSampleSize: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Smpl Calc Mnl Triggered.
   */
  inspLotIsSmplCalcMnlTriggered: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Serial Nmbr Possible.
   */
  inspLotIsSerialNmbrPossible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Duration In Days.
   */
  inspLotDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Insp Lot Summary Control.
   * Maximum length: 1.
   */
  inspLotSummaryControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Quality Score Procedure.
   * Maximum length: 2.
   */
  inspQualityScoreProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Accepted Scrap Ratio In Pct.
   */
  inspLotAcceptedScrapRatioInPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inspection Lot Has Appraisal Costs.
   */
  inspectionLotHasAppraisalCosts: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Quality Cost Collector.
   * Maximum length: 12.
   */
  qualityCostCollector: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Insp Type Setting Is Active.
   */
  prodInspTypeSettingIsActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Type Is Prfrd.
   */
  inspTypeIsPrfrd: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Handling Unit.
   */
  inspLotHasHandlingUnit: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Multiple Spec.
   */
  inspLotHasMultipleSpec: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Of Ewm Summary Control.
   * Maximum length: 1.
   */
  inspLotOfEwmSummaryControl: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: ProductPlantInspTypeSettingApi<T>);
}
export interface ProductPlantInspTypeSettingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  inspectionLotType: DeserializedType<T, 'Edm.String'>;
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  inspLotIsTaskListRequired: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasMaterialSpec: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasConfignSpecification: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasBatchCharc: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasAutomSpecAssgmt: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasCharc: DeserializedType<T, 'Edm.Boolean'>;
  hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  inspLotIsAutomUsgeDcsnPossible: DeserializedType<T, 'Edm.Boolean'>;
  samplingProcedure: DeserializedType<T, 'Edm.String'>;
  inspLotDynamicRule: DeserializedType<T, 'Edm.String'>;
  inspLotSampleQuantityInPercent: DeserializedType<T, 'Edm.Decimal'>;
  inspectionLotIsFullInspection: DeserializedType<T, 'Edm.Boolean'>;
  inspLotSkipIsAllowed: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasManualSampleSize: DeserializedType<T, 'Edm.Boolean'>;
  inspLotIsSmplCalcMnlTriggered: DeserializedType<T, 'Edm.Boolean'>;
  inspLotIsSerialNmbrPossible: DeserializedType<T, 'Edm.Boolean'>;
  inspLotDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  inspLotSummaryControl: DeserializedType<T, 'Edm.String'>;
  inspQualityScoreProcedure: DeserializedType<T, 'Edm.String'>;
  inspLotAcceptedScrapRatioInPct: DeserializedType<T, 'Edm.Decimal'>;
  inspectionLotHasAppraisalCosts: DeserializedType<T, 'Edm.Boolean'>;
  qualityCostCollector: DeserializedType<T, 'Edm.String'>;
  prodInspTypeSettingIsActive: DeserializedType<T, 'Edm.Boolean'>;
  inspTypeIsPrfrd: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasHandlingUnit: DeserializedType<T, 'Edm.Boolean'>;
  inspLotHasMultipleSpec: DeserializedType<T, 'Edm.Boolean'>;
  inspLotOfEwmSummaryControl: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
