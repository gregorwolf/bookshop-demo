"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sap_Message = exports.Sap_MessageField = void 0;
/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v4_1 = require("@sap-cloud-sdk/odata-v4");
/**
 * Sap_MessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class Sap_MessageField extends odata_v4_1.ComplexTypeField {
    /**
     * Creates an instance of Sap_MessageField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, Sap_Message, fieldOptions);
        this._fieldBuilder = new odata_v4_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link Sap_Message.code} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.code = this._fieldBuilder.buildEdmTypeField('code', 'Edm.String', false);
        /**
         * Representation of the {@link Sap_Message.message} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.message = this._fieldBuilder.buildEdmTypeField('message', 'Edm.String', false);
        /**
         * Representation of the {@link Sap_Message.target} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.target = this._fieldBuilder.buildEdmTypeField('target', 'Edm.String', true);
        /**
         * Representation of the {@link Sap_Message.additionalTargets} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.additionalTargets = this._fieldBuilder.buildCollectionField('additionalTargets', 'Edm.String', false);
        /**
         * Representation of the {@link Sap_Message.transition} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.transition = this._fieldBuilder.buildEdmTypeField('transition', 'Edm.Boolean', false);
        /**
         * Representation of the {@link Sap_Message.numericSeverity} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.numericSeverity = this._fieldBuilder.buildEdmTypeField('numericSeverity', 'Edm.Byte', false);
        /**
         * Representation of the {@link Sap_Message.longtextUrl} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.longtextUrl = this._fieldBuilder.buildEdmTypeField('longtextUrl', 'Edm.String', true);
    }
}
exports.Sap_MessageField = Sap_MessageField;
var Sap_Message;
(function (Sap_Message) {
    /**
     * Metadata information on all properties of the `Sap_Message` complex type.
     */
    Sap_Message._propertyMetadata = [
        {
            originalName: 'code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'message',
            name: 'message',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'target',
            name: 'target',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'additionalTargets',
            name: 'additionalTargets',
            type: 'Edm.String',
            isCollection: true
        },
        {
            originalName: 'transition',
            name: 'transition',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'numericSeverity',
            name: 'numericSeverity',
            type: 'Edm.Byte',
            isCollection: false
        },
        {
            originalName: 'longtextUrl',
            name: 'longtextUrl',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(Sap_Message || (exports.Sap_Message = Sap_Message = {}));
//# sourceMappingURL=Sap_Message.js.map