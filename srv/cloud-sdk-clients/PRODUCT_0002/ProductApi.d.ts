/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Product } from './Product';
import { ProductRequestBuilder } from './ProductRequestBuilder';
import { ProductChangeMasterApi } from './ProductChangeMasterApi';
import { ProductDescriptionApi } from './ProductDescriptionApi';
import { ProductEwmWarehouseApi } from './ProductEwmWarehouseApi';
import { ProductPlantApi } from './ProductPlantApi';
import { ProductProcurementApi } from './ProductProcurementApi';
import { ProductQualityManagementApi } from './ProductQualityManagementApi';
import { ProductSalesApi } from './ProductSalesApi';
import { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import { ProductStorageApi } from './ProductStorageApi';
import { ProductUnitOfMeasureApi } from './ProductUnitOfMeasureApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export declare class ProductApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Product<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ProductApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ProductChangeMasterApi<DeSerializersT>,
      ProductDescriptionApi<DeSerializersT>,
      ProductEwmWarehouseApi<DeSerializersT>,
      ProductPlantApi<DeSerializersT>,
      ProductProcurementApi<DeSerializersT>,
      ProductQualityManagementApi<DeSerializersT>,
      ProductSalesApi<DeSerializersT>,
      ProductSalesDeliveryApi<DeSerializersT>,
      ProductStorageApi<DeSerializersT>,
      ProductUnitOfMeasureApi<DeSerializersT>,
      ProductValuationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Product;
  requestBuilder(): ProductRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Product<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Product<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Product, DeSerializersT>;
  private _schema?;
  get schema(): {
    PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    CREATION_TIME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    CREATION_DATE_TIME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    CROSS_PLANT_STATUS: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CROSS_PLANT_STATUS_VALIDITY_DATE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PRODUCT_OLD_ID: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROSS_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEIGHT_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CATEGORY_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NET_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VOLUME_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VOLUME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ANP_CODE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SIZE_OR_DIMENSION_TEXT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDUSTRY_STANDARD_NAME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STANDARD_ID: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNATIONAL_ARTICLE_NUMBER_CAT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_CONFIGURABLE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_BATCH_MANAGEMENT_REQUIRED: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    EXTERNAL_PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CROSS_PLANT_CONFIGURABLE_PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERIAL_NO_EXPLICITNESS_LEVEL: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_APPROVED_BATCH_RECORD_REQD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HANDLING_INDICATOR: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_STORAGE_CONDITION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STANDARD_HANDLING_UNIT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERIAL_NUMBER_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PILFERABLE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_RELEVANT_FOR_HZDS_SUBSTANCES: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    QUARANTINE_PERIOD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TIME_UNIT_FOR_QUARANTINE_PERIOD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUARANTINE_PERIOD_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_INSPECTION_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HANDLING_UNIT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HAS_VARIABLE_TARE_WEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    MAXIMUM_PACKAGING_LENGTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_PACKAGING_WIDTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_PACKAGING_HEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_CAPACITY: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OVERCAPACITY_TOLERANCE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_FOR_MAX_PACKAGING_DIMENSIONS: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAX_PACKGG_DIMENSION_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASE_UNIT_SPECIFIC_PRODUCT_LENGTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT_SPECIFIC_PRODUCT_WIDTH: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BASE_UNIT_SPECIFIC_PRODUCT_HEIGHT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MEASUREMENT_ISO_UNIT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTICLE_CATEGORY: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INDUSTRY_SECTOR: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGE_TIME: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      false,
      true
    >;
    DANGEROUS_GOODS_IND_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_CHANGE_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_PAGE_COUNT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_PAGE_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_IS_CREATED_BY_CAD: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PRODUCTION_OR_INSPECTION_MEMO_TXT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_MEMO_PAGE_FORMAT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_IS_HIGHLY_VISCOUS: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    TRANSPORT_IS_IN_BULK: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PROD_EFFCTY_PARAM_VALS_ARE_ASSIGNED: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    PROD_IS_ENVIRONMENTALLY_RELEVANT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LABORATORY_OR_DESIGN_OFFICE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGING_PRODUCT_GROUP: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKING_REFERENCE_PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BASIC_PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_VERSION: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_TYPE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_DOCUMENT_PAGE_FORMAT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROD_CHML_CMPLNC_RELEVANCE_CODE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISCOUNT_IN_KIND_ELIGIBILITY: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_MANUFACTURER_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_NUMBER: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUFACTURER_PART_PROFILE: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OWN_INVENTORY_MANAGED_PRODUCT: OrderableEdmTypeField<
      Product<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAP_MESSAGES: CollectionField<
      Product<DeSerializers>,
      DeSerializersT,
      Sap_Message,
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productChangeMaster} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_CHANGE_MASTER: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductChangeMasterApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productDescription} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_DESCRIPTION: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductDescriptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productEwmWarehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_EWM_WAREHOUSE: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductEwmWarehouseApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productPlant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PLANT: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductPlantApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productProcurement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_PROCUREMENT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductProcurementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productQualityManagement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_QUALITY_MANAGEMENT: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductQualityManagementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSales} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SALES: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productSalesDelivery} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SALES_DELIVERY: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductSalesDeliveryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStorage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STORAGE: OneToOneLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductStorageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productUnitOfMeasure} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_UNIT_OF_MEASURE: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductUnitOfMeasureApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productValuation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VALUATION: OneToManyLink<
      Product<DeSerializersT>,
      DeSerializersT,
      ProductValuationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Product<DeSerializers>>;
  };
}
