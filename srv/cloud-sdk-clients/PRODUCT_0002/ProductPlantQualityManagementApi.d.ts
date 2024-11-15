/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantQualityManagement } from './ProductPlantQualityManagement';
import { ProductPlantQualityManagementRequestBuilder } from './ProductPlantQualityManagementRequestBuilder';
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
export declare class ProductPlantQualityManagementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantQualityManagement<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantQualityManagementApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantQualityManagement;
  requestBuilder(): ProductPlantQualityManagementRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantQualityManagement<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantQualityManagement<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantQualityManagement,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_QLTY_MANAGEMENT_CONTROL_KEY: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HAS_POST_TO_INSPECTION_STOCK: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_DOCUMENTATION_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    QUALITY_MGMT_SYSTEM_FOR_SUPPLIER: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRRG_INSP_INTERVAL_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_QUALITY_CERTIFICATE_TYPE: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_QUALITY_AUTHORIZATION_GROUP: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantQualityManagement<DeSerializers>,
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
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantQualityManagement<DeSerializers>>;
  };
}
