/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductEwmStorageType } from './ProductEwmStorageType';
import { ProductEwmStorageTypeRequestBuilder } from './ProductEwmStorageTypeRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductEwmWarehouseApi } from './ProductEwmWarehouseApi';
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
export class ProductEwmStorageTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
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
  ): ProductEwmStorageTypeApi<DeSerializersT> {
    return new ProductEwmStorageTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEwmWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_WAREHOUSE: OneToOneLink<
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductEwmWarehouseApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductEwmWarehouseApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_EWM_WAREHOUSE: new OneToOneLink(
        '_ProductEWMWarehouse',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductEwmStorageType;

  requestBuilder(): ProductEwmStorageTypeRequestBuilder<DeSerializersT> {
    return new ProductEwmStorageTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductEwmStorageType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductEwmStorageType<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductEwmStorageType<DeSerializersT>,
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
    typeof ProductEwmStorageType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductEwmStorageType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_WAREHOUSE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITLED_TO_DISPOSE_PARTY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_TYPE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_INTERNAL_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SUPPLY_CHAIN_UNIT_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_STORAGE_SECTION_METHOD: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_BIN_TYPE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAXIMUM_NUMBER_OF_BINS: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAXIMUM_STORAGE_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MAX_STOR_QUANTITY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STOR_QTY_BASE_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STOR_QUANTITY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MAX_STORAGE_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MINIMUM_STORAGE_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MIN_STOR_QUANTITY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QTY_BASE_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QUANTITY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STORAGE_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QUANTITY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_BASE_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_BS_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_DISPLAY_UNIT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_REPLNMT_QTY_DSP_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_MIN_STOR_QTY_OF_MAX_STOR_QTY_IN_PCT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_SPLT_PTWY_THRESHOLD_IN_PERCENT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_PROD_IS_SPLIT_ON_PTWY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_PROD_IS_SKIPPED_ON_PTWY: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_HAS_NO_REPLENISHMENT: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EWM_STORAGE_BIN_SEARCH_RULE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROD_QUANTITY_CLASSIFICATION: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROD_PTWY_QTY_CLASSIFICATION: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PTWY_SEQUENCE: OrderableEdmTypeField<
      ProductEwmStorageType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductEwmStorageType<DeSerializers>,
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
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productEwmWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_WAREHOUSE: OneToOneLink<
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT,
      ProductEwmWarehouseApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductEwmStorageType<DeSerializers>>;
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
         * Static representation of the {@link ewmWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'EWMWarehouse',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link entitledToDisposeParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITLED_TO_DISPOSE_PARTY: fieldBuilder.buildEdmTypeField(
          'EntitledToDisposeParty',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmStorageType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STORAGE_TYPE: fieldBuilder.buildEdmTypeField(
          'EWMStorageType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productInternalUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_INTERNAL_UUID: fieldBuilder.buildEdmTypeField(
          'ProductInternalUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link supplyChainUnitUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLY_CHAIN_UNIT_UUID: fieldBuilder.buildEdmTypeField(
          'SupplyChainUnitUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link ewmPartyEntitledToDisposeUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: fieldBuilder.buildEdmTypeField(
          'EWMPartyEntitledToDisposeUUID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link ewmStorageSectionMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STORAGE_SECTION_METHOD: fieldBuilder.buildEdmTypeField(
          'EWMStorageSectionMethod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmStorageBinType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STORAGE_BIN_TYPE: fieldBuilder.buildEdmTypeField(
          'EWMStorageBinType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMaximumNumberOfBins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAXIMUM_NUMBER_OF_BINS: fieldBuilder.buildEdmTypeField(
          'EWMMaximumNumberOfBins',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMaximumStorageQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAXIMUM_STORAGE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EWMMaximumStorageQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmMaxStorQuantityBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAX_STOR_QUANTITY_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMaxStorQuantityBaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMaxStorQtyBaseUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAX_STOR_QTY_BASE_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMaxStorQtyBaseUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMaxStorQuantityDisplayUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAX_STOR_QUANTITY_DISPLAY_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMaxStorQuantityDisplayUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMaxStorageQtyDspUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MAX_STORAGE_QTY_DSP_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMaxStorageQtyDspUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinimumStorageQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MINIMUM_STORAGE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EWMMinimumStorageQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmMinStorQuantityBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_STOR_QUANTITY_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMinStorQuantityBaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinStorQtyBaseUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_STOR_QTY_BASE_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMinStorQtyBaseUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinStorQuantityDisplayUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_STOR_QUANTITY_DISPLAY_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMinStorQuantityDisplayUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinStorageQtyDspUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_STORAGE_QTY_DSP_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMinStorageQtyDspUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinReplnmtQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_REPLNMT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EWMMinReplnmtQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmMinReplnmtQtyBaseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_REPLNMT_QTY_BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMinReplnmtQtyBaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinReplnmtQtyBsUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_REPLNMT_QTY_BS_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMinReplnmtQtyBsUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinReplnmtQtyDisplayUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_REPLNMT_QTY_DISPLAY_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMMinReplnmtQtyDisplayUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinReplnmtQtyDspUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_REPLNMT_QTY_DSP_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMMinReplnmtQtyDspUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmMinStorQtyOfMaxStorQtyInPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_MIN_STOR_QTY_OF_MAX_STOR_QTY_IN_PCT: fieldBuilder.buildEdmTypeField(
          'EWMMinStorQtyOfMaxStorQtyInPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmSpltPtwyThresholdInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_SPLT_PTWY_THRESHOLD_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'EWMSpltPtwyThresholdInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmProdIsSplitOnPtwy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PROD_IS_SPLIT_ON_PTWY: fieldBuilder.buildEdmTypeField(
          'EWMProdIsSplitOnPtwy',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link ewmProdIsSkippedOnPtwy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PROD_IS_SKIPPED_ON_PTWY: fieldBuilder.buildEdmTypeField(
          'EWMProdIsSkippedOnPtwy',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link ewmHasNoReplenishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_HAS_NO_REPLENISHMENT: fieldBuilder.buildEdmTypeField(
          'EWMHasNoReplenishment',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link ewmStorageBinSearchRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STORAGE_BIN_SEARCH_RULE: fieldBuilder.buildEdmTypeField(
          'EWMStorageBinSearchRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmProdQuantityClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PROD_QUANTITY_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'EWMProdQuantityClassification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmProdPtwyQtyClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PROD_PTWY_QTY_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'EWMProdPtwyQtyClassification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmPtwySequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PTWY_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'EWMPtwySequence',
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
        ALL_FIELDS: new AllFields('*', ProductEwmStorageType)
      };
    }

    return this._schema;
  }
}
