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
export declare class ProductQualityManagement<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductQualityManagementType<T>
{
  /**
   * Technical entity name for ProductQualityManagement.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductQualityManagement entity.
   */
  static _keys: string[];
  /**
   * Product.
   * Maximum length: 18.
   */
  product: DeserializedType<T, 'Edm.String'>;
  /**
   * Qlty Mgmt In Procmt Is Active.
   */
  qltyMgmtInProcmtIsActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Sap Messages.
   */
  sapMessages: Sap_Message<T>[];
  /**
   * One-to-one navigation property to the {@link Product} entity.
   */
  product_1?: Product<T> | null;
  constructor(_entityApi: ProductQualityManagementApi<T>);
}
export interface ProductQualityManagementType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  qltyMgmtInProcmtIsActive: DeserializedType<T, 'Edm.Boolean'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
}
