/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProdSalesDeliverySalesTaxApi } from './ProdSalesDeliverySalesTaxApi';
import { ProductApi } from './ProductApi';
import { ProductChangeMasterApi } from './ProductChangeMasterApi';
import { ProductDescriptionApi } from './ProductDescriptionApi';
import { ProductEwmStorageTypeApi } from './ProductEwmStorageTypeApi';
import { ProductEwmWarehouseApi } from './ProductEwmWarehouseApi';
import { ProductPlantApi } from './ProductPlantApi';
import { ProductPlantCostingApi } from './ProductPlantCostingApi';
import { ProductPlantForecastApi } from './ProductPlantForecastApi';
import { ProductPlantInspTypeSettingApi } from './ProductPlantInspTypeSettingApi';
import { ProductPlantInternationalTradeApi } from './ProductPlantInternationalTradeApi';
import { ProductPlantMrpApi } from './ProductPlantMrpApi';
import { ProductPlantPlanningApi } from './ProductPlantPlanningApi';
import { ProductPlantProcurementApi } from './ProductPlantProcurementApi';
import { ProductPlantPurchaseTaxApi } from './ProductPlantPurchaseTaxApi';
import { ProductPlantQualityManagementApi } from './ProductPlantQualityManagementApi';
import { ProductPlantSalesApi } from './ProductPlantSalesApi';
import { ProductPlantStorageApi } from './ProductPlantStorageApi';
import { ProductPlantStorageLocationApi } from './ProductPlantStorageLocationApi';
import { ProductPlantSupplyPlanningApi } from './ProductPlantSupplyPlanningApi';
import { ProductPlantWorkSchedulingApi } from './ProductPlantWorkSchedulingApi';
import { ProductProcurementApi } from './ProductProcurementApi';
import { ProductQualityManagementApi } from './ProductQualityManagementApi';
import { ProductSalesApi } from './ProductSalesApi';
import { ProductSalesDeliveryApi } from './ProductSalesDeliveryApi';
import { ProductStorageApi } from './ProductStorageApi';
import { ProductUnitOfMeasureApi } from './ProductUnitOfMeasureApi';
import { ProductUnitOfMeasureEanApi } from './ProductUnitOfMeasureEanApi';
import { ProductValuationApi } from './ProductValuationApi';
import { ProductValuationAccountingApi } from './ProductValuationAccountingApi';
import { ProductValuationCostingApi } from './ProductValuationCostingApi';
import { ProductValuationLedgerAccountApi } from './ProductValuationLedgerAccountApi';
import { ProductValuationLedgerPricesApi } from './ProductValuationLedgerPricesApi';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function product0002<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): Product0002<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new Product0002(mergeDefaultDeSerializersWith(deSerializers));
}
class Product0002<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get prodSalesDeliverySalesTaxApi(): ProdSalesDeliverySalesTaxApi<DeSerializersT> {
    const api = this.initApi(
      'prodSalesDeliverySalesTaxApi',
      ProdSalesDeliverySalesTaxApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productApi(): ProductApi<DeSerializersT> {
    const api = this.initApi('productApi', ProductApi);
    const linkedApis = [
      this.initApi('productChangeMasterApi', ProductChangeMasterApi),
      this.initApi('productDescriptionApi', ProductDescriptionApi),
      this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi),
      this.initApi('productPlantApi', ProductPlantApi),
      this.initApi('productProcurementApi', ProductProcurementApi),
      this.initApi('productQualityManagementApi', ProductQualityManagementApi),
      this.initApi('productSalesApi', ProductSalesApi),
      this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi),
      this.initApi('productStorageApi', ProductStorageApi),
      this.initApi('productUnitOfMeasureApi', ProductUnitOfMeasureApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productChangeMasterApi(): ProductChangeMasterApi<DeSerializersT> {
    const api = this.initApi('productChangeMasterApi', ProductChangeMasterApi);
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productDescriptionApi(): ProductDescriptionApi<DeSerializersT> {
    const api = this.initApi('productDescriptionApi', ProductDescriptionApi);
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productEwmStorageTypeApi(): ProductEwmStorageTypeApi<DeSerializersT> {
    const api = this.initApi(
      'productEwmStorageTypeApi',
      ProductEwmStorageTypeApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productEwmWarehouseApi(): ProductEwmWarehouseApi<DeSerializersT> {
    const api = this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productEwmStorageTypeApi', ProductEwmStorageTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantApi(): ProductPlantApi<DeSerializersT> {
    const api = this.initApi('productPlantApi', ProductPlantApi);
    const linkedApis = [
      this.initApi(
        'productPlantInternationalTradeApi',
        ProductPlantInternationalTradeApi
      ),
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantCostingApi', ProductPlantCostingApi),
      this.initApi('productPlantForecastApi', ProductPlantForecastApi),
      this.initApi(
        'productPlantInspTypeSettingApi',
        ProductPlantInspTypeSettingApi
      ),
      this.initApi('productPlantMrpApi', ProductPlantMrpApi),
      this.initApi('productPlantPlanningApi', ProductPlantPlanningApi),
      this.initApi('productPlantProcurementApi', ProductPlantProcurementApi),
      this.initApi('productPlantPurchaseTaxApi', ProductPlantPurchaseTaxApi),
      this.initApi(
        'productPlantQualityManagementApi',
        ProductPlantQualityManagementApi
      ),
      this.initApi('productPlantSalesApi', ProductPlantSalesApi),
      this.initApi('productPlantStorageApi', ProductPlantStorageApi),
      this.initApi(
        'productPlantStorageLocationApi',
        ProductPlantStorageLocationApi
      ),
      this.initApi(
        'productPlantSupplyPlanningApi',
        ProductPlantSupplyPlanningApi
      ),
      this.initApi(
        'productPlantWorkSchedulingApi',
        ProductPlantWorkSchedulingApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantCostingApi(): ProductPlantCostingApi<DeSerializersT> {
    const api = this.initApi('productPlantCostingApi', ProductPlantCostingApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantForecastApi(): ProductPlantForecastApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantForecastApi',
      ProductPlantForecastApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantInspTypeSettingApi(): ProductPlantInspTypeSettingApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantInspTypeSettingApi',
      ProductPlantInspTypeSettingApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantInternationalTradeApi(): ProductPlantInternationalTradeApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantInternationalTradeApi',
      ProductPlantInternationalTradeApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantMrpApi(): ProductPlantMrpApi<DeSerializersT> {
    const api = this.initApi('productPlantMrpApi', ProductPlantMrpApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantPlanningApi(): ProductPlantPlanningApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantPlanningApi',
      ProductPlantPlanningApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantProcurementApi(): ProductPlantProcurementApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantProcurementApi',
      ProductPlantProcurementApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantPurchaseTaxApi(): ProductPlantPurchaseTaxApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantPurchaseTaxApi',
      ProductPlantPurchaseTaxApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantQualityManagementApi(): ProductPlantQualityManagementApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantQualityManagementApi',
      ProductPlantQualityManagementApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantSalesApi(): ProductPlantSalesApi<DeSerializersT> {
    const api = this.initApi('productPlantSalesApi', ProductPlantSalesApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantStorageApi(): ProductPlantStorageApi<DeSerializersT> {
    const api = this.initApi('productPlantStorageApi', ProductPlantStorageApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantStorageLocationApi(): ProductPlantStorageLocationApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantStorageLocationApi',
      ProductPlantStorageLocationApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantSupplyPlanningApi(): ProductPlantSupplyPlanningApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantSupplyPlanningApi',
      ProductPlantSupplyPlanningApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productPlantWorkSchedulingApi(): ProductPlantWorkSchedulingApi<DeSerializersT> {
    const api = this.initApi(
      'productPlantWorkSchedulingApi',
      ProductPlantWorkSchedulingApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productPlantApi', ProductPlantApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productProcurementApi(): ProductProcurementApi<DeSerializersT> {
    const api = this.initApi('productProcurementApi', ProductProcurementApi);
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productQualityManagementApi(): ProductQualityManagementApi<DeSerializersT> {
    const api = this.initApi(
      'productQualityManagementApi',
      ProductQualityManagementApi
    );
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productSalesApi(): ProductSalesApi<DeSerializersT> {
    const api = this.initApi('productSalesApi', ProductSalesApi);
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productSalesDeliveryApi(): ProductSalesDeliveryApi<DeSerializersT> {
    const api = this.initApi(
      'productSalesDeliveryApi',
      ProductSalesDeliveryApi
    );
    const linkedApis = [
      this.initApi(
        'prodSalesDeliverySalesTaxApi',
        ProdSalesDeliverySalesTaxApi
      ),
      this.initApi('productApi', ProductApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productStorageApi(): ProductStorageApi<DeSerializersT> {
    const api = this.initApi('productStorageApi', ProductStorageApi);
    const linkedApis = [this.initApi('productApi', ProductApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productUnitOfMeasureApi(): ProductUnitOfMeasureApi<DeSerializersT> {
    const api = this.initApi(
      'productUnitOfMeasureApi',
      ProductUnitOfMeasureApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productUnitOfMeasureEanApi', ProductUnitOfMeasureEanApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productUnitOfMeasureEanApi(): ProductUnitOfMeasureEanApi<DeSerializersT> {
    const api = this.initApi(
      'productUnitOfMeasureEanApi',
      ProductUnitOfMeasureEanApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productUnitOfMeasureApi', ProductUnitOfMeasureApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationApi(): ProductValuationApi<DeSerializersT> {
    const api = this.initApi('productValuationApi', ProductValuationApi);
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi(
        'productValuationAccountingApi',
        ProductValuationAccountingApi
      ),
      this.initApi('productValuationCostingApi', ProductValuationCostingApi),
      this.initApi(
        'productValuationLedgerAccountApi',
        ProductValuationLedgerAccountApi
      ),
      this.initApi(
        'productValuationLedgerPricesApi',
        ProductValuationLedgerPricesApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationAccountingApi(): ProductValuationAccountingApi<DeSerializersT> {
    const api = this.initApi(
      'productValuationAccountingApi',
      ProductValuationAccountingApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationCostingApi(): ProductValuationCostingApi<DeSerializersT> {
    const api = this.initApi(
      'productValuationCostingApi',
      ProductValuationCostingApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationLedgerAccountApi(): ProductValuationLedgerAccountApi<DeSerializersT> {
    const api = this.initApi(
      'productValuationLedgerAccountApi',
      ProductValuationLedgerAccountApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productValuationLedgerPricesApi(): ProductValuationLedgerPricesApi<DeSerializersT> {
    const api = this.initApi(
      'productValuationLedgerPricesApi',
      ProductValuationLedgerPricesApi
    );
    const linkedApis = [
      this.initApi('productApi', ProductApi),
      this.initApi('productValuationApi', ProductValuationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
