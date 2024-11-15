/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitOfMeasure } from './ProductUnitOfMeasure';
import { ProductUnitOfMeasureRequestBuilder } from './ProductUnitOfMeasureRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductUnitOfMeasureEanApi } from './ProductUnitOfMeasureEanApi';
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
export declare class ProductUnitOfMeasureApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductUnitOfMeasureApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductUnitOfMeasureEanApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductUnitOfMeasure;
  requestBuilder(): ProductUnitOfMeasureRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductUnitOfMeasure<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductUnitOfMeasure<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductUnitOfMeasure, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_SAP_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_NUMERATOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROSS_WEIGHT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEIGHT_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_LENGTH: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_WIDTH: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOWER_LEVEL_PACKAGING_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOWER_LEVEL_PACKAGING_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STACKING_FACTOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    CAPACITY_USAGE: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductUnitOfMeasure<DeSerializers>,
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
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasureEan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE_EAN: OneToManyLink<
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureEanApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitOfMeasure<DeSerializers>>;
  };
}
