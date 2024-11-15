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
import type { ProductPlantInternationalTradeApi } from './ProductPlantInternationalTradeApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantInternationalTrade" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantInternationalTrade<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantInternationalTradeType<T>
{
  /**
   * Technical entity name for ProductPlantInternationalTrade.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantInternationalTrade entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Of Origin.
   * Maximum length: 3.
   */
  countryOfOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Region Of Origin.
   * Maximum length: 3.
   */
  regionOfOrigin: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Tax Ctrl Code.
   * Maximum length: 16.
   */
  consumptionTaxCtrlCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Export And Import Product Group.
   * Maximum length: 4.
   */
  exportAndImportProductGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Cas Number.
   * Maximum length: 15.
   */
  productCasNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Intl Trade Classification.
   * Maximum length: 9.
   */
  prodIntlTradeClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  productPlant?: ProductPlant<T> | null;
  constructor(_entityApi: ProductPlantInternationalTradeApi<T>);
}
export interface ProductPlantInternationalTradeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  countryOfOrigin: DeserializedType<T, 'Edm.String'>;
  regionOfOrigin: DeserializedType<T, 'Edm.String'>;
  consumptionTaxCtrlCode: DeserializedType<T, 'Edm.String'>;
  exportAndImportProductGroup: DeserializedType<T, 'Edm.String'>;
  productCasNumber: DeserializedType<T, 'Edm.String'>;
  prodIntlTradeClassification: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
