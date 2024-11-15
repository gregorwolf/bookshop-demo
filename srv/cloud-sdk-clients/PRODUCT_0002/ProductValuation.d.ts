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
import type { ProductValuationApi } from './ProductValuationApi';
import { Product, ProductType } from './Product';
import {
  ProductValuationAccounting,
  ProductValuationAccountingType
} from './ProductValuationAccounting';
import {
  ProductValuationCosting,
  ProductValuationCostingType
} from './ProductValuationCosting';
import {
  ProductValuationLedgerAccount,
  ProductValuationLedgerAccountType
} from './ProductValuationLedgerAccount';
import {
  ProductValuationLedgerPrices,
  ProductValuationLedgerPricesType
} from './ProductValuationLedgerPrices';
/**
 * This class represents the entity "ProductValuation" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductValuation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationType<T>
{
  /**
   * Technical entity name for ProductValuation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductValuation entity.
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
   * Valuation Class.
   * Maximum length: 4.
   */
  valuationClass: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Determination Control.
   * Maximum length: 1.
   */
  priceDeterminationControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Standard Price.
   */
  standardPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Price Unit Quantity.
   */
  productPriceUnitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Valuation Procedure.
   * Maximum length: 1.
   */
  inventoryValuationProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Moving Average Price.
   */
  movingAveragePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valuation Category.
   * Maximum length: 1.
   */
  valuationCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Usage Type.
   * Maximum length: 1.
   */
  productUsageType: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Origin Type.
   * Maximum length: 1.
   */
  productOriginType: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Produced Inhouse.
   */
  isProducedInhouse: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Marked For Deletion.
   */
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Valuation Class Sales Order Stock.
   * Maximum length: 4.
   */
  valuationClassSalesOrderStock: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Stock Valuation Class.
   * Maximum length: 4.
   */
  projectStockValuationClass: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductValuationAccounting} entity.
   */
  productValuationAccounting?: ProductValuationAccounting<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductValuationCosting} entity.
   */
  productValuationCosting?: ProductValuationCosting<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductValuationLedgerAccount} entity.
   */
  productValuationLedgerAccount: ProductValuationLedgerAccount<T>[];
  /**
   * One-to-many navigation property to the {@link ProductValuationLedgerPrices} entity.
   */
  productValuationLedgerPrices: ProductValuationLedgerPrices<T>[];
  constructor(_entityApi: ProductValuationApi<T>);
}
export interface ProductValuationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  valuationClass: DeserializedType<T, 'Edm.String'>;
  priceDeterminationControl: DeserializedType<T, 'Edm.String'>;
  standardPrice: DeserializedType<T, 'Edm.Decimal'>;
  productPriceUnitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryValuationProcedure: DeserializedType<T, 'Edm.String'>;
  movingAveragePrice: DeserializedType<T, 'Edm.Decimal'>;
  valuationCategory: DeserializedType<T, 'Edm.String'>;
  productUsageType: DeserializedType<T, 'Edm.String'>;
  productOriginType: DeserializedType<T, 'Edm.String'>;
  isProducedInhouse: DeserializedType<T, 'Edm.Boolean'>;
  isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  valuationClassSalesOrderStock: DeserializedType<T, 'Edm.String'>;
  projectStockValuationClass: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productValuationAccounting?: ProductValuationAccountingType<T> | null;
  productValuationCosting?: ProductValuationCostingType<T> | null;
  productValuationLedgerAccount: ProductValuationLedgerAccountType<T>[];
  productValuationLedgerPrices: ProductValuationLedgerPricesType<T>[];
}
