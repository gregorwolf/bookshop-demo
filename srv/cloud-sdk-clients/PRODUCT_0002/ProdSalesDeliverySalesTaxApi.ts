/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProdSalesDeliverySalesTax } from './ProdSalesDeliverySalesTax';
import { ProdSalesDeliverySalesTaxRequestBuilder } from './ProdSalesDeliverySalesTaxRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
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
export class ProdSalesDeliverySalesTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProdSalesDeliverySalesTax<DeSerializersT>, DeSerializersT>
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
  ): ProdSalesDeliverySalesTaxApi<DeSerializersT> {
    return new ProdSalesDeliverySalesTaxApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSalesDelivery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SALES_DELIVERY: OneToOneLink<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT,
      ProductSalesDeliveryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductSalesDeliveryApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_SALES_DELIVERY: new OneToOneLink(
        '_ProductSalesDelivery',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProdSalesDeliverySalesTax;

  requestBuilder(): ProdSalesDeliverySalesTaxRequestBuilder<DeSerializersT> {
    return new ProdSalesDeliverySalesTaxRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProdSalesDeliverySalesTax<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProdSalesDeliverySalesTax<DeSerializersT>,
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
    typeof ProdSalesDeliverySalesTax,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProdSalesDeliverySalesTax,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SALES_TAX_CATEGORY: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SALES_ORG: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DISTRIBUTION_CHNL: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION: OrderableEdmTypeField<
      ProdSalesDeliverySalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProdSalesDeliverySalesTax<DeSerializers>,
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
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSalesDelivery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SALES_DELIVERY: OneToOneLink<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT,
      ProductSalesDeliveryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProdSalesDeliverySalesTax<DeSerializers>>;
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
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', false),
        /**
         * Static representation of the {@link productSalesTaxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProductSalesTaxCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSalesOrg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_ORG: fieldBuilder.buildEdmTypeField(
          'ProductSalesOrg',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDistributionChnl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DISTRIBUTION_CHNL: fieldBuilder.buildEdmTypeField(
          'ProductDistributionChnl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productTaxClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification',
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
        ALL_FIELDS: new AllFields('*', ProdSalesDeliverySalesTax)
      };
    }

    return this._schema;
  }
}
