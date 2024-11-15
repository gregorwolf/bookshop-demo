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
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';
export declare function product0002<
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
  deSerializers?: Partial<
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
  >
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
>;
declare class Product0002<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get prodSalesDeliverySalesTaxApi(): ProdSalesDeliverySalesTaxApi<DeSerializersT>;
  get productApi(): ProductApi<DeSerializersT>;
  get productChangeMasterApi(): ProductChangeMasterApi<DeSerializersT>;
  get productDescriptionApi(): ProductDescriptionApi<DeSerializersT>;
  get productEwmStorageTypeApi(): ProductEwmStorageTypeApi<DeSerializersT>;
  get productEwmWarehouseApi(): ProductEwmWarehouseApi<DeSerializersT>;
  get productPlantApi(): ProductPlantApi<DeSerializersT>;
  get productPlantCostingApi(): ProductPlantCostingApi<DeSerializersT>;
  get productPlantForecastApi(): ProductPlantForecastApi<DeSerializersT>;
  get productPlantInspTypeSettingApi(): ProductPlantInspTypeSettingApi<DeSerializersT>;
  get productPlantInternationalTradeApi(): ProductPlantInternationalTradeApi<DeSerializersT>;
  get productPlantMrpApi(): ProductPlantMrpApi<DeSerializersT>;
  get productPlantPlanningApi(): ProductPlantPlanningApi<DeSerializersT>;
  get productPlantProcurementApi(): ProductPlantProcurementApi<DeSerializersT>;
  get productPlantPurchaseTaxApi(): ProductPlantPurchaseTaxApi<DeSerializersT>;
  get productPlantQualityManagementApi(): ProductPlantQualityManagementApi<DeSerializersT>;
  get productPlantSalesApi(): ProductPlantSalesApi<DeSerializersT>;
  get productPlantStorageApi(): ProductPlantStorageApi<DeSerializersT>;
  get productPlantStorageLocationApi(): ProductPlantStorageLocationApi<DeSerializersT>;
  get productPlantSupplyPlanningApi(): ProductPlantSupplyPlanningApi<DeSerializersT>;
  get productPlantWorkSchedulingApi(): ProductPlantWorkSchedulingApi<DeSerializersT>;
  get productProcurementApi(): ProductProcurementApi<DeSerializersT>;
  get productQualityManagementApi(): ProductQualityManagementApi<DeSerializersT>;
  get productSalesApi(): ProductSalesApi<DeSerializersT>;
  get productSalesDeliveryApi(): ProductSalesDeliveryApi<DeSerializersT>;
  get productStorageApi(): ProductStorageApi<DeSerializersT>;
  get productUnitOfMeasureApi(): ProductUnitOfMeasureApi<DeSerializersT>;
  get productUnitOfMeasureEanApi(): ProductUnitOfMeasureEanApi<DeSerializersT>;
  get productValuationApi(): ProductValuationApi<DeSerializersT>;
  get productValuationAccountingApi(): ProductValuationAccountingApi<DeSerializersT>;
  get productValuationCostingApi(): ProductValuationCostingApi<DeSerializersT>;
  get productValuationLedgerAccountApi(): ProductValuationLedgerAccountApi<DeSerializersT>;
  get productValuationLedgerPricesApi(): ProductValuationLedgerPricesApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
