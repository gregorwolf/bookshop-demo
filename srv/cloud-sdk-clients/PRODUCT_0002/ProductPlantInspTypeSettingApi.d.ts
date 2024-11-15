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
export declare class ProductPlantInspTypeSettingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantInspTypeSetting<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantInspTypeSettingApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantInspTypeSetting;
  requestBuilder(): ProductPlantInspTypeSettingRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantInspTypeSetting<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantInspTypeSetting<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantInspTypeSetting,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
