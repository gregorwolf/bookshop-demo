/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationCosting } from './ProductValuationCosting';
import { ProductValuationCostingRequestBuilder } from './ProductValuationCostingRequestBuilder';
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
export class ProductValuationCostingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuationCosting<DeSerializersT>, DeSerializersT>
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
  ): ProductValuationCostingApi<DeSerializersT> {
    return new ProductValuationCostingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationCosting<DeSerializersT>,
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

  entityConstructor = ProductValuationCosting;

  requestBuilder(): ProductValuationCostingRequestBuilder<DeSerializersT> {
    return new ProductValuationCostingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductValuationCosting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductValuationCosting<DeSerializersT>,
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
    typeof ProductValuationCosting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductValuationCosting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_COSTED_WITH_QTY_STRUC: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_MATERIAL_RELATED_ORIGIN: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    COST_ORIGIN_GROUP: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_OVERHEAD_GROUP: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_PRICE_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUTURE_PLND_PRICE_1_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    FUTURE_PLND_PRICE_2_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    FUTURE_PLND_PRICE_3_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuationCosting<DeSerializers>,
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
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuationCosting<DeSerializers>>;
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
         * Static representation of the {@link productIsCostedWithQtyStruc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_COSTED_WITH_QTY_STRUC: fieldBuilder.buildEdmTypeField(
          'ProductIsCostedWithQtyStruc',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isMaterialRelatedOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATERIAL_RELATED_ORIGIN: fieldBuilder.buildEdmTypeField(
          'IsMaterialRelatedOrigin',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link costOriginGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ORIGIN_GROUP: fieldBuilder.buildEdmTypeField(
          'CostOriginGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costingOverheadGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_OVERHEAD_GROUP: fieldBuilder.buildEdmTypeField(
          'CostingOverheadGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedPrice1InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_1_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice1InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plannedPrice2InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_2_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice2InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plannedPrice3InCoCodeCrcy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_PRICE_3_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField(
          'PlannedPrice3InCoCodeCrcy',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link futurePlndPrice1ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_1_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice1ValdtyDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link futurePlndPrice2ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_2_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice2ValdtyDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link futurePlndPrice3ValdtyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_PLND_PRICE_3_VALDTY_DATE: fieldBuilder.buildEdmTypeField(
          'FuturePlndPrice3ValdtyDate',
          'Edm.Date',
          true
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
        ALL_FIELDS: new AllFields('*', ProductValuationCosting)
      };
    }

    return this._schema;
  }
}
