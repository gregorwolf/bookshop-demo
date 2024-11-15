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
export declare class ProductPlantProcurementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantProcurement<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductPlantProcurementApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantProcurement;
  requestBuilder(): ProductPlantProcurementRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantProcurement<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantProcurement<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantProcurement,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
