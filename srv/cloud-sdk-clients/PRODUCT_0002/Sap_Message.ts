/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * Sap_Message
 */
export interface Sap_Message<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Code.
   */
  code: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Message.
   */
  message: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Target.
   * @nullable
   */
  target?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Additional Targets.
   */
  additionalTargets: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Transition.
   */
  transition: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Numeric Severity.
   */
  numericSeverity: DeserializedType<DeSerializersT, 'Edm.Byte'>;
  /**
   * Longtext Url.
   * @nullable
   */
  longtextUrl?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * Sap_MessageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class Sap_MessageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Sap_Message,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Sap_Message.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('code', 'Edm.String', false);
  /**
   * Representation of the {@link Sap_Message.message} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('message', 'Edm.String', false);
  /**
   * Representation of the {@link Sap_Message.target} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  target: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('target', 'Edm.String', true);
  /**
   * Representation of the {@link Sap_Message.additionalTargets} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  additionalTargets: CollectionField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildCollectionField(
    'additionalTargets',
    'Edm.String',
    false
  );
  /**
   * Representation of the {@link Sap_Message.transition} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  transition: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('transition', 'Edm.Boolean', false);
  /**
   * Representation of the {@link Sap_Message.numericSeverity} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  numericSeverity: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Byte',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'numericSeverity',
    'Edm.Byte',
    false
  );
  /**
   * Representation of the {@link Sap_Message.longtextUrl} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  longtextUrl: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('longtextUrl', 'Edm.String', true);

  /**
   * Creates an instance of Sap_MessageField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Sap_Message, fieldOptions);
  }
}

export namespace Sap_Message {
  /**
   * Metadata information on all properties of the `Sap_Message` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Sap_Message>[] = [
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
}
