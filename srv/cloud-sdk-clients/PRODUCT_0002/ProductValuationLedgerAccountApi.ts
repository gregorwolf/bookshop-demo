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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductValuationLedgerAccountApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductValuationLedgerAccount<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ProductValuationLedgerAccountApi<DeSerializersT> {
    return new ProductValuationLedgerAccountApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_VALUATION: new OneToOneLink(
        '_ProductValuation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductValuationLedgerAccount;

  requestBuilder(): ProductValuationLedgerAccountRequestBuilder<DeSerializersT> {
    return new ProductValuationLedgerAccountRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductValuationLedgerAccount<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductValuationLedgerAccount<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProductValuationLedgerAccount,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuationLedgerAccount,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link product} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT: fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false),
        /**
         * Static representation of the {@link valuationArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_AREA: fieldBuilder.buildEdmTypeField(
          'ValuationArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valuationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_TYPE: fieldBuilder.buildEdmTypeField(
          'ValuationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currencyRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_ROLE: fieldBuilder.buildEdmTypeField(
          'CurrencyRole',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ledger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER: fieldBuilder.buildEdmTypeField('Ledger', 'Edm.String', false),
        /**
         * Static representation of the {@link productPriceControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PRICE_CONTROL: fieldBuilder.buildEdmTypeField(
          'ProductPriceControl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productPriceUnitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PRICE_UNIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductPriceUnitQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link movingAveragePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVING_AVERAGE_PRICE: fieldBuilder.buildEdmTypeField(
          'MovingAveragePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link standardPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_PRICE: fieldBuilder.buildEdmTypeField(
          'StandardPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link baseIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sapMessages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_MESSAGES: fieldBuilder.buildCollectionField(
          'SAP__Messages',
          Sap_Message,
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductValuationLedgerAccount)
      };
    }

    return this._schema;
  }
}
