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
import type { ProductPlantForecastApi } from './ProductPlantForecastApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';

/**
 * This class represents the entity "ProductPlantForecast" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductPlantForecast<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantForecastType<T>
{
  /**
   * Technical entity name for ProductPlantForecast.
   */
  static override _entityName = 'ProductPlantForecast';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantForecast entity.
   */
  static _keys = ['Product', 'Plant'];
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
   * Consumption Ref Usage End Date.
   * @nullable
   */
  declare consumptionRefUsageEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Cnsmpn Quantity Multiplier Value.
   */
  declare cnsmpnQuantityMultiplierValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Reference Product.
   * Maximum length: 18.
   */
  declare consumptionReferenceProduct: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Reference Plant.
   * Maximum length: 4.
   */
  declare consumptionReferencePlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Correction Factor Is Required.
   */
  declare correctionFactorIsRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Forecast Model Is Reset.
   */
  declare forecastModelIsReset: DeserializedType<T, 'Edm.Boolean'>;
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

  constructor(_entityApi: ProductPlantForecastApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantForecastType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  consumptionRefUsageEndDate?: DeserializedType<T, 'Edm.Date'> | null;
  cnsmpnQuantityMultiplierValue: DeserializedType<T, 'Edm.Decimal'>;
  consumptionReferenceProduct: DeserializedType<T, 'Edm.String'>;
  consumptionReferencePlant: DeserializedType<T, 'Edm.String'>;
  correctionFactorIsRequired: DeserializedType<T, 'Edm.Boolean'>;
  forecastModelIsReset: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
