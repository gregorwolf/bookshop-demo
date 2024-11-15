/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductChangeMaster } from './ProductChangeMaster';
import { ProductChangeMasterRequestBuilder } from './ProductChangeMasterRequestBuilder';
import { ProductApi } from './ProductApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductChangeMasterApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductChangeMaster<DeSerializersT>, DeSerializersT>
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
  ): ProductChangeMasterApi<DeSerializersT> {
    return new ProductChangeMasterApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductChangeMaster<DeSerializersT>,
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

  entityConstructor = ProductChangeMaster;

  requestBuilder(): ProductChangeMasterRequestBuilder<DeSerializersT> {
    return new ProductChangeMasterRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductChangeMaster<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductChangeMaster<DeSerializersT>,
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
    typeof ProductChangeMaster,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductChangeMaster,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHANGE_NUMBER: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVISION_LEVEL: OrderableEdmTypeField<
      ProductChangeMaster<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product_1} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_1: OneToOneLink<
      ProductChangeMaster<DeSerializersT>,
      DeSerializersT,
      ProductApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductChangeMaster<DeSerializers>>;
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
         * Static representation of the {@link changeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ChangeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link revisionLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVISION_LEVEL: fieldBuilder.buildEdmTypeField(
          'RevisionLevel',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductChangeMaster)
      };
    }

    return this._schema;
  }
}
