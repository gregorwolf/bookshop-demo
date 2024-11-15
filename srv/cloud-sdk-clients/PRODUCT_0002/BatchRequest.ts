/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  ProdSalesDeliverySalesTax,
  Product,
  ProductChangeMaster,
  ProductDescription,
  ProductEwmStorageType,
  ProductEwmWarehouse,
  ProductPlant,
  ProductPlantCosting,
  ProductPlantForecast,
  ProductPlantInspTypeSetting,
  ProductPlantInternationalTrade,
  ProductPlantMrp,
  ProductPlantPlanning,
  ProductPlantProcurement,
  ProductPlantPurchaseTax,
  ProductPlantQualityManagement,
  ProductPlantSales,
  ProductPlantStorage,
  ProductPlantStorageLocation,
  ProductPlantSupplyPlanning,
  ProductPlantWorkScheduling,
  ProductProcurement,
  ProductQualityManagement,
  ProductSales,
  ProductSalesDelivery,
  ProductStorage,
  ProductUnitOfMeasure,
  ProductUnitOfMeasureEan,
  ProductValuation,
  ProductValuationAccounting,
  ProductValuationCosting,
  ProductValuationLedgerAccount,
  ProductValuationLedgerPrices
} from './index';

/**
 * Batch builder for operations supported on the Product 0002.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadProduct0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadProduct0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadProduct0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadProduct0002RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadProduct0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultProduct0002Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Product 0002.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteProduct0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteProduct0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteProduct0002RequestBuilder<DeSerializersT>
    | Array<WriteProduct0002RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteProduct0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultProduct0002Path =
  '/sap/opu/odata4/sap/api_product/srvd_a2x/sap/product/0002/';
export type ReadProduct0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantPlanning<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductEwmStorageType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantPlanning<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT
    >;
export type WriteProduct0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProdSalesDeliverySalesTax<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Product<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductChangeMaster<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductDescription<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductEwmStorageType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductEwmWarehouse<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlant<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantCosting<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantForecast<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantInspTypeSetting<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantInternationalTrade<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantMrp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantPlanning<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantPlanning<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantPlanning<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantProcurement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantPurchaseTax<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantSales<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductPlantStorage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantStorageLocation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantSupplyPlanning<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductPlantWorkScheduling<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductProcurement<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductQualityManagement<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSales<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSalesDelivery<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductStorage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductUnitOfMeasure<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductUnitOfMeasureEan<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductValuation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationAccounting<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationCosting<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationLedgerAccount<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProductValuationLedgerPrices<DeSerializersT>,
      DeSerializersT
    >;
