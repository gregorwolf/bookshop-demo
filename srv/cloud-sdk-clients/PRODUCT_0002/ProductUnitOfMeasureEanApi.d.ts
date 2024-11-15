/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitOfMeasureEan } from './ProductUnitOfMeasureEan';
import { ProductUnitOfMeasureEanRequestBuilder } from './ProductUnitOfMeasureEanRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductUnitOfMeasureApi } from './ProductUnitOfMeasureApi';
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
export declare class ProductUnitOfMeasureEanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductUnitOfMeasureEan<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductUnitOfMeasureEanApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductUnitOfMeasureApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductUnitOfMeasureEan;
  requestBuilder(): ProductUnitOfMeasureEanRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductUnitOfMeasureEan<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductUnitOfMeasureEan<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductUnitOfMeasureEan,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSECUTIVE_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STANDARD_ID: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER_CAT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductUnitOfMeasureEan<DeSerializers>,
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
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitOfMeasureEan<DeSerializers>>;
  };
}
