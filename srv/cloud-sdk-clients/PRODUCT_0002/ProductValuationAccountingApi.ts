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
export class ProductValuationAccountingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductValuationAccounting<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationAccountingApi<DeSerializersT> {
    return new ProductValuationAccountingApi(deSerializers);
  }

  private navigationPropertyFields!: {
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

  entityConstructor = ProductValuationAccounting;

  requestBuilder(): ProductValuationAccountingRequestBuilder<DeSerializersT> {
    return new ProductValuationAccountingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductValuationAccounting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductValuationAccounting<DeSerializersT>,
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
    typeof ProductValuationAccounting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuationAccounting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link commercialPrice1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice1InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commercialPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice2InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commercialPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMERCIAL_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'CommercialPrice3InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link devaluationYearCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVALUATION_YEAR_COUNT: fieldBuilder.buildEdmTypeField(
          'DevaluationYearCount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link futurePrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PRICE: fieldBuilder.buildEdmTypeField(
          'FuturePrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link futurePriceValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PRICE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePriceValidityStartDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link lifoValuationPoolNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFO_VALUATION_POOL_NUMBER: fieldBuilder.buildEdmTypeField(
          'LIFOValuationPoolNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxPricel1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICEL_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPricel1InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPrice2InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'TaxPrice3InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxBasedPricesPriceUnitQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_BASED_PRICES_PRICE_UNIT_QTY: fieldBuilder.buildEdmTypeField(
          'TaxBasedPricesPriceUnitQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isLifoAndFifoRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LIFO_AND_FIFO_RELEVANT: fieldBuilder.buildEdmTypeField(
          'IsLIFOAndFIFORelevant',
          'Edm.Boolean',
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
        ALL_FIELDS: new AllFields('*', ProductValuationAccounting)
      };
    }

    return this._schema;
  }
}
