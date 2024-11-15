/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantMrp } from './ProductPlantMrp';
import { ProductPlantMrpRequestBuilder } from './ProductPlantMrpRequestBuilder';
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
export class ProductPlantMrpApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantMrp<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantMrpApi<DeSerializersT> {
    return new ProductPlantMrpApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantMrp<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantMrp<DeSerializersT>,
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

  entityConstructor = ProductPlantMrp;

  requestBuilder(): ProductPlantMrpRequestBuilder<DeSerializersT> {
    return new ProductPlantMrpRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantMrp<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductPlantMrp<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductPlantMrp, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantMrp,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_AREA: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_TYPE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_RESPONSIBLE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_GROUP: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REORDER_THRESHOLD_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLAN_AND_ORDER_DAY_DETERMINATION: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNING_TIME_FENCE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOT_SIZING_PROCEDURE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUNDING_PROFILE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOT_SIZE_ROUNDING_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSEMBLY_SCRAP_PERCENT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_SUB_TYPE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DFLT_STORAGE_LOCATION_EXT_PROCMT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_PLANNING_CALENDAR: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RANGE_OF_CVRG_PRFL_CODE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAFETY_SUPPLY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOT_SIZE_INDEPENDENT_COSTS: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STORAGE_COSTS_PERCENTAGE_CODE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SERVICE_LEVEL_IN_PERCENT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAFETY_TIME_PERIOD_PROFILE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENT_RQMT_MRP_RELEVANCE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SAFETY_TIME_MRP_RELEVANCE: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PLANNED_DELIVERY_TIME: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MRP_SAFETY_STOCK_METHOD: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantMrp<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantMrp<DeSerializers>,
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
      ProductPlantMrp<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantMrp<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantMrp<DeSerializers>>;
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
         * Static representation of the {@link mrpArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_AREA: fieldBuilder.buildEdmTypeField(
          'MRPArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANT: fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false),
        /**
         * Static representation of the {@link mrpType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_TYPE: fieldBuilder.buildEdmTypeField(
          'MRPType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mrpResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'MRPResponsible',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mrpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_GROUP: fieldBuilder.buildEdmTypeField(
          'MRPGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reorderThresholdQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReorderThresholdQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link planAndOrderDayDetermination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_AND_ORDER_DAY_DETERMINATION: fieldBuilder.buildEdmTypeField(
          'PlanAndOrderDayDetermination',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planningTimeFence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_TIME_FENCE: fieldBuilder.buildEdmTypeField(
          'PlanningTimeFence',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lotSizingProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZING_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'LotSizingProcedure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link roundingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RoundingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lotSizeRoundingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_ROUNDING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'LotSizeRoundingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumLotSizeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumLotSizeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumStockQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assemblyScrapPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField(
          'AssemblyScrapPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link procurementSubType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_SUB_TYPE: fieldBuilder.buildEdmTypeField(
          'ProcurementSubType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionInvtryManagedLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_INVTRY_MANAGED_LOC: fieldBuilder.buildEdmTypeField(
          'ProductionInvtryManagedLoc',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dfltStorageLocationExtProcmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DFLT_STORAGE_LOCATION_EXT_PROCMT: fieldBuilder.buildEdmTypeField(
          'DfltStorageLocationExtProcmt',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mrpPlanningCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_PLANNING_CALENDAR: fieldBuilder.buildEdmTypeField(
          'MRPPlanningCalendar',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link safetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SafetyStockQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link rangeOfCvrgPrflCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_OF_CVRG_PRFL_CODE: fieldBuilder.buildEdmTypeField(
          'RangeOfCvrgPrflCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link safetySupplyDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_SUPPLY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'SafetySupplyDurationInDays',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FixedLotSizeQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link lotSizeIndependentCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZE_INDEPENDENT_COSTS: fieldBuilder.buildEdmTypeField(
          'LotSizeIndependentCosts',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link storageCostsPercentageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_COSTS_PERCENTAGE_CODE: fieldBuilder.buildEdmTypeField(
          'StorageCostsPercentageCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productServiceLevelInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SERVICE_LEVEL_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ProductServiceLevelInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link safetyTimePeriodProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_TIME_PERIOD_PROFILE: fieldBuilder.buildEdmTypeField(
          'SafetyTimePeriodProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dependentRqmtMrpRelevance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_RQMT_MRP_RELEVANCE: fieldBuilder.buildEdmTypeField(
          'DependentRqmtMRPRelevance',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSafetyTimeMrpRelevance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SAFETY_TIME_MRP_RELEVANCE: fieldBuilder.buildEdmTypeField(
          'ProductSafetyTimeMRPRelevance',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedDeliveryDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_DELIVERY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'PlannedDeliveryDurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPlannedDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLANNED_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'IsPlannedDeliveryTime',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link rqmtQtyRcptTaktTmeInWrkgDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: fieldBuilder.buildEdmTypeField(
          'RqmtQtyRcptTaktTmeInWrkgDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mrpSafetyStockMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_SAFETY_STOCK_METHOD: fieldBuilder.buildEdmTypeField(
          'MRPSafetyStockMethod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', ProductPlantMrp)
      };
    }

    return this._schema;
  }
}
