/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantWorkScheduling } from './ProductPlantWorkScheduling';
import { ProductPlantWorkSchedulingRequestBuilder } from './ProductPlantWorkSchedulingRequestBuilder';
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
export class ProductPlantWorkSchedulingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantWorkScheduling<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantWorkSchedulingApi<DeSerializersT> {
    return new ProductPlantWorkSchedulingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantWorkScheduling<DeSerializersT>,
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

  entityConstructor = ProductPlantWorkScheduling;

  requestBuilder(): ProductPlantWorkSchedulingRequestBuilder<DeSerializersT> {
    return new ProductPlantWorkSchedulingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantWorkScheduling<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantWorkScheduling<DeSerializersT>,
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
    typeof ProductPlantWorkScheduling,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantWorkScheduling,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_BASE_QUANTITY: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNLIMITED_OVER_DELIV_IS_ALLOWED: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    OVER_DELIVERY_TOLERANCE_PERCENT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNDER_DELIVERY_TOLERANCE_PERCENT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_INVTRY_MANAGED_LOC: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ORDER_BATCH_CODE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_IS_WITHDRAWN_FRM_PRODN_BIN: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TRANSITION_MATRIX_PRODUCTS_GROUP: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORDER_CHANGE_MANAGEMENT_PROFILE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COMPONENT_BACKFLUSH_CODE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETUP_AND_TEARDOWN_TIME: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SCHEDULING_PROFILE: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSITION_TIME: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESSING_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_SUPERVISOR: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_PRODUCTION_QUANTITY_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_PRODUCTION_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantWorkScheduling<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantWorkScheduling<DeSerializers>,
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
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantWorkScheduling<DeSerializers>>;
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
         * Static representation of the {@link productBaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_BASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ProductBaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unlimitedOverDelivIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNLIMITED_OVER_DELIV_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'UnlimitedOverDelivIsAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link overDeliveryTolerancePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_DELIVERY_TOLERANCE_PERCENT: fieldBuilder.buildEdmTypeField(
          'OverDeliveryTolerancePercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link underDeliveryTolerancePercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_DELIVERY_TOLERANCE_PERCENT: fieldBuilder.buildEdmTypeField(
          'UnderDeliveryTolerancePercent',
          'Edm.Decimal',
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
         * Static representation of the {@link productionOrderBatchCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_BATCH_CODE: fieldBuilder.buildEdmTypeField(
          'ProductionOrderBatchCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodIsWithdrawnFrmProdnBin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_IS_WITHDRAWN_FRM_PRODN_BIN: fieldBuilder.buildEdmTypeField(
          'ProdIsWithdrawnFrmProdnBin',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link transitionMatrixProductsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_MATRIX_PRODUCTS_GROUP: fieldBuilder.buildEdmTypeField(
          'TransitionMatrixProductsGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link orderChangeManagementProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CHANGE_MANAGEMENT_PROFILE: fieldBuilder.buildEdmTypeField(
          'OrderChangeManagementProfile',
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
         * Static representation of the {@link setupAndTeardownTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETUP_AND_TEARDOWN_TIME: fieldBuilder.buildEdmTypeField(
          'SetupAndTeardownTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionSchedulingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SCHEDULING_PROFILE: fieldBuilder.buildEdmTypeField(
          'ProductionSchedulingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transitionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_TIME: fieldBuilder.buildEdmTypeField(
          'TransitionTime',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link processingTimeInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'ProcessingTimeInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productionSupervisor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SUPERVISOR: fieldBuilder.buildEdmTypeField(
          'ProductionSupervisor',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productProductionQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_PRODUCTION_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductProductionQuantityUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodProductionQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_PRODUCTION_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ProdProductionQuantityISOUnit',
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
        ALL_FIELDS: new AllFields('*', ProductPlantWorkScheduling)
      };
    }

    return this._schema;
  }
}
