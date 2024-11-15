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
import type { ProductValuationAccountingApi } from './ProductValuationAccountingApi';
import { Product, ProductType } from './Product';
import { ProductValuation, ProductValuationType } from './ProductValuation';
/**
 * This class represents the entity "ProductValuationAccounting" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductValuationAccounting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationAccountingType<T>
{
  /**
   * Technical entity name for ProductValuationAccounting.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductValuationAccounting entity.
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
   * Commercial Price 1 In Co Code Crcy.
   */
  commercialPrice1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Price 2 In Co Code Crcy.
   */
  commercialPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Price 3 In Co Code Crcy.
   */
  commercialPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Devaluation Year Count.
   * Maximum length: 2.
   */
  devaluationYearCount: DeserializedType<T, 'Edm.String'>;
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
   * Lifo Valuation Pool Number.
   * Maximum length: 4.
   */
  lifoValuationPoolNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Pricel 1 In Co Code Crcy.
   */
  taxPricel1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Price 2 In Co Code Crcy.
   */
  taxPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Price 3 In Co Code Crcy.
   */
  taxPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Based Prices Price Unit Qty.
   */
  taxBasedPricesPriceUnitQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Lifo And Fifo Relevant.
   */
  isLifoAndFifoRelevant: DeserializedType<T, 'Edm.Boolean'>;
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
  constructor(_entityApi: ProductValuationAccountingApi<T>);
}
export interface ProductValuationAccountingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  commercialPrice1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  commercialPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  commercialPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  devaluationYearCount: DeserializedType<T, 'Edm.String'>;
  futurePrice: DeserializedType<T, 'Edm.Decimal'>;
  futurePriceValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  lifoValuationPoolNumber: DeserializedType<T, 'Edm.String'>;
  taxPricel1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  taxPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  taxPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  taxBasedPricesPriceUnitQty: DeserializedType<T, 'Edm.Decimal'>;
  isLifoAndFifoRelevant: DeserializedType<T, 'Edm.Boolean'>;
  currency: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productValuation?: ProductValuationType<T> | null;
}
