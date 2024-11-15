/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductChangeMaster } from './ProductChangeMaster';
import { ProductChangeMasterRequestBuilder } from './ProductChangeMasterRequestBuilder';
import { ProductApi } from './ProductApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductChangeMasterApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductChangeMaster<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductChangeMasterApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductChangeMaster;
  requestBuilder(): ProductChangeMasterRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductChangeMaster<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductChangeMaster<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductChangeMaster, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANGE_NUMBER: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVISION_LEVEL: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductChangeMaster<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductChangeMaster<DeSerializers>>;
  };
}
