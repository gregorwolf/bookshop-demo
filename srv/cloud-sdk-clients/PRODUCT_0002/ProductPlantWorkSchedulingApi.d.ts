/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantWorkScheduling } from './ProductPlantWorkScheduling';
import { ProductPlantWorkSchedulingRequestBuilder } from './ProductPlantWorkSchedulingRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductPlantApi } from './ProductPlantApi';
import { Sap_Message } from './Sap_Message';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductPlantWorkSchedulingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantWorkScheduling<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): ProductPlantWorkSchedulingApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantWorkScheduling;
  requestBuilder(): ProductPlantWorkSchedulingRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantWorkScheduling<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantWorkScheduling<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantWorkScheduling,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_BASE_QUANTITY: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNLIMITED_OVER_DELIV_IS_ALLOWED: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    OVER_DELIVERY_TOLERANCE_PERCENT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDER_DELIVERY_TOLERANCE_PERCENT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ORDER_BATCH_CODE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_IS_WITHDRAWN_FRM_PRODN_BIN: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TRANSITION_MATRIX_PRODUCTS_GROUP: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_CHANGE_MANAGEMENT_PROFILE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COMPONENT_BACKFLUSH_CODE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETUP_AND_TEARDOWN_TIME: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SCHEDULING_PROFILE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSITION_TIME: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESSING_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SUPERVISOR: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PRODUCTION_QUANTITY_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_PRODUCTION_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantWorkScheduling<DeSerializers>>;
  };
}
