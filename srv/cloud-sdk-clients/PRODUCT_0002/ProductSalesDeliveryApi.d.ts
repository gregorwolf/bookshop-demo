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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductSalesDeliveryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductSalesDeliveryApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProdSalesDeliverySalesTaxApi<DeSerializersT>,
      ProductApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductSalesDelivery;
  requestBuilder(): ProductSalesDeliveryRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductSalesDelivery<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductSalesDelivery<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductSalesDelivery, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
