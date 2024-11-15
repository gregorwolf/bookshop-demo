"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPlantInspTypeSettingRequestBuilder = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
const ProductPlantInspTypeSetting_1 = require("./ProductPlantInspTypeSetting");
/**
 * Request builder class for operations supported on the {@link ProductPlantInspTypeSetting} entity.
 */
class ProductPlantInspTypeSettingRequestBuilder extends odata_v4_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ProductPlantInspTypeSetting` entities.
     * @returns A request builder for creating requests to retrieve all `ProductPlantInspTypeSetting` entities.
     */
    getAll() {
        return new odata_v4_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ProductPlantInspTypeSetting` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductPlantInspTypeSetting`.
     */
    create(entity) {
        return new odata_v4_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ProductPlantInspTypeSetting` entity based on its keys.
     * @param inspectionLotType Key property. See {@link ProductPlantInspTypeSetting.inspectionLotType}.
     * @param product Key property. See {@link ProductPlantInspTypeSetting.product}.
     * @param plant Key property. See {@link ProductPlantInspTypeSetting.plant}.
     * @returns A request builder for creating requests to retrieve one `ProductPlantInspTypeSetting` entity based on its keys.
     */
    getByKey(inspectionLotType, product, plant) {
        return new odata_v4_1.GetByKeyRequestBuilder(this.entityApi, {
            InspectionLotType: inspectionLotType,
            Product: product,
            Plant: plant
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ProductPlantInspTypeSetting`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductPlantInspTypeSetting`.
     */
    update(entity) {
        return new odata_v4_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(inspectionLotTypeOrEntity, product, plant) {
        return new odata_v4_1.DeleteRequestBuilder(this.entityApi, inspectionLotTypeOrEntity instanceof ProductPlantInspTypeSetting_1.ProductPlantInspTypeSetting
            ? inspectionLotTypeOrEntity
            : {
                InspectionLotType: inspectionLotTypeOrEntity,
                Product: product,
                Plant: plant
            });
    }
}
exports.ProductPlantInspTypeSettingRequestBuilder = ProductPlantInspTypeSettingRequestBuilder;
//# sourceMappingURL=ProductPlantInspTypeSettingRequestBuilder.js.map