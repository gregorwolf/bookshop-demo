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
export declare class ProductPlantMrpApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantMrp<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductPlantMrpApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantMrp;
  requestBuilder(): ProductPlantMrpRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantMrp<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductPlantMrp<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductPlantMrp, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
