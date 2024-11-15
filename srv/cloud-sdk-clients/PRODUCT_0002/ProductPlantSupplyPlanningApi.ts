/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantSupplyPlanning } from './ProductPlantSupplyPlanning';
import { ProductPlantSupplyPlanningRequestBuilder } from './ProductPlantSupplyPlanningRequestBuilder';
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
export class ProductPlantSupplyPlanningApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantSupplyPlanning<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantSupplyPlanningApi<DeSerializersT> {
    return new ProductPlantSupplyPlanningApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantSupplyPlanning<DeSerializersT>,
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

  entityConstructor = ProductPlantSupplyPlanning;

  requestBuilder(): ProductPlantSupplyPlanningRequestBuilder<DeSerializersT> {
    return new ProductPlantSupplyPlanningRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantSupplyPlanning<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantSupplyPlanning<DeSerializersT>,
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
    typeof ProductPlantSupplyPlanning,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantSupplyPlanning,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIXED_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_LOT_SIZE_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOT_SIZE_ROUNDING_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOT_SIZING_PROCEDURE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_RESPONSIBLE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_SAFETY_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNING_TIME_FENCE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSUMPTION_VALUE_CATEGORY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_STOCK_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REORDER_THRESHOLD_QUANTITY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_DELIVERY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SAFETY_SUPPLY_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNING_STRATEGY_GROUP: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_REPLENISHMENT_LEAD_TIME: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCUREMENT_SUB_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSEMBLY_SCRAP_PERCENT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVAILABILITY_CHECK_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOODS_RECEIPT_DURATION: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLAN_AND_ORDER_DAY_DETERMINATION: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUNDING_PROFILE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DFLT_STORAGE_LOCATION_EXT_PROCMT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_GROUP: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOT_SIZE_INDEPENDENT_COSTS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MRP_PLANNING_CALENDAR: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RANGE_OF_CVRG_PRFL_CODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SAFETY_TIME_MRP_RELEVANCE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAFETY_TIME_PERIOD_PROFILE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPENDENT_RQMT_MRP_RELEVANCE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SERVICE_LEVEL_IN_PERCENT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROD_INH_PRODN_DURATION_IN_WORK_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MRP_AVAILABILITY_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CROSS_PROJECT_PRODUCT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_COSTS_PERCENTAGE_CODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FOLLOW_UP_PRODUCT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPETITIVE_MANUFACTURING_IS_ALLWD: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DEPENDENT_REQUIREMENTS_TYPE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_BULK_COMPONENT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    REPETITIVE_MANUFACTURING_PROFILE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BACKWARD_CNSMPN_PERIOD_IN_WORK_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FWD_CONSUMPTION_PERIOD_IN_WORK_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_RQMTS_CONSUMPTION_MODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_FCST_REQUIREMENTS_SPLIT_CODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_OUT_DATE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    SCHEDULING_FLOAT_PROFILE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPONENT_SCRAP_IN_PERCENT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_DISCONTINUATION_CODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_REQUIREMENTS_GROUPING: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COMPONENT_BACKFLUSH_CODE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROPOSED_PRODUCT_SUPPLY_AREA: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MRP_SAFETY_STOCK_METHOD: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JIT_PRODN_CONF_PROFILE: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODN_PLNG_AND_CONTROL_CALENDAR: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONSIGNMENT_CONTROL: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATP_CHECK_HORIZON_IN_DAYS: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ATP_CHECK_HORIZON_FACTORY_CALENDAR: OrderableEdmTypeField<
      ProductPlantSupplyPlanning<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantSupplyPlanning<DeSerializers>,
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
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantSupplyPlanning<DeSerializers>>;
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
         * Static representation of the {@link fixedLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'FixedLotSizeQuantity',
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
         * Static representation of the {@link minimumLotSizeQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LOT_SIZE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumLotSizeQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link lotSizingProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_SIZING_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'LotSizingProcedure',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link safetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SafetyStockQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumSafetyStockQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_SAFETY_STOCK_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumSafetyStockQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link consumptionValueCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_VALUE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ConsumptionValueCategory',
          'Edm.String',
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
         * Static representation of the {@link reorderThresholdQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReorderThresholdQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link safetySupplyDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAFETY_SUPPLY_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'SafetySupplyDurationInDays',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planningStrategyGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_STRATEGY_GROUP: fieldBuilder.buildEdmTypeField(
          'PlanningStrategyGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalReplenishmentLeadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_REPLENISHMENT_LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'TotalReplenishmentLeadTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link procurementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProcurementType',
          'Edm.String',
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
         * Static representation of the {@link assemblyScrapPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSEMBLY_SCRAP_PERCENT: fieldBuilder.buildEdmTypeField(
          'AssemblyScrapPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link availabilityCheckType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVAILABILITY_CHECK_TYPE: fieldBuilder.buildEdmTypeField(
          'AvailabilityCheckType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goodsReceiptDuration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_RECEIPT_DURATION: fieldBuilder.buildEdmTypeField(
          'GoodsReceiptDuration',
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
         * Static representation of the {@link roundingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RoundingProfile',
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
         * Static representation of the {@link mrpGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_GROUP: fieldBuilder.buildEdmTypeField(
          'MRPGroup',
          'Edm.String',
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
         * Static representation of the {@link rqmtQtyRcptTaktTmeInWrkgDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RQMT_QTY_RCPT_TAKT_TME_IN_WRKG_DAYS: fieldBuilder.buildEdmTypeField(
          'RqmtQtyRcptTaktTmeInWrkgDays',
          'Edm.Decimal',
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
         * Static representation of the {@link rangeOfCvrgPrflCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RANGE_OF_CVRG_PRFL_CODE: fieldBuilder.buildEdmTypeField(
          'RangeOfCvrgPrflCode',
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
         * Static representation of the {@link productServiceLevelInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SERVICE_LEVEL_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ProductServiceLevelInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link prodInhProdnDurationInWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_INH_PRODN_DURATION_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'ProdInhProdnDurationInWorkDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link mrpAvailabilityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MRP_AVAILABILITY_TYPE: fieldBuilder.buildEdmTypeField(
          'MRPAvailabilityType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link crossProjectProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PROJECT_PRODUCT: fieldBuilder.buildEdmTypeField(
          'CrossProjectProduct',
          'Edm.String',
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
         * Static representation of the {@link followUpProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLLOW_UP_PRODUCT: fieldBuilder.buildEdmTypeField(
          'FollowUpProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link repetitiveManufacturingIsAllwd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MANUFACTURING_IS_ALLWD: fieldBuilder.buildEdmTypeField(
          'RepetitiveManufacturingIsAllwd',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link dependentRequirementsType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPENDENT_REQUIREMENTS_TYPE: fieldBuilder.buildEdmTypeField(
          'DependentRequirementsType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsBulkComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_BULK_COMPONENT: fieldBuilder.buildEdmTypeField(
          'ProductIsBulkComponent',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link repetitiveManufacturingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPETITIVE_MANUFACTURING_PROFILE: fieldBuilder.buildEdmTypeField(
          'RepetitiveManufacturingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link backwardCnsmpnPeriodInWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BACKWARD_CNSMPN_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'BackwardCnsmpnPeriodInWorkDays',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fwdConsumptionPeriodInWorkDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FWD_CONSUMPTION_PERIOD_IN_WORK_DAYS: fieldBuilder.buildEdmTypeField(
          'FwdConsumptionPeriodInWorkDays',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodRqmtsConsumptionMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_RQMTS_CONSUMPTION_MODE: fieldBuilder.buildEdmTypeField(
          'ProdRqmtsConsumptionMode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodFcstRequirementsSplitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_FCST_REQUIREMENTS_SPLIT_CODE: fieldBuilder.buildEdmTypeField(
          'ProdFcstRequirementsSplitCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveOutDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_OUT_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveOutDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link schedulingFloatProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_FLOAT_PROFILE: fieldBuilder.buildEdmTypeField(
          'SchedulingFloatProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link componentScrapInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_SCRAP_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'ComponentScrapInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productDiscontinuationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DISCONTINUATION_CODE: fieldBuilder.buildEdmTypeField(
          'ProductDiscontinuationCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productRequirementsGrouping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_REQUIREMENTS_GROUPING: fieldBuilder.buildEdmTypeField(
          'ProductRequirementsGrouping',
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
         * Static representation of the {@link productComponentBackflushCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COMPONENT_BACKFLUSH_CODE: fieldBuilder.buildEdmTypeField(
          'ProductComponentBackflushCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link proposedProductSupplyArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROPOSED_PRODUCT_SUPPLY_AREA: fieldBuilder.buildEdmTypeField(
          'ProposedProductSupplyArea',
          'Edm.String',
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
         * Static representation of the {@link jitProdnConfProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JIT_PRODN_CONF_PROFILE: fieldBuilder.buildEdmTypeField(
          'JITProdnConfProfile',
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
         * Static representation of the {@link prodnPlngAndControlCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODN_PLNG_AND_CONTROL_CALENDAR: fieldBuilder.buildEdmTypeField(
          'ProdnPlngAndControlCalendar',
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
         * Static representation of the {@link consignmentControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNMENT_CONTROL: fieldBuilder.buildEdmTypeField(
          'ConsignmentControl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link atpCheckHorizonInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_CHECK_HORIZON_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'ATPCheckHorizonInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link atpCheckHorizonFactoryCalendar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATP_CHECK_HORIZON_FACTORY_CALENDAR: fieldBuilder.buildEdmTypeField(
          'ATPCheckHorizonFactoryCalendar',
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
        ALL_FIELDS: new AllFields('*', ProductPlantSupplyPlanning)
      };
    }

    return this._schema;
  }
}
