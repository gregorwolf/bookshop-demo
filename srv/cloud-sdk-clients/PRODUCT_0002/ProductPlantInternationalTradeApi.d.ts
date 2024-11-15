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
export declare class ProductPlantInternationalTradeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantInternationalTrade<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantInternationalTradeApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantInternationalTrade;
  requestBuilder(): ProductPlantInternationalTradeRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantInternationalTrade<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantInternationalTrade<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantInternationalTrade,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
