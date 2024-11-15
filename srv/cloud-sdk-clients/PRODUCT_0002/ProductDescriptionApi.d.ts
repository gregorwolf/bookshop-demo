/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductDescription } from './ProductDescription';
import { ProductDescriptionRequestBuilder } from './ProductDescriptionRequestBuilder';
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
export declare class ProductDescriptionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductDescription<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductDescriptionApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductDescription;
  requestBuilder(): ProductDescriptionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductDescription<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductDescription<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductDescription, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      ProductDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      ProductDescription<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductDescription<DeSerializers>,
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
      ProductDescription<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductDescription<DeSerializers>>;
  };
}
