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
import type { ProductApi } from './ProductApi';
import {
  ProductChangeMaster,
  ProductChangeMasterType
} from './ProductChangeMaster';
import {
  ProductDescription,
  ProductDescriptionType
} from './ProductDescription';
import {
  ProductEwmWarehouse,
  ProductEwmWarehouseType
} from './ProductEwmWarehouse';
import { ProductPlant, ProductPlantType } from './ProductPlant';
import {
  ProductProcurement,
  ProductProcurementType
} from './ProductProcurement';
import {
  ProductQualityManagement,
  ProductQualityManagementType
} from './ProductQualityManagement';
import { ProductSales, ProductSalesType } from './ProductSales';
import {
  ProductSalesDelivery,
  ProductSalesDeliveryType
} from './ProductSalesDelivery';
import { ProductStorage, ProductStorageType } from './ProductStorage';
import {
  ProductUnitOfMeasure,
  ProductUnitOfMeasureType
} from './ProductUnitOfMeasure';
import { ProductValuation, ProductValuationType } from './ProductValuation';
/**
 * This class represents the entity "Product" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class Product<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductType<T>
{
  /**
   * Technical entity name for Product.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Product entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Type.
   * Maximum length: 4.
   */
  productType: DeserializedType<T, 'Edm.String'>;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Creation Time.
   */
  creationTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Creation Date Time.
   * @nullable
   */
  creationDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By User.
   * Maximum length: 12.
   */
  createdByUser: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Change Date.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 12.
   */
  lastChangedByUser: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cross Plant Status.
   * Maximum length: 2.
   */
  crossPlantStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Plant Status Validity Date.
   * @nullable
   */
  crossPlantStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Product Old Id.
   * Maximum length: 40.
   */
  productOldId: DeserializedType<T, 'Edm.String'>;
  /**
   * Gross Weight.
   */
  grossWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Weight Unit.
   * Maximum length: 3.
   */
  weightUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Weight Iso Unit.
   * Maximum length: 3.
   */
  weightIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group.
   * Maximum length: 9.
   */
  productGroup: DeserializedType<T, 'Edm.String'>;
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
   * Item Category Group.
   * Maximum length: 4.
   */
  itemCategoryGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Net Weight.
   */
  netWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Unit.
   * Maximum length: 3.
   */
  volumeUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Iso Unit.
   * Maximum length: 3.
   */
  volumeIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Volume.
   */
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Authorization Group.
   * Maximum length: 4.
   */
  authorizationGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Anp Code.
   * Maximum length: 9.
   */
  anpCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Size Or Dimension Text.
   * Maximum length: 32.
   */
  sizeOrDimensionText: DeserializedType<T, 'Edm.String'>;
  /**
   * Industry Standard Name.
   * Maximum length: 18.
   */
  industryStandardName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Standard Id.
   * Maximum length: 18.
   */
  productStandardId: DeserializedType<T, 'Edm.String'>;
  /**
   * International Article Number Cat.
   * Maximum length: 2.
   */
  internationalArticleNumberCat: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Configurable.
   */
  productIsConfigurable: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Batch Management Required.
   */
  isBatchManagementRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * External Product Group.
   * Maximum length: 18.
   */
  externalProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Cross Plant Configurable Product.
   * Maximum length: 18.
   */
  crossPlantConfigurableProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Serial No Explicitness Level.
   * Maximum length: 1.
   */
  serialNoExplicitnessLevel: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Approved Batch Record Reqd.
   */
  isApprovedBatchRecordReqd: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Handling Indicator.
   * Maximum length: 4.
   */
  handlingIndicator: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Product Group.
   * Maximum length: 4.
   */
  warehouseProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Storage Condition.
   * Maximum length: 2.
   */
  warehouseStorageCondition: DeserializedType<T, 'Edm.String'>;
  /**
   * Standard Handling Unit Type.
   * Maximum length: 4.
   */
  standardHandlingUnitType: DeserializedType<T, 'Edm.String'>;
  /**
   * Serial Number Profile.
   * Maximum length: 4.
   */
  serialNumberProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Pilferable.
   */
  isPilferable: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Relevant For Hzds Substances.
   */
  isRelevantForHzdsSubstances: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Quarantine Period.
   */
  quarantinePeriod: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Time Unit For Quarantine Period.
   * Maximum length: 3.
   */
  timeUnitForQuarantinePeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Quarantine Period Iso Unit.
   * Maximum length: 3.
   */
  quarantinePeriodIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Quality Inspection Group.
   * Maximum length: 4.
   */
  qualityInspectionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Handling Unit Type.
   * Maximum length: 4.
   */
  handlingUnitType: DeserializedType<T, 'Edm.String'>;
  /**
   * Has Variable Tare Weight.
   */
  hasVariableTareWeight: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Maximum Packaging Length.
   */
  maximumPackagingLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Packaging Width.
   */
  maximumPackagingWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Packaging Height.
   */
  maximumPackagingHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Capacity.
   */
  maximumCapacity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Overcapacity Tolerance.
   */
  overcapacityTolerance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit For Max Packaging Dimensions.
   * Maximum length: 3.
   */
  unitForMaxPackagingDimensions: DeserializedType<T, 'Edm.String'>;
  /**
   * Max Packgg Dimension Iso Unit.
   * Maximum length: 3.
   */
  maxPackggDimensionIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Base Unit Specific Product Length.
   */
  baseUnitSpecificProductLength: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Unit Specific Product Width.
   */
  baseUnitSpecificProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Unit Specific Product Height.
   */
  baseUnitSpecificProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Measurement Unit.
   * Maximum length: 3.
   */
  productMeasurementUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Measurement Iso Unit.
   * Maximum length: 3.
   */
  productMeasurementIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Article Category.
   * Maximum length: 2.
   */
  articleCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Industry Sector.
   * Maximum length: 1.
   */
  industrySector: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Change Date Time.
   * @nullable
   */
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Change Time.
   */
  lastChangeTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  /**
   * Dangerous Goods Ind Profile.
   * Maximum length: 3.
   */
  dangerousGoodsIndProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Change Number.
   * Maximum length: 6.
   */
  productDocumentChangeNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Page Count.
   * Maximum length: 3.
   */
  productDocumentPageCount: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Page Number.
   * Maximum length: 3.
   */
  productDocumentPageNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Is Created By Cad.
   */
  documentIsCreatedByCad: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Production Or Inspection Memo Txt.
   * Maximum length: 18.
   */
  productionOrInspectionMemoTxt: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Memo Page Format.
   * Maximum length: 4.
   */
  productionMemoPageFormat: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Highly Viscous.
   */
  productIsHighlyViscous: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Transport Is In Bulk.
   */
  transportIsInBulk: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Prod Effcty Param Vals Are Assigned.
   */
  prodEffctyParamValsAreAssigned: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Prod Is Environmentally Relevant.
   */
  prodIsEnvironmentallyRelevant: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Laboratory Or Design Office.
   * Maximum length: 3.
   */
  laboratoryOrDesignOffice: DeserializedType<T, 'Edm.String'>;
  /**
   * Packaging Product Group.
   * Maximum length: 4.
   */
  packagingProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Packing Reference Product.
   * Maximum length: 18.
   */
  packingReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Basic Product.
   * Maximum length: 48.
   */
  basicProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Number.
   * Maximum length: 22.
   */
  productDocumentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Version.
   * Maximum length: 2.
   */
  productDocumentVersion: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Type.
   * Maximum length: 3.
   */
  productDocumentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Document Page Format.
   * Maximum length: 4.
   */
  productDocumentPageFormat: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Chml Cmplnc Relevance Code.
   * Maximum length: 1.
   */
  prodChmlCmplncRelevanceCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Discount In Kind Eligibility.
   * Maximum length: 1.
   */
  discountInKindEligibility: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Manufacturer Number.
   * Maximum length: 40.
   */
  productManufacturerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufacturer Number.
   * Maximum length: 10.
   */
  manufacturerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Manufacturer Part Profile.
   * Maximum length: 4.
   */
  manufacturerPartProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Own Inventory Managed Product.
   * Maximum length: 18.
   */
  ownInventoryManagedProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-many navigation property to the {@link ProductChangeMaster} entity.
   */
  productChangeMaster: ProductChangeMaster<T>[];
  /**
   * One-to-many navigation property to the {@link ProductDescription} entity.
   */
  productDescription: ProductDescription<T>[];
  /**
   * One-to-many navigation property to the {@link ProductEwmWarehouse} entity.
   */
  productEwmWarehouse: ProductEwmWarehouse<T>[];
  /**
   * One-to-many navigation property to the {@link ProductPlant} entity.
   */
  productPlant: ProductPlant<T>[];
  /**
   * One-to-one navigation property to the {@link ProductProcurement} entity.
   */
  productProcurement?: ProductProcurement<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductQualityManagement} entity.
   */
  productQualityManagement?: ProductQualityManagement<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSales} entity.
   */
  productSales?: ProductSales<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductSalesDelivery} entity.
   */
  productSalesDelivery: ProductSalesDelivery<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStorage} entity.
   */
  productStorage?: ProductStorage<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasure} entity.
   */
  productUnitOfMeasure: ProductUnitOfMeasure<T>[];
  /**
   * One-to-many navigation property to the {@link ProductValuation} entity.
   */
  productValuation: ProductValuation<T>[];
  constructor(_entityApi: ProductApi<T>);
}
export interface ProductType<T extends DeSerializers = DefaultDeSerializers> {
  product: DeserializedType<T, 'Edm.String'>;
  productType: DeserializedType<T, 'Edm.String'>;
  creationDate?: DeserializedType<T, 'Edm.Date'> | null;
  creationTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  creationDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdByUser: DeserializedType<T, 'Edm.String'>;
  lastChangeDate?: DeserializedType<T, 'Edm.Date'> | null;
  lastChangedByUser: DeserializedType<T, 'Edm.String'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  crossPlantStatus: DeserializedType<T, 'Edm.String'>;
  crossPlantStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  productOldId: DeserializedType<T, 'Edm.String'>;
  grossWeight: DeserializedType<T, 'Edm.Decimal'>;
  weightUnit: DeserializedType<T, 'Edm.String'>;
  weightIsoUnit: DeserializedType<T, 'Edm.String'>;
  productGroup: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  itemCategoryGroup: DeserializedType<T, 'Edm.String'>;
  netWeight: DeserializedType<T, 'Edm.Decimal'>;
  division: DeserializedType<T, 'Edm.String'>;
  volumeUnit: DeserializedType<T, 'Edm.String'>;
  volumeIsoUnit: DeserializedType<T, 'Edm.String'>;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  authorizationGroup: DeserializedType<T, 'Edm.String'>;
  anpCode: DeserializedType<T, 'Edm.String'>;
  sizeOrDimensionText: DeserializedType<T, 'Edm.String'>;
  industryStandardName: DeserializedType<T, 'Edm.String'>;
  productStandardId: DeserializedType<T, 'Edm.String'>;
  internationalArticleNumberCat: DeserializedType<T, 'Edm.String'>;
  productIsConfigurable: DeserializedType<T, 'Edm.Boolean'>;
  isBatchManagementRequired: DeserializedType<T, 'Edm.Boolean'>;
  externalProductGroup: DeserializedType<T, 'Edm.String'>;
  crossPlantConfigurableProduct: DeserializedType<T, 'Edm.String'>;
  serialNoExplicitnessLevel: DeserializedType<T, 'Edm.String'>;
  isApprovedBatchRecordReqd: DeserializedType<T, 'Edm.Boolean'>;
  handlingIndicator: DeserializedType<T, 'Edm.String'>;
  warehouseProductGroup: DeserializedType<T, 'Edm.String'>;
  warehouseStorageCondition: DeserializedType<T, 'Edm.String'>;
  standardHandlingUnitType: DeserializedType<T, 'Edm.String'>;
  serialNumberProfile: DeserializedType<T, 'Edm.String'>;
  isPilferable: DeserializedType<T, 'Edm.Boolean'>;
  isRelevantForHzdsSubstances: DeserializedType<T, 'Edm.Boolean'>;
  quarantinePeriod: DeserializedType<T, 'Edm.Decimal'>;
  timeUnitForQuarantinePeriod: DeserializedType<T, 'Edm.String'>;
  quarantinePeriodIsoUnit: DeserializedType<T, 'Edm.String'>;
  qualityInspectionGroup: DeserializedType<T, 'Edm.String'>;
  handlingUnitType: DeserializedType<T, 'Edm.String'>;
  hasVariableTareWeight: DeserializedType<T, 'Edm.Boolean'>;
  maximumPackagingLength: DeserializedType<T, 'Edm.Decimal'>;
  maximumPackagingWidth: DeserializedType<T, 'Edm.Decimal'>;
  maximumPackagingHeight: DeserializedType<T, 'Edm.Decimal'>;
  maximumCapacity: DeserializedType<T, 'Edm.Decimal'>;
  overcapacityTolerance: DeserializedType<T, 'Edm.Decimal'>;
  unitForMaxPackagingDimensions: DeserializedType<T, 'Edm.String'>;
  maxPackggDimensionIsoUnit: DeserializedType<T, 'Edm.String'>;
  baseUnitSpecificProductLength: DeserializedType<T, 'Edm.Decimal'>;
  baseUnitSpecificProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  baseUnitSpecificProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  productMeasurementUnit: DeserializedType<T, 'Edm.String'>;
  productMeasurementIsoUnit: DeserializedType<T, 'Edm.String'>;
  articleCategory: DeserializedType<T, 'Edm.String'>;
  industrySector: DeserializedType<T, 'Edm.String'>;
  lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangeTime: DeserializedType<T, 'Edm.TimeOfDay'>;
  dangerousGoodsIndProfile: DeserializedType<T, 'Edm.String'>;
  productDocumentChangeNumber: DeserializedType<T, 'Edm.String'>;
  productDocumentPageCount: DeserializedType<T, 'Edm.String'>;
  productDocumentPageNumber: DeserializedType<T, 'Edm.String'>;
  documentIsCreatedByCad: DeserializedType<T, 'Edm.Boolean'>;
  productionOrInspectionMemoTxt: DeserializedType<T, 'Edm.String'>;
  productionMemoPageFormat: DeserializedType<T, 'Edm.String'>;
  productIsHighlyViscous: DeserializedType<T, 'Edm.Boolean'>;
  transportIsInBulk: DeserializedType<T, 'Edm.Boolean'>;
  prodEffctyParamValsAreAssigned: DeserializedType<T, 'Edm.Boolean'>;
  prodIsEnvironmentallyRelevant: DeserializedType<T, 'Edm.Boolean'>;
  laboratoryOrDesignOffice: DeserializedType<T, 'Edm.String'>;
  packagingProductGroup: DeserializedType<T, 'Edm.String'>;
  packingReferenceProduct: DeserializedType<T, 'Edm.String'>;
  basicProduct: DeserializedType<T, 'Edm.String'>;
  productDocumentNumber: DeserializedType<T, 'Edm.String'>;
  productDocumentVersion: DeserializedType<T, 'Edm.String'>;
  productDocumentType: DeserializedType<T, 'Edm.String'>;
  productDocumentPageFormat: DeserializedType<T, 'Edm.String'>;
  prodChmlCmplncRelevanceCode: DeserializedType<T, 'Edm.String'>;
  discountInKindEligibility: DeserializedType<T, 'Edm.String'>;
  productManufacturerNumber: DeserializedType<T, 'Edm.String'>;
  manufacturerNumber: DeserializedType<T, 'Edm.String'>;
  manufacturerPartProfile: DeserializedType<T, 'Edm.String'>;
  ownInventoryManagedProduct: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  productChangeMaster: ProductChangeMasterType<T>[];
  productDescription: ProductDescriptionType<T>[];
  productEwmWarehouse: ProductEwmWarehouseType<T>[];
  productPlant: ProductPlantType<T>[];
  productProcurement?: ProductProcurementType<T> | null;
  productQualityManagement?: ProductQualityManagementType<T> | null;
  productSales?: ProductSalesType<T> | null;
  productSalesDelivery: ProductSalesDeliveryType<T>[];
  productStorage?: ProductStorageType<T> | null;
  productUnitOfMeasure: ProductUnitOfMeasureType<T>[];
  productValuation: ProductValuationType<T>[];
}
