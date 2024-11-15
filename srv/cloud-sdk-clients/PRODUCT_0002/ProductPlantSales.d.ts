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
export declare class ProductPlantSales<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantSalesType<T>
{
  /**
   * Technical entity name for ProductPlantSales.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantSales entity.
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
   * Loading Group.
   * Maximum length: 4.
   */
  loadingGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Cap Planning Quantity In Base Uo M.
   */
  capPlanningQuantityInBaseUoM: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Prod Shipg Procg Duration In Days.
   */
  prodShipgProcgDurationInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wrk Centers Shipg Setup Time In Days.
   */
  wrkCentersShipgSetupTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replacement Part Type.
   * Maximum length: 1.
   */
  replacementPartType: DeserializedType<T, 'Edm.String'>;
  /**
   * Availability Check Type.
   * Maximum length: 2.
   */
  availabilityCheckType: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductPlant} entity.
   */
  productPlant?: ProductPlant<T> | null;
  constructor(_entityApi: ProductPlantSalesApi<T>);
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
