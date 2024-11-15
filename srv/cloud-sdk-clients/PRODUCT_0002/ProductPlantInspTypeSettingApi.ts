/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantInspTypeSetting } from './ProductPlantInspTypeSetting';
import { ProductPlantInspTypeSettingRequestBuilder } from './ProductPlantInspTypeSettingRequestBuilder';
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
export class ProductPlantInspTypeSettingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantInspTypeSetting<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantInspTypeSettingApi<DeSerializersT> {
    return new ProductPlantInspTypeSettingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantInspTypeSetting<DeSerializersT>,
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

  entityConstructor = ProductPlantInspTypeSetting;

  requestBuilder(): ProductPlantInspTypeSettingRequestBuilder<DeSerializersT> {
    return new ProductPlantInspTypeSettingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantInspTypeSetting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantInspTypeSetting<DeSerializersT>,
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
    typeof ProductPlantInspTypeSetting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantInspTypeSetting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    INSPECTION_LOT_TYPE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSP_LOT_IS_TASK_LIST_REQUIRED: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_MATERIAL_SPEC: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_CONFIGN_SPECIFICATION: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_BATCH_CHARC: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_AUTOM_SPEC_ASSGMT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_CHARC: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_POST_TO_INSPECTION_STOCK: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_IS_AUTOM_USGE_DCSN_POSSIBLE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAMPLING_PROCEDURE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSP_LOT_DYNAMIC_RULE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSP_LOT_SAMPLE_QUANTITY_IN_PERCENT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSPECTION_LOT_IS_FULL_INSPECTION: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_SKIP_IS_ALLOWED: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_MANUAL_SAMPLE_SIZE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_IS_SMPL_CALC_MNL_TRIGGERED: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_IS_SERIAL_NMBR_POSSIBLE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_DURATION_IN_DAYS: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSP_LOT_SUMMARY_CONTROL: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSP_QUALITY_SCORE_PROCEDURE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSP_LOT_ACCEPTED_SCRAP_RATIO_IN_PCT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INSPECTION_LOT_HAS_APPRAISAL_COSTS: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    QUALITY_COST_COLLECTOR: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_INSP_TYPE_SETTING_IS_ACTIVE: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_TYPE_IS_PRFRD: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_HANDLING_UNIT: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_HAS_MULTIPLE_SPEC: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_OF_EWM_SUMMARY_CONTROL: OrderableEdmTypeField<
      ProductPlantInspTypeSetting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantInspTypeSetting<DeSerializers>,
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
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantInspTypeSetting<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link inspectionLotType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSPECTION_LOT_TYPE: fieldBuilder.buildEdmTypeField(
          'InspectionLotType',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link inspLotIsTaskListRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_IS_TASK_LIST_REQUIRED: fieldBuilder.buildEdmTypeField(
          'InspLotIsTaskListRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasMaterialSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_MATERIAL_SPEC: fieldBuilder.buildEdmTypeField(
          'InspLotHasMaterialSpec',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasConfignSpecification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_CONFIGN_SPECIFICATION: fieldBuilder.buildEdmTypeField(
          'InspLotHasConfignSpecification',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasBatchCharc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_BATCH_CHARC: fieldBuilder.buildEdmTypeField(
          'InspLotHasBatchCharc',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasAutomSpecAssgmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_AUTOM_SPEC_ASSGMT: fieldBuilder.buildEdmTypeField(
          'InspLotHasAutomSpecAssgmt',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasCharc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_CHARC: fieldBuilder.buildEdmTypeField(
          'InspLotHasCharc',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link hasPostToInspectionStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_POST_TO_INSPECTION_STOCK: fieldBuilder.buildEdmTypeField(
          'HasPostToInspectionStock',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotIsAutomUsgeDcsnPossible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_IS_AUTOM_USGE_DCSN_POSSIBLE: fieldBuilder.buildEdmTypeField(
          'InspLotIsAutomUsgeDcsnPossible',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link samplingProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAMPLING_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'SamplingProcedure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inspLotDynamicRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_DYNAMIC_RULE: fieldBuilder.buildEdmTypeField(
          'InspLotDynamicRule',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inspLotSampleQuantityInPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_SAMPLE_QUANTITY_IN_PERCENT: fieldBuilder.buildEdmTypeField(
          'InspLotSampleQuantityInPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inspectionLotIsFullInspection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSPECTION_LOT_IS_FULL_INSPECTION: fieldBuilder.buildEdmTypeField(
          'InspectionLotIsFullInspection',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotSkipIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_SKIP_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'InspLotSkipIsAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasManualSampleSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_MANUAL_SAMPLE_SIZE: fieldBuilder.buildEdmTypeField(
          'InspLotHasManualSampleSize',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotIsSmplCalcMnlTriggered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_IS_SMPL_CALC_MNL_TRIGGERED: fieldBuilder.buildEdmTypeField(
          'InspLotIsSmplCalcMnlTriggered',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotIsSerialNmbrPossible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_IS_SERIAL_NMBR_POSSIBLE: fieldBuilder.buildEdmTypeField(
          'InspLotIsSerialNmbrPossible',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotDurationInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'InspLotDurationInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inspLotSummaryControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_SUMMARY_CONTROL: fieldBuilder.buildEdmTypeField(
          'InspLotSummaryControl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inspQualityScoreProcedure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_QUALITY_SCORE_PROCEDURE: fieldBuilder.buildEdmTypeField(
          'InspQualityScoreProcedure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inspLotAcceptedScrapRatioInPct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_ACCEPTED_SCRAP_RATIO_IN_PCT: fieldBuilder.buildEdmTypeField(
          'InspLotAcceptedScrapRatioInPct',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inspectionLotHasAppraisalCosts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSPECTION_LOT_HAS_APPRAISAL_COSTS: fieldBuilder.buildEdmTypeField(
          'InspectionLotHasAppraisalCosts',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link qualityCostCollector} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_COST_COLLECTOR: fieldBuilder.buildEdmTypeField(
          'QualityCostCollector',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodInspTypeSettingIsActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_INSP_TYPE_SETTING_IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'ProdInspTypeSettingIsActive',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspTypeIsPrfrd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_TYPE_IS_PRFRD: fieldBuilder.buildEdmTypeField(
          'InspTypeIsPrfrd',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasHandlingUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_HANDLING_UNIT: fieldBuilder.buildEdmTypeField(
          'InspLotHasHandlingUnit',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotHasMultipleSpec} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_HAS_MULTIPLE_SPEC: fieldBuilder.buildEdmTypeField(
          'InspLotHasMultipleSpec',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link inspLotOfEwmSummaryControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_OF_EWM_SUMMARY_CONTROL: fieldBuilder.buildEdmTypeField(
          'InspLotOfEWMSummaryControl',
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
        ALL_FIELDS: new AllFields('*', ProductPlantInspTypeSetting)
      };
    }

    return this._schema;
  }
}
