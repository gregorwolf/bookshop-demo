/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantStorage } from './ProductPlantStorage';
import { ProductPlantStorageRequestBuilder } from './ProductPlantStorageRequestBuilder';
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
export class ProductPlantStorageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantStorage<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantStorageApi<DeSerializersT> {
    return new ProductPlantStorageApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantStorage<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantStorage<DeSerializersT>,
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

  entityConstructor = ProductPlantStorage;

  requestBuilder(): ProductPlantStorageRequestBuilder<DeSerializersT> {
    return new ProductPlantStorageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantStorage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantStorage<DeSerializersT>,
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
    typeof ProductPlantStorage,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantStorage,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHYS_INVENTORY_FOR_CYCLE_COUNTING: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STORAGE_PERIOD: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROD_MAXIMUM_STORAGE_PERIOD_UNIT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STORAGE_PERIOD_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CYCLE_COUNTING_INDICATOR_IS_FIXED: OrderableEdmTypeField<
      ProductPlantStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantStorage<DeSerializers>,
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
      ProductPlantStorage<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantStorage<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantStorage<DeSerializers>>;
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
         * Static representation of the {@link physInventoryForCycleCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYS_INVENTORY_FOR_CYCLE_COUNTING: fieldBuilder.buildEdmTypeField(
          'PhysInventoryForCycleCounting',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumStoragePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STORAGE_PERIOD: fieldBuilder.buildEdmTypeField(
          'MaximumStoragePeriod',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prodMaximumStoragePeriodUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_MAXIMUM_STORAGE_PERIOD_UNIT: fieldBuilder.buildEdmTypeField(
          'ProdMaximumStoragePeriodUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumStoragePeriodIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STORAGE_PERIOD_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'MaximumStoragePeriodISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cycleCountingIndicatorIsFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNTING_INDICATOR_IS_FIXED: fieldBuilder.buildEdmTypeField(
          'CycleCountingIndicatorIsFixed',
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
        ALL_FIELDS: new AllFields('*', ProductPlantStorage)
      };
    }

    return this._schema;
  }
}
