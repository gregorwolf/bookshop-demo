/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantProcurement } from './ProductPlantProcurement';
import { ProductPlantProcurementRequestBuilder } from './ProductPlantProcurementRequestBuilder';
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
export class ProductPlantProcurementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantProcurement<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantProcurementApi<DeSerializersT> {
    return new ProductPlantProcurementApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantProcurement<DeSerializersT>,
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

  entityConstructor = ProductPlantProcurement;

  requestBuilder(): ProductPlantProcurementRequestBuilder<DeSerializersT> {
    return new ProductPlantProcurementRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductPlantProcurement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductPlantProcurement<DeSerializersT>,
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
    typeof ProductPlantProcurement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductPlantProcurement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_AUTO_PUR_ORD_CREATION_ALLOWED: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_SOURCE_LIST_REQUIRED: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    JUST_IN_TIME_DELIVERY_SCHEDULE_CODE: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_OF_SUPPLY_CATEGORY: OrderableEdmTypeField<
      ProductPlantProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantProcurement<DeSerializers>,
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
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantProcurement<DeSerializers>>;
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
         * Static representation of the {@link isAutoPurOrdCreationAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_AUTO_PUR_ORD_CREATION_ALLOWED: fieldBuilder.buildEdmTypeField(
          'IsAutoPurOrdCreationAllowed',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isSourceListRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SOURCE_LIST_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsSourceListRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link justInTimeDeliveryScheduleCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JUST_IN_TIME_DELIVERY_SCHEDULE_CODE: fieldBuilder.buildEdmTypeField(
          'JustInTimeDeliveryScheduleCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceOfSupplyCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_OF_SUPPLY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SourceOfSupplyCategory',
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
        ALL_FIELDS: new AllFields('*', ProductPlantProcurement)
      };
    }

    return this._schema;
  }
}
