/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductEwmWarehouse } from './ProductEwmWarehouse';
import { ProductEwmWarehouseRequestBuilder } from './ProductEwmWarehouseRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductEwmStorageTypeApi } from './ProductEwmStorageTypeApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductEwmWarehouseApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductEwmWarehouseApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductEwmStorageTypeApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductEwmWarehouse;
  requestBuilder(): ProductEwmWarehouseRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductEwmWarehouse<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductEwmWarehouse<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductEwmWarehouse, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_WAREHOUSE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITLED_TO_DISPOSE_PARTY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_INTERNAL_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SUPPLY_CHAIN_UNIT_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PRODUCT_PROCESS_BLOCK_PROFILE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROCESS_TYPE_CONTROL_CODE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STGG_AREA_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_MIN_SHELF_LIFE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_PTWY_CONTROL_STRATEGY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_SECTION_METHOD: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_BIN_TYPE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_BULK_STORAGE_METHOD: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STOCK_REMOVAL_CONTROL_STRATEGY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STOCK_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PHYS_INVENTORY_COUNTING_CYCLE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PREFERRED_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PREFERRED_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_QUALITY_INSPECTION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductEwmWarehouse<DeSerializers>,
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
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEwmStorageType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_STORAGE_TYPE: OneToManyLink<
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductEwmStorageTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductEwmWarehouse<DeSerializers>>;
  };
}
