/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductEwmStorageType } from './ProductEwmStorageType';
import { ProductEwmStorageTypeRequestBuilder } from './ProductEwmStorageTypeRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductEwmWarehouseApi } from './ProductEwmWarehouseApi';
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
export declare class ProductEwmStorageTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductEwmStorageTypeApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductEwmWarehouseApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductEwmStorageType;
  requestBuilder(): ProductEwmStorageTypeRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductEwmStorageType<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductEwmStorageType<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductEwmStorageType,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_WAREHOUSE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITLED_TO_DISPOSE_PARTY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_TYPE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_INTERNAL_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SUPPLY_CHAIN_UNIT_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_STORAGE_SECTION_METHOD: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_BIN_TYPE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAXIMUM_NUMBER_OF_BINS: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAXIMUM_STORAGE_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MAX_STOR_QUANTITY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STOR_QTY_BASE_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STOR_QUANTITY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STORAGE_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MINIMUM_STORAGE_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MIN_STOR_QUANTITY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QTY_BASE_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QUANTITY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STORAGE_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_BS_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QTY_OF_MAX_STOR_QTY_IN_PCT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_SPLT_PTWY_THRESHOLD_IN_PERCENT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_PROD_IS_SPLIT_ON_PTWY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_PROD_IS_SKIPPED_ON_PTWY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_HAS_NO_REPLENISHMENT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_STORAGE_BIN_SEARCH_RULE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROD_QUANTITY_CLASSIFICATION: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROD_PTWY_QTY_CLASSIFICATION: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PTWY_SEQUENCE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductEwmStorageType<DeSerializers>,
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
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEwmWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_WAREHOUSE: OneToOneLink<
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductEwmWarehouseApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductEwmStorageType<DeSerializers>>;
  };
}
