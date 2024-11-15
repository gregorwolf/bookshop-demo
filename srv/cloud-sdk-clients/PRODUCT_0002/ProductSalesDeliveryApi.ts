/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSalesDelivery } from './ProductSalesDelivery';
import { ProductSalesDeliveryRequestBuilder } from './ProductSalesDeliveryRequestBuilder';
import { ProdSalesDeliverySalesTaxApi } from './ProdSalesDeliverySalesTaxApi';
import { ProductApi } from './ProductApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductSalesDeliveryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
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
  ): ProductSalesDeliveryApi<DeSerializersT> {
    return new ProductSalesDeliveryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link prodSalesDeliverySalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROD_SALES_DELIVERY_SALES_TAX: OneToManyLink<
      ProductSalesDelivery<DeSerializersT>,
      DeSerializersT,
      ProdSalesDeliverySalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductSalesDelivery<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProdSalesDeliverySalesTaxApi<DeSerializersT>,
      ProductApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROD_SALES_DELIVERY_SALES_TAX: new OneToManyLink(
        '_ProdSalesDeliverySalesTax',
        this,
        linkedApis[0]
      ),
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProductSalesDelivery;

  requestBuilder(): ProductSalesDeliveryRequestBuilder<DeSerializersT> {
    return new ProductSalesDeliveryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSalesDelivery<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductSalesDelivery<DeSerializersT>,
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
    typeof ProductSalesDelivery,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductSalesDelivery,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SALES_ORG: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DISTRIBUTION_CHNL: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM_ORDER_QUANTITY: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUPPLYING_PLANT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_SPECIFICATION_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_DETN_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_NOTE_PROC_MIN_DELIV_QTY: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_CATEGORY_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_QUANTITY_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_QUANTITY: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_SALES_STATUS: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SALES_STATUS_VALIDITY_DATE: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    SALES_MEASURE_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_MEASURE_ISO_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    FIRST_SALES_SPEC_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECOND_SALES_SPEC_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    THIRD_SALES_SPEC_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOURTH_SALES_SPEC_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIFTH_SALES_SPEC_PRODUCT_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOGISTICS_STATISTICS_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_REBATE_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASH_DISCOUNT_IS_DEDUCTIBLE: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ROUNDING_PROFILE: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIABLE_SALES_UNIT_IS_NOT_ALLOWED: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_COMMISSION_GROUP: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_REFERENCE_PRODUCT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_01: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_02: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_03: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_04: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_05: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_06: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_07: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_08: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_09: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_HAS_ATTRIBUTE_ID_10: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PROD_IS_ENTLMNT_RLVT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductSalesDelivery<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link prodSalesDeliverySalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROD_SALES_DELIVERY_SALES_TAX: OneToManyLink<
      ProductSalesDelivery<DeSerializersT>,
      DeSerializersT,
      ProdSalesDeliverySalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductSalesDelivery<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSalesDelivery<DeSerializers>>;
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
         * Static representation of the {@link minimumOrderQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ORDER_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumOrderQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link supplyingPlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLYING_PLANT: fieldBuilder.buildEdmTypeField(
          'SupplyingPlant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceSpecificationProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_SPECIFICATION_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'PriceSpecificationProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountDetnProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DETN_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'AccountDetnProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryNoteProcMinDelivQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NOTE_PROC_MIN_DELIV_QTY: fieldBuilder.buildEdmTypeField(
          'DeliveryNoteProcMinDelivQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itemCategoryGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATEGORY_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemCategoryGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'DeliveryQuantityUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'DeliveryQuantityISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DeliveryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productSalesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_STATUS: fieldBuilder.buildEdmTypeField(
          'ProductSalesStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSalesStatusValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SALES_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'ProductSalesStatusValidityDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link salesMeasureUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MEASURE_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesMeasureUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesMeasureIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_MEASURE_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesMeasureISOUnit',
          'Edm.String',
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
         * Static representation of the {@link firstSalesSpecProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'FirstSalesSpecProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link secondSalesSpecProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'SecondSalesSpecProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link thirdSalesSpecProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ThirdSalesSpecProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fourthSalesSpecProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOURTH_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'FourthSalesSpecProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fifthSalesSpecProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIFTH_SALES_SPEC_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'FifthSalesSpecProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link logisticsStatisticsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGISTICS_STATISTICS_GROUP: fieldBuilder.buildEdmTypeField(
          'LogisticsStatisticsGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link volumeRebateGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_REBATE_GROUP: fieldBuilder.buildEdmTypeField(
          'VolumeRebateGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cashDiscountIsDeductible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_DISCOUNT_IS_DEDUCTIBLE: fieldBuilder.buildEdmTypeField(
          'CashDiscountIsDeductible',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link roundingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RoundingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link variableSalesUnitIsNotAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABLE_SALES_UNIT_IS_NOT_ALLOWED: fieldBuilder.buildEdmTypeField(
          'VariableSalesUnitIsNotAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productCommissionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COMMISSION_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductCommissionGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pricingReferenceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'PricingReferenceProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_01: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID01',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_02: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID02',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_03: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID03',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_04: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID04',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_05: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID05',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_06: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID06',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_07: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID07',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_08: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID08',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_09: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID09',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productHasAttributeId10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_HAS_ATTRIBUTE_ID_10: fieldBuilder.buildEdmTypeField(
          'ProductHasAttributeID10',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link prodIsEntlmntRlvt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_IS_ENTLMNT_RLVT: fieldBuilder.buildEdmTypeField(
          'ProdIsEntlmntRlvt',
          'Edm.Boolean',
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
        ALL_FIELDS: new AllFields('*', ProductSalesDelivery)
      };
    }

    return this._schema;
  }
}
