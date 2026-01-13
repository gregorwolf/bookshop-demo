namespace PUBLIC;

@cds.persistence.exists
entity DUMMY {
    DUMMY : String(1)
    @title: 'Dummy';
}

// needed for sap_cpe_BASICS.hdblibrary
@cds.persistence.exists
entity TABLE_COLUMNS {
    key SCHEMA_NAME    : String(256)
        @title: 'Schema name';
    key TABLE_NAME     : String(256)
        @title: 'Table name';
        TABLE_OID      : Integer64
        @title: 'Object ID of the table';
    key COLUMN_NAME    : String(256)
        @title: 'Name of the column';
        POSITION       : Integer
        @title: 'Ordinal position of the column in the record';
        DATA_TYPE_ID   : hana.SMALLINT
        @title: 'SQL Data type ID of the column';
        DATA_TYPE_NAME : String(16)
        @title: 'SQL data type name of the column';
        OFFSET         : hana.SMALLINT
        @title: 'Offset of the column in the record';
        LENGTH         : Integer
        @title: 'Length';
        SCALE          : Integer
        @title: 'Scale';
        IS_NULLABLE    : String(5)
        @title: 'Is Nullable (TRUE/FALSE)';
        DEFAULT_VALUE  : String(5000)
        @title: 'Default value';
        COMMENTS       : String(5000)
        @title: 'Comments';
}

// needed for sap_cpe_BASICS.hdblibrary
@cds.persistence.exists
entity VIEW_COLUMNS {
    key SCHEMA_NAME    : String(256)
        @title: 'Schema name';
    key VIEW_NAME      : String(256)
        @title: 'View name';
        VIEW_OID       : Integer64
        @title: 'Object ID of the view';
    key COLUMN_NAME    : String(256)
        @title: 'Name of the column';
        POSITION       : Integer
        @title: 'Ordinal position of the column in the record';
        DATA_TYPE_ID   : hana.SMALLINT
        @title: 'SQL Data type ID of the column';
        DATA_TYPE_NAME : String(16)
        @title: 'SQL data type name of the column';
        OFFSET         : hana.SMALLINT
        @title: 'Offset of the column in the record';
        LENGTH         : Integer
        @title: 'Length';
        SCALE          : Integer
        @title: 'Scale';
        IS_NULLABLE    : String(5)
        @title: 'Is Nullable (TRUE/FALSE)';
        DEFAULT_VALUE  : String(5000)
        @title: 'Default value';
        COMMENTS       : String(5000)
        @title: 'Comments';
}

@cds.persistence.exists
entity SYNONYMS {
        SCHEMA_NAME            : String(256) @title: 'Synonym schema name';
        SYNONYM_NAME           : String(256) @title: 'Synonym name';
    key SYNONYM_OID            : Integer64   @title: 'Object ID of the Synonym';
        OBJECT_DATABASE_SCHEMA : String(256) @title: 'Object Database Schema';
        OBJECT_DATABASE        : String(256) @title: 'Object Database';
        OBJECT_SCHEMA          : String(256) @title: 'Object schema';
        OBJECT_NAME            : String(256) @title: 'Object name';
        OBJECT_TYPE            : String(256) @title: 'Object type';
        IS_COLUMN_OBJECT       : Boolean     @title: 'Is column object';
        IS_VALID               : Boolean     @title: 'Is valid';
}
