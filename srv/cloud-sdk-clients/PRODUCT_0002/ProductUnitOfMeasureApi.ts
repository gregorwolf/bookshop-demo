/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductUnitOfMeasure } from './ProductUnitOfMeasure';
import { ProductUnitOfMeasureRequestBuilder } from './ProductUnitOfMeasureRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductUnitOfMeasureEanApi } from './ProductUnitOfMeasureEanApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductUnitOfMeasureApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
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
  ): ProductUnitOfMeasureApi<DeSerializersT> {
    return new ProductUnitOfMeasureApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasureEan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE_EAN: OneToManyLink<
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureEanApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductUnitOfMeasureEanApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_UNIT_OF_MEASURE_EAN: new OneToManyLink(
        '_ProductUnitOfMeasureEAN',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductUnitOfMeasure;

  requestBuilder(): ProductUnitOfMeasureRequestBuilder<DeSerializersT> {
    return new ProductUnitOfMeasureRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductUnitOfMeasure<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductUnitOfMeasure<DeSerializersT>,
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
    typeof ProductUnitOfMeasure,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductUnitOfMeasure,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_SAP_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALTERNATIVE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_NUMERATOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_DENOMINATOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROSS_WEIGHT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEIGHT_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_LENGTH: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_WIDTH: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SPECIFIC_PRODUCT_HEIGHT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOWER_LEVEL_PACKAGING_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOWER_LEVEL_PACKAGING_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STACKING_FACTOR: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    CAPACITY_USAGE: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductUnitOfMeasure<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductUnitOfMeasure<DeSerializers>,
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
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasureEan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE_EAN: OneToManyLink<
      ProductUnitOfMeasure<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureEanApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductUnitOfMeasure<DeSerializers>>;
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
         * Static representation of the {@link alternativeSapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'AlternativeSAPUnit',
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
         * Static representation of the {@link quantityNumerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_NUMERATOR: fieldBuilder.buildEdmTypeField(
          'QuantityNumerator',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityDenominator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_DENOMINATOR: fieldBuilder.buildEdmTypeField(
          'QuantityDenominator',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link volumeIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link grossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weightIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link globalTradeItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link globalTradeItemNumberCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GLOBAL_TRADE_ITEM_NUMBER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'GlobalTradeItemNumberCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link unitSpecificProductLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_LENGTH: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductLength',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSpecificProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSpecificProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SPECIFIC_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'UnitSpecificProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MEASUREMENT_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductMeasurementUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productMeasurementIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MEASUREMENT_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductMeasurementISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lowerLevelPackagingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_LEVEL_PACKAGING_UNIT: fieldBuilder.buildEdmTypeField(
          'LowerLevelPackagingUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lowerLevelPackagingIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOWER_LEVEL_PACKAGING_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'LowerLevelPackagingISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumStackingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STACKING_FACTOR: fieldBuilder.buildEdmTypeField(
          'MaximumStackingFactor',
          'Edm.Byte',
          false
        ),
        /**
         * Static representation of the {@link capacityUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_USAGE: fieldBuilder.buildEdmTypeField(
          'CapacityUsage',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', ProductUnitOfMeasure)
      };
    }

    return this._schema;
  }
}
