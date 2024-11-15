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
  Entity,
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
export declare class Sap_MessageField<
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
  private _fieldBuilder;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  );
}
export declare namespace Sap_Message {
  /**
   * Metadata information on all properties of the `Sap_Message` complex type.
   */
  const _propertyMetadata: PropertyMetadata<Sap_Message>[];
}
