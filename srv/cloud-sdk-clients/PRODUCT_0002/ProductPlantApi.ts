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
export class ProductPlantApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlant<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantApi<DeSerializersT> {
    return new ProductPlantApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

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
  ): this {
    this.navigationPropertyFields = {
      PROD_PLANT_INTERNATIONAL_TRADE: new OneToOneLink(
        '_ProdPlantInternationalTrade',
        this,
        linkedApis[0]
      ),
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[1]),
      PRODUCT_PLANT_COSTING: new OneToOneLink(
        '_ProductPlantCosting',
        this,
        linkedApis[2]
      ),
      PRODUCT_PLANT_FORECAST: new OneToOneLink(
        '_ProductPlantForecast',
        this,
        linkedApis[3]
      ),
      PRODUCT_PLANT_INSP_TYPE_SETTING: new OneToManyLink(
        '_ProductPlantInspTypeSetting',
        this,
        linkedApis[4]
      ),
      PRODUCT_PLANT_MRP: new OneToManyLink(
        '_ProductPlantMRP',
        this,
        linkedApis[5]
      ),
      PRODUCT_PLANT_PLANNING: new OneToOneLink(
        '_ProductPlantPlanning',
        this,
        linkedApis[6]
      ),
      PRODUCT_PLANT_PROCUREMENT: new OneToOneLink(
        '_ProductPlantProcurement',
        this,
        linkedApis[7]
      ),
      PRODUCT_PLANT_PURCHASE_TAX: new OneToManyLink(
        '_ProductPlantPurchaseTax',
        this,
        linkedApis[8]
      ),
      PRODUCT_PLANT_QUALITY_MANAGEMENT: new OneToOneLink(
        '_ProductPlantQualityManagement',
        this,
        linkedApis[9]
      ),
      PRODUCT_PLANT_SALES: new OneToOneLink(
        '_ProductPlantSales',
        this,
        linkedApis[10]
      ),
      PRODUCT_PLANT_STORAGE: new OneToOneLink(
        '_ProductPlantStorage',
        this,
        linkedApis[11]
      ),
      PRODUCT_PLANT_STORAGE_LOCATION: new OneToManyLink(
        '_ProductPlantStorageLocation',
        this,
        linkedApis[12]
      ),
      PRODUCT_PLANT_SUPPLY_PLANNING: new OneToOneLink(
        '_ProductPlantSupplyPlanning',
        this,
        linkedApis[13]
      ),
      PRODUCT_PLANT_WORK_SCHEDULING: new OneToOneLink(
        '_ProductPlantWorkScheduling',
        this,
        linkedApis[14]
      )
    };
    return this;
  }

  entityConstructor = ProductPlant;

  requestBuilder(): ProductPlantRequestBuilder<DeSerializersT> {
    return new ProductPlantRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlant<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductPlant<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductPlant<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductPlant, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductPlant, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link profileCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_CODE: fieldBuilder.buildEdmTypeField(
          'ProfileCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profileValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFILE_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ProfileValidityStartDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link fiscalYearVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_YEAR_VARIANT: fieldBuilder.buildEdmTypeField(
          'FiscalYearVariant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPE: fieldBuilder.buildEdmTypeField(
          'PeriodType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
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
         * Static representation of the {@link configurableProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ConfigurableProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link stockDeterminationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_DETERMINATION_GROUP: fieldBuilder.buildEdmTypeField(
          'StockDeterminationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isBatchManagementRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_MANAGEMENT_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsBatchManagementRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link serialNumberProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_PROFILE: fieldBuilder.buildEdmTypeField(
          'SerialNumberProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isNegativeStockAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NEGATIVE_STOCK_ALLOWED: fieldBuilder.buildEdmTypeField(
          'IsNegativeStockAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productCfopCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CFOP_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ProductCFOPCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsExciseTaxRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_EXCISE_TAX_RELEVANT: fieldBuilder.buildEdmTypeField(
          'ProductIsExciseTaxRelevant',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link goodsIssueUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_UNIT: fieldBuilder.buildEdmTypeField(
          'GoodsIssueUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goodsIssueIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOODS_ISSUE_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'GoodsIssueISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link distrCntrDistributionProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTR_CNTR_DISTRIBUTION_PROFILE: fieldBuilder.buildEdmTypeField(
          'DistrCntrDistributionProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsCriticalPrt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_CRITICAL_PRT: fieldBuilder.buildEdmTypeField(
          'ProductIsCriticalPrt',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productLogisticsHandlingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_LOGISTICS_HANDLING_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductLogisticsHandlingGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productFreightGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_FREIGHT_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductFreightGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link originalBatchReferenceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_BATCH_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'OriginalBatchReferenceProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link origlBatchManagementIsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGL_BATCH_MANAGEMENT_IS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'OriglBatchManagementIsRequired',
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
         * Static representation of the {@link productMinControlTemperature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MIN_CONTROL_TEMPERATURE: fieldBuilder.buildEdmTypeField(
          'ProductMinControlTemperature',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productMaxControlTemperature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MAX_CONTROL_TEMPERATURE: fieldBuilder.buildEdmTypeField(
          'ProductMaxControlTemperature',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productControlTemperatureUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONTROL_TEMPERATURE_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductControlTemperatureUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodCtrlTemperatureUnitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_CTRL_TEMPERATURE_UNIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'ProdCtrlTemperatureUnitISOCode',
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
        ALL_FIELDS: new AllFields('*', ProductPlant)
      };
    }

    return this._schema;
  }
}
