/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStorage } from './ProductStorage';
import { ProductStorageRequestBuilder } from './ProductStorageRequestBuilder';
import { ProductApi } from './ProductApi';
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
export declare class ProductStorageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStorage<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductStorageApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductStorage;
  requestBuilder(): ProductStorageRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductStorage<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductStorage<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductStorage, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_CONDITIONS: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_TEMPERATURE_CONDITION_CODE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HAZARDOUS_PRODUCT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LABEL_TYPE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL_FORM: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIN_REMAINING_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_EXPIRATION_DATE_TYPE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_BIN_INSTRUCTION: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHELF_LIFE_EXPIRATION_DATE_PERIOD: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHELF_LIFE_EXPRTN_DATE_RNDNG_RULE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_SHELF_LIFE_STORAGE_PERCENT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductStorage<DeSerializers>,
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
      ProductStorage<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStorage<DeSerializers>>;
  };
}
