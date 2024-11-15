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
import type { ProductValuationLedgerPricesApi } from './ProductValuationLedgerPricesApi';
import { Product, ProductType } from './Product';
import { ProductValuation, ProductValuationType } from './ProductValuation';
/**
 * This class represents the entity "ProductValuationLedgerPrices" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductValuationLedgerPrices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationLedgerPricesType<T>
{
  /**
   * Technical entity name for ProductValuationLedgerPrices.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductValuationLedgerPrices entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Area.
   * Maximum length: 4.
   */
  valuationArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Type.
   * Maximum length: 10.
   */
  valuationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Role.
   * Maximum length: 2.
   */
  currencyRole: DeserializedType<T, 'Edm.String'>;
  /**
   * Ledger.
   * Maximum length: 2.
   */
  ledger: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Price Unit Quantity.
   */
  productPriceUnitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * Maximum length: 3.
   */
  currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Future Price.
   */
  futurePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Future Price Validity Start Date.
   * @nullable
   */
  futurePriceValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
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
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductValuation} entity.
   */
  productValuation?: ProductValuation<T> | null;
  constructor(_entityApi: ProductValuationLedgerPricesApi<T>);
}
export interface ProductValuationLedgerPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  currencyRole: DeserializedType<T, 'Edm.String'>;
  ledger: DeserializedType<T, 'Edm.String'>;
  productPriceUnitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  currency: DeserializedType<T, 'Edm.String'>;
  futurePrice: DeserializedType<T, 'Edm.Decimal'>;
  futurePriceValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productValuation?: ProductValuationType<T> | null;
}
