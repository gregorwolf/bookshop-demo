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
import type { ProductQualityManagementApi } from './ProductQualityManagementApi';
import { Product, ProductType } from './Product';

/**
 * This class represents the entity "ProductQualityManagement" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export class ProductQualityManagement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductQualityManagementType<T>
{
  /**
   * Technical entity name for ProductQualityManagement.
   */
  static override _entityName = 'ProductQualityManagement';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath =
    '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
  /**
   * All key fields of the ProductQualityManagement entity.
   */
  static _keys = ['Product'];
  /**
   * Product.
   * Maximum length: 18.
   */
  declare product: DeserializedType<T, 'Edm.String'>;
  /**
   * Qlty Mgmt In Procmt Is Active.
   */
  declare qltyMgmtInProcmtIsActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  declare sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  declare product_1?: Product<T> | null;

  constructor(_entityApi: ProductQualityManagementApi<T>) {
    super(_entityApi);
  }
}

export interface ProductQualityManagementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  qltyMgmtInProcmtIsActive: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
