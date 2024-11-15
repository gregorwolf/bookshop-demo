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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  Time,
  OrderableEdmTypeField,
  CollectionField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Product<DeSerializersT>, DeSerializersT>
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
  ): ProductApi<DeSerializersT> {
    return new ProductApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

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
  ): this {
    this.navigationPropertyFields = {
      PRODUCT_CHANGE_MASTER: new OneToManyLink(
        '_ProductChangeMaster',
        this,
        linkedApis[0]
      ),
      PRODUCT_DESCRIPTION: new OneToManyLink(
        '_ProductDescription',
        this,
        linkedApis[1]
      ),
      PRODUCT_EWM_WAREHOUSE: new OneToManyLink(
        '_ProductEWMWarehouse',
        this,
        linkedApis[2]
      ),
      PRODUCT_PLANT: new OneToManyLink('_ProductPlant', this, linkedApis[3]),
      PRODUCT_PROCUREMENT: new OneToOneLink(
        '_ProductProcurement',
        this,
        linkedApis[4]
      ),
      PRODUCT_QUALITY_MANAGEMENT: new OneToOneLink(
        '_ProductQualityManagement',
        this,
        linkedApis[5]
      ),
      PRODUCT_SALES: new OneToOneLink('_ProductSales', this, linkedApis[6]),
      PRODUCT_SALES_DELIVERY: new OneToManyLink(
        '_ProductSalesDelivery',
        this,
        linkedApis[7]
      ),
      PRODUCT_STORAGE: new OneToOneLink('_ProductStorage', this, linkedApis[8]),
      PRODUCT_UNIT_OF_MEASURE: new OneToManyLink(
        '_ProductUnitOfMeasure',
        this,
        linkedApis[9]
      ),
      PRODUCT_VALUATION: new OneToManyLink(
        '_ProductValuation',
        this,
        linkedApis[10]
      )
    };
    return this;
  }

  entityConstructor = Product;

  requestBuilder(): ProductRequestBuilder<DeSerializersT> {
    return new ProductRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Product<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Product<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Product<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Product, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Product, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link productType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link creationTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_TIME: fieldBuilder.buildEdmTypeField(
          'CreationTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link creationDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'CreationDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link crossPlantStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_STATUS: fieldBuilder.buildEdmTypeField(
          'CrossPlantStatus',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link crossPlantStatusValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_STATUS_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'CrossPlantStatusValidityDate',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link productOldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_OLD_ID: fieldBuilder.buildEdmTypeField(
          'ProductOldID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link grossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'GrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weightIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link baseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link baseIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'BaseISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemCategoryGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATEGORY_GROUP: fieldBuilder.buildEdmTypeField(
          'ItemCategoryGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link netWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'NetWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'Division',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link volumeIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VOLUME: fieldBuilder.buildEdmTypeField(
          'ProductVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link authorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'AuthorizationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link anpCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANP_CODE: fieldBuilder.buildEdmTypeField(
          'ANPCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sizeOrDimensionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_OR_DIMENSION_TEXT: fieldBuilder.buildEdmTypeField(
          'SizeOrDimensionText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link industryStandardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_STANDARD_NAME: fieldBuilder.buildEdmTypeField(
          'IndustryStandardName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStandardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STANDARD_ID: fieldBuilder.buildEdmTypeField(
          'ProductStandardID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internationalArticleNumberCat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_ARTICLE_NUMBER_CAT: fieldBuilder.buildEdmTypeField(
          'InternationalArticleNumberCat',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsConfigurable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_CONFIGURABLE: fieldBuilder.buildEdmTypeField(
          'ProductIsConfigurable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isBatchManagementRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_MANAGEMENT_REQUIRED: fieldBuilder.buildEdmTypeField(
          'IsBatchManagementRequired',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link externalProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'ExternalProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link crossPlantConfigurableProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CROSS_PLANT_CONFIGURABLE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'CrossPlantConfigurableProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serialNoExplicitnessLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NO_EXPLICITNESS_LEVEL: fieldBuilder.buildEdmTypeField(
          'SerialNoExplicitnessLevel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isApprovedBatchRecordReqd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_APPROVED_BATCH_RECORD_REQD: fieldBuilder.buildEdmTypeField(
          'IsApprovedBatchRecordReqd',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link handlingIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_INDICATOR: fieldBuilder.buildEdmTypeField(
          'HandlingIndicator',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'WarehouseProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseStorageCondition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_STORAGE_CONDITION: fieldBuilder.buildEdmTypeField(
          'WarehouseStorageCondition',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link standardHandlingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField(
          'StandardHandlingUnitType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serialNumberProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER_PROFILE: fieldBuilder.buildEdmTypeField(
          'SerialNumberProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPilferable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PILFERABLE: fieldBuilder.buildEdmTypeField(
          'IsPilferable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isRelevantForHzdsSubstances} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RELEVANT_FOR_HZDS_SUBSTANCES: fieldBuilder.buildEdmTypeField(
          'IsRelevantForHzdsSubstances',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link quarantinePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField(
          'QuarantinePeriod',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link timeUnitForQuarantinePeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_UNIT_FOR_QUARANTINE_PERIOD: fieldBuilder.buildEdmTypeField(
          'TimeUnitForQuarantinePeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quarantinePeriodIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUARANTINE_PERIOD_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'QuarantinePeriodISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link qualityInspectionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_INSPECTION_GROUP: fieldBuilder.buildEdmTypeField(
          'QualityInspectionGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link handlingUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HANDLING_UNIT_TYPE: fieldBuilder.buildEdmTypeField(
          'HandlingUnitType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link hasVariableTareWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_VARIABLE_TARE_WEIGHT: fieldBuilder.buildEdmTypeField(
          'HasVariableTareWeight',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link maximumPackagingLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_LENGTH: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingLength',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumPackagingWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_WIDTH: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumPackagingHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_PACKAGING_HEIGHT: fieldBuilder.buildEdmTypeField(
          'MaximumPackagingHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_CAPACITY: fieldBuilder.buildEdmTypeField(
          'MaximumCapacity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link overcapacityTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERCAPACITY_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'OvercapacityTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitForMaxPackagingDimensions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_FOR_MAX_PACKAGING_DIMENSIONS: fieldBuilder.buildEdmTypeField(
          'UnitForMaxPackagingDimensions',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maxPackggDimensionIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_PACKGG_DIMENSION_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'MaxPackggDimensionISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link baseUnitSpecificProductLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT_SPECIFIC_PRODUCT_LENGTH: fieldBuilder.buildEdmTypeField(
          'BaseUnitSpecificProductLength',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseUnitSpecificProductWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT_SPECIFIC_PRODUCT_WIDTH: fieldBuilder.buildEdmTypeField(
          'BaseUnitSpecificProductWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link baseUnitSpecificProductHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_UNIT_SPECIFIC_PRODUCT_HEIGHT: fieldBuilder.buildEdmTypeField(
          'BaseUnitSpecificProductHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MEASUREMENT_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductMeasurementUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productMeasurementIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MEASUREMENT_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ProductMeasurementISOUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link articleCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTICLE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ArticleCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link industrySector} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INDUSTRY_SECTOR: fieldBuilder.buildEdmTypeField(
          'IndustrySector',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lastChangeDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangeDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastChangeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField(
          'LastChangeTime',
          'Edm.TimeOfDay',
          false
        ),
        /**
         * Static representation of the {@link dangerousGoodsIndProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DANGEROUS_GOODS_IND_PROFILE: fieldBuilder.buildEdmTypeField(
          'DangerousGoodsIndProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentChangeNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_CHANGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductDocumentChangeNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentPageCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_PAGE_COUNT: fieldBuilder.buildEdmTypeField(
          'ProductDocumentPageCount',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentPageNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_PAGE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductDocumentPageNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link documentIsCreatedByCad} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_IS_CREATED_BY_CAD: fieldBuilder.buildEdmTypeField(
          'DocumentIsCreatedByCAD',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link productionOrInspectionMemoTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_OR_INSPECTION_MEMO_TXT: fieldBuilder.buildEdmTypeField(
          'ProductionOrInspectionMemoTxt',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productionMemoPageFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_MEMO_PAGE_FORMAT: fieldBuilder.buildEdmTypeField(
          'ProductionMemoPageFormat',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productIsHighlyViscous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_IS_HIGHLY_VISCOUS: fieldBuilder.buildEdmTypeField(
          'ProductIsHighlyViscous',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link transportIsInBulk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_IS_IN_BULK: fieldBuilder.buildEdmTypeField(
          'TransportIsInBulk',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link prodEffctyParamValsAreAssigned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_EFFCTY_PARAM_VALS_ARE_ASSIGNED: fieldBuilder.buildEdmTypeField(
          'ProdEffctyParamValsAreAssigned',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link prodIsEnvironmentallyRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_IS_ENVIRONMENTALLY_RELEVANT: fieldBuilder.buildEdmTypeField(
          'ProdIsEnvironmentallyRelevant',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link laboratoryOrDesignOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABORATORY_OR_DESIGN_OFFICE: fieldBuilder.buildEdmTypeField(
          'LaboratoryOrDesignOffice',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packagingProductGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGING_PRODUCT_GROUP: fieldBuilder.buildEdmTypeField(
          'PackagingProductGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link packingReferenceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_REFERENCE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'PackingReferenceProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link basicProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASIC_PRODUCT: fieldBuilder.buildEdmTypeField(
          'BasicProduct',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductDocumentNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_VERSION: fieldBuilder.buildEdmTypeField(
          'ProductDocumentVersion',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProductDocumentType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productDocumentPageFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DOCUMENT_PAGE_FORMAT: fieldBuilder.buildEdmTypeField(
          'ProductDocumentPageFormat',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link prodChmlCmplncRelevanceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_CHML_CMPLNC_RELEVANCE_CODE: fieldBuilder.buildEdmTypeField(
          'ProdChmlCmplncRelevanceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link discountInKindEligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_IN_KIND_ELIGIBILITY: fieldBuilder.buildEdmTypeField(
          'DiscountInKindEligibility',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productManufacturerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductManufacturerNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ManufacturerNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manufacturerPartProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURER_PART_PROFILE: fieldBuilder.buildEdmTypeField(
          'ManufacturerPartProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ownInventoryManagedProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWN_INVENTORY_MANAGED_PRODUCT: fieldBuilder.buildEdmTypeField(
          'OwnInventoryManagedProduct',
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
        ALL_FIELDS: new AllFields('*', Product)
      };
    }

    return this._schema;
  }
}
