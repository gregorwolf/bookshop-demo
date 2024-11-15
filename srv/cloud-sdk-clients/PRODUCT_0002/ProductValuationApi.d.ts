/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuation } from './ProductValuation';
import { ProductValuationRequestBuilder } from './ProductValuationRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductValuationAccountingApi } from './ProductValuationAccountingApi';
import { ProductValuationCostingApi } from './ProductValuationCostingApi';
import { ProductValuationLedgerAccountApi } from './ProductValuationLedgerAccountApi';
import { ProductValuationLedgerPricesApi } from './ProductValuationLedgerPricesApi';
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
export declare class ProductValuationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuation<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductValuationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationAccountingApi<DeSerializersT>,
      ProductValuationCostingApi<DeSerializersT>,
      ProductValuationLedgerAccountApi<DeSerializersT>,
      ProductValuationLedgerPricesApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductValuation;
  requestBuilder(): ProductValuationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductValuation<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductValuation<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductValuation, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_CLASS: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_DETERMINATION_CONTROL: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDARD_PRICE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_PRICE_UNIT_QUANTITY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENTORY_VALUATION_PROCEDURE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MOVING_AVERAGE_PRICE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUATION_CATEGORY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_USAGE_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ORIGIN_TYPE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRODUCED_INHOUSE: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VALUATION_CLASS_SALES_ORDER_STOCK: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_STOCK_VALUATION_CLASS: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductValuation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuation<DeSerializers>,
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
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuationAccounting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION_ACCOUNTING: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationAccountingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuationCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION_COSTING: OneToOneLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationCostingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productValuationLedgerAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION_LEDGER_ACCOUNT: OneToManyLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationLedgerAccountApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productValuationLedgerPrices} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION_LEDGER_PRICES: OneToManyLink<
      ProductValuation<DeSerializersT>,
      DeSerializersT,
      ProductValuationLedgerPricesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuation<DeSerializers>>;
  };
}
