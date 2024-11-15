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
import type { ProductPlantPlanningApi } from './ProductPlantPlanningApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantPlanning" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantPlanning<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantPlanningType<T>
{
  /**
   * Technical entity name for ProductPlantPlanning.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantPlanning entity.
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
   * Planning Material.
   * Maximum length: 18.
   */
  planningMaterial: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Plant.
   * Maximum length: 4.
   */
  planningPlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Plnt Plng Matl Conversion Fctr.
   */
  prodPlntPlngMatlConversionFctr: DeserializedType<T, 'Edm.Double'>;
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
  constructor(_entityApi: ProductPlantPlanningApi<T>);
}
export interface ProductPlantPlanningType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  planningMaterial: DeserializedType<T, 'Edm.String'>;
  planningPlant: DeserializedType<T, 'Edm.String'>;
  prodPlntPlngMatlConversionFctr: DeserializedType<T, 'Edm.Double'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
