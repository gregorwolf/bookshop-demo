/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 *      (c) Copyright 2009-2023 SAP SE. All rights reserved
 */
sap.ui.define(["sap/fe/core/buildingBlocks/BuildingBlockSupport", "sap/fe/core/buildingBlocks/RuntimeBuildingBlock", "sap/fe/core/converters/MetaModelConverter", "sap/fe/core/helpers/BindingToolkit", "sap/fe/macros/field/FieldTemplating", "./RTEBlock", "sap/fe/core/jsx-runtime/jsx"], function(BuildingBlockSupport, RuntimeBuildingBlock, MetaModelConverter, BindingToolkit, FieldTemplating, RichTextEditorBlock, _jsx) {
    "use strict";

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
    var _exports = {};
    var getValueBinding = FieldTemplating.getValueBinding;
    var constant = BindingToolkit.constant;
    var getInvolvedDataModelObjects = MetaModelConverter.getInvolvedDataModelObjects;
    var defineBuildingBlock = BuildingBlockSupport.defineBuildingBlock;
    var blockAttribute = BuildingBlockSupport.blockAttribute;
    function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor)
            return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }
    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
    }
    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        }
        ;
        return _setPrototypeOf(o, p);
    }
    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value'in desc || desc.initializer) {
            desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
            Object.defineProperty(target, property, desc);
            desc = null;
        }
        return desc;
    }
    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
    }
    let RichTextEditorWithMetadataBlock = (/**
     * Metadata-driven building block that exposes the RichTextEditor UI5 control.
     *
     * It's used to enter formatted text and uses the third-party component called TinyMCE.
     *
     * @public
     * @since 1.117.0
     */
        _dec = defineBuildingBlock({
            name: "RichTextEditorWithMetadata",
            namespace: "sap.notfe.macros"
        }),
            _dec2 = blockAttribute({
                type: "string",
                required: true
            }),
            _dec3 = blockAttribute({
                type: "sap.ui.model.Context",
                required: true
            }),
            _dec4 = blockAttribute({
                type: "sap.ui.model.Context",
                required: true
            }),
            _dec5 = blockAttribute({
                type: "boolean",
                bindable: true
            }),
            _dec6 = blockAttribute({
                type: "array"
            }),
            _dec7 = blockAttribute({
                type: "array"
            }),
            _dec8 = blockAttribute({
                type: "boolean"
            }),
            _dec9 = blockAttribute({
                type: "boolean",
                bindable: true
            }),
        _dec(_class = (_class2 = /*#__PURE__*/
            function(_RuntimeBuildingBlock) {
                _inheritsLoose(RichTextEditorWithMetadataBlock, _RuntimeBuildingBlock);
                function RichTextEditorWithMetadataBlock() {
                    var _this;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }
                    _this = _RuntimeBuildingBlock.call(this, ...args) || this;
                    _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "metaPath", _descriptor2, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "contextPath", _descriptor3, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "readOnly", _descriptor4, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "buttonGroups", _descriptor5, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "plugins", _descriptor6, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "excludeDefaultPlugins", _descriptor7, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "required", _descriptor8, _assertThisInitialized(_this));
                    return _this;
                }
                _exports = RichTextEditorWithMetadataBlock;
                RichTextEditorWithMetadataBlock.load = async function load() {
                    await RichTextEditorBlock.load();
                    return this;
                }
                ;
                var _proto = RichTextEditorWithMetadataBlock.prototype;
                _proto.getContent = function getContent() {
                    const involvedDataModelObjects = getInvolvedDataModelObjects(this.metaPath, this.contextPath);
                    const valueBinding = getValueBinding(involvedDataModelObjects, {});
                    return _jsx(RichTextEditorBlock, {
                        id: this.id,
                        readOnly: this.readOnly,
                        buttonGroups: this.buttonGroups,
                        plugins: this.plugins,
                        excludeDefaultPlugins: this.excludeDefaultPlugins,
                        required: this.required,
                        value: valueBinding !== undefined ? constant(valueBinding) : valueBinding
                    });
                }
                ;
                return RichTextEditorWithMetadataBlock;
            }(RuntimeBuildingBlock),
            (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: null
            }),
                _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "metaPath", [_dec3], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contextPath", [_dec4], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readOnly", [_dec5], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return constant(false);
                    }
                }),
                _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "buttonGroups", [_dec6], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "plugins", [_dec7], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "excludeDefaultPlugins", [_dec8], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return false;
                    }
                }),
                _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "required", [_dec9], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return constant(false);
                    }
                })),
            _class2)) || _class);
    _exports = RichTextEditorWithMetadataBlock;
    return _exports;
}, false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSaWNoVGV4dEVkaXRvcldpdGhNZXRhZGF0YUJsb2NrIiwiZGVmaW5lQnVpbGRpbmdCbG9jayIsIm5hbWUiLCJuYW1lc3BhY2UiLCJibG9ja0F0dHJpYnV0ZSIsInR5cGUiLCJyZXF1aXJlZCIsImJpbmRhYmxlIiwibG9hZCIsIlJpY2hUZXh0RWRpdG9yQmxvY2siLCJnZXRDb250ZW50IiwiaW52b2x2ZWREYXRhTW9kZWxPYmplY3RzIiwiZ2V0SW52b2x2ZWREYXRhTW9kZWxPYmplY3RzIiwibWV0YVBhdGgiLCJjb250ZXh0UGF0aCIsInZhbHVlQmluZGluZyIsImdldFZhbHVlQmluZGluZyIsImlkIiwicmVhZE9ubHkiLCJidXR0b25Hcm91cHMiLCJwbHVnaW5zIiwiZXhjbHVkZURlZmF1bHRQbHVnaW5zIiwidW5kZWZpbmVkIiwiY29uc3RhbnQiLCJSdW50aW1lQnVpbGRpbmdCbG9jayJdLCJzb3VyY2VSb290IjoiLiIsInNvdXJjZXMiOlsiUmljaFRleHRFZGl0b3JXaXRoTWV0YWRhdGEuYmxvY2sudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJsb2NrQXR0cmlidXRlLCBkZWZpbmVCdWlsZGluZ0Jsb2NrIH0gZnJvbSBcInNhcC9mZS9jb3JlL2J1aWxkaW5nQmxvY2tzL0J1aWxkaW5nQmxvY2tTdXBwb3J0XCI7XG5pbXBvcnQgUnVudGltZUJ1aWxkaW5nQmxvY2sgZnJvbSBcInNhcC9mZS9jb3JlL2J1aWxkaW5nQmxvY2tzL1J1bnRpbWVCdWlsZGluZ0Jsb2NrXCI7XG5pbXBvcnQgeyBnZXRJbnZvbHZlZERhdGFNb2RlbE9iamVjdHMgfSBmcm9tIFwic2FwL2ZlL2NvcmUvY29udmVydGVycy9NZXRhTW9kZWxDb252ZXJ0ZXJcIjtcbmltcG9ydCB0eXBlIHsgQmluZGluZ1Rvb2xraXRFeHByZXNzaW9uIH0gZnJvbSBcInNhcC9mZS9jb3JlL2hlbHBlcnMvQmluZGluZ1Rvb2xraXRcIjtcbmltcG9ydCB7IGNvbnN0YW50IH0gZnJvbSBcInNhcC9mZS9jb3JlL2hlbHBlcnMvQmluZGluZ1Rvb2xraXRcIjtcbmltcG9ydCB7IGdldFZhbHVlQmluZGluZyB9IGZyb20gXCJzYXAvZmUvbWFjcm9zL2ZpZWxkL0ZpZWxkVGVtcGxhdGluZ1wiO1xuaW1wb3J0IHR5cGUgQ29udHJvbCBmcm9tIFwic2FwL3VpL2NvcmUvQ29udHJvbFwiO1xuaW1wb3J0IHR5cGUgQ29udGV4dCBmcm9tIFwic2FwL3VpL21vZGVsL29kYXRhL3Y0L0NvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgVW5wYXJzZWRCdXR0b25Hcm91cCB9IGZyb20gXCIuL1JpY2hUZXh0RWRpdG9yLmJsb2NrXCI7XG5pbXBvcnQgUmljaFRleHRFZGl0b3JCbG9jaywge1BsdWdpbkRlZmluaXRpb259IGZyb20gXCIuL1JpY2hUZXh0RWRpdG9yLmJsb2NrXCI7XG5cbi8qKlxuICogTWV0YWRhdGEtZHJpdmVuIGJ1aWxkaW5nIGJsb2NrIHRoYXQgZXhwb3NlcyB0aGUgUmljaFRleHRFZGl0b3IgVUk1IGNvbnRyb2wuXG4gKlxuICogSXQncyB1c2VkIHRvIGVudGVyIGZvcm1hdHRlZCB0ZXh0IGFuZCB1c2VzIHRoZSB0aGlyZC1wYXJ0eSBjb21wb25lbnQgY2FsbGVkIFRpbnlNQ0UuXG4gKlxuICogQHB1YmxpY1xuICogQHNpbmNlIDEuMTE3LjBcbiAqL1xuQGRlZmluZUJ1aWxkaW5nQmxvY2soe1xuXHRuYW1lOiBcIlJpY2hUZXh0RWRpdG9yV2l0aE1ldGFkYXRhXCIsXG5cdG5hbWVzcGFjZTogXCJzYXAuZmUubWFjcm9zXCJcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dEVkaXRvcldpdGhNZXRhZGF0YUJsb2NrIGV4dGVuZHMgUnVudGltZUJ1aWxkaW5nQmxvY2sge1xuXHQvKipcblx0ICogSUQgb2YgdGhlIGVkaXRvclxuXHQgKi9cblx0QGJsb2NrQXR0cmlidXRlKHsgdHlwZTogXCJzdHJpbmdcIiwgcmVxdWlyZWQ6IHRydWUgfSlcblx0aWQhOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBtZXRhUGF0aCBvZiB0aGUgZGlzcGxheWVkIHByb3BlcnR5XG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7XG5cdFx0dHlwZTogXCJzYXAudWkubW9kZWwuQ29udGV4dFwiLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0pXG5cdG1ldGFQYXRoITogQ29udGV4dDtcblxuXHQvKipcblx0ICogVGhlIGNvbnRleHQgcGF0aCBvZiB0aGUgcHJvcGVydHkgZGlzcGxheWVkXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7XG5cdFx0dHlwZTogXCJzYXAudWkubW9kZWwuQ29udGV4dFwiLFxuXHRcdHJlcXVpcmVkOiB0cnVlXG5cdH0pXG5cdGNvbnRleHRQYXRoITogQ29udGV4dDtcblxuXHQvKipcblx0ICogVXNlIHRoZSByZWFkT25seSBhdHRyaWJ1dGUgdG8gb3ZlcnJpZGUgdGhlIGVkaXQgZmxvdyBvZiB0aGUgcGFnZS5cblx0ICogQnkgc2V0dGluZyAncmVhZE9ubHknIHRvIHRydWUsIGEgRm9ybWF0dGVkVGV4dCBpcyBkaXNwbGF5ZWQgaW5zdGVhZCBvZiB0aGUgZWRpdG9yLlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRAYmxvY2tBdHRyaWJ1dGUoeyB0eXBlOiBcImJvb2xlYW5cIiwgYmluZGFibGU6IHRydWUgfSlcblx0cmVhZE9ubHk6IEJpbmRpbmdUb29sa2l0RXhwcmVzc2lvbjxib29sZWFuPiA9IGNvbnN0YW50KGZhbHNlKTtcblxuXHQvKipcblx0ICogV2l0aCB0aGUgJ2J1dHRvbkdyb3VwcycgYXR0cmlidXRlLCB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQgb24gdGhlIHRvb2xiYXIgb2YgdGhlIGVkaXRvci5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QGJsb2NrQXR0cmlidXRlKHsgdHlwZTogXCJhcnJheVwiIH0pXG5cdGJ1dHRvbkdyb3Vwcz86IFVucGFyc2VkQnV0dG9uR3JvdXBbXTtcblxuXHQvKipcblx0ICogV2l0aCB0aGUgJ3BsdWdpbnMnIGF0dHJpYnV0ZSB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgcGx1Z2lucyB0aGF0IHdpbGwgYmUgbG9hZGVkIGJ5IHRoZSBlZGl0b3IuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7IHR5cGU6IFwiYXJyYXlcIiB9KVxuXHRwbHVnaW5zPzogUGx1Z2luRGVmaW5pdGlvbltdO1xuXG5cdC8qKlxuXHQgKiBXaXRoIHRoZSAnZXhjbHVkZURlZmF1bHRQbHVnaW5zJyB5b3UgY2FuIGFzayB0byByZW1vdmUgdGhlIHBsdWdpbnMgdGhhdCB3aWxsIGJlIGFkZGVkIGJ5IGRlZmF1bHRcblx0ICogVGhlIGRlZmF1bHQgcGx1Z2lucyBhcmUgXCJlbW90aWNvbnNcIiBcImRpcmVjdGlvbmFsaXR5XCIgXCJpbWFnZVwiIFwidGFibGVcIiBcImxpbmtcIiBcInBvd2VycGFzdGVcIi5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QGJsb2NrQXR0cmlidXRlKHsgdHlwZTogXCJib29sZWFuXCIgIH0pXG5cdGV4Y2x1ZGVEZWZhdWx0UGx1Z2luczogYm9vbGVhbiA9IGZhbHNlXG5cblx0LyoqXG5cdCAqIFVzZSB0aGUgJ3JlcXVpcmVkJyBhdHRyaWJ1dGUsIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBlZGl0b3IgaXMgZmlsbGVkIHdpdGggc29tZSB0ZXh0LlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRAYmxvY2tBdHRyaWJ1dGUoeyB0eXBlOiBcImJvb2xlYW5cIiwgYmluZGFibGU6IHRydWUgfSlcblx0cmVxdWlyZWQ6IEJpbmRpbmdUb29sa2l0RXhwcmVzc2lvbjxib29sZWFuPiA9IGNvbnN0YW50KGZhbHNlKTtcblxuXHRzdGF0aWMgYXN5bmMgbG9hZCgpOiBQcm9taXNlPHR5cGVvZiB0aGlzPiB7XG5cdFx0YXdhaXQgUmljaFRleHRFZGl0b3JCbG9jay5sb2FkKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRDb250ZW50KCk6IENvbnRyb2wge1xuXHRcdGNvbnN0IGludm9sdmVkRGF0YU1vZGVsT2JqZWN0cyA9IGdldEludm9sdmVkRGF0YU1vZGVsT2JqZWN0cyh0aGlzLm1ldGFQYXRoLCB0aGlzLmNvbnRleHRQYXRoKTtcblx0XHRjb25zdCB2YWx1ZUJpbmRpbmcgPSBnZXRWYWx1ZUJpbmRpbmcoaW52b2x2ZWREYXRhTW9kZWxPYmplY3RzLCB7fSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJpY2hUZXh0RWRpdG9yQmxvY2tcblx0XHRcdFx0aWQ9e3RoaXMuaWR9XG5cdFx0XHRcdHJlYWRPbmx5PXt0aGlzLnJlYWRPbmx5fVxuXHRcdFx0XHRidXR0b25Hcm91cHM9e3RoaXMuYnV0dG9uR3JvdXBzfVxuXHRcdFx0XHRwbHVnaW5zPXt0aGlzLnBsdWdpbnN9XG5cdFx0XHRcdGV4Y2x1ZGVEZWZhdWx0UGx1Z2lucz17dGhpcy5leGNsdWRlRGVmYXVsdFBsdWdpbnN9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnJlcXVpcmVkfVxuXHRcdFx0XHR2YWx1ZT17dmFsdWVCaW5kaW5nICE9PSB1bmRlZmluZWQgPyBjb25zdGFudCh2YWx1ZUJpbmRpbmcpIDogdmFsdWVCaW5kaW5nfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O01BdUJxQkEsK0JBQStCO0VBWnBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQQSxPQVFDQyxtQkFBbUIsQ0FBQztJQUNwQkMsSUFBSSxFQUFFLDRCQUE0QjtJQUNsQ0MsU0FBUyxFQUFFO0VBQ1osQ0FBQyxDQUFDLFVBS0FDLGNBQWMsQ0FBQztJQUFFQyxJQUFJLEVBQUUsUUFBUTtJQUFFQyxRQUFRLEVBQUU7RUFBSyxDQUFDLENBQUMsVUFRbERGLGNBQWMsQ0FBQztJQUNmQyxJQUFJLEVBQUUsc0JBQXNCO0lBQzVCQyxRQUFRLEVBQUU7RUFDWCxDQUFDLENBQUMsVUFRREYsY0FBYyxDQUFDO0lBQ2ZDLElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLFFBQVEsRUFBRTtFQUNYLENBQUMsQ0FBQyxVQVNERixjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFNBQVM7SUFBRUUsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDLFVBUW5ESCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVEsQ0FBQyxDQUFDLFVBUWpDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVEsQ0FBQyxDQUFDLFVBU2pDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVcsQ0FBQyxDQUFDLFVBUXBDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFNBQVM7SUFBRUUsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDO0lBQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQUEsZ0NBR3ZDQyxJQUFJLEdBQWpCLHNCQUEwQztNQUN6QyxNQUFNQyxtQkFBbUIsQ0FBQ0QsSUFBSSxFQUFFO01BQ2hDLE9BQU8sSUFBSTtJQUNaLENBQUM7SUFBQTtJQUFBLE9BRURFLFVBQVUsR0FBVixzQkFBc0I7TUFDckIsTUFBTUMsd0JBQXdCLEdBQUdDLDJCQUEyQixDQUFDLElBQUksQ0FBQ0MsUUFBUSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO01BQzdGLE1BQU1DLFlBQVksR0FBR0MsZUFBZSxDQUFDTCx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUVsRSxPQUNDLEtBQUMsbUJBQW1CO1FBQ25CLEVBQUUsRUFBRSxJQUFJLENBQUNNLEVBQUc7UUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDQyxRQUFTO1FBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUNDLFlBQWE7UUFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsT0FBUTtRQUN0QixxQkFBcUIsRUFBRSxJQUFJLENBQUNDLHFCQUFzQjtRQUNsRCxRQUFRLEVBQUUsSUFBSSxDQUFDZixRQUFTO1FBQ3hCLEtBQUssRUFBRVMsWUFBWSxLQUFLTyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ1IsWUFBWSxDQUFDLEdBQUdBO01BQWEsRUFDekU7SUFFSixDQUFDO0lBQUE7RUFBQSxFQTNGMkRTLG9CQUFvQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO01BQUEsT0FvQ2xDRCxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7TUFBQSxPQXlCNUIsS0FBSztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBLE9BUVFBLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtFQUFBO0VBQUE7RUFBQTtBQUFBIn0=
