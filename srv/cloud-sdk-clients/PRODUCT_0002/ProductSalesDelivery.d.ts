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
import type { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import {
  ProdSalesDeliverySalesTax,
  ProdSalesDeliverySalesTaxType
} from './ProdSalesDeliverySalesTax';
import { Product, ProductType } from './Product';
/**
 * This class represents the entity "ProductSalesDelivery" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductSalesDelivery<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSalesDeliveryType<T>
{
  /**
   * Technical entity name for ProductSalesDelivery.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductSalesDelivery entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales Org.
   * Maximum length: 4.
   */
  productSalesOrg: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Distribution Chnl.
   * Maximum length: 2.
   */
  productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Order Quantity.
   */
  minimumOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Supplying Plant.
   * Maximum length: 4.
   */
  supplyingPlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Specification Product Group.
   * Maximum length: 2.
   */
  priceSpecificationProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Detn Product Group.
   * Maximum length: 2.
   */
  accountDetnProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Note Proc Min Deliv Qty.
   */
  deliveryNoteProcMinDelivQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Category Group.
   * Maximum length: 4.
   */
  itemCategoryGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity Unit.
   * Maximum length: 3.
   */
  deliveryQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity Iso Unit.
   * Maximum length: 3.
   */
  deliveryQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity.
   */
  deliveryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Sales Status.
   * Maximum length: 2.
   */
  productSalesStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales Status Validity Date.
   * @nullable
   */
  productSalesStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Sales Measure Unit.
   * Maximum length: 3.
   */
  salesMeasureUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Measure Iso Unit.
   * Maximum length: 3.
   */
  salesMeasureIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * First Sales Spec Product Group.
   * Maximum length: 3.
   */
  firstSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Second Sales Spec Product Group.
   * Maximum length: 3.
   */
  secondSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Third Sales Spec Product Group.
   * Maximum length: 3.
   */
  thirdSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Fourth Sales Spec Product Group.
   * Maximum length: 3.
   */
  fourthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Fifth Sales Spec Product Group.
   * Maximum length: 3.
   */
  fifthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Logistics Statistics Group.
   * Maximum length: 1.
   */
  logisticsStatisticsGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Rebate Group.
   * Maximum length: 2.
   */
  volumeRebateGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Discount Is Deductible.
   */
  cashDiscountIsDeductible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Sales Unit Is Not Allowed.
   */
  variableSalesUnitIsNotAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Commission Group.
   * Maximum length: 2.
   */
  productCommissionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Reference Product.
   * Maximum length: 18.
   */
  pricingReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Has Attribute Id 01.
   */
  productHasAttributeId01: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 02.
   */
  productHasAttributeId02: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 03.
   */
  productHasAttributeId03: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 04.
   */
  productHasAttributeId04: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 05.
   */
  productHasAttributeId05: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 06.
   */
  productHasAttributeId06: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 07.
   */
  productHasAttributeId07: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 08.
   */
  productHasAttributeId08: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 09.
   */
  productHasAttributeId09: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 10.
   */
  productHasAttributeId10: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Prod Is Entlmnt Rlvt.
   */
  prodIsEntlmntRlvt: DeserializedType<T, 'Edm.Boolean'>;
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
   * One-to-many navigation property to the {@link ProdSalesDeliverySalesTax} entity.
   */
  prodSalesDeliverySalesTax: ProdSalesDeliverySalesTax<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  constructor(_entityApi: ProductSalesDeliveryApi<T>);
}
export interface ProductSalesDeliveryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  productSalesOrg: DeserializedType<T, 'Edm.String'>;
  productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  minimumOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  supplyingPlant: DeserializedType<T, 'Edm.String'>;
  priceSpecificationProductGroup: DeserializedType<T, 'Edm.String'>;
  accountDetnProductGroup: DeserializedType<T, 'Edm.String'>;
  deliveryNoteProcMinDelivQty: DeserializedType<T, 'Edm.Decimal'>;
  itemCategoryGroup: DeserializedType<T, 'Edm.String'>;
  deliveryQuantityUnit: DeserializedType<T, 'Edm.String'>;
  deliveryQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  deliveryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSalesStatus: DeserializedType<T, 'Edm.String'>;
  productSalesStatusValidityDate?: DeserializedType<T, 'Edm.Date'> | null;
  salesMeasureUnit: DeserializedType<T, 'Edm.String'>;
  salesMeasureIsoUnit: DeserializedType<T, 'Edm.String'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  firstSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  secondSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  thirdSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  fourthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  fifthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  logisticsStatisticsGroup: DeserializedType<T, 'Edm.String'>;
  volumeRebateGroup: DeserializedType<T, 'Edm.String'>;
  cashDiscountIsDeductible: DeserializedType<T, 'Edm.Boolean'>;
  roundingProfile: DeserializedType<T, 'Edm.String'>;
  variableSalesUnitIsNotAllowed: DeserializedType<T, 'Edm.Boolean'>;
  productCommissionGroup: DeserializedType<T, 'Edm.String'>;
  pricingReferenceProduct: DeserializedType<T, 'Edm.String'>;
  productHasAttributeId01: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId02: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId03: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId04: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId05: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId06: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId07: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId08: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId09: DeserializedType<T, 'Edm.Boolean'>;
  productHasAttributeId10: DeserializedType<T, 'Edm.Boolean'>;
  prodIsEntlmntRlvt: DeserializedType<T, 'Edm.Boolean'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  prodSalesDeliverySalesTax: ProdSalesDeliverySalesTaxType<T>[];
  product_1?: ProductType<T> | null;
}
