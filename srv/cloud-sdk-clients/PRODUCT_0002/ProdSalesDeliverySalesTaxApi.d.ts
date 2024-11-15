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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProdSalesDeliverySalesTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProdSalesDeliverySalesTax<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): ProdSalesDeliverySalesTaxApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductSalesDeliveryApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProdSalesDeliverySalesTax;
  requestBuilder(): ProdSalesDeliverySalesTaxRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProdSalesDeliverySalesTax<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProdSalesDeliverySalesTax<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProdSalesDeliverySalesTax,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
