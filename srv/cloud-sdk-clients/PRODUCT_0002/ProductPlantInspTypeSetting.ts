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
export class ProductPlantInspTypeSetting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantInspTypeSettingType<T>
{
  /**
   * Technical entity name for ProductPlantInspTypeSetting.
   */
  static override _entityName = 'ProductPlantInspTypeSetting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantInspTypeSetting entity.
   */
  static _keys = ['InspectionLotType', 'Product', 'Plant'];
  /**
   * Inspection Lot Type.
   * Maximum length: 8.
   */
  declare inspectionLotType: DeserializedType<T, 'Edm.String'>;
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
   * Insp Lot Is Task List Required.
   */
  declare inspLotIsTaskListRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Material Spec.
   */
  declare inspLotHasMaterialSpec: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Confign Specification.
   */
  declare inspLotHasConfignSpecification: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Batch Charc.
   */
  declare inspLotHasBatchCharc: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Autom Spec Assgmt.
   */
  declare inspLotHasAutomSpecAssgmt: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Charc.
   */
  declare inspLotHasCharc: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Post To Inspection Stock.
   */
  declare hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Autom Usge Dcsn Possible.
   */
  declare inspLotIsAutomUsgeDcsnPossible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sampling Procedure.
   * Maximum length: 8.
   */
  declare samplingProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Dynamic Rule.
   * Maximum length: 3.
   */
  declare inspLotDynamicRule: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Sample Quantity In Percent.
   */
  declare inspLotSampleQuantityInPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inspection Lot Is Full Inspection.
   */
  declare inspectionLotIsFullInspection: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Skip Is Allowed.
   */
  declare inspLotSkipIsAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Manual Sample Size.
   */
  declare inspLotHasManualSampleSize: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Smpl Calc Mnl Triggered.
   */
  declare inspLotIsSmplCalcMnlTriggered: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Is Serial Nmbr Possible.
   */
  declare inspLotIsSerialNmbrPossible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Duration In Days.
   */
  declare inspLotDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Insp Lot Summary Control.
   * Maximum length: 1.
   */
  declare inspLotSummaryControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Quality Score Procedure.
   * Maximum length: 2.
   */
  declare inspQualityScoreProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Insp Lot Accepted Scrap Ratio In Pct.
   */
  declare inspLotAcceptedScrapRatioInPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inspection Lot Has Appraisal Costs.
   */
  declare inspectionLotHasAppraisalCosts: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Quality Cost Collector.
   * Maximum length: 12.
   */
  declare qualityCostCollector: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Insp Type Setting Is Active.
   */
  declare prodInspTypeSettingIsActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Type Is Prfrd.
   */
  declare inspTypeIsPrfrd: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Handling Unit.
   */
  declare inspLotHasHandlingUnit: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Has Multiple Spec.
   */
  declare inspLotHasMultipleSpec: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Of Ewm Summary Control.
   * Maximum length: 1.
   */
  declare inspLotOfEwmSummaryControl: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductPlantInspTypeSettingApi<T>) {
    super(_entityApi);
  }
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
