/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductPlantStorageLocation } from './ProductPlantStorageLocation';
import { ProductPlantStorageLocationRequestBuilder } from './ProductPlantStorageLocationRequestBuilder';
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
export declare class ProductPlantStorageLocationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProductPlantStorageLocation<DeSerializersT>, DeSerializersT>
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
  ): ProductPlantStorageLocationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [ProductApi<DeSerializersT>, ProductPlantApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof ProductPlantStorageLocation;
  requestBuilder(): ProductPlantStorageLocationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductPlantStorageLocation<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductPlantStorageLocation<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductPlantStorageLocation,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductPlantStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANT: OrderableEdmTypeField<
      ProductPlantStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      ProductPlantStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_STORAGE_BIN: OrderableEdmTypeField<
      ProductPlantStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      ProductPlantStorageLocation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductPlantStorageLocation<DeSerializers>,
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
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToOneLink<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductPlantStorageLocation<DeSerializers>>;
  };
}
