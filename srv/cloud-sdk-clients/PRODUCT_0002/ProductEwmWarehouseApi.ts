/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductEwmWarehouse } from './ProductEwmWarehouse';
import { ProductEwmWarehouseRequestBuilder } from './ProductEwmWarehouseRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductEwmStorageTypeApi } from './ProductEwmStorageTypeApi';
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
export class ProductEwmWarehouseApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
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
  ): ProductEwmWarehouseApi<DeSerializersT> {
    return new ProductEwmWarehouseApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEwmStorageType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_STORAGE_TYPE: OneToManyLink<
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductEwmStorageTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductEwmStorageTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0]),
      PRODUCT_EWM_STORAGE_TYPE: new OneToManyLink(
        '_ProductEWMStorageType',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductEwmWarehouse;

  requestBuilder(): ProductEwmWarehouseRequestBuilder<DeSerializersT> {
    return new ProductEwmWarehouseRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductEwmWarehouse<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductEwmWarehouse<DeSerializersT>,
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
    typeof ProductEwmWarehouse,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductEwmWarehouse,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_WAREHOUSE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITLED_TO_DISPOSE_PARTY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_INTERNAL_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SUPPLY_CHAIN_UNIT_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    EWM_PARTY_ENTITLED_TO_DISPOSE_UUID: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PRODUCT_PROCESS_BLOCK_PROFILE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PROCESS_TYPE_CONTROL_CODE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STGG_AREA_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIRED_MIN_SHELF_LIFE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EWM_PTWY_CONTROL_STRATEGY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_SECTION_METHOD: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STORAGE_BIN_TYPE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_BULK_STORAGE_METHOD: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STOCK_REMOVAL_CONTROL_STRATEGY: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_STOCK_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PHYS_INVENTORY_COUNTING_CYCLE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PREFERRED_UNIT: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_PREFERRED_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EWM_QUALITY_INSPECTION_GROUP: OrderableEdmTypeField<
      ProductEwmWarehouse<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductEwmWarehouse<DeSerializers>,
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
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEwmStorageType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_STORAGE_TYPE: OneToManyLink<
      ProductEwmWarehouse<DeSerializersT>,
      DeSerializersT,
      ProductEwmStorageTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductEwmWarehouse<DeSerializers>>;
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
         * Static representation of the {@link ewmProductProcessBlockProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PRODUCT_PROCESS_BLOCK_PROFILE: fieldBuilder.buildEdmTypeField(
          'EWMProductProcessBlockProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmProcessTypeControlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PROCESS_TYPE_CONTROL_CODE: fieldBuilder.buildEdmTypeField(
          'EWMProcessTypeControlCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmStggAreaDeterminationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STGG_AREA_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField(
          'EWMStggAreaDeterminationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requiredMinShelfLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_MIN_SHELF_LIFE: fieldBuilder.buildEdmTypeField(
          'RequiredMinShelfLife',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ewmPtwyControlStrategy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PTWY_CONTROL_STRATEGY: fieldBuilder.buildEdmTypeField(
          'EWMPtwyControlStrategy',
          'Edm.String',
          false
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
         * Static representation of the {@link ewmBulkStorageMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_BULK_STORAGE_METHOD: fieldBuilder.buildEdmTypeField(
          'EWMBulkStorageMethod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmStockRemovalControlStrategy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STOCK_REMOVAL_CONTROL_STRATEGY: fieldBuilder.buildEdmTypeField(
          'EWMStockRemovalControlStrategy',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmStockDeterminationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_STOCK_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField(
          'EWMStockDeterminationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmPhysInventoryCountingCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PHYS_INVENTORY_COUNTING_CYCLE: fieldBuilder.buildEdmTypeField(
          'EWMPhysInventoryCountingCycle',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmPreferredUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PREFERRED_UNIT: fieldBuilder.buildEdmTypeField(
          'EWMPreferredUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmPreferredUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_PREFERRED_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'EWMPreferredUnitISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ewmQualityInspectionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EWM_QUALITY_INSPECTION_GROUP: fieldBuilder.buildEdmTypeField(
          'EWMQualityInspectionGroup',
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
        ALL_FIELDS: new AllFields('*', ProductEwmWarehouse)
      };
    }

    return this._schema;
  }
}
