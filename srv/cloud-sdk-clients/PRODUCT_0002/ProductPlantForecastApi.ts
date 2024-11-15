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
export class ProductPlantForecastApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantForecast<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantForecastApi<DeSerializersT> {
    return new ProductPlantForecastApi(deSerializers);
  }

  private navigationPropertyFields!: {
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

  entityConstructor = ProductPlantForecast;

  requestBuilder(): ProductPlantForecastRequestBuilder<DeSerializersT> {
    return new ProductPlantForecastRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantForecast<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantForecast<DeSerializersT>,
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
    typeof ProductPlantForecast,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantForecast,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link consumptionRefUsageEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_REF_USAGE_END_DATE: fieldBuilder.buildEdmTypeField(
          'ConsumptionRefUsageEndDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link cnsmpnQuantityMultiplierValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNSMPN_QUANTITY_MULTIPLIER_VALUE: fieldBuilder.buildEdmTypeField(
          'CnsmpnQuantityMultiplierValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link consumptionReferenceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ConsumptionReferenceProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link consumptionReferencePlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_REFERENCE_PLANT: fieldBuilder.buildEdmTypeField(
          'ConsumptionReferencePlant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link correctionFactorIsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRECTION_FACTOR_IS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'CorrectionFactorIsRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link forecastModelIsReset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_MODEL_IS_RESET: fieldBuilder.buildEdmTypeField(
          'ForecastModelIsReset',
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
        ALL_FIELDS: new AllFields('*', ProductPlantForecast)
      };
    }

    return this._schema;
  }
}
