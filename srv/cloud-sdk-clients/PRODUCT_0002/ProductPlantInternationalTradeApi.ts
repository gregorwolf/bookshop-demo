/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantInternationalTrade } from './ProductPlantInternationalTrade';
import { ProductPlantInternationalTradeRequestBuilder } from './ProductPlantInternationalTradeRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductPlantApi } from './ProductPlantApi';
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
export class ProductPlantInternationalTradeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantInternationalTrade<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantInternationalTradeApi<DeSerializersT> {
    return new ProductPlantInternationalTradeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_PLANT: new OneToOneLink('_ProductPlant', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductPlantInternationalTrade;

  requestBuilder(): ProductPlantInternationalTradeRequestBuilder<DeSerializersT> {
    return new ProductPlantInternationalTradeRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantInternationalTrade<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantInternationalTrade<DeSerializersT>,
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
    typeof ProductPlantInternationalTrade,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantInternationalTrade,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION_OF_ORIGIN: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_TAX_CTRL_CODE: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPORT_AND_IMPORT_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CAS_NUMBER: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_INTL_TRADE_CLASSIFICATION: OrderableEdmTypeField<
      ProductPlantInternationalTrade<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantInternationalTrade<DeSerializers>,
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
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantInternationalTrade<DeSerializers>>;
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
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link countryOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'CountryOfOrigin',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regionOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'RegionOfOrigin',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consumptionTaxCtrlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TAX_CTRL_CODE: fieldBuilder.buildEdmTypeField(
          'ConsumptionTaxCtrlCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link exportAndImportProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_AND_IMPORT_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ExportAndImportProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productCasNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CAS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductCASNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodIntlTradeClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_INTL_TRADE_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'ProdIntlTradeClassification',
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
        ALL_FIELDS: new AllFields('*', ProductPlantInternationalTrade)
      };
    }

    return this._schema;
  }
}
