/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitOfMeasureEan } from './ProductUnitOfMeasureEan';
import { ProductUnitOfMeasureEanRequestBuilder } from './ProductUnitOfMeasureEanRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductUnitOfMeasureApi } from './ProductUnitOfMeasureApi';
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
export class ProductUnitOfMeasureEanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductUnitOfMeasureEan<DeSerializersT>, DeSerializersT>
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
  ): ProductUnitOfMeasureEanApi<DeSerializersT> {
    return new ProductUnitOfMeasureEanApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductUnitOfMeasureApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_UNIT_OF_MEASURE: new OneToOneLink(
        '_ProductUnitOfMeasure',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductUnitOfMeasureEan;

  requestBuilder(): ProductUnitOfMeasureEanRequestBuilder<DeSerializersT> {
    return new ProductUnitOfMeasureEanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductUnitOfMeasureEan<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductUnitOfMeasureEan<DeSerializersT>,
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
    typeof ProductUnitOfMeasureEan,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductUnitOfMeasureEan,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSECUTIVE_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STANDARD_ID: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER_CAT: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasureEan<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductUnitOfMeasureEan<DeSerializers>,
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
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE: OneToOneLink<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitOfMeasureEan<DeSerializers>>;
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
         * Static representation of the {@link alternativeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_UNIT: fieldBuilder.buildEdmTypeField(
          'AlternativeUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consecutiveNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSECUTIVE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ConsecutiveNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link alternativeIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'AlternativeISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStandardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STANDARD_ID: fieldBuilder.buildEdmTypeField(
          'ProductStandardID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internationalArticleNumberCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_ARTICLE_NUMBER_CAT: fieldBuilder.buildEdmTypeField(
          'InternationalArticleNumberCat',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isMainGlobalTradeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MAIN_GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'IsMainGlobalTradeItemNumber',
          'Edm.Boolean',
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
        ALL_FIELDS: new AllFields('*', ProductUnitOfMeasureEan)
      };
    }

    return this._schema;
  }
}
