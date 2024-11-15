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
export class ProductPlantQualityManagement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantQualityManagementType<T>
{
  /**
   * Technical entity name for ProductPlantQualityManagement.
   */
  static override _entityName = 'ProductPlantQualityManagement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductPlantQualityManagement entity.
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
   * Prod Qlty Management Control Key.
   * Maximum length: 8.
   */
  declare prodQltyManagementControlKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Has Post To Inspection Stock.
   */
  declare hasPostToInspectionStock: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Insp Lot Documentation Is Required.
   */
  declare inspLotDocumentationIsRequired: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Quality Mgmt System For Supplier.
   * Maximum length: 4.
   */
  declare qualityMgmtSystemForSupplier: DeserializedType<T, 'Edm.String'>;
  /**
   * Recrrg Insp Interval Time In Days.
   */
  declare recrrgInspIntervalTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Quality Certificate Type.
   * Maximum length: 4.
   */
  declare productQualityCertificateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Quality Authorization Group.
   * Maximum length: 6.
   */
  declare prodQualityAuthorizationGroup: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: ProductPlantQualityManagementApi<T>) {
    super(_entityApi);
  }
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
