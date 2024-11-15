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
import type { ProdSalesDeliverySalesTaxApi } from './ProdSalesDeliverySalesTaxApi';
import { Product, ProductType } from './Product';
import {
  ProductSalesDelivery,
  ProductSalesDeliveryType
} from './ProductSalesDelivery';

/**
 * This class represents the entity "ProdSalesDeliverySalesTax" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProdSalesDeliverySalesTax<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProdSalesDeliverySalesTaxType<T>
{
  /**
   * Technical entity name for ProdSalesDeliverySalesTax.
   */
  static override _entityName = 'ProdSalesDeliverySalesTax';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProdSalesDeliverySalesTax entity.
   */
  static _keys = [
    'Product',
    'Country',
    'ProductSalesTaxCategory',
    'ProductSalesOrg',
    'ProductDistributionChnl'
  ];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Country.
   * Maximum length: 3.
   */
  declare country: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Sales Tax Category.
   * Maximum length: 4.
   */
  declare productSalesTaxCategory: DeserializedType<T, 'Edm.String'>;
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
   * Product Tax Classification.
   * Maximum length: 1.
   */
  declare productTaxClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSalesDelivery} entity.
   */
  declare productSalesDelivery?: ProductSalesDelivery<T> | null;

  constructor(_entityApi: ProdSalesDeliverySalesTaxApi<T>) {
    super(_entityApi);
  }
}

export interface ProdSalesDeliverySalesTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  productSalesTaxCategory: DeserializedType<T, 'Edm.String'>;
  productSalesOrg: DeserializedType<T, 'Edm.String'>;
  productDistributionChnl: DeserializedType<T, 'Edm.String'>;
  productTaxClassification: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productSalesDelivery?: ProductSalesDeliveryType<T> | null;
}
