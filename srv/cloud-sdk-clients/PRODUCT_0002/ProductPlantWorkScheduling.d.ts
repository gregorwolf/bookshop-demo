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
import type { ProductPlantWorkSchedulingApi } from './ProductPlantWorkSchedulingApi';
import { Product, ProductType } from './Product';
import { ProductPlant, ProductPlantType } from './ProductPlant';
/**
 * This class represents the entity "ProductPlantWorkScheduling" of service "com.sap.gateway.srvd_a2x.api_product_2.v0001".
 */
export declare class ProductPlantWorkScheduling<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductPlantWorkSchedulingType<T>
{
  /**
   * Technical entity name for ProductPlantWorkScheduling.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ProductPlantWorkScheduling entity.
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
   * Product Base Quantity.
   */
  productBaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unlimited Over Deliv Is Allowed.
   */
  unlimitedOverDelivIsAllowed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Over Delivery Tolerance Percent.
   */
  overDeliveryTolerancePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Under Delivery Tolerance Percent.
   */
  underDeliveryTolerancePercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Invtry Managed Loc.
   * Maximum length: 4.
   */
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Order Batch Code.
   * Maximum length: 1.
   */
  productionOrderBatchCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Is Withdrawn Frm Prodn Bin.
   */
  prodIsWithdrawnFrmProdnBin: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Transition Matrix Products Group.
   * Maximum length: 20.
   */
  transitionMatrixProductsGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Change Management Profile.
   * Maximum length: 6.
   */
  orderChangeManagementProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Component Backflush Code.
   * Maximum length: 1.
   */
  productComponentBackflushCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Setup And Teardown Time.
   */
  setupAndTeardownTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Scheduling Profile.
   * Maximum length: 6.
   */
  productionSchedulingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Transition Time.
   */
  transitionTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Processing Time In Days.
   */
  processingTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Supervisor.
   * Maximum length: 3.
   */
  productionSupervisor: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Production Quantity Unit.
   * Maximum length: 3.
   */
  productProductionQuantityUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod Production Quantity Iso Unit.
   * Maximum length: 3.
   */
  prodProductionQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: ProductPlantWorkSchedulingApi<T>);
}
export interface ProductPlantWorkSchedulingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.String'>;
  plant: DeserializedType<T, 'Edm.String'>;
  productBaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  unlimitedOverDelivIsAllowed: DeserializedType<T, 'Edm.Boolean'>;
  overDeliveryTolerancePercent: DeserializedType<T, 'Edm.Decimal'>;
  underDeliveryTolerancePercent: DeserializedType<T, 'Edm.Decimal'>;
  productionInvtryManagedLoc: DeserializedType<T, 'Edm.String'>;
  productionOrderBatchCode: DeserializedType<T, 'Edm.String'>;
  prodIsWithdrawnFrmProdnBin: DeserializedType<T, 'Edm.Boolean'>;
  transitionMatrixProductsGroup: DeserializedType<T, 'Edm.String'>;
  orderChangeManagementProfile: DeserializedType<T, 'Edm.String'>;
  productComponentBackflushCode: DeserializedType<T, 'Edm.String'>;
  setupAndTeardownTime: DeserializedType<T, 'Edm.Decimal'>;
  productionSchedulingProfile: DeserializedType<T, 'Edm.String'>;
  transitionTime: DeserializedType<T, 'Edm.Decimal'>;
  processingTimeInDays: DeserializedType<T, 'Edm.Decimal'>;
  productionSupervisor: DeserializedType<T, 'Edm.String'>;
  productProductionQuantityUnit: DeserializedType<T, 'Edm.String'>;
  prodProductionQuantityIsoUnit: DeserializedType<T, 'Edm.String'>;
  baseUnit: DeserializedType<T, 'Edm.String'>;
  baseIsoUnit: DeserializedType<T, 'Edm.String'>;
  sapMessages: Sap_Message<T>[];
  product_1?: ProductType<T> | null;
  productPlant?: ProductPlantType<T> | null;
}
