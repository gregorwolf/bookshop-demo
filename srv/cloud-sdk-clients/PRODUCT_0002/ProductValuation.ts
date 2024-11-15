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
export class ProductValuation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductValuationType<T>
{
  /**
   * Technical entity name for ProductValuation.
   */
  static override _entityName = 'ProductValuation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductValuation entity.
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
   * Valuation Class.
   * Maximum length: 4.
   */
  declare valuationClass: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Determination Control.
   * Maximum length: 1.
   */
  declare priceDeterminationControl: DeserializedType<T, 'Edm.String'>;
  /**
   * Standard Price.
   */
  declare standardPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Price Unit Quantity.
   */
  declare productPriceUnitQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Valuation Procedure.
   * Maximum length: 1.
   */
  declare inventoryValuationProcedure: DeserializedType<T, 'Edm.String'>;
  /**
   * Moving Average Price.
   */
  declare movingAveragePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valuation Category.
   * Maximum length: 1.
   */
  declare valuationCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Usage Type.
   * Maximum length: 1.
   */
  declare productUsageType: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Origin Type.
   * Maximum length: 1.
   */
  declare productOriginType: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Produced Inhouse.
   */
  declare isProducedInhouse: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Marked For Deletion.
   */
  declare isMarkedForDeletion: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Valuation Class Sales Order Stock.
   * Maximum length: 4.
   */
  declare valuationClassSalesOrderStock: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Stock Valuation Class.
   * Maximum length: 4.
   */
  declare projectStockValuationClass: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductValuationAccounting} entity.
   */
  declare productValuationAccounting?: ProductValuationAccounting<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductValuationCosting} entity.
   */
  declare productValuationCosting?: ProductValuationCosting<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductValuationLedgerAccount} entity.
   */
  declare productValuationLedgerAccount: ProductValuationLedgerAccount<T>[];
  /**
   * One-to-many navigation property to the {@link ProductValuationLedgerPrices} entity.
   */
  declare productValuationLedgerPrices: ProductValuationLedgerPrices<T>[];

  constructor(_entityApi: ProductValuationApi<T>) {
    super(_entityApi);
  }
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
