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
import type { ProductPlantApi } from './ProductPlantApi';
import {
  ProductPlantInternationalTrade,
  ProductPlantInternationalTradeType
} from './ProductPlantInternationalTrade';
import { Product, ProductType } from './Product';
import {
  ProductPlantCosting,
  ProductPlantCostingType
} from './ProductPlantCosting';
import {
  ProductPlantForecast,
  ProductPlantForecastType
} from './ProductPlantForecast';
import {
  ProductPlantInspTypeSetting,
  ProductPlantInspTypeSettingType
} from './ProductPlantInspTypeSetting';
import { ProductPlantMrp, ProductPlantMrpType } from './ProductPlantMrp';
import {
  ProductPlantPlanning,
  ProductPlantPlanningType
} from './ProductPlantPlanning';
import {
  ProductPlantProcurement,
  ProductPlantProcurementType
} from './ProductPlantProcurement';
import {
  ProductPlantPurchaseTax,
  ProductPlantPurchaseTaxType
} from './ProductPlantPurchaseTax';
import {
  ProductPlantQualityManagement,
  ProductPlantQualityManagementType
} from './ProductPlantQualityManagement';
import { ProductPlantSales, ProductPlantSalesType } from './ProductPlantSales';
import {
  ProductPlantStorage,
  ProductPlantStorageType
} from './ProductPlantStorage';
import {
  ProductPlantStorageLocation,
  ProductPlantStorageLocationType
} from './ProductPlantStorageLocation';
import {
  ProductPlantSupplyPlanning,
  ProductPlantSupplyPlanningType
} from './ProductPlantSupplyPlanning';
import {
  ProductPlantWorkScheduling,
  ProductPlantWorkSchedulingType
} from './ProductPlantWorkScheduling';
/**
 * This class represents the entity "ProductPlant" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlant<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantType<T>
{
  /**
   * Technical entity name for ProductPlant.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlant entity.
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
   * Profile Code.
   * Maximum length: 2.
   */
  profileCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Validity Start Date.
   * @nullable
   */
  profileValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Fiscal Year Variant.
   * Maximum length: 2.
   */
  fiscalYearVariant: DeserializedType<T, 'Edm.String'>;
  /**
   * Period Type.
   * Maximum length: 1.
   */
  periodType: DeserializedType<T, 'Edm.String'>;
  /**
   * Profit Center.
   * Maximum length: 10.
   */
  profitCenter: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Configurable Product.
   * Maximum length: 18.
   */
  configurableProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Stock Determination Group.
   * Maximum length: 4.
   */
  stockDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Batch Management Required.
   */
  isBatchManagementRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Serial Number Profile.
   * Maximum length: 4.
   */
  serialNumberProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Negative Stock Allowed.
   */
  isNegativeStockAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Cfop Category.
   * Maximum length: 2.
   */
  productCfopCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Excise Tax Relevant.
   */
  productIsExciseTaxRelevant: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Goods Issue Unit.
   * Maximum length: 3.
   */
  goodsIssueUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Goods Issue Iso Unit.
   * Maximum length: 3.
   */
  goodsIssueIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Distr Cntr Distribution Profile.
   * Maximum length: 3.
   */
  distrCntrDistributionProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Critical Prt.
   */
  productIsCriticalPrt: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Logistics Handling Group.
   * Maximum length: 4.
   */
  productLogisticsHandlingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Freight Group.
   * Maximum length: 8.
   */
  productFreightGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Original Batch Reference Product.
   * Maximum length: 18.
   */
  originalBatchReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Origl Batch Management Is Required.
   * Maximum length: 1.
   */
  origlBatchManagementIsRequired: DeserializedType<T, 'Edm.String'>;
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
   * Product Min Control Temperature.
   */
  productMinControlTemperature: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Max Control Temperature.
   */
  productMaxControlTemperature: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Control Temperature Unit.
   * Maximum length: 3.
   */
  productControlTemperatureUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Ctrl Temperature Unit Iso Code.
   * Maximum length: 3.
   */
  prodCtrlTemperatureUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link ProductPlantInternationalTrade} entity.
   */
  prodPlantInternationalTrade?: ProductPlantInternationalTrade<T> | null;
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantCosting} entity.
   */
  productPlantCosting?: ProductPlantCosting<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantForecast} entity.
   */
  productPlantForecast?: ProductPlantForecast<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductPlantInspTypeSetting} entity.
   */
  productPlantInspTypeSetting: ProductPlantInspTypeSetting<T>[];
  /**
   * One-to-many navigation property to the {@link ProductPlantMrp} entity.
   */
  productPlantMrp: ProductPlantMrp<T>[];
  /**
   * One-to-one navigation property to the {@link ProductPlantPlanning} entity.
   */
  productPlantPlanning?: ProductPlantPlanning<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantProcurement} entity.
   */
  productPlantProcurement?: ProductPlantProcurement<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductPlantPurchaseTax} entity.
   */
  productPlantPurchaseTax: ProductPlantPurchaseTax<T>[];
  /**
   * One-to-one navigation property to the {@link ProductPlantQualityManagement} entity.
   */
  productPlantQualityManagement?: ProductPlantQualityManagement<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantSales} entity.
   */
  productPlantSales?: ProductPlantSales<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantStorage} entity.
   */
  productPlantStorage?: ProductPlantStorage<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductPlantStorageLocation} entity.
   */
  productPlantStorageLocation: ProductPlantStorageLocation<T>[];
  /**
   * One-to-one navigation property to the {@link ProductPlantSupplyPlanning} entity.
   */
  productPlantSupplyPlanning?: ProductPlantSupplyPlanning<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlantWorkScheduling} entity.
   */
  productPlantWorkScheduling?: ProductPlantWorkScheduling<T> | null;
  constructor(_entityApi: ProductPlantApi<T>);
}
export interface ProductPlantType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  profileCode: DeserializedType<T, 'Edm.String'>;
  profileValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  fiscalYearVariant: DeserializedType<T, 'Edm.String'>;
  periodType: DeserializedType<T, 'Edm.String'>;
  profitCenter: DeserializedType<T, 'Edm.String'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  configurableProduct: DeserializedType<T, 'Edm.String'>;
  stockDeterminationGroup: DeserializedType<T, 'Edm.String'>;
  isBatchManagementRequired: DeserializedType<T, 'Edm.Boolean'>;
  serialNumberProfile: DeserializedType<T, 'Edm.String'>;
  isNegativeStockAllowed: DeserializedType<T, 'Edm.Boolean'>;
  productCfopCategory: DeserializedType<T, 'Edm.String'>;
  productIsExciseTaxRelevant: DeserializedType<T, 'Edm.Boolean'>;
  goodsIssueUnit: DeserializedType<T, 'Edm.String'>;
  goodsIssueIsoUnit: DeserializedType<T, 'Edm.String'>;
  distrCntrDistributionProfile: DeserializedType<T, 'Edm.String'>;
  productIsCriticalPrt: DeserializedType<T, 'Edm.Boolean'>;
  productLogisticsHandlingGroup: DeserializedType<T, 'Edm.String'>;
  productFreightGroup: DeserializedType<T, 'Edm.String'>;
  originalBatchReferenceProduct: DeserializedType<T, 'Edm.String'>;
  origlBatchManagementIsRequired: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  productMinControlTemperature: DeserializedType<T, 'Edm.Decimal'>;
  productMaxControlTemperature: DeserializedType<T, 'Edm.Decimal'>;
  productControlTemperatureUnit: DeserializedType<T, 'Edm.String'>;
  prodCtrlTemperatureUnitIsoCode: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  prodPlantInternationalTrade?: ProductPlantInternationalTradeType<T> | null;
  product_1?: ProductType<T> | null;
  productPlantCosting?: ProductPlantCostingType<T> | null;
  productPlantForecast?: ProductPlantForecastType<T> | null;
  productPlantInspTypeSetting: ProductPlantInspTypeSettingType<T>[];
  productPlantMrp: ProductPlantMrpType<T>[];
  productPlantPlanning?: ProductPlantPlanningType<T> | null;
  productPlantProcurement?: ProductPlantProcurementType<T> | null;
  productPlantPurchaseTax: ProductPlantPurchaseTaxType<T>[];
  productPlantQualityManagement?: ProductPlantQualityManagementType<T> | null;
  productPlantSales?: ProductPlantSalesType<T> | null;
  productPlantStorage?: ProductPlantStorageType<T> | null;
  productPlantStorageLocation: ProductPlantStorageLocationType<T>[];
  productPlantSupplyPlanning?: ProductPlantSupplyPlanningType<T> | null;
  productPlantWorkScheduling?: ProductPlantWorkSchedulingType<T> | null;
}
