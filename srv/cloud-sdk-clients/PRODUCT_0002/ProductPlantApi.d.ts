/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlant } from './ProductPlant';
import { ProductPlantRequestBuilder } from './ProductPlantRequestBuilder';
import { ProductPlantInternationalTradeApi } from './ProductPlantInternationalTradeApi';
import { ProductApi } from './ProductApi';
import { ProductPlantCostingApi } from './ProductPlantCostingApi';
import { ProductPlantForecastApi } from './ProductPlantForecastApi';
import { ProductPlantInspTypeSettingApi } from './ProductPlantInspTypeSettingApi';
import { ProductPlantMrpApi } from './ProductPlantMrpApi';
import { ProductPlantPlanningApi } from './ProductPlantPlanningApi';
import { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { ProductPlantPurchaseTaxApi } from './ProductPlantPurchaseTaxApi';
import { ProductPlantQualityManagementApi } from './ProductPlantQualityManagementApi';
import { ProductPlantSalesApi } from './ProductPlantSalesApi';
import { ProductPlantStorageApi } from './ProductPlantStorageApi';
import { ProductPlantStorageLocationApi } from './ProductPlantStorageLocationApi';
import { ProductPlantSupplyPlanningApi } from './ProductPlantSupplyPlanningApi';
import { ProductPlantWorkSchedulingApi } from './ProductPlantWorkSchedulingApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductPlantApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlant<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductPlantApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductPlantInternationalTradeApi<DeSerializersT>,
      ProductApi<DeSerializersT>,
      ProductPlantCostingApi<DeSerializersT>,
      ProductPlantForecastApi<DeSerializersT>,
      ProductPlantInspTypeSettingApi<DeSerializersT>,
      ProductPlantMrpApi<DeSerializersT>,
      ProductPlantPlanningApi<DeSerializersT>,
      ProductPlantProcurementApi<DeSerializersT>,
      ProductPlantPurchaseTaxApi<DeSerializersT>,
      ProductPlantQualityManagementApi<DeSerializersT>,
      ProductPlantSalesApi<DeSerializersT>,
      ProductPlantStorageApi<DeSerializersT>,
      ProductPlantStorageLocationApi<DeSerializersT>,
      ProductPlantSupplyPlanningApi<DeSerializersT>,
      ProductPlantWorkSchedulingApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductPlant;
  requestBuilder(): ProductPlantRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlant<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductPlant<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductPlant, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_CODE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFILE_VALIDITY_START_DATE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    FISCAL_YEAR_VARIANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_TYPE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STOCK_DETERMINATION_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_BATCH_MANAGEMENT_REQUIRED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SERIAL_NUMBER_PROFILE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_NEGATIVE_STOCK_ALLOWED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_CFOP_CATEGORY: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_EXCISE_TAX_RELEVANT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    GOODS_ISSUE_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOODS_ISSUE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISTR_CNTR_DISTRIBUTION_PROFILE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_CRITICAL_PRT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCT_LOGISTICS_HANDLING_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_FREIGHT_GROUP: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGINAL_BATCH_REFERENCE_PRODUCT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGL_BATCH_MANAGEMENT_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MIN_CONTROL_TEMPERATURE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_MAX_CONTROL_TEMPERATURE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_CONTROL_TEMPERATURE_UNIT: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_CTRL_TEMPERATURE_UNIT_ISO_CODE: OrderableEdmTypeField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlant<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link prodPlantInternationalTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROD_PLANT_INTERNATIONAL_TRADE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantInternationalTradeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantCosting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_COSTING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantCostingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantForecast} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_FORECAST: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantForecastApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productPlantInspTypeSetting} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_INSP_TYPE_SETTING: OneToManyLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantInspTypeSettingApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productPlantMrp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_MRP: OneToManyLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantMrpApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantPlanning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_PLANNING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantPlanningApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_PROCUREMENT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productPlantPurchaseTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_PURCHASE_TAX: OneToManyLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantPurchaseTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantQualityManagement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_QUALITY_MANAGEMENT: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantQualityManagementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_SALES: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_STORAGE: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productPlantStorageLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_STORAGE_LOCATION: OneToManyLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantStorageLocationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantSupplyPlanning} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_SUPPLY_PLANNING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantSupplyPlanningApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlantWorkScheduling} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT_WORK_SCHEDULING: OneToOneLink<
      ProductPlant<DeSerializersT>,
      DeSerializersT,
      ProductPlantWorkSchedulingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlant<DeSerializers>>;
  };
}
