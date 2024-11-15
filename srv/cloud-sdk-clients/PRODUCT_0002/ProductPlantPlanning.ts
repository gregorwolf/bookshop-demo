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
export class ProductPlantPlanning<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantPlanningType<T>
{
  /**
   * Technical entity name for ProductPlantPlanning.
   */
  static override _entityName = 'ProductPlantPlanning';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantPlanning entity.
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
   * Planning Material.
   * Maximum length: 18.
   */
  declare planningMaterial: DeserializedType<T, 'Edm.String'>;
  /**
   * Planning Plant.
   * Maximum length: 4.
   */
  declare planningPlant: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Plnt Plng Matl Conversion Fctr.
   */
  declare prodPlntPlngMatlConversionFctr: DeserializedType<T, 'Edm.Double'>;
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

  constructor(_entityApi: ProductPlantPlanningApi<T>) {
    super(_entityApi);
  }
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
