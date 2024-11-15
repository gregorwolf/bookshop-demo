/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductProcurement } from './ProductProcurement';
import { ProductProcurementRequestBuilder } from './ProductProcurementRequestBuilder';
import { ProductApi } from './ProductApi';
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
export class ProductProcurementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductProcurement<DeSerializersT>, DeSerializersT>
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
  ): ProductProcurementApi<DeSerializersT> {
    return new ProductProcurementApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductProcurement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PRODUCT_1: new OneToOneLink('_Product', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ProductProcurement;

  requestBuilder(): ProductProcurementRequestBuilder<DeSerializersT> {
    return new ProductProcurementRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductProcurement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductProcurement<DeSerializersT>,
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
    typeof ProductProcurement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductProcurement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      ProductProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      ProductProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARBL_PUR_ORD_UNIT_STATUS: OrderableEdmTypeField<
      ProductProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASING_ACKN_PROFILE: OrderableEdmTypeField<
      ProductProcurement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductProcurement<DeSerializers>,
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
      ProductProcurement<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductProcurement<DeSerializers>>;
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
         * Static representation of the {@link purchaseOrderQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQuantityUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderQuantityISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link varblPurOrdUnitStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARBL_PUR_ORD_UNIT_STATUS: fieldBuilder.buildEdmTypeField(
          'VarblPurOrdUnitStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchasingAcknProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ACKN_PROFILE: fieldBuilder.buildEdmTypeField(
          'PurchasingAcknProfile',
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
        ALL_FIELDS: new AllFields('*', ProductProcurement)
      };
    }

    return this._schema;
  }
}
