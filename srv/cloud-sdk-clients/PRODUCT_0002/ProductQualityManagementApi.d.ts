/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductQualityManagement } from './ProductQualityManagement';
import { ProductQualityManagementRequestBuilder } from './ProductQualityManagementRequestBuilder';
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
export declare class ProductQualityManagementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductQualityManagement<DeSerializersT>, DeSerializersT>
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
  ): ProductQualityManagementApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductQualityManagement;
  requestBuilder(): ProductQualityManagementRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductQualityManagement<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductQualityManagement<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductQualityManagement,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QLTY_MGMT_IN_PROCMT_IS_ACTIVE: OrderableEdmTypeField<
      ProductQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductQualityManagement<DeSerializers>,
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
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductQualityManagement<DeSerializers>>;
  };
}
