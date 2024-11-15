/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantQualityManagement } from './ProductPlantQualityManagement';
import { ProductPlantQualityManagementRequestBuilder } from './ProductPlantQualityManagementRequestBuilder';
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
export class ProductPlantQualityManagementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantQualityManagement<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantQualityManagementApi<DeSerializersT> {
    return new ProductPlantQualityManagementApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantQualityManagement<DeSerializersT>,
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

  entityConstructor = ProductPlantQualityManagement;

  requestBuilder(): ProductPlantQualityManagementRequestBuilder<DeSerializersT> {
    return new ProductPlantQualityManagementRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantQualityManagement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantQualityManagement<DeSerializersT>,
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
    typeof ProductPlantQualityManagement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantQualityManagement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_QLTY_MANAGEMENT_CONTROL_KEY: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HAS_POST_TO_INSPECTION_STOCK: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    INSP_LOT_DOCUMENTATION_IS_REQUIRED: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    QUALITY_MGMT_SYSTEM_FOR_SUPPLIER: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRRG_INSP_INTERVAL_TIME_IN_DAYS: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_QUALITY_CERTIFICATE_TYPE: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_QUALITY_AUTHORIZATION_GROUP: OrderableEdmTypeField<
      ProductPlantQualityManagement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantQualityManagement<DeSerializers>,
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
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantQualityManagement<DeSerializers>>;
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
         * Static representation of the {@link prodQltyManagementControlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_QLTY_MANAGEMENT_CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'ProdQltyManagementControlKey',
          'Edm.String',
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
         * Static representation of the {@link inspLotDocumentationIsRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSP_LOT_DOCUMENTATION_IS_REQUIRED: fieldBuilder.buildEdmTypeField(
          'InspLotDocumentationIsRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link qualityMgmtSystemForSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_MGMT_SYSTEM_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'QualityMgmtSystemForSupplier',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recrrgInspIntervalTimeInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRRG_INSP_INTERVAL_TIME_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'RecrrgInspIntervalTimeInDays',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productQualityCertificateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_QUALITY_CERTIFICATE_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductQualityCertificateType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodQualityAuthorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_QUALITY_AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'ProdQualityAuthorizationGroup',
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
        ALL_FIELDS: new AllFields('*', ProductPlantQualityManagement)
      };
    }

    return this._schema;
  }
}
