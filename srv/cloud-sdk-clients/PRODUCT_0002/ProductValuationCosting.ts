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
import type { ProductValuationCostingApi } from './ProductValuationCostingApi';
import { Product, ProductType } from './Product';
import { ProductValuation, ProductValuationType } from './ProductValuation';

/**
 * This class represents the entity "ProductValuationCosting" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductValuationCosting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductValuationCostingType<T>
{
  /**
   * Technical entity name for ProductValuationCosting.
   */
  static override _entityName = 'ProductValuationCosting';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductValuationCosting entity.
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
   * Product Is Costed With Qty Struc.
   */
  declare productIsCostedWithQtyStruc: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Material Related Origin.
   */
  declare isMaterialRelatedOrigin: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Cost Origin Group.
   * Maximum length: 4.
   */
  declare costOriginGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Overhead Group.
   * Maximum length: 10.
   */
  declare costingOverheadGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Price 1 In Co Code Crcy.
   */
  declare plannedPrice1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Price 2 In Co Code Crcy.
   */
  declare plannedPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Price 3 In Co Code Crcy.
   */
  declare plannedPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Future Plnd Price 1 Valdty Date.
   * @nullable
   */
  declare futurePlndPrice1ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Future Plnd Price 2 Valdty Date.
   * @nullable
   */
  declare futurePlndPrice2ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Future Plnd Price 3 Valdty Date.
   * @nullable
   */
  declare futurePlndPrice3ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Currency.
   * Maximum length: 3.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductValuationCostingApi<T>) {
    super(_entityApi);
  }
}

export interface ProductValuationCostingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  valuationArea: DeserializedType<T, 'Edm.String'>;
  valuationType: DeserializedType<T, 'Edm.String'>;
  productIsCostedWithQtyStruc: DeserializedType<T, 'Edm.Boolean'>;
  isMaterialRelatedOrigin: DeserializedType<T, 'Edm.Boolean'>;
  costOriginGroup: DeserializedType<T, 'Edm.String'>;
  costingOverheadGroup: DeserializedType<T, 'Edm.String'>;
  plannedPrice1InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  plannedPrice2InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  plannedPrice3InCoCodeCrcy: DeserializedType<T, 'Edm.Decimal'>;
  futurePlndPrice1ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  futurePlndPrice2ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  futurePlndPrice3ValdtyDate?: DeserializedType<T, 'Edm.Date'> | null;
  currency: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productValuation?: ProductValuationType<T> | null;
}
