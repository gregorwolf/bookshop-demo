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
import type { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';

/**
 * This class represents the entity "ProductPlantProcurement" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductPlantProcurement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantProcurementType<T>
{
  /**
   * Technical entity name for ProductPlantProcurement.
   */
  static override _entityName = 'ProductPlantProcurement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantProcurement entity.
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
   * Is Auto Pur Ord Creation Allowed.
   */
  declare isAutoPurOrdCreationAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Source List Required.
   */
  declare isSourceListRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Just In Time Delivery Schedule Code.
   * Maximum length: 1.
   */
  declare justInTimeDeliveryScheduleCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   */
  declare purchasingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Of Supply Category.
   * Maximum length: 1.
   */
  declare sourceOfSupplyCategory: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductPlantProcurementApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantProcurementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  isAutoPurOrdCreationAllowed: DeserializedType<T, 'Edm.Boolean'>;
  isSourceListRequired: DeserializedType<T, 'Edm.Boolean'>;
  justInTimeDeliveryScheduleCode: DeserializedType<T, 'Edm.String'>;
  purchasingGroup: DeserializedType<T, 'Edm.String'>;
  sourceOfSupplyCategory: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
