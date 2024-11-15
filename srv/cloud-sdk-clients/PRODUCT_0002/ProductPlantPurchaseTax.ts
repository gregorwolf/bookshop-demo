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
import type { ProductPlantPurchaseTaxApi } from './ProductPlantPurchaseTaxApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';

/**
 * This class represents the entity "ProductPlantPurchaseTax" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductPlantPurchaseTax<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantPurchaseTaxType<T>
{
  /**
   * Technical entity name for ProductPlantPurchaseTax.
   */
  static override _entityName = 'ProductPlantPurchaseTax';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantPurchaseTax entity.
   */
  static _keys = ['Product', 'Plant', 'DepartureCountry'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Plant.
   * Maximum length: 4.
   */
  declare plant: DeserializedType<T, 'Edm.String'>;
  /**
   * Departure Country.
   * Maximum length: 3.
   */
  declare departureCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Purchase Tax Classification.
   * Maximum length: 1.
   */
  declare prodPurchaseTaxClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  declare productPlant?: ProductPlant<T> | null;

  constructor(_entityApi: ProductPlantPurchaseTaxApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantPurchaseTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  departureCountry: DeserializedType<T, 'Edm.String'>;
  prodPurchaseTaxClassification: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
