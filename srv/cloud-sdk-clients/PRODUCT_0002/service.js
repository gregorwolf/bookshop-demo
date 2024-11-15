"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product0002 = product0002;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ProdSalesDeliverySalesTaxApi_1 = require("./ProdSalesDeliverySalesTaxApi");
const ProductApi_1 = require("./ProductApi");
const ProductChangeMasterApi_1 = require("./ProductChangeMasterApi");
const ProductDescriptionApi_1 = require("./ProductDescriptionApi");
const ProductEwmStorageTypeApi_1 = require("./ProductEwmStorageTypeApi");
const ProductEwmWarehouseApi_1 = require("./ProductEwmWarehouseApi");
const ProductPlantApi_1 = require("./ProductPlantApi");
const ProductPlantCostingApi_1 = require("./ProductPlantCostingApi");
const ProductPlantForecastApi_1 = require("./ProductPlantForecastApi");
const ProductPlantInspTypeSettingApi_1 = require("./ProductPlantInspTypeSettingApi");
const ProductPlantInternationalTradeApi_1 = require("./ProductPlantInternationalTradeApi");
const ProductPlantMrpApi_1 = require("./ProductPlantMrpApi");
const ProductPlantPlanningApi_1 = require("./ProductPlantPlanningApi");
const ProductPlantProcurementApi_1 = require("./ProductPlantProcurementApi");
const ProductPlantPurchaseTaxApi_1 = require("./ProductPlantPurchaseTaxApi");
const ProductPlantQualityManagementApi_1 = require("./ProductPlantQualityManagementApi");
const ProductPlantSalesApi_1 = require("./ProductPlantSalesApi");
const ProductPlantStorageApi_1 = require("./ProductPlantStorageApi");
const ProductPlantStorageLocationApi_1 = require("./ProductPlantStorageLocationApi");
const ProductPlantSupplyPlanningApi_1 = require("./ProductPlantSupplyPlanningApi");
const ProductPlantWorkSchedulingApi_1 = require("./ProductPlantWorkSchedulingApi");
const ProductProcurementApi_1 = require("./ProductProcurementApi");
const ProductQualityManagementApi_1 = require("./ProductQualityManagementApi");
const ProductSalesApi_1 = require("./ProductSalesApi");
const ProductSalesDeliveryApi_1 = require("./ProductSalesDeliveryApi");
const ProductStorageApi_1 = require("./ProductStorageApi");
const ProductUnitOfMeasureApi_1 = require("./ProductUnitOfMeasureApi");
const ProductUnitOfMeasureEanApi_1 = require("./ProductUnitOfMeasureEanApi");
const ProductValuationApi_1 = require("./ProductValuationApi");
const ProductValuationAccountingApi_1 = require("./ProductValuationAccountingApi");
const ProductValuationCostingApi_1 = require("./ProductValuationCostingApi");
const ProductValuationLedgerAccountApi_1 = require("./ProductValuationLedgerAccountApi");
const ProductValuationLedgerPricesApi_1 = require("./ProductValuationLedgerPricesApi");
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const BatchRequest_1 = require("./BatchRequest");
function product0002(deSerializers = odata_v4_1.defaultDeSerializers) {
    return new Product0002((0, odata_v4_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class Product0002 {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get prodSalesDeliverySalesTaxApi() {
        const api = this.initApi('prodSalesDeliverySalesTaxApi', ProdSalesDeliverySalesTaxApi_1.ProdSalesDeliverySalesTaxApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi_1.ProductSalesDeliveryApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productApi() {
        const api = this.initApi('productApi', ProductApi_1.ProductApi);
        const linkedApis = [
            this.initApi('productChangeMasterApi', ProductChangeMasterApi_1.ProductChangeMasterApi),
            this.initApi('productDescriptionApi', ProductDescriptionApi_1.ProductDescriptionApi),
            this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi_1.ProductEwmWarehouseApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi),
            this.initApi('productProcurementApi', ProductProcurementApi_1.ProductProcurementApi),
            this.initApi('productQualityManagementApi', ProductQualityManagementApi_1.ProductQualityManagementApi),
            this.initApi('productSalesApi', ProductSalesApi_1.ProductSalesApi),
            this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi_1.ProductSalesDeliveryApi),
            this.initApi('productStorageApi', ProductStorageApi_1.ProductStorageApi),
            this.initApi('productUnitOfMeasureApi', ProductUnitOfMeasureApi_1.ProductUnitOfMeasureApi),
            this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productChangeMasterApi() {
        const api = this.initApi('productChangeMasterApi', ProductChangeMasterApi_1.ProductChangeMasterApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productDescriptionApi() {
        const api = this.initApi('productDescriptionApi', ProductDescriptionApi_1.ProductDescriptionApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productEwmStorageTypeApi() {
        const api = this.initApi('productEwmStorageTypeApi', ProductEwmStorageTypeApi_1.ProductEwmStorageTypeApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi_1.ProductEwmWarehouseApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productEwmWarehouseApi() {
        const api = this.initApi('productEwmWarehouseApi', ProductEwmWarehouseApi_1.ProductEwmWarehouseApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productEwmStorageTypeApi', ProductEwmStorageTypeApi_1.ProductEwmStorageTypeApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantApi() {
        const api = this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi);
        const linkedApis = [
            this.initApi('productPlantInternationalTradeApi', ProductPlantInternationalTradeApi_1.ProductPlantInternationalTradeApi),
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantCostingApi', ProductPlantCostingApi_1.ProductPlantCostingApi),
            this.initApi('productPlantForecastApi', ProductPlantForecastApi_1.ProductPlantForecastApi),
            this.initApi('productPlantInspTypeSettingApi', ProductPlantInspTypeSettingApi_1.ProductPlantInspTypeSettingApi),
            this.initApi('productPlantMrpApi', ProductPlantMrpApi_1.ProductPlantMrpApi),
            this.initApi('productPlantPlanningApi', ProductPlantPlanningApi_1.ProductPlantPlanningApi),
            this.initApi('productPlantProcurementApi', ProductPlantProcurementApi_1.ProductPlantProcurementApi),
            this.initApi('productPlantPurchaseTaxApi', ProductPlantPurchaseTaxApi_1.ProductPlantPurchaseTaxApi),
            this.initApi('productPlantQualityManagementApi', ProductPlantQualityManagementApi_1.ProductPlantQualityManagementApi),
            this.initApi('productPlantSalesApi', ProductPlantSalesApi_1.ProductPlantSalesApi),
            this.initApi('productPlantStorageApi', ProductPlantStorageApi_1.ProductPlantStorageApi),
            this.initApi('productPlantStorageLocationApi', ProductPlantStorageLocationApi_1.ProductPlantStorageLocationApi),
            this.initApi('productPlantSupplyPlanningApi', ProductPlantSupplyPlanningApi_1.ProductPlantSupplyPlanningApi),
            this.initApi('productPlantWorkSchedulingApi', ProductPlantWorkSchedulingApi_1.ProductPlantWorkSchedulingApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantCostingApi() {
        const api = this.initApi('productPlantCostingApi', ProductPlantCostingApi_1.ProductPlantCostingApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantForecastApi() {
        const api = this.initApi('productPlantForecastApi', ProductPlantForecastApi_1.ProductPlantForecastApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantInspTypeSettingApi() {
        const api = this.initApi('productPlantInspTypeSettingApi', ProductPlantInspTypeSettingApi_1.ProductPlantInspTypeSettingApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantInternationalTradeApi() {
        const api = this.initApi('productPlantInternationalTradeApi', ProductPlantInternationalTradeApi_1.ProductPlantInternationalTradeApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantMrpApi() {
        const api = this.initApi('productPlantMrpApi', ProductPlantMrpApi_1.ProductPlantMrpApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantPlanningApi() {
        const api = this.initApi('productPlantPlanningApi', ProductPlantPlanningApi_1.ProductPlantPlanningApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantProcurementApi() {
        const api = this.initApi('productPlantProcurementApi', ProductPlantProcurementApi_1.ProductPlantProcurementApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantPurchaseTaxApi() {
        const api = this.initApi('productPlantPurchaseTaxApi', ProductPlantPurchaseTaxApi_1.ProductPlantPurchaseTaxApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantQualityManagementApi() {
        const api = this.initApi('productPlantQualityManagementApi', ProductPlantQualityManagementApi_1.ProductPlantQualityManagementApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantSalesApi() {
        const api = this.initApi('productPlantSalesApi', ProductPlantSalesApi_1.ProductPlantSalesApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantStorageApi() {
        const api = this.initApi('productPlantStorageApi', ProductPlantStorageApi_1.ProductPlantStorageApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantStorageLocationApi() {
        const api = this.initApi('productPlantStorageLocationApi', ProductPlantStorageLocationApi_1.ProductPlantStorageLocationApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantSupplyPlanningApi() {
        const api = this.initApi('productPlantSupplyPlanningApi', ProductPlantSupplyPlanningApi_1.ProductPlantSupplyPlanningApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productPlantWorkSchedulingApi() {
        const api = this.initApi('productPlantWorkSchedulingApi', ProductPlantWorkSchedulingApi_1.ProductPlantWorkSchedulingApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productPlantApi', ProductPlantApi_1.ProductPlantApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productProcurementApi() {
        const api = this.initApi('productProcurementApi', ProductProcurementApi_1.ProductProcurementApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productQualityManagementApi() {
        const api = this.initApi('productQualityManagementApi', ProductQualityManagementApi_1.ProductQualityManagementApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productSalesApi() {
        const api = this.initApi('productSalesApi', ProductSalesApi_1.ProductSalesApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productSalesDeliveryApi() {
        const api = this.initApi('productSalesDeliveryApi', ProductSalesDeliveryApi_1.ProductSalesDeliveryApi);
        const linkedApis = [
            this.initApi('prodSalesDeliverySalesTaxApi', ProdSalesDeliverySalesTaxApi_1.ProdSalesDeliverySalesTaxApi),
            this.initApi('productApi', ProductApi_1.ProductApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productStorageApi() {
        const api = this.initApi('productStorageApi', ProductStorageApi_1.ProductStorageApi);
        const linkedApis = [this.initApi('productApi', ProductApi_1.ProductApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productUnitOfMeasureApi() {
        const api = this.initApi('productUnitOfMeasureApi', ProductUnitOfMeasureApi_1.ProductUnitOfMeasureApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productUnitOfMeasureEanApi', ProductUnitOfMeasureEanApi_1.ProductUnitOfMeasureEanApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productUnitOfMeasureEanApi() {
        const api = this.initApi('productUnitOfMeasureEanApi', ProductUnitOfMeasureEanApi_1.ProductUnitOfMeasureEanApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productUnitOfMeasureApi', ProductUnitOfMeasureApi_1.ProductUnitOfMeasureApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productValuationApi() {
        const api = this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productValuationAccountingApi', ProductValuationAccountingApi_1.ProductValuationAccountingApi),
            this.initApi('productValuationCostingApi', ProductValuationCostingApi_1.ProductValuationCostingApi),
            this.initApi('productValuationLedgerAccountApi', ProductValuationLedgerAccountApi_1.ProductValuationLedgerAccountApi),
            this.initApi('productValuationLedgerPricesApi', ProductValuationLedgerPricesApi_1.ProductValuationLedgerPricesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productValuationAccountingApi() {
        const api = this.initApi('productValuationAccountingApi', ProductValuationAccountingApi_1.ProductValuationAccountingApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productValuationCostingApi() {
        const api = this.initApi('productValuationCostingApi', ProductValuationCostingApi_1.ProductValuationCostingApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productValuationLedgerAccountApi() {
        const api = this.initApi('productValuationLedgerAccountApi', ProductValuationLedgerAccountApi_1.ProductValuationLedgerAccountApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get productValuationLedgerPricesApi() {
        const api = this.initApi('productValuationLedgerPricesApi', ProductValuationLedgerPricesApi_1.ProductValuationLedgerPricesApi);
        const linkedApis = [
            this.initApi('productApi', ProductApi_1.ProductApi),
            this.initApi('productValuationApi', ProductValuationApi_1.ProductValuationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map