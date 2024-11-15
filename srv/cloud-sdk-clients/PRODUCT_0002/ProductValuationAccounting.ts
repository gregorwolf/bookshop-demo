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
export class ProductValuationAccounting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationAccountingType<T>
{
  /**
   * Technical entity name for ProductValuationAccounting.
   */
  static override _entityName = 'ProductValuationAccounting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductValuationAccounting entity.
   */
  static _keys = ['Product', 'ValuationArea', 'ValuationType'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Area.
   * Maximum length: 4.
   */
  declare valuationArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Valuation Type.
   * Maximum length: 10.
   */
  declare valuationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Commercial Price 1 In Co Code Crcy.
   */
  declare commercialPrice1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Price 2 In Co Code Crcy.
   */
  declare commercialPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commercial Price 3 In Co Code Crcy.
   */
  declare commercialPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Devaluation Year Count.
   * Maximum length: 2.
   */
  declare devaluationYearCount: DeserializedType<T, 'Edm.String'>;
  /**
   * Future Price.
   */
  declare futurePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Future Price Validity Start Date.
   * @nullable
   */
  declare futurePriceValidityStartDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Lifo Valuation Pool Number.
   * Maximum length: 4.
   */
  declare lifoValuationPoolNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Pricel 1 In Co Code Crcy.
   */
  declare taxPricel1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Price 2 In Co Code Crcy.
   */
  declare taxPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Price 3 In Co Code Crcy.
   */
  declare taxPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Based Prices Price Unit Qty.
   */
  declare taxBasedPricesPriceUnitQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Lifo And Fifo Relevant.
   */
  declare isLifoAndFifoRelevant: DeserializedType<T, 'Edm.Boolean'>;
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
   * Base Iso Unit.
   * Maximum length: 3.
   */
  declare baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductValuation} entity.
   */
  declare productValuation?: ProductValuation<T> | null;

  constructor(_entityApi: ProductValuationAccountingApi<T>) {
    super(_entityApi);
  }
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
