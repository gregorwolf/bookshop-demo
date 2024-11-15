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
import type { ProductPlantCostingApi } from './ProductPlantCostingApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantCosting" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantCosting<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantCostingType<T>
{
  /**
   * Technical entity name for ProductPlantCosting.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantCosting entity.
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
   * Is Co Product.
   */
  isCoProduct: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Costing Lot Size.
   */
  costingLotSize: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Task List Group.
   * Maximum length: 8.
   */
  taskListGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Task List Type.
   * Maximum length: 1.
   */
  taskListType: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Special Procurement Type.
   * Maximum length: 2.
   */
  costingSpecialProcurementType: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Bom Alternative.
   * Maximum length: 2.
   */
  sourceBomAlternative: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Bom Usage.
   * Maximum length: 1.
   */
  productBomUsage: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Is Costing Relevant.
   */
  productIsCostingRelevant: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Task List Group Counter.
   * Maximum length: 2.
   */
  taskListGroupCounter: DeserializedType<T, 'Edm.String'>;
  /**
   * Variance Key.
   * Maximum length: 6.
   */
  varianceKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Costing Production Version.
   * Maximum length: 4.
   */
  costingProductionVersion: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Fixed Price Co Product.
   */
  isFixedPriceCoProduct: DeserializedType<T, 'Edm.Boolean'>;
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
  constructor(_entityApi: ProductPlantCostingApi<T>);
}
export interface ProductPlantCostingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  isCoProduct: DeserializedType<T, 'Edm.Boolean'>;
  costingLotSize: DeserializedType<T, 'Edm.Decimal'>;
  taskListGroup: DeserializedType<T, 'Edm.String'>;
  taskListType: DeserializedType<T, 'Edm.String'>;
  costingSpecialProcurementType: DeserializedType<T, 'Edm.String'>;
  sourceBomAlternative: DeserializedType<T, 'Edm.String'>;
  productBomUsage: DeserializedType<T, 'Edm.String'>;
  productIsCostingRelevant: DeserializedType<T, 'Edm.Boolean'>;
  taskListGroupCounter: DeserializedType<T, 'Edm.String'>;
  varianceKey: DeserializedType<T, 'Edm.String'>;
  costingProductionVersion: DeserializedType<T, 'Edm.String'>;
  isFixedPriceCoProduct: DeserializedType<T, 'Edm.Boolean'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
