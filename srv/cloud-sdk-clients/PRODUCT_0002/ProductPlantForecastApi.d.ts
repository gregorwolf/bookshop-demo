/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantForecast } from './ProductPlantForecast';
import { ProductPlantForecastRequestBuilder } from './ProductPlantForecastRequestBuilder';
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
export declare class ProductPlantForecastApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantForecast<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductPlantForecastApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantForecast;
  requestBuilder(): ProductPlantForecastRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantForecast<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantForecast<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductPlantForecast, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_REF_USAGE_END_DATE: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    CNSMPN_QUANTITY_MULTIPLIER_VALUE: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CONSUMPTION_REFERENCE_PRODUCT: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_REFERENCE_PLANT: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CORRECTION_FACTOR_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    FORECAST_MODEL_IS_RESET: OrderableEdmTypeField<
      ProductPlantForecast<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantForecast<DeSerializers>,
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
      ProductPlantForecast<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantForecast<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantForecast<DeSerializers>>;
  };
}
