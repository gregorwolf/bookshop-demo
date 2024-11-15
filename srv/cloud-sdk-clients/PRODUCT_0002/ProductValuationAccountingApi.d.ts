/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationAccounting } from './ProductValuationAccounting';
import { ProductValuationAccountingRequestBuilder } from './ProductValuationAccountingRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductValuationApi } from './ProductValuationApi';
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
export declare class ProductValuationAccountingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductValuationAccounting<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationAccountingApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductValuationAccounting;
  requestBuilder(): ProductValuationAccountingRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductValuationAccounting<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductValuationAccounting<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductValuationAccounting,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMMERCIAL_PRICE_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMERCIAL_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMERCIAL_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEVALUATION_YEAR_COUNT: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUTURE_PRICE: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUTURE_PRICE_VALIDITY_START_DATE: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    LIFO_VALUATION_POOL_NUMBER: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_PRICEL_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_BASED_PRICES_PRICE_UNIT_QTY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_LIFO_AND_FIFO_RELEVANT: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductValuationAccounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuationAccounting<DeSerializers>,
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
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuationAccounting<DeSerializers>>;
  };
}
