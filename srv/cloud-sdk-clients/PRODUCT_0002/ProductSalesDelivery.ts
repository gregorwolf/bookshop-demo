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
export class ProductSalesDelivery<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSalesDeliveryType<T>
{
  /**
   * Technical entity name for ProductSalesDelivery.
   */
  static override _entityName = 'ProductSalesDelivery';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductSalesDelivery entity.
   */
  static _keys = ['Product', 'ProductSalesOrg', 'ProductDistributionChnl'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales Org.
   * Maximum length: 4.
   */
  declare productSalesOrg: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Distribution Chnl.
   * Maximum length: 2.
   */
  declare productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum Order Quantity.
   */
  declare minimumOrderQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Supplying Plant.
   * Maximum length: 4.
   */
  declare supplyingPlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Specification Product Group.
   * Maximum length: 2.
   */
  declare priceSpecificationProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Detn Product Group.
   * Maximum length: 2.
   */
  declare accountDetnProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Note Proc Min Deliv Qty.
   */
  declare deliveryNoteProcMinDelivQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Category Group.
   * Maximum length: 4.
   */
  declare itemCategoryGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity Unit.
   * Maximum length: 3.
   */
  declare deliveryQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity Iso Unit.
   * Maximum length: 3.
   */
  declare deliveryQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Quantity.
   */
  declare deliveryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Sales Status.
   * Maximum length: 2.
   */
  declare productSalesStatus: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales Status Validity Date.
   * @nullable
   */
  declare productSalesStatusValidityDate?: DeserializedType<
    T,
    'Edm.Date'
  > | null;
  /**
   * Sales Measure Unit.
   * Maximum length: 3.
   */
  declare salesMeasureUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Measure Iso Unit.
   * Maximum length: 3.
   */
  declare salesMeasureIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Marked For Deletion.
   */
  declare isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * First Sales Spec Product Group.
   * Maximum length: 3.
   */
  declare firstSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Second Sales Spec Product Group.
   * Maximum length: 3.
   */
  declare secondSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Third Sales Spec Product Group.
   * Maximum length: 3.
   */
  declare thirdSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Fourth Sales Spec Product Group.
   * Maximum length: 3.
   */
  declare fourthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Fifth Sales Spec Product Group.
   * Maximum length: 3.
   */
  declare fifthSalesSpecProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Logistics Statistics Group.
   * Maximum length: 1.
   */
  declare logisticsStatisticsGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Volume Rebate Group.
   * Maximum length: 2.
   */
  declare volumeRebateGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Cash Discount Is Deductible.
   */
  declare cashDiscountIsDeductible: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   */
  declare roundingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Variable Sales Unit Is Not Allowed.
   */
  declare variableSalesUnitIsNotAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Commission Group.
   * Maximum length: 2.
   */
  declare productCommissionGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Pricing Reference Product.
   * Maximum length: 18.
   */
  declare pricingReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Has Attribute Id 01.
   */
  declare productHasAttributeId01: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 02.
   */
  declare productHasAttributeId02: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 03.
   */
  declare productHasAttributeId03: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 04.
   */
  declare productHasAttributeId04: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 05.
   */
  declare productHasAttributeId05: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 06.
   */
  declare productHasAttributeId06: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 07.
   */
  declare productHasAttributeId07: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 08.
   */
  declare productHasAttributeId08: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 09.
   */
  declare productHasAttributeId09: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Has Attribute Id 10.
   */
  declare productHasAttributeId10: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Prod Is Entlmnt Rlvt.
   */
  declare prodIsEntlmntRlvt: DeserializedType<T, 'Edm.Boolean'>;
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
   * One-to-many navigation property to the {@link ProdSalesDeliverySalesTax} entity.
   */
  declare prodSalesDeliverySalesTax: ProdSalesDeliverySalesTax<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;

  constructor(_entityApi: ProductSalesDeliveryApi<T>) {
    super(_entityApi);
  }
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
