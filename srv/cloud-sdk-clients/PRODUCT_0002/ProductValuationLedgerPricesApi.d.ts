/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationLedgerPrices } from './ProductValuationLedgerPrices';
import { ProductValuationLedgerPricesRequestBuilder } from './ProductValuationLedgerPricesRequestBuilder';
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
export declare class ProductValuationLedgerPricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductValuationLedgerPrices<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationLedgerPricesApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductValuationLedgerPrices;
  requestBuilder(): ProductValuationLedgerPricesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductValuationLedgerPrices<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductValuationLedgerPrices<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductValuationLedgerPrices,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_ROLE: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PRICE_UNIT_QUANTITY: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUTURE_PRICE: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUTURE_PRICE_VALIDITY_START_DATE: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductValuationLedgerPrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuationLedgerPrices<DeSerializers>,
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
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuationLedgerPrices<DeSerializers>>;
  };
}
