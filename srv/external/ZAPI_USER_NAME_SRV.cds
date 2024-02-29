/* checksum : bd03cdcdc38a962d4790c6319c5cedb9 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service ZAPI_USER_NAME_SRV {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity ZAPI_USER_NAME_SRV.UserDetailsSet {
  @sap.unicode : 'false'
  @sap.label : 'User Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key UserName : String(12) not null;
  @sap.unicode : 'false'
  @sap.label : 'SAP System ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Sysid : String(8) not null;
  @sap.unicode : 'false'
  @sap.label : 'Client ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Mandt : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Logical system'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Logsys : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Language Key'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Sylangu : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Lang. (ISO)'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Language : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Full Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  FullUserName : String(80) not null;
  @sap.unicode : 'false'
  @sap.label : 'Alias'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Aliasname : String(40) not null;
};

