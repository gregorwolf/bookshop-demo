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
import type { ProductPlantSalesApi } from './ProductPlantSalesApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';

/**
 * This class represents the entity "ProductPlantSales" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductPlantSales<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductPlantSalesType<T>
{
  /**
   * Technical entity name for ProductPlantSales.
   */
  static override _entityName = 'ProductPlantSales';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantSales entity.
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
   * Loading Group.
   * Maximum length: 4.
   */
  declare loadingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Cap Planning Quantity In Base Uo M.
   */
  declare capPlanningQuantityInBaseUoM: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prod Shipg Procg Duration In Days.
   */
  declare prodShipgProcgDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wrk Centers Shipg Setup Time In Days.
   */
  declare wrkCentersShipgSetupTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replacement Part Type.
   * Maximum length: 1.
   */
  declare replacementPartType: DeserializedType<T, 'Edm.String'>;
  /**
   * Availability Check Type.
   * Maximum length: 2.
   */
  declare availabilityCheckType: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  declare productPlant?: ProductPlant<T> | null;

  constructor(_entityApi: ProductPlantSalesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductPlantSalesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  loadingGroup: DeserializedType<T, 'Edm.String'>;
  capPlanningQuantityInBaseUoM: DeserializedType<T, 'Edm.Decimal'>;
  prodShipgProcgDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  wrkCentersShipgSetupTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  replacementPartType: DeserializedType<T, 'Edm.String'>;
  availabilityCheckType: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
