/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantCosting } from './ProductPlantCosting';
import { ProductPlantCostingRequestBuilder } from './ProductPlantCostingRequestBuilder';
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
export declare class ProductPlantCostingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductPlantCosting<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductPlantCostingApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantCosting;
  requestBuilder(): ProductPlantCostingRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantCosting<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantCosting<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ProductPlantCosting, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    COSTING_LOT_SIZE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_LIST_GROUP: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TASK_LIST_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_SPECIAL_PROCUREMENT_TYPE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_BOM_ALTERNATIVE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_BOM_USAGE: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_COSTING_RELEVANT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TASK_LIST_GROUP_COUNTER: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VARIANCE_KEY: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_PRODUCTION_VERSION: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_FIXED_PRICE_CO_PRODUCT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      ProductPlantCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantCosting<DeSerializers>,
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
      ProductPlantCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantCosting<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantCosting<DeSerializers>>;
  };
}
