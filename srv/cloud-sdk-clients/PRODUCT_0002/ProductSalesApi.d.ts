/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSales } from './ProductSales';
import { ProductSalesRequestBuilder } from './ProductSalesRequestBuilder';
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
export declare class ProductSalesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSales<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductSalesApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductSales;
  requestBuilder(): ProductSalesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductSales<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductSales<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductSales, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_STATUS: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_STATUS_VALIDITY_DATE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TRANSPORTATION_GROUP: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGING_PRODUCT_TYPE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWED_PACKAGING_WEIGHT_QTY: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_PACKAGING_WEIGHT_QTY_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLWD_PACKAGING_WEIGHT_QTY_ISO_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWED_PACKAGING_VOLUME_QTY: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_PACKAGING_VOLUME_QTY_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLWD_PACKAGING_VOLUME_QTY_ISO_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_LEVEL_BY_VOLUME_IN_PERCENT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCESS_WEIGHT_TOLERANCE_VALUE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKGG_PRODUCT_IS_CLOSED_PACKAGING: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_STACKING_FACTOR: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    PROD_EXCESS_VOLUME_TOLERANCE_VALUE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductSales<DeSerializers>,
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
      ProductSales<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSales<DeSerializers>>;
  };
}
