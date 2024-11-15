/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantCosting } from './ProductPlantCosting';
import { ProductPlantCostingRequestBuilder } from './ProductPlantCostingRequestBuilder';
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
export class ProductPlantCostingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantCosting<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantCostingApi<DeSerializersT> {
    return new ProductPlantCostingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantCosting<DeSerializersT>,
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

  entityConstructor = ProductPlantCosting;

  requestBuilder(): ProductPlantCostingRequestBuilder<DeSerializersT> {
    return new ProductPlantCostingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantCosting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantCosting<DeSerializersT>,
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
    typeof ProductPlantCosting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantCosting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    COSTING_LOT_SIZE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_LIST_GROUP: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_LIST_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_SPECIAL_PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_BOM_ALTERNATIVE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_BOM_USAGE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_COSTING_RELEVANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TASK_LIST_GROUP_COUNTER: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIANCE_KEY: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_PRODUCTION_VERSION: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_FIXED_PRICE_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantCosting<DeSerializers>,
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
      ProductPlantCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantCosting<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantCosting<DeSerializers>>;
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
         * Static representation of the {@link isCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'IsCoProduct',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link costingLotSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_LOT_SIZE: fieldBuilder.buildEdmTypeField(
          'CostingLotSize',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taskListGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_GROUP: fieldBuilder.buildEdmTypeField(
          'TaskListGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taskListType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_TYPE: fieldBuilder.buildEdmTypeField(
          'TaskListType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costingSpecialProcurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_SPECIAL_PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'CostingSpecialProcurementType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceBomAlternative} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BOM_ALTERNATIVE: fieldBuilder.buildEdmTypeField(
          'SourceBOMAlternative',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productBomUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_BOM_USAGE: fieldBuilder.buildEdmTypeField(
          'ProductBOMUsage',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsCostingRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_COSTING_RELEVANT: fieldBuilder.buildEdmTypeField(
          'ProductIsCostingRelevant',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link taskListGroupCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LIST_GROUP_COUNTER: fieldBuilder.buildEdmTypeField(
          'TaskListGroupCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link varianceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANCE_KEY: fieldBuilder.buildEdmTypeField(
          'VarianceKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costingProductionVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_PRODUCTION_VERSION: fieldBuilder.buildEdmTypeField(
          'CostingProductionVersion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isFixedPriceCoProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FIXED_PRICE_CO_PRODUCT: fieldBuilder.buildEdmTypeField(
          'IsFixedPriceCoProduct',
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
        ALL_FIELDS: new AllFields('*', ProductPlantCosting)
      };
    }

    return this._schema;
  }
}
