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
export declare class ProductProcurementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductProcurement<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductProcurementApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ProductApi<DeSerializersT>]): this;
  entityConstructor: typeof ProductProcurement;
  requestBuilder(): ProductProcurementRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductProcurement<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ProductProcurement<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductProcurement, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
