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
import type { ProductPlantQualityManagementApi } from './ProductPlantQualityManagementApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantQualityManagement" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantQualityManagement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantQualityManagementType<T>
{
  /**
   * Technical entity name for ProductPlantQualityManagement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantQualityManagement entity.
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
   * Prod Qlty Management Control Key.
   * Maximum length: 8.
   */
  prodQltyManagementControlKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Has Post To Inspection Stock.
   */
  hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Documentation Is Required.
   */
  inspLotDocumentationIsRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Quality Mgmt System For Supplier.
   * Maximum length: 4.
   */
  qualityMgmtSystemForSupplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Recrrg Insp Interval Time In Days.
   */
  recrrgInspIntervalTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Quality Certificate Type.
   * Maximum length: 4.
   */
  productQualityCertificateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Quality Authorization Group.
   * Maximum length: 6.
   */
  prodQualityAuthorizationGroup: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: ProductPlantQualityManagementApi<T>);
}
export interface ProductPlantQualityManagementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  prodQltyManagementControlKey: DeserializedType<T, 'Edm.String'>;
  hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  inspLotDocumentationIsRequired: DeserializedType<T, 'Edm.Boolean'>;
  qualityMgmtSystemForSupplier: DeserializedType<T, 'Edm.String'>;
  recrrgInspIntervalTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  productQualityCertificateType: DeserializedType<T, 'Edm.String'>;
  prodQualityAuthorizationGroup: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
