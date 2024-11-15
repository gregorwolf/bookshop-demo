/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductStorage } from './ProductStorage';
import { ProductStorageRequestBuilder } from './ProductStorageRequestBuilder';
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
export class ProductStorageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductStorage<DeSerializersT>, DeSerializersT>
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
  ): ProductStorageApi<DeSerializersT> {
    return new ProductStorageApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductStorage<DeSerializersT>,
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

  entityConstructor = ProductStorage;

  requestBuilder(): ProductStorageRequestBuilder<DeSerializersT> {
    return new ProductStorageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductStorage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductStorage<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductStorage<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductStorage, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductStorage, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_CONDITIONS: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_TEMPERATURE_CONDITION_CODE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HAZARDOUS_PRODUCT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LABEL_TYPE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LABEL_FORM: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIN_REMAINING_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_EXPIRATION_DATE_TYPE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_BIN_INSTRUCTION: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHELF_LIFE_EXPIRATION_DATE_PERIOD: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHELF_LIFE_EXPRTN_DATE_RNDNG_RULE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_SHELF_LIFE_STORAGE_PERCENT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_SHELF_LIFE: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductStorage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductStorage<DeSerializers>,
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
      ProductStorage<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductStorage<DeSerializers>>;
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
         * Static representation of the {@link storageConditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_CONDITIONS: fieldBuilder.buildEdmTypeField(
          'StorageConditions',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodTemperatureConditionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_TEMPERATURE_CONDITION_CODE: fieldBuilder.buildEdmTypeField(
          'ProdTemperatureConditionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hazardousProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAZARDOUS_PRODUCT: fieldBuilder.buildEdmTypeField(
          'HazardousProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nmbrOfGrOrGiSlipsToPrintQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NMBR_OF_GR_OR_GI_SLIPS_TO_PRINT_QTY: fieldBuilder.buildEdmTypeField(
          'NmbrOfGROrGISlipsToPrintQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link labelType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_TYPE: fieldBuilder.buildEdmTypeField(
          'LabelType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link labelForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_FORM: fieldBuilder.buildEdmTypeField(
          'LabelForm',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minRemainingShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_REMAINING_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'MinRemainingShelfLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productExpirationDateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_EXPIRATION_DATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductExpirationDateType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link storageBinInstruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_BIN_INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'StorageBinInstruction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shelfLifeExpirationDatePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_EXPIRATION_DATE_PERIOD: fieldBuilder.buildEdmTypeField(
          'ShelfLifeExpirationDatePeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shelfLifeExprtnDateRndngRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_LIFE_EXPRTN_DATE_RNDNG_RULE: fieldBuilder.buildEdmTypeField(
          'ShelfLifeExprtnDateRndngRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalShelfLifeStoragePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SHELF_LIFE_STORAGE_PERCENT: fieldBuilder.buildEdmTypeField(
          'TotalShelfLifeStoragePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'TotalShelfLife',
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
        ALL_FIELDS: new AllFields('*', ProductStorage)
      };
    }

    return this._schema;
  }
}
