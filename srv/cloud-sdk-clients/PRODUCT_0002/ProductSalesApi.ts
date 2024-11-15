/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSales } from './ProductSales';
import { ProductSalesRequestBuilder } from './ProductSalesRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductSalesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSales<DeSerializersT>, DeSerializersT>
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
  ): ProductSalesApi<DeSerializersT> {
    return new ProductSalesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductSales<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProductSales;

  requestBuilder(): ProductSalesRequestBuilder<DeSerializersT> {
    return new ProductSalesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSales<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSales<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductSales<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductSales, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductSales, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_STATUS: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_STATUS_VALIDITY_DATE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    TRANSPORTATION_GROUP: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGING_PRODUCT_TYPE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWED_PACKAGING_WEIGHT_QTY: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_PACKAGING_WEIGHT_QTY_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLWD_PACKAGING_WEIGHT_QTY_ISO_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLOWED_PACKAGING_VOLUME_QTY: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_PACKAGING_VOLUME_QTY_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALLWD_PACKAGING_VOLUME_QTY_ISO_UNIT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_LEVEL_BY_VOLUME_IN_PERCENT: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCESS_WEIGHT_TOLERANCE_VALUE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKGG_PRODUCT_IS_CLOSED_PACKAGING: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_STACKING_FACTOR: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      false,
      true
    >;
    PROD_EXCESS_VOLUME_TOLERANCE_VALUE: OrderableEdmTypeField<
      ProductSales<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductSales<DeSerializers>,
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
      ProductSales<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSales<DeSerializers>>;
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
         * Static representation of the {@link salesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STATUS: fieldBuilder.buildEdmTypeField(
          'SalesStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesStatusValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SalesStatusValidityDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link transportationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_GROUP: fieldBuilder.buildEdmTypeField(
          'TransportationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packagingProductType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGING_PRODUCT_TYPE: fieldBuilder.buildEdmTypeField(
          'PackagingProductType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowedPackagingWeightQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_PACKAGING_WEIGHT_QTY: fieldBuilder.buildEdmTypeField(
          'AllowedPackagingWeightQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowedPackagingWeightQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_PACKAGING_WEIGHT_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'AllowedPackagingWeightQtyUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allwdPackagingWeightQtyIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLWD_PACKAGING_WEIGHT_QTY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'AllwdPackagingWeightQtyISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allowedPackagingVolumeQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_PACKAGING_VOLUME_QTY: fieldBuilder.buildEdmTypeField(
          'AllowedPackagingVolumeQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowedPackagingVolumeQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_PACKAGING_VOLUME_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'AllowedPackagingVolumeQtyUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link allwdPackagingVolumeQtyIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLWD_PACKAGING_VOLUME_QTY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'AllwdPackagingVolumeQtyISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumLevelByVolumeInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LEVEL_BY_VOLUME_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaximumLevelByVolumeInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link excessWeightToleranceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCESS_WEIGHT_TOLERANCE_VALUE: fieldBuilder.buildEdmTypeField(
          'ExcessWeightToleranceValue',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link packggProductIsClosedPackaging} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKGG_PRODUCT_IS_CLOSED_PACKAGING: fieldBuilder.buildEdmTypeField(
          'PackggProductIsClosedPackaging',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productStackingFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STACKING_FACTOR: fieldBuilder.buildEdmTypeField(
          'ProductStackingFactor',
          'Edm.Int16',
          false
        ),
        /**
         * Static representation of the {@link prodExcessVolumeToleranceValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_EXCESS_VOLUME_TOLERANCE_VALUE: fieldBuilder.buildEdmTypeField(
          'ProdExcessVolumeToleranceValue',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', ProductSales)
      };
    }

    return this._schema;
  }
}
