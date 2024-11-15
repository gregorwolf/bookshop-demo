/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductValuationCosting } from './ProductValuationCosting';
import { ProductValuationCostingRequestBuilder } from './ProductValuationCostingRequestBuilder';
import { ProductApi } from './ProductApi';
import { ProductValuationApi } from './ProductValuationApi';
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
export declare class ProductValuationCostingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductValuationCosting<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductValuationCostingApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ProductValuationCosting;
  requestBuilder(): ProductValuationCostingRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ProductValuationCosting<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ProductValuationCosting<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof ProductValuationCosting,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_AREA: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUATION_TYPE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_COSTED_WITH_QTY_STRUC: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_MATERIAL_RELATED_ORIGIN: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    COST_ORIGIN_GROUP: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COSTING_OVERHEAD_GROUP: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_PRICE_1_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_PRICE_2_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_PRICE_3_IN_CO_CODE_CRCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FUTURE_PLND_PRICE_1_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    FUTURE_PLND_PRICE_2_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    FUTURE_PLND_PRICE_3_VALDTY_DATE: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      ProductValuationCosting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      ProductValuationCosting<DeSerializers>,
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
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToOneLink<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductValuationCosting<DeSerializers>>;
  };
}
