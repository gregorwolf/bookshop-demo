/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantPurchaseTax } from './ProductPlantPurchaseTax';
import { ProductPlantPurchaseTaxRequestBuilder } from './ProductPlantPurchaseTaxRequestBuilder';
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
export class ProductPlantPurchaseTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantPurchaseTax<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantPurchaseTaxApi<DeSerializersT> {
    return new ProductPlantPurchaseTaxApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantPurchaseTax<DeSerializersT>,
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

  entityConstructor = ProductPlantPurchaseTax;

  requestBuilder(): ProductPlantPurchaseTaxRequestBuilder<DeSerializersT> {
    return new ProductPlantPurchaseTaxRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantPurchaseTax<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantPurchaseTax<DeSerializersT>,
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
    typeof ProductPlantPurchaseTax,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantPurchaseTax,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantPurchaseTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantPurchaseTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPARTURE_COUNTRY: OrderableEdmTypeField<
      ProductPlantPurchaseTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_PURCHASE_TAX_CLASSIFICATION: OrderableEdmTypeField<
      ProductPlantPurchaseTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantPurchaseTax<DeSerializers>,
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
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantPurchaseTax<DeSerializers>>;
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
         * Static representation of the {@link departureCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTURE_COUNTRY: fieldBuilder.buildEdmTypeField(
          'DepartureCountry',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodPurchaseTaxClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_PURCHASE_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'ProdPurchaseTaxClassification',
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
        ALL_FIELDS: new AllFields('*', ProductPlantPurchaseTax)
      };
    }

    return this._schema;
  }
}
