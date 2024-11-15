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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductValuationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuation<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationApi<DeSerializersT> {
    return new ProductValuationApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationAccountingApi<DeSerializersT>,
      ProductValuationCostingApi<DeSerializersT>,
      ProductValuationLedgerAccountApi<DeSerializersT>,
      ProductValuationLedgerPricesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_VALUATION_ACCOUNTING: new OneToOneLink(
        '_ProductValuationAccounting',
        this,
        linkedApis[1]
      ),
      PRODUCT_VALUATION_COSTING: new OneToOneLink(
        '_ProductValuationCosting',
        this,
        linkedApis[2]
      ),
      PRODUCT_VALUATION_LEDGER_ACCOUNT: new OneToManyLink(
        '_ProductValuationLedgerAccount',
        this,
        linkedApis[3]
      ),
      PRODUCT_VALUATION_LEDGER_PRICES: new OneToManyLink(
        '_ProductValuationLedgerPrices',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ProductValuation;

  requestBuilder(): ProductValuationRequestBuilder<DeSerializersT> {
    return new ProductValuationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductValuation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductValuation<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductValuation<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductValuation, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link valuationClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CLASS: fieldBuilder.buildEdmTypeField(
          'ValuationClass',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceDeterminationControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DETERMINATION_CONTROL: fieldBuilder.buildEdmTypeField(
          'PriceDeterminationControl',
          'Edm.String',
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
         * Static representation of the {@link productPriceUnitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PRICE_UNIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductPriceUnitQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventoryValuationProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_VALUATION_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'InventoryValuationProcedure',
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
         * Static representation of the {@link valuationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ValuationCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productUsageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_USAGE_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductUsageType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productOriginType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ORIGIN_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductOriginType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isProducedInhouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCED_INHOUSE: fieldBuilder.buildEdmTypeField(
          'IsProducedInhouse',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link valuationClassSalesOrderStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUATION_CLASS_SALES_ORDER_STOCK: fieldBuilder.buildEdmTypeField(
          'ValuationClassSalesOrderStock',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link projectStockValuationClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_STOCK_VALUATION_CLASS: fieldBuilder.buildEdmTypeField(
          'ProjectStockValuationClass',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', ProductValuation)
      };
    }

    return this._schema;
  }
}
