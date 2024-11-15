/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationLedgerAccount } from './ProductValuationLedgerAccount';
import { ProductValuationLedgerAccountRequestBuilder } from './ProductValuationLedgerAccountRequestBuilder';
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
export declare class ProductValuationLedgerAccountApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductValuationLedgerAccount<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationLedgerAccountApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductValuationLedgerAccount;
  requestBuilder(): ProductValuationLedgerAccountRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductValuationLedgerAccount<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductValuationLedgerAccount<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductValuationLedgerAccount,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY_ROLE: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PRICE_CONTROL: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PRICE_UNIT_QUANTITY: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MOVING_AVERAGE_PRICE: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STANDARD_PRICE: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductValuationLedgerAccount<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuationLedgerAccount<DeSerializers>,
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
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuationLedgerAccount<DeSerializers>>;
  };
}
