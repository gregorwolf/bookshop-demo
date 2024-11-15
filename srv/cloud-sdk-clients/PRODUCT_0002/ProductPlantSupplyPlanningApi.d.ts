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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductPlantSupplyPlanningApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantSupplyPlanning<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): ProductPlantSupplyPlanningApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantSupplyPlanning;
  requestBuilder(): ProductPlantSupplyPlanningRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantSupplyPlanning<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantSupplyPlanning<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantSupplyPlanning,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
