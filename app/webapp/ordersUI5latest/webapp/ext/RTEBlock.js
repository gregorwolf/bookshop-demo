/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 *      (c) Copyright 2009-2023 SAP SE. All rights reserved
 */
sap.ui.define(["sap/fe/core/buildingBlocks/BuildingBlockSupport", "sap/fe/core/buildingBlocks/RuntimeBuildingBlock", "sap/fe/core/helpers/BindingHelper", "sap/fe/core/helpers/BindingToolkit", "sap/fe/core/helpers/ClassSupport", "sap/m/FormattedText", "sap/m/VBox", "sap/fe/core/jsx-runtime/jsx"], function(BuildingBlockSupport, RuntimeBuildingBlock, BindingHelper, BindingToolkit, ClassSupport, FormattedText, VBox, _jsx) {
    "use strict";

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
    function __ui5_require_async(path) {
        return new Promise((resolve,reject)=>{
                sap.ui.require([path], module=>{
                        if (!(module && module.__esModule)) {
                            module = module === null || !(typeof module === "object" && path.endsWith("/library")) ? {
                                default: module
                            } : module;
                            Object.defineProperty(module, "__esModule", {
                                value: true
                            });
                        }
                        resolve(module);
                    }
                    , err=>{
                        reject(err);
                    }
                );
            }
        );
    }
    var _exports = {};
    var defineReference = ClassSupport.defineReference;
    var or = BindingToolkit.or;
    var not = BindingToolkit.not;
    var constant = BindingToolkit.constant;
    var UI = BindingHelper.UI;
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
    let RichTextEditorBlock = (/**
     * Building block that exposes the RichTextEditor UI5 control.
     *
     * It's used to enter formatted text, and uses the third-party component called TinyMCE.
     *
     * @public
     * @since 1.117.0
     */
        _dec = defineBuildingBlock({
            name: "RichTextEditor",
            namespace: "sap.notfe.macros",
            libraries: ["sap/ui/richtexteditor"]
        }),
            _dec2 = blockAttribute({
                type: "string",
                required: true
            }),
            _dec3 = blockAttribute({
                type: "string",
                bindable: true
            }),
            _dec4 = blockAttribute({
                type: "boolean",
                bindable: true
            }),
            _dec5 = blockAttribute({
                type: "array"
            }),
            _dec6 = blockAttribute({
                type: "array"
            }),
            _dec7 = blockAttribute({
                type: "boolean"
            }),
            _dec8 = blockAttribute({
                type: "boolean",
                bindable: true
            }),
            _dec9 = defineReference(),
            _dec10 = defineReference(),
            _dec11 = defineReference(),
        _dec(_class = (_class2 = /*#__PURE__*/
            function(_RuntimeBuildingBlock) {
                _inheritsLoose(RichTextEditorBlock, _RuntimeBuildingBlock);
                /**
                 * ID of the editor
                 */

                /**
                 * The value contained in the editor. You can use this attribute to set a default value.
                 *
                 * @public
                 */

                /**
                 * Use the readOnly attribute to override the edit flow of the page.
                 * By setting 'readOnly' to true, a FormattedText will be displayed instead of the editor.
                 *
                 * @public
                 */

                /**
                 * With the 'buttonGroups' attribute you can customize the buttons that are displayed on the toolbar of the editor.
                 *
                 * @public
                 */

                /**
                 * With the 'plugins' attribute you can customize the plugins that will be loaded by the editor.
                 *
                 * @public
                 */

                /**
                 * With the 'excludeDefaultPlugins' you can ask to remove the plugins that will be added by default
                 * The default plugins are "emoticons" "directionality" "image" "table" "link" "powerpaste".
                 *
                 * @public
                 */

                /**
                 * Use the 'required' attribute to make sure that the editor is filled with some text.
                 *
                 * @public
                 */

                /**
                 * Reference to the RichTextEditor
                 */

                /**
                 * Reference to the FormattedText
                 */

                /**
                 * Reference to the VBox
                 */

                /**
                 * Represents a RichTextEditor.
                 *
                 * @param properties Properties of this building block
                 */
                function RichTextEditorBlock(properties) {
                    var _this;
                    _this = _RuntimeBuildingBlock.call(this, properties) || this;
                    _initializerDefineProperty(_this, "id", _descriptor, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "value", _descriptor2, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "readOnly", _descriptor3, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "buttonGroups", _descriptor4, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "plugins", _descriptor5, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "excludeDefaultPlugins", _descriptor6, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "required", _descriptor7, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "richTextEditor", _descriptor8, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "formattedText", _descriptor9, _assertThisInitialized(_this));
                    _initializerDefineProperty(_this, "bbContainer", _descriptor10, _assertThisInitialized(_this));
                    _this.getRTE = ()=>{
                        return _jsx(RichTextEditorBlock.RTEControl, {
                            id: _this.id,
                            ref: _this.richTextEditor,
                            value: _this.value,
                            visible: true,
                            customToolbar: true,
                            editable: true,
                            editorType: "TinyMCE6",
                            showGroupFontStyle: true,
                            showGroupTextAlign: true,
                            showGroupStructure: true,
                            showGroupFont: false,
                            showGroupClipboard: true,
                            showGroupInsert: false,
                            showGroupLink: false,
                            showGroupUndo: false,
                            sanitizeValue: true,
                            wrapping: true,
                            width: "100%",
                            required: _this.required,
                            ..._this.getPlugins(),
                            ..._this.getButtonGroups()
                        });
                    }
                    ;
                    _this.getPlugins = ()=>{
                        var _this$plugins;
                        let pluginsArray;
                        if (_this.excludeDefaultPlugins) {
                            pluginsArray = [];
                        } else {
                            pluginsArray = ["emoticons", "directionality", "image", "table", "link", "powerpaste"].map(name=>{
                                    return {
                                        name: name
                                    };
                                }
                            );
                        }
                        if ((_this$plugins = _this.plugins) !== null && _this$plugins !== void 0 && _this$plugins.length) {
                            pluginsArray ??= [];
                            for (const plugin of _this.plugins) {
                                pluginsArray.push(plugin);
                            }
                        }
                        if (pluginsArray) {
                            return {
                                plugins: pluginsArray
                            };
                        }
                        return {};
                    }
                    ;
                    _this.getButtonGroups = ()=>{
                        return _this.buttonGroups ? {
                            buttonGroups: _this.buttonGroups.map(buttonGroup=>{
                                    var _buttonGroup$buttons;
                                    return {
                                        name: buttonGroup.name ?? "",
                                        visible: buttonGroup.visible === "true",
                                        priority: parseInt(buttonGroup.priority || "", 10),
                                        customToolbarPriority: parseInt(buttonGroup.customToolbarPriority || "", 10),
                                        buttons: ((_buttonGroup$buttons = buttonGroup.buttons) === null || _buttonGroup$buttons === void 0 ? void 0 : _buttonGroup$buttons.split(",")) || []
                                    };
                                }
                            )
                        } : {};
                    }
                    ;
                    _this.onFormattedTextModelContextChange = ()=>{
                        if (_this.formattedText.current && _this.formattedText.current.getBinding("visible")) {
                            var _this$formattedText$c, _this$formattedText$c2;
                            (_this$formattedText$c = _this.formattedText.current.getBinding("visible")) === null || _this$formattedText$c === void 0 ? void 0 : _this$formattedText$c.detachChange(_this.toggleRTEAvailability);
                            (_this$formattedText$c2 = _this.formattedText.current.getBinding("visible")) === null || _this$formattedText$c2 === void 0 ? void 0 : _this$formattedText$c2.attachChange(_this.toggleRTEAvailability);
                        }
                    }
                    ;
                    _this.toggleRTEAvailability = args=>{
                        var _args$getSource;
                        // we need the reversed value of FormattedText visible property
                        const displayEditor = !((_args$getSource = args.getSource()) !== null && _args$getSource !== void 0 && _args$getSource.getExternalValue());

                        // we should always check if there's already a rte in the dom
                        // so we don't render it twice
                        if (displayEditor && !_this.richTextEditor.current) {
                            var _this$bbContainer$cur;
                            (_this$bbContainer$cur = _this.bbContainer.current) === null || _this$bbContainer$cur === void 0 ? void 0 : _this$bbContainer$cur.addItem(_this.getRTE());
                        } else if (!displayEditor) {
                            // we have to hide the editor before destroying it so we don't see the html
                            // on the page for a split second when we change from edit to readOnly mode
                            // timeout is needed so the editor has time to hide
                            setTimeout(()=>{
                                    var _this$richTextEditor$;
                                    // destroy the elements
                                    (_this$richTextEditor$ = _this.richTextEditor.current) === null || _this$richTextEditor$ === void 0 ? void 0 : _this$richTextEditor$.destroy();
                                    // clean the refs
                                    _this.richTextEditor.current = undefined;
                                }
                            );
                        }
                    }
                    ;
                    return _this;
                }
                _exports = RichTextEditorBlock;
                RichTextEditorBlock.load = async function load() {
                    await _RuntimeBuildingBlock.load.call(this);
                    if (RichTextEditorBlock.RTEControl === undefined) {
                        const {default: RTEControl} = await __ui5_require_async("sap/ui/richtexteditor/RichTextEditor");
                        RichTextEditorBlock.RTEControl = RTEControl;
                    }
                    return this;
                }

                /**
                 * Method that returns the RichTextEditor control.
                 *
                 * @returns RTEControl
                 */
                ;
                var _proto = RichTextEditorBlock.prototype;
                /**
                 * Method that returns the content of the RichTextEditor building block.
                 *
                 * @returns The result of the building block rendering
                 */
                _proto.getContent = function getContent() {
                    const vboxEl = _jsx(VBox, {
                        ref: this.bbContainer,
                        width: "100%",
                        height: "100%",
                        children: _jsx(FormattedText, {
                            ref: this.formattedText,
                            htmlText: this.value,
                            visible: or(this.readOnly, not(UI.IsEditable)),
                            modelContextChange: this.onFormattedTextModelContextChange
                        })
                    });

                    // FIXME: Workaround when the property change event doesn't get triggered
                    setTimeout(()=>{
                            var _this$formattedText$c3;
                            const isVisible = (_this$formattedText$c3 = this.formattedText.current) === null || _this$formattedText$c3 === void 0 ? void 0 : _this$formattedText$c3.getVisible();
                            if (isVisible === true) {
                                var _this$formattedText$c4, _this$formattedText$c5;
                                (_this$formattedText$c4 = this.formattedText.current) === null || _this$formattedText$c4 === void 0 ? void 0 : (_this$formattedText$c5 = _this$formattedText$c4.getBinding("visible")) === null || _this$formattedText$c5 === void 0 ? void 0 : _this$formattedText$c5.fireEvent("change", {
                                    oSource: this.formattedText.current
                                });
                            }
                        }
                    );
                    return vboxEl;
                }
                ;
                return RichTextEditorBlock;
            }(RuntimeBuildingBlock),
            (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
                configurable: true,
                enumerable: true,
                writable: true,
                initializer: null
            }),
                _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec3], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "readOnly", [_dec4], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return constant(false);
                    }
                }),
                _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "buttonGroups", [_dec5], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "plugins", [_dec6], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "excludeDefaultPlugins", [_dec7], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return false;
                    }
                }),
                _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "required", [_dec8], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: function() {
                        return constant(false);
                    }
                }),
                _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "richTextEditor", [_dec9], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "formattedText", [_dec10], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                }),
                _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bbContainer", [_dec11], {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    initializer: null
                })),
            _class2)) || _class);
    _exports = RichTextEditorBlock;
    return _exports;
}, false);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSaWNoVGV4dEVkaXRvckJsb2NrIiwiZGVmaW5lQnVpbGRpbmdCbG9jayIsIm5hbWUiLCJuYW1lc3BhY2UiLCJsaWJyYXJpZXMiLCJibG9ja0F0dHJpYnV0ZSIsInR5cGUiLCJyZXF1aXJlZCIsImJpbmRhYmxlIiwiZGVmaW5lUmVmZXJlbmNlIiwicHJvcGVydGllcyIsImdldFJURSIsImlkIiwicmljaFRleHRFZGl0b3IiLCJ2YWx1ZSIsImdldFBsdWdpbnMiLCJnZXRCdXR0b25Hcm91cHMiLCJwbHVnaW5zQXJyYXkiLCJleGNsdWRlRGVmYXVsdFBsdWdpbnMiLCJtYXAiLCJwbHVnaW5zIiwibGVuZ3RoIiwicGx1Z2luIiwicHVzaCIsImJ1dHRvbkdyb3VwcyIsImJ1dHRvbkdyb3VwIiwidmlzaWJsZSIsInByaW9yaXR5IiwicGFyc2VJbnQiLCJjdXN0b21Ub29sYmFyUHJpb3JpdHkiLCJidXR0b25zIiwic3BsaXQiLCJvbkZvcm1hdHRlZFRleHRNb2RlbENvbnRleHRDaGFuZ2UiLCJmb3JtYXR0ZWRUZXh0IiwiY3VycmVudCIsImdldEJpbmRpbmciLCJkZXRhY2hDaGFuZ2UiLCJ0b2dnbGVSVEVBdmFpbGFiaWxpdHkiLCJhdHRhY2hDaGFuZ2UiLCJhcmdzIiwiZGlzcGxheUVkaXRvciIsImdldFNvdXJjZSIsImdldEV4dGVybmFsVmFsdWUiLCJiYkNvbnRhaW5lciIsImFkZEl0ZW0iLCJzZXRUaW1lb3V0IiwiZGVzdHJveSIsInVuZGVmaW5lZCIsImxvYWQiLCJSVEVDb250cm9sIiwiZGVmYXVsdCIsImdldENvbnRlbnQiLCJ2Ym94RWwiLCJvciIsInJlYWRPbmx5Iiwibm90IiwiVUkiLCJJc0VkaXRhYmxlIiwiaXNWaXNpYmxlIiwiZ2V0VmlzaWJsZSIsImZpcmVFdmVudCIsIm9Tb3VyY2UiLCJSdW50aW1lQnVpbGRpbmdCbG9jayIsImNvbnN0YW50Il0sInNvdXJjZVJvb3QiOiIuIiwic291cmNlcyI6WyJSaWNoVGV4dEVkaXRvci5ibG9jay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmxvY2tBdHRyaWJ1dGUsIGRlZmluZUJ1aWxkaW5nQmxvY2sgfSBmcm9tIFwic2FwL2ZlL2NvcmUvYnVpbGRpbmdCbG9ja3MvQnVpbGRpbmdCbG9ja1N1cHBvcnRcIjtcbmltcG9ydCBSdW50aW1lQnVpbGRpbmdCbG9jayBmcm9tIFwic2FwL2ZlL2NvcmUvYnVpbGRpbmdCbG9ja3MvUnVudGltZUJ1aWxkaW5nQmxvY2tcIjtcbmltcG9ydCB7IFVJIH0gZnJvbSBcInNhcC9mZS9jb3JlL2hlbHBlcnMvQmluZGluZ0hlbHBlclwiO1xuaW1wb3J0IHR5cGUgeyBCaW5kaW5nVG9vbGtpdEV4cHJlc3Npb24gfSBmcm9tIFwic2FwL2ZlL2NvcmUvaGVscGVycy9CaW5kaW5nVG9vbGtpdFwiO1xuaW1wb3J0IHsgY29uc3RhbnQsIG5vdCwgb3IgfSBmcm9tIFwic2FwL2ZlL2NvcmUvaGVscGVycy9CaW5kaW5nVG9vbGtpdFwiO1xuaW1wb3J0IHR5cGUgeyBQcm9wZXJ0aWVzT2YgfSBmcm9tIFwic2FwL2ZlL2NvcmUvaGVscGVycy9DbGFzc1N1cHBvcnRcIjtcbmltcG9ydCB7IGRlZmluZVJlZmVyZW5jZSB9IGZyb20gXCJzYXAvZmUvY29yZS9oZWxwZXJzL0NsYXNzU3VwcG9ydFwiO1xuaW1wb3J0IHR5cGUgeyBSZWYgfSBmcm9tIFwic2FwL2ZlL2NvcmUvanN4LXJ1bnRpbWUvanN4XCI7XG5pbXBvcnQgRm9ybWF0dGVkVGV4dCBmcm9tIFwic2FwL20vRm9ybWF0dGVkVGV4dFwiO1xuaW1wb3J0IFZCb3ggZnJvbSBcInNhcC9tL1ZCb3hcIjtcbmltcG9ydCB0eXBlIEV2ZW50IGZyb20gXCJzYXAvdWkvYmFzZS9FdmVudFwiO1xuaW1wb3J0IHR5cGUgQ29tcG9zaXRlQmluZGluZyBmcm9tIFwic2FwL3VpL21vZGVsL0NvbXBvc2l0ZUJpbmRpbmdcIjtcbmltcG9ydCB0eXBlIFJpY2hUZXh0RWRpdG9yIGZyb20gXCJzYXAvdWkvcmljaHRleHRlZGl0b3IvUmljaFRleHRFZGl0b3JcIjtcblxuZXhwb3J0IHR5cGUgVW5wYXJzZWRCdXR0b25Hcm91cCA9IHtcblx0bmFtZT86IHN0cmluZztcblx0dmlzaWJsZT86IHN0cmluZztcblx0cHJpb3JpdHk/OiBzdHJpbmc7XG5cdGN1c3RvbVRvb2xiYXJQcmlvcml0eT86IHN0cmluZztcblx0YnV0dG9ucz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFBsdWdpbkRlZmluaXRpb24gPSB7XG5cdG5hbWU6IHN0cmluZztcbn07XG5cbnR5cGUgUGFyc2VkQnV0dG9uR3JvdXAgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0dmlzaWJsZTogYm9vbGVhbjtcblx0cHJpb3JpdHk6IG51bWJlcjtcblx0Y3VzdG9tVG9vbGJhclByaW9yaXR5OiBudW1iZXI7XG5cdGJ1dHRvbnM6IHN0cmluZ1tdO1xufTtcblxuLyoqXG4gKiBCdWlsZGluZyBibG9jayB0aGF0IGV4cG9zZXMgdGhlIFJpY2hUZXh0RWRpdG9yIFVJNSBjb250cm9sLlxuICpcbiAqIEl0J3MgdXNlZCB0byBlbnRlciBmb3JtYXR0ZWQgdGV4dCwgYW5kIHVzZXMgdGhlIHRoaXJkLXBhcnR5IGNvbXBvbmVudCBjYWxsZWQgVGlueU1DRS5cbiAqXG4gKiBAcHVibGljXG4gKiBAc2luY2UgMS4xMTcuMFxuICovXG5AZGVmaW5lQnVpbGRpbmdCbG9jayh7XG5cdG5hbWU6IFwiUmljaFRleHRFZGl0b3JcIixcblx0bmFtZXNwYWNlOiBcInNhcC5mZS5tYWNyb3NcIixcblx0bGlicmFyaWVzOiBbXCJzYXAvdWkvcmljaHRleHRlZGl0b3JcIl1cbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSaWNoVGV4dEVkaXRvckJsb2NrIGV4dGVuZHMgUnVudGltZUJ1aWxkaW5nQmxvY2sge1xuXHQvKipcblx0ICogSUQgb2YgdGhlIGVkaXRvclxuXHQgKi9cblx0QGJsb2NrQXR0cmlidXRlKHsgdHlwZTogXCJzdHJpbmdcIiwgcmVxdWlyZWQ6IHRydWUgfSlcblx0aWQhOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSB2YWx1ZSBjb250YWluZWQgaW4gdGhlIGVkaXRvci4gWW91IGNhbiB1c2UgdGhpcyBhdHRyaWJ1dGUgdG8gc2V0IGEgZGVmYXVsdCB2YWx1ZS5cblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QGJsb2NrQXR0cmlidXRlKHsgdHlwZTogXCJzdHJpbmdcIiwgYmluZGFibGU6IHRydWUgfSlcblx0dmFsdWU/OiBCaW5kaW5nVG9vbGtpdEV4cHJlc3Npb248c3RyaW5nPjtcblxuXHQvKipcblx0ICogVXNlIHRoZSByZWFkT25seSBhdHRyaWJ1dGUgdG8gb3ZlcnJpZGUgdGhlIGVkaXQgZmxvdyBvZiB0aGUgcGFnZS5cblx0ICogQnkgc2V0dGluZyAncmVhZE9ubHknIHRvIHRydWUsIGEgRm9ybWF0dGVkVGV4dCB3aWxsIGJlIGRpc3BsYXllZCBpbnN0ZWFkIG9mIHRoZSBlZGl0b3IuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7IHR5cGU6IFwiYm9vbGVhblwiLCBiaW5kYWJsZTogdHJ1ZSB9KVxuXHRyZWFkT25seTogQmluZGluZ1Rvb2xraXRFeHByZXNzaW9uPGJvb2xlYW4+ID0gY29uc3RhbnQoZmFsc2UpO1xuXG5cdC8qKlxuXHQgKiBXaXRoIHRoZSAnYnV0dG9uR3JvdXBzJyBhdHRyaWJ1dGUgeW91IGNhbiBjdXN0b21pemUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkIG9uIHRoZSB0b29sYmFyIG9mIHRoZSBlZGl0b3IuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7IHR5cGU6IFwiYXJyYXlcIiB9KVxuXHRidXR0b25Hcm91cHM/OiBVbnBhcnNlZEJ1dHRvbkdyb3VwW107XG5cblx0LyoqXG5cdCAqIFdpdGggdGhlICdwbHVnaW5zJyBhdHRyaWJ1dGUgeW91IGNhbiBjdXN0b21pemUgdGhlIHBsdWdpbnMgdGhhdCB3aWxsIGJlIGxvYWRlZCBieSB0aGUgZWRpdG9yLlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRAYmxvY2tBdHRyaWJ1dGUoeyB0eXBlOiBcImFycmF5XCIgfSlcblx0cGx1Z2lucz86IFBsdWdpbkRlZmluaXRpb25bXTtcblxuXHQvKipcblx0ICogV2l0aCB0aGUgJ2V4Y2x1ZGVEZWZhdWx0UGx1Z2lucycgeW91IGNhbiBhc2sgdG8gcmVtb3ZlIHRoZSBwbHVnaW5zIHRoYXQgd2lsbCBiZSBhZGRlZCBieSBkZWZhdWx0XG5cdCAqIFRoZSBkZWZhdWx0IHBsdWdpbnMgYXJlIFwiZW1vdGljb25zXCIgXCJkaXJlY3Rpb25hbGl0eVwiIFwiaW1hZ2VcIiBcInRhYmxlXCIgXCJsaW5rXCIgXCJwb3dlcnBhc3RlXCIuXG5cdCAqXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEBibG9ja0F0dHJpYnV0ZSh7IHR5cGU6IFwiYm9vbGVhblwiICB9KVxuXHRleGNsdWRlRGVmYXVsdFBsdWdpbnM6IGJvb2xlYW4gPSBmYWxzZVxuXG5cdC8qKlxuXHQgKiBVc2UgdGhlICdyZXF1aXJlZCcgYXR0cmlidXRlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBlZGl0b3IgaXMgZmlsbGVkIHdpdGggc29tZSB0ZXh0LlxuXHQgKlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRAYmxvY2tBdHRyaWJ1dGUoeyB0eXBlOiBcImJvb2xlYW5cIiwgYmluZGFibGU6IHRydWUgfSlcblx0cmVxdWlyZWQ6IEJpbmRpbmdUb29sa2l0RXhwcmVzc2lvbjxib29sZWFuPiA9IGNvbnN0YW50KGZhbHNlKTtcblxuXHQvKipcblx0ICogUmVmZXJlbmNlIHRvIHRoZSBSaWNoVGV4dEVkaXRvclxuXHQgKi9cblx0QGRlZmluZVJlZmVyZW5jZSgpXG5cdHJpY2hUZXh0RWRpdG9yITogUmVmPFJpY2hUZXh0RWRpdG9yPjtcblxuXHQvKipcblx0ICogUmVmZXJlbmNlIHRvIHRoZSBGb3JtYXR0ZWRUZXh0XG5cdCAqL1xuXHRAZGVmaW5lUmVmZXJlbmNlKClcblx0Zm9ybWF0dGVkVGV4dCE6IFJlZjxGb3JtYXR0ZWRUZXh0PjtcblxuXHQvKipcblx0ICogUmVmZXJlbmNlIHRvIHRoZSBWQm94XG5cdCAqL1xuXHRAZGVmaW5lUmVmZXJlbmNlKClcblx0YmJDb250YWluZXIhOiBSZWY8VkJveD47XG5cblx0cHJpdmF0ZSBzdGF0aWMgUlRFQ29udHJvbDogdHlwZW9mIFJpY2hUZXh0RWRpdG9yO1xuXG5cdC8qKlxuXHQgKiBSZXByZXNlbnRzIGEgUmljaFRleHRFZGl0b3IuXG5cdCAqXG5cdCAqIEBwYXJhbSBwcm9wZXJ0aWVzIFByb3BlcnRpZXMgb2YgdGhpcyBidWlsZGluZyBibG9ja1xuXHQgKi9cblx0Y29uc3RydWN0b3IocHJvcGVydGllczogUHJvcGVydGllc09mPFJpY2hUZXh0RWRpdG9yQmxvY2s+KSB7XG5cdFx0c3VwZXIocHJvcGVydGllcyk7XG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgbG9hZCgpOiBQcm9taXNlPHR5cGVvZiBSaWNoVGV4dEVkaXRvckJsb2NrPiB7XG5cdFx0YXdhaXQgc3VwZXIubG9hZCgpO1xuXHRcdGlmIChSaWNoVGV4dEVkaXRvckJsb2NrLlJURUNvbnRyb2wgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29uc3QgeyBkZWZhdWx0OiBSVEVDb250cm9sIH0gPSBhd2FpdCBpbXBvcnQoXCJzYXAvdWkvcmljaHRleHRlZGl0b3IvUmljaFRleHRFZGl0b3JcIik7XG5cdFx0XHRSaWNoVGV4dEVkaXRvckJsb2NrLlJURUNvbnRyb2wgPSBSVEVDb250cm9sO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0aGF0IHJldHVybnMgdGhlIFJpY2hUZXh0RWRpdG9yIGNvbnRyb2wuXG5cdCAqXG5cdCAqIEByZXR1cm5zIFJURUNvbnRyb2xcblx0ICovXG5cdGdldFJURSA9ICgpOiBSaWNoVGV4dEVkaXRvciA9PiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSaWNoVGV4dEVkaXRvckJsb2NrLlJURUNvbnRyb2xcblx0XHRcdFx0aWQ9e3RoaXMuaWR9XG5cdFx0XHRcdHJlZj17dGhpcy5yaWNoVGV4dEVkaXRvcn1cblx0XHRcdFx0dmFsdWU9e3RoaXMudmFsdWV9XG5cdFx0XHRcdHZpc2libGU9e3RydWV9XG5cdFx0XHRcdGN1c3RvbVRvb2xiYXI9e3RydWV9XG5cdFx0XHRcdGVkaXRhYmxlPXt0cnVlfVxuXHRcdFx0XHRlZGl0b3JUeXBlPVwiVGlueU1DRTZcIlxuXHRcdFx0XHRzaG93R3JvdXBGb250U3R5bGU9e3RydWV9XG5cdFx0XHRcdHNob3dHcm91cFRleHRBbGlnbj17dHJ1ZX1cblx0XHRcdFx0c2hvd0dyb3VwU3RydWN0dXJlPXt0cnVlfVxuXHRcdFx0XHRzaG93R3JvdXBGb250PXtmYWxzZX1cblx0XHRcdFx0c2hvd0dyb3VwQ2xpcGJvYXJkPXt0cnVlfVxuXHRcdFx0XHRzaG93R3JvdXBJbnNlcnQ9e2ZhbHNlfVxuXHRcdFx0XHRzaG93R3JvdXBMaW5rPXtmYWxzZX1cblx0XHRcdFx0c2hvd0dyb3VwVW5kbz17ZmFsc2V9XG5cdFx0XHRcdHNhbml0aXplVmFsdWU9e3RydWV9XG5cdFx0XHRcdHdyYXBwaW5nPXt0cnVlfVxuXHRcdFx0XHR3aWR0aD17XCIxMDAlXCJ9XG5cdFx0XHRcdHJlcXVpcmVkPXt0aGlzLnJlcXVpcmVkfVxuXHRcdFx0XHR7Li4udGhpcy5nZXRQbHVnaW5zKCl9XG5cdFx0XHRcdHsuLi50aGlzLmdldEJ1dHRvbkdyb3VwcygpfVxuXHRcdFx0Lz5cblx0XHQpIGFzIFJpY2hUZXh0RWRpdG9yO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBNZXRob2QgdGhhdCByZXR1cm5zIHRoZSBidXR0b24gY3VzdG9taXphdGlvbnMgZm9yIHRoZSBlZGl0b3IgdG9vbGJhci5cblx0ICogQmVjYXVzZSBhbGwgdmFsdWVzIGNvbWUgYXMgc3RyaW5ncyBmcm9tIFhNTCwgc29tZSBwYXJzaW5nIG5lZWRzIHRvIGJlIGRvbmUgdG8gZ2V0IGF0dHJpYnV0ZXMgd2l0aCB0aGUgY29ycmVjdCB0eXBlLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBUaGUgYnV0dG9uIGdyb3Vwcy5cblx0ICovXG5cdGdldFBsdWdpbnMgPSAoKTogeyBwbHVnaW5zPzogUGx1Z2luRGVmaW5pdGlvbltdIH0gPT4ge1xuXHRcdGxldCBwbHVnaW5zQXJyYXk6IFBsdWdpbkRlZmluaXRpb25bXSB8IHVuZGVmaW5lZDtcblx0XHRpZih0aGlzLmV4Y2x1ZGVEZWZhdWx0UGx1Z2lucykge1xuXHRcdFx0cGx1Z2luc0FycmF5ID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBsdWdpbnNBcnJheSA9IFtcblx0XHRcdFx0XCJlbW90aWNvbnNcIixcblx0XHRcdFx0XCJkaXJlY3Rpb25hbGl0eVwiLFxuXHRcdFx0XHRcImltYWdlXCIsXG5cdFx0XHRcdFwidGFibGVcIixcblx0XHRcdFx0XCJsaW5rXCIsXG5cdFx0XHRcdFwicG93ZXJwYXN0ZVwiXG5cdFx0XHRdLm1hcCgobmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7bmFtZTogbmFtZX1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdGlmKHRoaXMucGx1Z2lucz8ubGVuZ3RoKSB7XG5cdFx0XHRwbHVnaW5zQXJyYXkgPz89IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5wbHVnaW5zKSB7XG5cdFx0XHRcdHBsdWdpbnNBcnJheS5wdXNoKHBsdWdpbilcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocGx1Z2luc0FycmF5KSB7XG5cdFx0XHRyZXR1cm4ge3BsdWdpbnM6IHBsdWdpbnNBcnJheX1cblx0XHR9XG5cdFx0cmV0dXJuIHt9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBNZXRob2QgdGhhdCByZXR1cm5zIHRoZSBidXR0b24gY3VzdG9taXphdGlvbnMgZm9yIHRoZSBlZGl0b3IgdG9vbGJhci5cblx0ICogQmVjYXVzZSBhbGwgdmFsdWVzIGNvbWUgYXMgc3RyaW5ncyBmcm9tIFhNTCwgc29tZSBwYXJzaW5nIG5lZWRzIHRvIGJlIGRvbmUgdG8gZ2V0IGF0dHJpYnV0ZXMgd2l0aCB0aGUgY29ycmVjdCB0eXBlLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBUaGUgYnV0dG9uIGdyb3Vwcy5cblx0ICovXG5cdGdldEJ1dHRvbkdyb3VwcyA9ICgpOiB7IGJ1dHRvbkdyb3Vwcz86IFBhcnNlZEJ1dHRvbkdyb3VwW10gfSA9PiB7XG5cdFx0cmV0dXJuIHRoaXMuYnV0dG9uR3JvdXBzXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRidXR0b25Hcm91cHM6IHRoaXMuYnV0dG9uR3JvdXBzLm1hcCgoYnV0dG9uR3JvdXA6IFVucGFyc2VkQnV0dG9uR3JvdXApID0+ICh7XG5cdFx0XHRcdFx0XHRuYW1lOiBidXR0b25Hcm91cC5uYW1lID8/IFwiXCIsXG5cdFx0XHRcdFx0XHR2aXNpYmxlOiBidXR0b25Hcm91cC52aXNpYmxlID09PSBcInRydWVcIixcblx0XHRcdFx0XHRcdHByaW9yaXR5OiBwYXJzZUludChidXR0b25Hcm91cC5wcmlvcml0eSB8fCBcIlwiLCAxMCksXG5cdFx0XHRcdFx0XHRjdXN0b21Ub29sYmFyUHJpb3JpdHk6IHBhcnNlSW50KGJ1dHRvbkdyb3VwLmN1c3RvbVRvb2xiYXJQcmlvcml0eSB8fCBcIlwiLCAxMCksXG5cdFx0XHRcdFx0XHRidXR0b25zOiBidXR0b25Hcm91cC5idXR0b25zPy5zcGxpdChcIixcIikgfHwgW11cblx0XHRcdFx0XHR9KSlcblx0XHRcdCAgfVxuXHRcdFx0OiB7fTtcblx0fTtcblxuXHQvKipcblx0ICogSG9vayBvbnRvIHRoZSBtb2RlbCBjb250ZXh0IGNoYW5nZSBldmVudCB0byBtYWtlIHN1cmUgd2Ugd2lsbCBiZSBub3RpZmllZCB3aGVuIHRoZSBgdmlzaWJsZWAgYmluZGluZyB2YWx1ZSBjaGFuZ2UuXG5cdCAqIFdoZW4gaXQgY2hhbmdlcyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0byByZWF0dGFjaCB0byB0aGUgY3VycmVudCB2aXNpYmlsaXR5IGJpbmRpbmcuXG5cdCAqL1xuXHRvbkZvcm1hdHRlZFRleHRNb2RlbENvbnRleHRDaGFuZ2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKHRoaXMuZm9ybWF0dGVkVGV4dC5jdXJyZW50ICYmIHRoaXMuZm9ybWF0dGVkVGV4dC5jdXJyZW50LmdldEJpbmRpbmcoXCJ2aXNpYmxlXCIpKSB7XG5cdFx0XHR0aGlzLmZvcm1hdHRlZFRleHQuY3VycmVudC5nZXRCaW5kaW5nKFwidmlzaWJsZVwiKT8uZGV0YWNoQ2hhbmdlKHRoaXMudG9nZ2xlUlRFQXZhaWxhYmlsaXR5KTtcblx0XHRcdHRoaXMuZm9ybWF0dGVkVGV4dC5jdXJyZW50LmdldEJpbmRpbmcoXCJ2aXNpYmxlXCIpPy5hdHRhY2hDaGFuZ2UodGhpcy50b2dnbGVSVEVBdmFpbGFiaWxpdHkpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVG9nZ2xlIGJldHdlZW4gdGhlIFJpY2hUZXh0RWRpdG9yIGFuZCB0aGUgRm9ybWF0dGVkVGV4dCBjb250cm9sLlxuXHQgKlxuXHQgKiBAcGFyYW0gYXJncyBBbGxvd3MgYWNjZXNzIHRvIHRoZSBGb3JtYXR0ZWRUZXh0ICd2aXNpYmxlJyBhdHRyaWJ1dGVcblx0ICpcblx0ICogSW4gb3JkZXIgdG8gZm9sbG93IHRoZSBuZXh0IGd1aWRlbGluZTpcblx0ICpcblx0ICogYE1ha2Ugc3VyZSB5b3UgZGVzdHJveSB0aGUgUmljaFRleHRFZGl0b3IgaW5zdGFuY2UgaW5zdGVhZCBvZiBoaWRpbmcgaXQgYW5kIGNyZWF0ZSBhIG5ldyBvbmVcblx0ICogd2hlbiB5b3Ugc2hvdyBpdCBhZ2Fpbi5gXG5cdCAqXG5cdCAqIFRoZSBlZGl0b3IgaXMgb25seSBhZGRlZCB0byB0aGUgRE9NIHdoZW4gaXQgaXMgbmVlZGVkIHRvIGVkaXQgaXRzIGNvbnRlbnQuXG5cdCAqIEluIGRpc3BsYXkgbW9kZSwgdGhlIGVkaXRvciBpcyByZW1vdmVkIGZyb20gdGhlIERPTSBhbmQgdGhlXG5cdCAqIEZvcm1hdHRlZFRleHQgY29udHJvbCBpcyBkaXNwbGF5ZWQgd2l0aCB0aGUgcHJldmlvdXNseSBhZGRlZC9lZGl0ZWQgY29udGVudC5cblx0ICovXG5cdHRvZ2dsZVJURUF2YWlsYWJpbGl0eSA9IChhcmdzOiBFdmVudCk6IHZvaWQgPT4ge1xuXHRcdC8vIHdlIG5lZWQgdGhlIHJldmVyc2VkIHZhbHVlIG9mIEZvcm1hdHRlZFRleHQgdmlzaWJsZSBwcm9wZXJ0eVxuXHRcdGNvbnN0IGRpc3BsYXlFZGl0b3IgPSAhKGFyZ3MuZ2V0U291cmNlKCkgYXMgQ29tcG9zaXRlQmluZGluZyk/LmdldEV4dGVybmFsVmFsdWUoKTtcblxuXHRcdC8vIHdlIHNob3VsZCBhbHdheXMgY2hlY2sgaWYgdGhlcmUncyBhbHJlYWR5IGEgcnRlIGluIHRoZSBkb21cblx0XHQvLyBzbyB3ZSBkb24ndCByZW5kZXIgaXQgdHdpY2Vcblx0XHRpZiAoZGlzcGxheUVkaXRvciAmJiAhdGhpcy5yaWNoVGV4dEVkaXRvci5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLmJiQ29udGFpbmVyLmN1cnJlbnQ/LmFkZEl0ZW0odGhpcy5nZXRSVEUoKSk7XG5cdFx0fSBlbHNlIGlmICghZGlzcGxheUVkaXRvcikge1xuXHRcdFx0Ly8gd2UgaGF2ZSB0byBoaWRlIHRoZSBlZGl0b3IgYmVmb3JlIGRlc3Ryb3lpbmcgaXQgc28gd2UgZG9uJ3Qgc2VlIHRoZSBodG1sXG5cdFx0XHQvLyBvbiB0aGUgcGFnZSBmb3IgYSBzcGxpdCBzZWNvbmQgd2hlbiB3ZSBjaGFuZ2UgZnJvbSBlZGl0IHRvIHJlYWRPbmx5IG1vZGVcblx0XHRcdC8vIHRpbWVvdXQgaXMgbmVlZGVkIHNvIHRoZSBlZGl0b3IgaGFzIHRpbWUgdG8gaGlkZVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdC8vIGRlc3Ryb3kgdGhlIGVsZW1lbnRzXG5cdFx0XHRcdHRoaXMucmljaFRleHRFZGl0b3IuY3VycmVudD8uZGVzdHJveSgpO1xuXHRcdFx0XHQvLyBjbGVhbiB0aGUgcmVmc1xuXHRcdFx0XHR0aGlzLnJpY2hUZXh0RWRpdG9yLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0aGF0IHJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIFJpY2hUZXh0RWRpdG9yIGJ1aWxkaW5nIGJsb2NrLlxuXHQgKlxuXHQgKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBidWlsZGluZyBibG9jayByZW5kZXJpbmdcblx0ICovXG5cdGdldENvbnRlbnQoKTogVkJveCB7XG5cdFx0Y29uc3QgdmJveEVsID0gKFxuXHRcdFx0PFZCb3ggcmVmPXt0aGlzLmJiQ29udGFpbmVyfSB3aWR0aD17XCIxMDAlXCJ9IGhlaWdodD17XCIxMDAlXCJ9PlxuXHRcdFx0XHQ8Rm9ybWF0dGVkVGV4dFxuXHRcdFx0XHRcdHJlZj17dGhpcy5mb3JtYXR0ZWRUZXh0fVxuXHRcdFx0XHRcdGh0bWxUZXh0PXt0aGlzLnZhbHVlfVxuXHRcdFx0XHRcdHZpc2libGU9e29yKHRoaXMucmVhZE9ubHksIG5vdChVSS5Jc0VkaXRhYmxlKSl9XG5cdFx0XHRcdFx0bW9kZWxDb250ZXh0Q2hhbmdlPXt0aGlzLm9uRm9ybWF0dGVkVGV4dE1vZGVsQ29udGV4dENoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvVkJveD5cblx0XHQpIGFzIFZCb3g7XG5cblx0XHQvLyBGSVhNRTogV29ya2Fyb3VuZCB3aGVuIHRoZSBwcm9wZXJ0eSBjaGFuZ2UgZXZlbnQgZG9lc24ndCBnZXQgdHJpZ2dlcmVkXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCBpc1Zpc2libGUgPSB0aGlzLmZvcm1hdHRlZFRleHQuY3VycmVudD8uZ2V0VmlzaWJsZSgpO1xuXHRcdFx0aWYgKGlzVmlzaWJsZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR0aGlzLmZvcm1hdHRlZFRleHQuY3VycmVudD8uZ2V0QmluZGluZyhcInZpc2libGVcIik/LmZpcmVFdmVudChcImNoYW5nZVwiLCB7IG9Tb3VyY2U6IHRoaXMuZm9ybWF0dGVkVGV4dC5jdXJyZW50IH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZib3hFbDtcblx0fVxufVxuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUErQ3FCQSxtQkFBbUI7RUFieEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVBBLE9BUUNDLG1CQUFtQixDQUFDO0lBQ3BCQyxJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCQyxTQUFTLEVBQUUsZUFBZTtJQUMxQkMsU0FBUyxFQUFFLENBQUMsdUJBQXVCO0VBQ3BDLENBQUMsQ0FBQyxVQUtBQyxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFFBQVE7SUFBRUMsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDLFVBUWxERixjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFFBQVE7SUFBRUUsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDLFVBU2xESCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFNBQVM7SUFBRUUsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDLFVBUW5ESCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVEsQ0FBQyxDQUFDLFVBUWpDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVEsQ0FBQyxDQUFDLFVBU2pDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQVcsQ0FBQyxDQUFDLFVBUXBDRCxjQUFjLENBQUM7SUFBRUMsSUFBSSxFQUFFLFNBQVM7SUFBRUUsUUFBUSxFQUFFO0VBQUssQ0FBQyxDQUFDLFVBTW5EQyxlQUFlLEVBQUUsV0FNakJBLGVBQWUsRUFBRSxXQU1qQkEsZUFBZSxFQUFFO0lBQUE7SUF2RWxCO0FBQ0Q7QUFDQTs7SUFJQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztJQUlDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFJQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztJQUlDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0lBSUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUlDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0lBSUM7QUFDRDtBQUNBOztJQUlDO0FBQ0Q7QUFDQTs7SUFJQztBQUNEO0FBQ0E7O0lBTUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtJQUNDLDZCQUFZQyxVQUE2QyxFQUFFO01BQUE7TUFDMUQseUNBQU1BLFVBQVUsQ0FBQztNQUFDO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUEsTUFrQm5CQyxNQUFNLEdBQUcsTUFBc0I7UUFDOUIsT0FDQyxLQUFDLG1CQUFtQixDQUFDLFVBQVU7VUFDOUIsRUFBRSxFQUFFLE1BQUtDLEVBQUc7VUFDWixHQUFHLEVBQUUsTUFBS0MsY0FBZTtVQUN6QixLQUFLLEVBQUUsTUFBS0MsS0FBTTtVQUNsQixPQUFPLEVBQUUsSUFBSztVQUNkLGFBQWEsRUFBRSxJQUFLO1VBQ3BCLFFBQVEsRUFBRSxJQUFLO1VBQ2YsVUFBVSxFQUFDLFVBQVU7VUFDckIsa0JBQWtCLEVBQUUsSUFBSztVQUN6QixrQkFBa0IsRUFBRSxJQUFLO1VBQ3pCLGtCQUFrQixFQUFFLElBQUs7VUFDekIsYUFBYSxFQUFFLEtBQU07VUFDckIsa0JBQWtCLEVBQUUsSUFBSztVQUN6QixlQUFlLEVBQUUsS0FBTTtVQUN2QixhQUFhLEVBQUUsS0FBTTtVQUNyQixhQUFhLEVBQUUsS0FBTTtVQUNyQixhQUFhLEVBQUUsSUFBSztVQUNwQixRQUFRLEVBQUUsSUFBSztVQUNmLEtBQUssRUFBRSxNQUFPO1VBQ2QsUUFBUSxFQUFFLE1BQUtQLFFBQVM7VUFBQSxHQUNwQixNQUFLUSxVQUFVLEVBQUU7VUFBQSxHQUNqQixNQUFLQyxlQUFlO1FBQUUsRUFDekI7TUFFSixDQUFDO01BQUEsTUFRREQsVUFBVSxHQUFHLE1BQXdDO1FBQUE7UUFDcEQsSUFBSUUsWUFBNEM7UUFDaEQsSUFBRyxNQUFLQyxxQkFBcUIsRUFBRTtVQUM5QkQsWUFBWSxHQUFHLEVBQUU7UUFDbEIsQ0FBQyxNQUFNO1VBQ05BLFlBQVksR0FBRyxDQUNkLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLEVBQ04sWUFBWSxDQUNaLENBQUNFLEdBQUcsQ0FBRWpCLElBQVksSUFBSztZQUN2QixPQUFPO2NBQUNBLElBQUksRUFBRUE7WUFBSSxDQUFDO1VBQ3BCLENBQUMsQ0FBQztRQUNIO1FBQ0EscUJBQUcsTUFBS2tCLE9BQU8sMENBQVosY0FBY0MsTUFBTSxFQUFFO1VBQ3hCSixZQUFZLEtBQUssRUFBRTtVQUNuQixLQUFLLE1BQU1LLE1BQU0sSUFBSSxNQUFLRixPQUFPLEVBQUU7WUFDbENILFlBQVksQ0FBQ00sSUFBSSxDQUFDRCxNQUFNLENBQUM7VUFDMUI7UUFDRDtRQUNBLElBQUdMLFlBQVksRUFBRTtVQUNoQixPQUFPO1lBQUNHLE9BQU8sRUFBRUg7VUFBWSxDQUFDO1FBQy9CO1FBQ0EsT0FBTyxDQUFDLENBQUM7TUFDVixDQUFDO01BQUEsTUFRREQsZUFBZSxHQUFHLE1BQThDO1FBQy9ELE9BQU8sTUFBS1EsWUFBWSxHQUNyQjtVQUNBQSxZQUFZLEVBQUUsTUFBS0EsWUFBWSxDQUFDTCxHQUFHLENBQUVNLFdBQWdDO1lBQUE7WUFBQSxPQUFNO2NBQzFFdkIsSUFBSSxFQUFFdUIsV0FBVyxDQUFDdkIsSUFBSSxJQUFJLEVBQUU7Y0FDNUJ3QixPQUFPLEVBQUVELFdBQVcsQ0FBQ0MsT0FBTyxLQUFLLE1BQU07Y0FDdkNDLFFBQVEsRUFBRUMsUUFBUSxDQUFDSCxXQUFXLENBQUNFLFFBQVEsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO2NBQ2xERSxxQkFBcUIsRUFBRUQsUUFBUSxDQUFDSCxXQUFXLENBQUNJLHFCQUFxQixJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUM7Y0FDNUVDLE9BQU8sRUFBRSx5QkFBQUwsV0FBVyxDQUFDSyxPQUFPLHlEQUFuQixxQkFBcUJDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSTtZQUM3QyxDQUFDO1VBQUEsQ0FBQztRQUNGLENBQUMsR0FDRCxDQUFDLENBQUM7TUFDTixDQUFDO01BQUEsTUFNREMsaUNBQWlDLEdBQUcsTUFBWTtRQUMvQyxJQUFJLE1BQUtDLGFBQWEsQ0FBQ0MsT0FBTyxJQUFJLE1BQUtELGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUU7VUFBQTtVQUNuRiwrQkFBS0YsYUFBYSxDQUFDQyxPQUFPLENBQUNDLFVBQVUsQ0FBQyxTQUFTLENBQUMsMERBQWhELHNCQUFrREMsWUFBWSxDQUFDLE1BQUtDLHFCQUFxQixDQUFDO1VBQzFGLGdDQUFLSixhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDLFNBQVMsQ0FBQywyREFBaEQsdUJBQWtERyxZQUFZLENBQUMsTUFBS0QscUJBQXFCLENBQUM7UUFDM0Y7TUFDRCxDQUFDO01BQUEsTUFnQkRBLHFCQUFxQixHQUFJRSxJQUFXLElBQVc7UUFBQTtRQUM5QztRQUNBLE1BQU1DLGFBQWEsR0FBRyxxQkFBRUQsSUFBSSxDQUFDRSxTQUFTLEVBQUUsNENBQWpCLGdCQUF3Q0MsZ0JBQWdCLEVBQUU7O1FBRWpGO1FBQ0E7UUFDQSxJQUFJRixhQUFhLElBQUksQ0FBQyxNQUFLM0IsY0FBYyxDQUFDcUIsT0FBTyxFQUFFO1VBQUE7VUFDbEQsK0JBQUtTLFdBQVcsQ0FBQ1QsT0FBTywwREFBeEIsc0JBQTBCVSxPQUFPLENBQUMsTUFBS2pDLE1BQU0sRUFBRSxDQUFDO1FBQ2pELENBQUMsTUFBTSxJQUFJLENBQUM2QixhQUFhLEVBQUU7VUFDMUI7VUFDQTtVQUNBO1VBQ0FLLFVBQVUsQ0FBQyxNQUFNO1lBQUE7WUFDaEI7WUFDQSwrQkFBS2hDLGNBQWMsQ0FBQ3FCLE9BQU8sMERBQTNCLHNCQUE2QlksT0FBTyxFQUFFO1lBQ3RDO1lBQ0EsTUFBS2pDLGNBQWMsQ0FBQ3FCLE9BQU8sR0FBR2EsU0FBUztVQUN4QyxDQUFDLENBQUM7UUFDSDtNQUNELENBQUM7TUFBQTtJQS9JRDtJQUFDO0lBQUEsb0JBRVlDLElBQUksR0FBakIsc0JBQXlEO01BQ3hELDRCQUFZQSxJQUFJLFdBQUU7TUFDbEIsSUFBSWhELG1CQUFtQixDQUFDaUQsVUFBVSxLQUFLRixTQUFTLEVBQUU7UUFDakQsTUFBTTtVQUFFRyxPQUFPLEVBQUVEO1FBQVcsQ0FBQyxHQUFHLE1BQU0sb0JBQU8sc0NBQXNDLENBQUM7UUFDcEZqRCxtQkFBbUIsQ0FBQ2lELFVBQVUsR0FBR0EsVUFBVTtNQUM1QztNQUVBLE9BQU8sSUFBSTtJQUNaOztJQUVBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsT0FKQztJQUFBO0lBcUlBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7SUFKQyxPQUtBRSxVQUFVLEdBQVYsc0JBQW1CO01BQ2xCLE1BQU1DLE1BQU0sR0FDWCxLQUFDLElBQUk7UUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDVCxXQUFZO1FBQUMsS0FBSyxFQUFFLE1BQU87UUFBQyxNQUFNLEVBQUUsTUFBTztRQUFBLFVBQzFELEtBQUMsYUFBYTtVQUNiLEdBQUcsRUFBRSxJQUFJLENBQUNWLGFBQWM7VUFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQ25CLEtBQU07VUFDckIsT0FBTyxFQUFFdUMsRUFBRSxDQUFDLElBQUksQ0FBQ0MsUUFBUSxFQUFFQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLENBQUU7VUFDL0Msa0JBQWtCLEVBQUUsSUFBSSxDQUFDekI7UUFBa0M7TUFDMUQsRUFFSzs7TUFFVDtNQUNBYSxVQUFVLENBQUMsTUFBTTtRQUFBO1FBQ2hCLE1BQU1hLFNBQVMsNkJBQUcsSUFBSSxDQUFDekIsYUFBYSxDQUFDQyxPQUFPLDJEQUExQix1QkFBNEJ5QixVQUFVLEVBQUU7UUFDMUQsSUFBSUQsU0FBUyxLQUFLLElBQUksRUFBRTtVQUFBO1VBQ3ZCLDhCQUFJLENBQUN6QixhQUFhLENBQUNDLE9BQU8scUZBQTFCLHVCQUE0QkMsVUFBVSxDQUFDLFNBQVMsQ0FBQywyREFBakQsdUJBQW1EeUIsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUFFQyxPQUFPLEVBQUUsSUFBSSxDQUFDNUIsYUFBYSxDQUFDQztVQUFRLENBQUMsQ0FBQztRQUNoSDtNQUNELENBQUMsQ0FBQztNQUVGLE9BQU9rQixNQUFNO0lBQ2QsQ0FBQztJQUFBO0VBQUEsRUEvUCtDVSxvQkFBb0I7SUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO01BQUEsT0FzQnRCQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7TUFBQSxPQXlCNUIsS0FBSztJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtNQUFBLE9BUVFBLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7RUFBQTtBQUFBIn0=
