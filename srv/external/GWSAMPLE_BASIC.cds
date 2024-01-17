/* checksum : 357bca4fe5407cd88ad4f6491f51e403 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service GWSAMPLE_BASIC {};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
entity GWSAMPLE_BASIC.BusinessPartnerSet {
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key BusinessPartnerID : String(10) not null;
  Address : GWSAMPLE_BASIC.CT_Address not null;
  @sap.unicode : 'false'
  @sap.label : 'Company Name'
  CompanyName : String(80) not null;
  @sap.unicode : 'false'
  @sap.label : 'Web Address'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'url'
  WebAddress : LargeString;
  @sap.unicode : 'false'
  @sap.label : 'E-Mail Address'
  @sap.semantics : 'email'
  EmailAddress : String(255) not null;
  @sap.unicode : 'false'
  @sap.label : 'Phone No.'
  @sap.semantics : 'tel'
  PhoneNumber : String(30);
  @sap.unicode : 'false'
  @sap.label : 'Fax Number'
  FaxNumber : String(30);
  @sap.unicode : 'false'
  @sap.label : 'Legal Form'
  LegalForm : String(10);
  @sap.unicode : 'false'
  @sap.label : 'Currency'
  @sap.semantics : 'currency-code'
  CurrencyCode : String(5) not null;
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. Role'
  BusinessPartnerRole : String(3) not null;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  CreatedAt : Timestamp;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ChangedAt : Timestamp;
  @cds.ambiguous : 'missing on condition?'
  ToSalesOrders : Association to many GWSAMPLE_BASIC.SalesOrderSet on ToSalesOrders.CustomerID = BusinessPartnerID;
  @cds.ambiguous : 'missing on condition?'
  ToContacts : Association to many GWSAMPLE_BASIC.ContactSet on ToContacts.BusinessPartnerID = BusinessPartnerID;
  @cds.ambiguous : 'missing on condition?'
  ToProducts : Association to many GWSAMPLE_BASIC.ProductSet on ToProducts.SupplierID = BusinessPartnerID;
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
entity GWSAMPLE_BASIC.ProductSet {
  @sap.unicode : 'false'
  @sap.label : 'Product ID'
  @sap.updatable : 'false'
  key ProductID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Prod. Type Code'
  TypeCode : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Prod. Cat.'
  Category : String(40) not null;
  @sap.unicode : 'false'
  @sap.label : 'Product Name'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Name : String(255) not null;
  @sap.unicode : 'false'
  @sap.label : 'Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  NameLanguage : String(2);
  @sap.unicode : 'false'
  @sap.label : 'Prod.Descrip.'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Description : String(255);
  @sap.unicode : 'false'
  @sap.label : 'Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  DescriptionLanguage : String(2);
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. ID'
  SupplierID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Company Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  SupplierName : String(80);
  @odata.Type : 'Edm.Byte'
  @sap.unicode : 'false'
  @sap.label : 'Prod. Tax Code'
  TaxTarifCode : Integer not null;
  @sap.unicode : 'false'
  @sap.label : 'Qty. Unit'
  @sap.semantics : 'unit-of-measure'
  MeasureUnit : String(3) not null;
  @sap.unicode : 'false'
  @sap.unit : 'WeightUnit'
  @sap.label : 'Wt. Measure'
  WeightMeasure : Decimal(13, 3);
  @sap.unicode : 'false'
  @sap.label : 'Qty. Unit'
  @sap.semantics : 'unit-of-measure'
  WeightUnit : String(3);
  @sap.unicode : 'false'
  @sap.label : 'Currency'
  @sap.semantics : 'currency-code'
  CurrencyCode : String(5) not null;
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Unit Price'
  Price : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.unit : 'DimUnit'
  @sap.label : 'Dimensions'
  Width : Decimal(13, 3);
  @sap.unicode : 'false'
  @sap.unit : 'DimUnit'
  @sap.label : 'Dimensions'
  Depth : Decimal(13, 3);
  @sap.unicode : 'false'
  @sap.unit : 'DimUnit'
  @sap.label : 'Dimensions'
  Height : Decimal(13, 3);
  @sap.unicode : 'false'
  @sap.label : 'Dim. Unit'
  @sap.semantics : 'unit-of-measure'
  DimUnit : String(3);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  CreatedAt : Timestamp;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ChangedAt : Timestamp;
  @cds.ambiguous : 'missing on condition?'
  ToSupplier : Association to GWSAMPLE_BASIC.BusinessPartnerSet on ToSupplier.BusinessPartnerID = SupplierID;
  @cds.ambiguous : 'missing on condition?'
  ToSalesOrderLineItems : Association to many GWSAMPLE_BASIC.SalesOrderLineItemSet on ToSalesOrderLineItems.ProductID = ProductID;
};

@cds.external : true
@cds.persistence.skip : true
@sap.updatable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.SalesOrderSet {
  @sap.unicode : 'false'
  @sap.label : 'Sa. Ord. ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key SalesOrderID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Description'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Note : String(255);
  @sap.unicode : 'false'
  @sap.label : 'Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  NoteLanguage : String(2);
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. ID'
  @sap.updatable : 'false'
  CustomerID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Company Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  CustomerName : String(80);
  @sap.unicode : 'false'
  @sap.label : 'Currency'
  @sap.updatable : 'false'
  @sap.semantics : 'currency-code'
  CurrencyCode : String(5);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Gross Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  GrossAmount : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Net Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  NetAmount : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Tax Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  TaxAmount : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.label : 'PO Lifecycle'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  LifecycleStatus : String(1);
  @sap.unicode : 'false'
  @sap.label : 'Lifecycle Descript.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  LifecycleStatusDescription : String(60);
  @sap.unicode : 'false'
  @sap.label : 'PO Confirmation'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  BillingStatus : String(1);
  @sap.unicode : 'false'
  @sap.label : 'Billing Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  BillingStatusDescription : String(60);
  @sap.unicode : 'false'
  @sap.label : 'PO Ordering'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DeliveryStatus : String(1);
  @sap.unicode : 'false'
  @sap.label : 'Delivery Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  DeliveryStatusDescription : String(60);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  CreatedAt : Timestamp;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ChangedAt : Timestamp;
  @cds.ambiguous : 'missing on condition?'
  ToBusinessPartner : Association to GWSAMPLE_BASIC.BusinessPartnerSet on ToBusinessPartner.BusinessPartnerID = CustomerID;
  @cds.ambiguous : 'missing on condition?'
  ToLineItems : Association to many GWSAMPLE_BASIC.SalesOrderLineItemSet on ToLineItems.SalesOrderID = SalesOrderID;
} actions {
  action SalesOrder_Confirm() returns GWSAMPLE_BASIC.SalesOrderSet;
  action SalesOrder_Cancel() returns GWSAMPLE_BASIC.SalesOrderSet;
  action SalesOrder_InvoiceCreated() returns GWSAMPLE_BASIC.SalesOrderSet;
  action SalesOrder_GoodsIssueCreated() returns GWSAMPLE_BASIC.SalesOrderSet;
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
entity GWSAMPLE_BASIC.SalesOrderLineItemSet {
  @sap.unicode : 'false'
  @sap.label : 'Sa. Ord. ID'
  @sap.updatable : 'false'
  key SalesOrderID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'PO Item Pos'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key ItemPosition : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Product ID'
  ProductID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Description'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Note : String(255);
  @sap.unicode : 'false'
  @sap.label : 'Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  NoteLanguage : String(2);
  @sap.unicode : 'false'
  @sap.label : 'Currency'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.semantics : 'currency-code'
  CurrencyCode : String(5);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Gross Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  GrossAmount : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Net Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  NetAmount : Decimal(16, 3);
  @sap.unicode : 'false'
  @sap.unit : 'CurrencyCode'
  @sap.label : 'Tax Amt.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  TaxAmount : Decimal(16, 3);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Time Stamp'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  DeliveryDate : Timestamp not null;
  @sap.unicode : 'false'
  @sap.unit : 'QuantityUnit'
  @sap.label : 'Quantity'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Quantity : Decimal(13, 3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Qty. Unit'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  QuantityUnit : String(3);
  @cds.ambiguous : 'missing on condition?'
  ToHeader : Association to GWSAMPLE_BASIC.SalesOrderSet on ToHeader.SalesOrderID = SalesOrderID;
  @cds.ambiguous : 'missing on condition?'
  ToProduct : Association to GWSAMPLE_BASIC.ProductSet on ToProduct.ProductID = ProductID;
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
entity GWSAMPLE_BASIC.ContactSet {
  @sap.unicode : 'false'
  @sap.label : 'Contact GUID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key ContactGuid : UUID not null;
  Address : GWSAMPLE_BASIC.CT_Address not null;
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. ID'
  @sap.updatable : 'false'
  BusinessPartnerID : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Title'
  Title : String(10);
  @sap.unicode : 'false'
  @sap.label : 'First Name'
  @sap.semantics : 'givenname'
  FirstName : String(40) not null;
  @sap.unicode : 'false'
  @sap.label : 'Middle Name'
  @sap.semantics : 'middlename'
  MiddleName : String(40);
  @sap.unicode : 'false'
  @sap.label : 'Last Name'
  @sap.semantics : 'familyname'
  LastName : String(40);
  @sap.unicode : 'false'
  @sap.label : 'Nickname'
  @sap.semantics : 'nickname'
  Nickname : String(40);
  @sap.unicode : 'false'
  @sap.label : 'Initials'
  Initials : String(10);
  @sap.unicode : 'false'
  @sap.label : 'Sex'
  Sex : String(1) not null;
  @sap.unicode : 'false'
  @sap.label : 'Phone No.'
  @sap.semantics : 'tel'
  PhoneNumber : String(30);
  @sap.unicode : 'false'
  @sap.label : 'Fax Number'
  FaxNumber : String(30);
  @sap.unicode : 'false'
  @sap.label : 'E-Mail Address'
  @sap.semantics : 'email'
  EmailAddress : String(255);
  @sap.unicode : 'false'
  @sap.label : 'Language Key'
  Language : String(2);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 7
  @sap.unicode : 'false'
  @sap.label : 'Date of Birth'
  @sap.semantics : 'bday'
  DateOfBirth : Timestamp;
  @cds.ambiguous : 'missing on condition?'
  ToBusinessPartner : Association to GWSAMPLE_BASIC.BusinessPartnerSet on ToBusinessPartner.BusinessPartnerID = BusinessPartnerID;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_SexSet {
  @sap.unicode : 'false'
  @sap.label : 'Sex'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key Sex : String(1) not null;
  @sap.unicode : 'false'
  @sap.label : 'Short Descript.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Shorttext : String(60) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_CountrySet {
  @sap.unicode : 'false'
  @sap.label : 'Country'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key Land1 : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Landx : String(15) not null;
  @sap.unicode : 'false'
  @sap.label : 'Nationality'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Natio : String(15) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_AddressTypeSet {
  @sap.unicode : 'false'
  @sap.label : 'Address Type'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key AddressType : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Short Descript.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Shorttext : String(60) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_CategorySet {
  @sap.unicode : 'false'
  @sap.label : 'Prod. Cat.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key Category : String(40) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_CurrencySet {
  @sap.unicode : 'false'
  @sap.label : 'Currency'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'currency-code'
  key Waers : String(5) not null;
  @sap.unicode : 'false'
  @sap.label : 'Long Text'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Ltext : String(40) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_UnitQuantitySet {
  @sap.unicode : 'false'
  @sap.label : 'Int. meas. unit'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  key Msehi : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Unit text'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Msehl : String(30) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_UnitWeightSet {
  @sap.unicode : 'false'
  @sap.label : 'Int. meas. unit'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  key Msehi : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Unit text'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Msehl : String(30) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_UnitLengthSet {
  @sap.unicode : 'false'
  @sap.label : 'Int. meas. unit'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  @sap.semantics : 'unit-of-measure'
  key Msehi : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Unit text'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Msehl : String(30) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_ProductTypeCodeSet {
  @sap.unicode : 'false'
  @sap.label : 'Prod. Type Code'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key TypeCode : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Short Descript.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Shorttext : String(60) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_BPRoleSet {
  @sap.unicode : 'false'
  @sap.label : 'Bus. Part. Role'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key BpRole : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Short Descript.'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Shorttext : String(60) not null;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity GWSAMPLE_BASIC.VH_LanguageSet {
  @sap.unicode : 'false'
  @sap.label : 'Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key Spras : String(2) not null;
  @sap.unicode : 'false'
  @sap.label : 'Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Sptxt : String(16) not null;
};

@cds.external : true
type GWSAMPLE_BASIC.CT_Address {
  @sap.label : 'City'
  @sap.semantics : 'city'
  City : String(40);
  @sap.label : 'Postal Code'
  @sap.semantics : 'zip'
  PostalCode : String(10);
  @sap.label : 'Street'
  @sap.semantics : 'street'
  Street : String(60);
  @sap.label : 'Building'
  Building : String(10);
  @sap.label : 'Country'
  @sap.semantics : 'country'
  Country : String(3);
  @sap.label : 'Address Type'
  AddressType : String(2);
};

@cds.external : true
type GWSAMPLE_BASIC.CT_String {
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  String : LargeString not null;
};

@cds.external : true
action GWSAMPLE_BASIC.RegenerateAllData(
  NoOfSalesOrders : Integer
) returns GWSAMPLE_BASIC.CT_String;

