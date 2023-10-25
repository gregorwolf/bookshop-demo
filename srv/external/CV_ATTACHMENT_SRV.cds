/* checksum : e59e61414a3c9df2814ff0b957cd6730 */
@cds.external               : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported: 'true'
@sap.supported.formats      : 'atom json xlsx pdf'
service CV_ATTACHMENT_SRV {};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Document Header'
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.requires.filter : 'true'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.DocumentHeaderSet {
      @sap.unicode    : 'false'
      @sap.label      : 'Document Type'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key Documenttype       : String(3) not null;

      @sap.unicode    : 'false'
      @sap.label      : 'Document'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key Documentnumber     : String(25) not null;

      @sap.unicode    : 'false'
      @sap.label      : 'Document Version'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key Documentversion    : String(2) not null;

      @sap.unicode    : 'false'
      @sap.label      : 'Document Part'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key Documentpart       : String(3) not null;

      @sap.unicode    : 'false'
      @sap.label      : 'Description'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'description'
      Description        : String(40);

      @sap.unicode    : 'false'
      @sap.label      : 'User'
      @sap.creatable  : 'false'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'givenname'
      Username           : String(12) not null;

      @sap.unicode    : 'false'
      @sap.label      : 'Status'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'status'
      Statusextern       : String(2);

      @sap.unicode    : 'false'
      @sap.label      : 'Document Status'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Statusintern       : String(2);

      @sap.unicode    : 'false'
      @sap.label      : 'Log Field'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Statuslog          : String(20);

      @sap.unicode    : 'false'
      @sap.label      : 'Lab or Office'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Laboratory         : String(3);

      @sap.unicode    : 'false'
      @sap.label      : 'Change Number'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Ecnumber           : String(12);

      @odata.Type     : 'Edm.DateTime'
      @odata.Precision: 7
      @sap.unicode    : 'false'
      @sap.label      : 'Valid From'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'dtstart'
      Validfromdate      : Timestamp;

      @sap.unicode    : 'false'
      @sap.label      : 'Revision Level'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Revlevel           : String(2);

      @sap.unicode    : 'false'
      @sap.label      : 'Deletion Indicator'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Deleteindicator    : String(1);

      @sap.unicode    : 'false'
      @sap.label      : 'CAD Indicator'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Cadindicator       : String(1);

      @sap.unicode    : 'false'
      @sap.label      : 'Structure Indicator'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Structureindicator : String(1);

      @sap.unicode    : 'false'
      @sap.label      : 'Document'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Predocumentnumber  : String(25);

      @sap.unicode    : 'false'
      @sap.label      : 'Superior Document Version'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Predocumentversion : String(2);

      @sap.unicode    : 'false'
      @sap.label      : 'Superior Document Part'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Predocumentpart    : String(3);

      @sap.unicode    : 'false'
      @sap.label      : 'Superior Document Type'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Predocumenttype    : String(3);

      @sap.unicode    : 'false'
      @sap.label      : 'Authorization Group'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Authoritygroup     : String(4);

      @odata.Type     : 'Edm.DateTime'
      @odata.Precision: 7
      @sap.unicode    : 'false'
      @sap.label      : 'Output Date'
      @sap.creatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'dtstart'
      Createdate         : Timestamp;

      @sap.unicode    : 'false'
      @sap.label      : 'Source Document Number'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Refdocumentnumber  : String(25);

      @sap.unicode    : 'false'
      @sap.label      : 'Source Document Part'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Refdocumentpart    : String(3);

      @sap.unicode    : 'false'
      @sap.label      : 'Source Document Version'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Refdocumentversion : String(2);

      @sap.unicode    : 'false'
      @sap.label      : 'Fixed'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Cmfixed            : String(1);

      @sap.unicode    : 'false'
      @sap.label      : 'CM Relevant'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      Cmrelevance        : String(1);

      @sap.label      : 'Object Links'
      @cds.ambiguous  : 'missing on condition?'
      ObjectLinks        : Association to many CV_ATTACHMENT_SRV.ObjectLinksSet {};

      @cds.ambiguous  : 'missing on condition?'
      Originals          : Association to many CV_ATTACHMENT_SRV.OriginalsSet {};
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Object Link'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.requires.filter : 'true'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.ObjectLinksSet {
      @sap.unicode   : 'false'
      @sap.label     : 'Object'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Objecttype        : String(10) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Object Key'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Objectkey         : String(90) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Document Type'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Documenttype      : String(3) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Document'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Documentnumber    : String(25) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Document Version'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Documentversion   : String(2) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Document Part'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Documentpart      : String(3) not null;

      @sap.unicode   : 'false'
      @sap.label     : 'Active'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Documentdirection : String(1);

      @sap.unicode   : 'false'
      @sap.label     : 'Object Text'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Objectdescription : String(40);

      @sap.unicode   : 'false'
      @sap.label     : 'DMS: GUID for Allocating Long Text'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Objectlinkid      : String(32);

      @sap.unicode   : 'false'
      @sap.label     : 'Table'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Addobjecttype     : String(30);

      @sap.unicode   : 'false'
      @sap.label     : 'Object Key'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Addobjectkey      : String(50);

      @sap.unicode   : 'false'
      @sap.label     : 'CAD'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      CadPos            : String(1);

      @sap.unicode   : 'false'
      @sap.label     : 'Table Index'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      TabIndex          : Integer;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Originals'
@sap.updatable       : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.OriginalsSet {
      @sap.unicode       : 'false'
      @sap.label         : 'Document Type'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documenttype       : String(3) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document Number'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentnumber     : String(25) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document Part'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentpart       : String(3) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document Version'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentversion    : String(2) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Application ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key ApplicationId      : String(32) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'File ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key FileId             : String(32) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Deletion Indicator'
      @sap.creatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'parameters'
      Deletevalue        : String(1);

      @sap.unicode       : 'false'
      @sap.label         : 'Original Type'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Originaltype       : String(5);

      @sap.unicode       : 'false'
      @sap.label         : 'Source Data Carrier'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Sourcedatacarrier  : String(10);

      @sap.unicode       : 'false'
      @sap.label         : 'Storage Category'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Storagecategory    : String(10) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Application'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
      Wsapplication      : String(3);

      @sap.unicode       : 'false'
      @sap.label         : 'Path'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Docpath            : String(255);

      @sap.unicode       : 'false'
      @sap.label         : 'Original'
      Docfile            : String(255) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Log Field'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Statuslog          : String(20);

      @sap.unicode       : 'false'
      @sap.label         : 'Language'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Language           : String(1);

      @sap.unicode       : 'false'
      @sap.label         : 'Description'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Description        : String(40);

      @sap.unicode       : 'false'
      @sap.label         : 'Checked In'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Checkedin          : String(1);

      @sap.unicode       : 'false'
      @sap.label         : 'Active Version'
      @sap.sortable      : 'false'
      ActiveVersion      : String(1);

      @sap.display.format: 'Date'
      @sap.unicode       : 'false'
      @sap.label         : 'Created At'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.semantics     : 'dtstart'
      CreatedAt          : String(19);

      @sap.display.format: 'Date'
      @sap.unicode       : 'false'
      @sap.label         : 'Changed At'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'dtstart'
      ChangedAt          : String(19);

      @sap.unicode       : 'false'
      @sap.label         : 'Created By'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.semantics     : 'name'
      CreatedBy          : String(12) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Changed By'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      ChangedBy          : String(12);

      @sap.unicode       : 'false'
      @sap.label         : 'Content Description'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ContentDescription : String(50);

      @sap.unicode       : 'false'
      @sap.label         : 'File Size of Original'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      Filesize           : String(12);

      @sap.unicode       : 'false'
      @sap.label         : 'Markup Exists'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      MarkupExists       : String(1);

      @sap.unicode       : 'false'
      @sap.label         : 'Checked-in Image'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      CheckedinImage     : LargeString;

      @sap.unicode       : 'false'
      @sap.label         : 'Checkout User'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      CheckoutUser       : String(12);

      @sap.unicode       : 'false'
      @sap.label         : 'True'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      PhioNewVersion     : String(1);

      @sap.unicode       : 'false'
      @sap.label         : 'Active Image'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActiveImage        : LargeString;

      @sap.label         : 'Original Content'
      @cds.ambiguous     : 'missing on condition?'
      OriginalContent    : Association to CV_ATTACHMENT_SRV.OriginalContentSet {};
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Original Content'
@sap.pageable        : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.OriginalContentSet {
      @sap.unicode       : 'false'
      @sap.label         : 'Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documenttype               : String(3) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentnumber             : String(25) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document Part'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentpart               : String(3) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Document Version'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key Documentversion            : String(2) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Application ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key ApplicationId              : String(32) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'File ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key FileId                     : String(32) not null;

      @sap.unicode       : 'false'
      @sap.label         : 'Application'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      Wsapplication              : String(3);

      @sap.unicode       : 'false'
      @sap.label         : 'Mark for Deletion'
      @sap.creatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      MarkForDeletion            : Boolean;

      @sap.unicode       : 'false'
      @sap.label         : 'File Size'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      Filesize                   : String(12);

      @sap.unicode       : 'false'
      @sap.label         : 'File Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      Filename                   : String(255);

      @sap.unicode       : 'false'
      @sap.label         : 'Media Source URI'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ContentSource              : String(4096);

      @sap.unicode       : 'false'
      @sap.label         : 'Content Type'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
      ContentType                : String(128);

      @sap.unicode       : 'false'
      @sap.label         : 'Content of Media Source'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Content                    : LargeBinary;

      @sap.unicode       : 'false'
      @sap.label         : 'Created By'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.semantics     : 'name'
      CreatedBy                  : String(12);

      @sap.unicode       : 'false'
      @sap.label         : 'First Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'givenname'
      FirstName                  : String(25);

      @sap.unicode       : 'false'
      @sap.label         : 'Last Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'familyname'
      LastName                   : String(25);

      @sap.unicode       : 'false'
      @sap.label         : 'Full Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      FullName                   : String(82);

      @sap.unicode       : 'false'
      @sap.label         : 'Department'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Department                 : String(40);

      @odata.Type        : 'Edm.DateTime'
      @odata.Precision   : 7
      @sap.display.format: 'Date'
      @sap.unicode       : 'false'
      @sap.label         : 'Created At'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'dtstart'
      CreatedAt                  : Timestamp;

      @sap.unicode       : 'false'
      @sap.label         : 'Storage Category'
      @sap.creatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Storagecategory            : String(10);

      @sap.unicode       : 'false'
      @sap.label         : 'Archive Link Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ArchiveLinkDocumentType    : LargeString;

      @sap.field.control : 'UxFCRename'
      @sap.label         : 'Rename Action'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActionRename               : String(15);

      @sap.field.control : 'UxFCDelete'
      @sap.label         : 'Delete Action'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActionDelete               : String(15);

      @sap.field.control : 'UxFCAdd'
      @sap.label         : 'Add Action'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActionAdd                  : String(15);

      @odata.Type        : 'Edm.Byte'
      @sap.label         : 'Rename Field Control'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      UxFCRename                 : Integer;

      @odata.Type        : 'Edm.Byte'
      @sap.label         : 'Delete Field Control'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      UxFCDelete                 : Integer;

      @odata.Type        : 'Edm.Byte'
      @sap.label         : 'Add Field Control'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      UxFCAdd                    : Integer;

      @sap.label         : 'File Share ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      FileShareId                : String(15);

      @sap.label         : 'AttachmentStatus'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      AttachmentStatus           : String(15);

      @sap.label         : 'Checked In Status'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      CheckedInStatus            : Boolean;

      @odata.Type        : 'Edm.DateTime'
      @odata.Precision   : 7
      @sap.label         : 'Changed At'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'dtstart'
      ChangedAt                  : Timestamp;

      @sap.label         : 'Changed By'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      ChangedBy                  : String(12);

      @sap.label         : 'Checked Out By User ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      CheckedOutByUser           : String(12);

      @sap.label         : 'Checked Out By User Full Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      CheckedOutByUserFullName   : String(82);

      @sap.label         : 'Changed By Full Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      ChangedByFullName          : String(82);

      @sap.label         : 'Source'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Source                     : String(20);

      @sap.label         : 'Secure Access Token'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      SecureAccessToken          : String(128);

      @sap.label         : 'Attachment is Locked'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      AttachmentIsLocked         : Boolean;

      @sap.label         : 'Attachment Has Multiple References'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      AttchHasMultipleReferences : Boolean;

      @sap.label         : 'Character Field with Length 10'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      AttachmentFramework        : String(10);

      @Core.MediaType    : 'application/octet-stream'
      blob                       : LargeBinary;
} actions {

};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAPObjectTypeCategorySet {
      @sap.unicode  : 'false'
      @sap.label    : 'SAP Object Type'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
  key SAPObjectType               : String(30) not null;

      @sap.unicode  : 'false'
      @sap.label    : 'SAP Object Representation Type'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
      SAPObjectRepresentationType : String(4) not null;

      @sap.unicode  : 'false'
      @sap.label    : 'SAP Object Representation'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
      SAPObjectRepresentation     : String(40) not null;

      @sap.unicode  : 'false'
      @sap.label    : 'Attachment Framework'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
      AttachmentFramework         : String(10) not null;

      @sap.unicode  : 'false'
      @sap.label    : 'SAP Object Node Type'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
      SAPObjectNodeType           : String(30) not null;

      @sap.unicode  : 'false'
      @sap.label    : 'HDM Active'
      @sap.creatable: 'false'
      @sap.updatable: 'false'
      @sap.sortable : 'false'
      HDMActive                   : Boolean not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'DocumentInfoRecord file details for BO'
entity CV_ATTACHMENT_SRV.C_DocInfoRecdAttchDetForBusObj {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document'
      @sap.quickinfo     : 'Document number'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Version'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Part'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocPart      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Physical Document'
      @sap.quickinfo     : 'Physical document'
  key PhysicalDocument               : String(32) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'SAP Object'
      @sap.quickinfo     : 'Linked SAP Object'
  key LinkedSAPObject                : String(10) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @sap.label         : 'Document Description'
      DocumentDescription            : String(40);

      @sap.label         : 'File Name'
      FileName                       : String(200);

      @sap.label         : 'DIR Key Concatenated'
      @sap.quickinfo     : 'Document Info Record key in concatenated form'
      DocumentInfoRecord             : String(70);
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'DocumentInfoRecord ObjLink Attach Detail'
entity CV_ATTACHMENT_SRV.C_DocInfoRecdObjLinkAttchDet {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document'
      @sap.quickinfo     : 'Document number'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Version'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Part'
      @sap.value.list    : 'standard'
  key DocumentInfoRecordDocPart      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Object Key'
      @sap.quickinfo     : 'Document Management Object Key'
  key LinkedSAPObjectKey             : String(90) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'SAP Object'
      @sap.quickinfo     : 'Linked SAP Object'
  key LinkedSAPObject                : String(10) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'DMS: GUID for allocation PHIO - file name'
      @sap.heading       : ''
  key FileUUID                       : String(32) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Physical Document'
      @sap.quickinfo     : 'Physical document'
  key PhysicalDocument               : String(32) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @sap.label         : 'Document Description'
      DocumentDescription            : String(40);

      @sap.label         : 'File Name'
      FileName                       : String(200);

      @sap.label         : 'DIR Key Concatenated'
      @sap.quickinfo     : 'Document Info Record key in concatenated form'
      DocumentInfoRecord             : String(70);
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document types associated to object type'
entity CV_ATTACHMENT_SRV.I_DocInfoRecdObjTypeToDocType {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'SAP Object'
      @sap.quickinfo     : 'Linked SAP Object'
  key LinkedSAPObject                : String(10) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @cds.ambiguous     : 'missing on condition?'
      to_Text                        : Composition of many CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocTypeT;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document Info Record Document Part VH'
@sap.value.list      : 'true'
entity CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocPrtVH {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document'
      @sap.quickinfo     : 'Document number'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Version'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Part'
  key DocumentInfoRecordDocPart      : String(3) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @sap.label         : 'Document Description'
      DocumentDescription            : String(40);
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document Info Record Document Type'
entity CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocType {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @cds.ambiguous     : 'missing on condition?'
      to_Text                        : Composition of many CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocTypeT
                                         on to_Text.DocumentInfoRecordDocType = DocumentInfoRecordDocType;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document Info Record Document Type - Txt'
entity CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocTypeT {
      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType : String(3) not null;

      @sap.label         : 'Language'
  key Language                  : String(2) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      DocumentTypeDescription   : String(20);

      @cds.ambiguous     : 'missing on condition?'
      to_DocType                : Association to CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocType
                                    on to_DocType.DocumentInfoRecordDocType = DocumentInfoRecordDocType;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document Info Record Document Type VH'
@sap.value.list      : 'true'
entity CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocTypeVH {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);

      @cds.ambiguous     : 'missing on condition?'
      to_Text                        : Composition of many CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocTypeT
                                         on to_Text.DocumentInfoRecordDocType = DocumentInfoRecordDocType;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.searchable      : 'true'
@sap.content.version : '1'
@sap.label           : 'Document Info Record Document Version VH'
@sap.value.list      : 'true'
entity CV_ATTACHMENT_SRV.I_DocumentInfoRecordDocVersVH {
      @sap.display.format: 'UpperCase'
      @sap.text          : 'DocumentInfoRecordDocType_Text'
      @sap.label         : 'Document Type'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document'
      @sap.quickinfo     : 'Document number'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.display.format: 'UpperCase'
      @sap.label         : 'Document Version'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.label         : 'Description'
      @sap.quickinfo     : 'Description of Document Type'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      DocumentInfoRecordDocType_Text : String(20);
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Original Content Archive Link'
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.OriginalContentArchiveLink {
      @sap.label         : 'Archive Link Document ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
  key ArchiveDocumentID       : String(40) not null;

      @sap.label         : 'Archive Repository ID'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
  key ArchiveRepositoryID     : String(40) not null;

      @sap.display.format: 'Date'
      @sap.label         : 'Created At'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'dtstart'
      CreatedAt               : Date;

      @sap.label         : 'Content of Media Source'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Content                 : LargeBinary;

      @sap.label         : 'Media Source URI'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ContentSource           : LargeString;

      @sap.label         : 'Content Type'
      @sap.updatable     : 'false'
      @sap.filterable    : 'false'
      ContentType             : String(128);

      @sap.label         : 'File Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      Filename                : String(255);

      @sap.label         : 'File Size'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      Filesize                : String(12);

      @sap.label         : 'Created By'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.semantics     : 'name'
      CreatedBy               : String(12);

      @sap.label         : 'First Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'givenname'
      FirstName               : String(25);

      @sap.label         : 'Last Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'familyname'
      LastName                : String(25);

      @sap.label         : 'Full Name'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      @sap.semantics     : 'name'
      FullName                : String(82);

      @sap.label         : 'Source'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Source                  : String(20);

      @sap.label         : 'Attachment Status'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      AttachmentStatus        : String(10);

      @sap.label         : 'Document Type'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      Documenttype            : String(3);

      @sap.label         : 'Archive Link Document Type'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ArchiveLinkDocumentType : String(10);

      @sap.field.control : 'UxFCDelete'
      @sap.label         : 'Delete Action'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActionDelete            : String(15);

      @sap.field.control : 'UxFCAdd'
      @sap.label         : 'Add Action'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      ActionAdd               : String(15);

      @odata.Type        : 'Edm.Byte'
      @sap.label         : 'Delete Field Control'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      UxFCDelete              : Integer;

      @odata.Type        : 'Edm.Byte'
      @sap.label         : 'Add Field Control'
      @sap.creatable     : 'false'
      @sap.updatable     : 'false'
      @sap.sortable      : 'false'
      @sap.filterable    : 'false'
      UxFCAdd                 : Integer;

      @Core.MediaType    : 'application/octet-stream'
      blob                    : LargeBinary;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Document Header Draft'
@sap.requires.filter : 'true'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.DocumentHeaderDraftSet {
      @sap.label      : 'Draft UUID'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key DraftUUID                      : UUID not null;

      @sap.label      : 'Document Info Record Doc Type'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.label      : 'Document Info Record Doc Number'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.label      : 'Document Info Record Doc Version'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.label      : 'Document Info Record Doc Part'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
  key DocumentInfoRecordDocPart      : String(3) not null;

      @sap.label      : 'Document Description'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'description'
      DocumentDescription            : String(40);

      @sap.label      : 'Responsible Person Name'
      @sap.creatable  : 'false'
      @sap.updatable  : 'false'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      @sap.semantics  : 'givenname'
      CreatedByuser                  : String(12) not null;

      @odata.Type     : 'Edm.DateTime'
      @odata.Precision: 7
      @sap.label      : 'Creation Date Time'
      @sap.creatable  : 'false'
      @sap.updatable  : 'false'
      @sap.filterable : 'false'
      CreationDateTime               : Timestamp;

      @sap.label      : 'Document Info Record is Marked for Deletion'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      DocInfoRecdIsMarkedForDeletion : Boolean;

      @sap.label      : 'Is Document Info Record Created from CAD'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      IsDocInfoRecdCreatedFromCAD    : Boolean;

      @sap.label      : 'Is Document Info Record Structure'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      IsDocInfoRecdStructure         : Boolean;

      @sap.label      : 'Internal Document Status'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      InternalDocumentStatus         : String(2);

      @sap.label      : 'Authorization Group'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      AuthorizationGroup             : String(4);

      @sap.label      : 'Last Changed By User'
      @sap.creatable  : 'false'
      @sap.updatable  : 'false'
      @sap.filterable : 'false'
      LastChangedByUser              : String(12);

      @odata.Type     : 'Edm.DateTime'
      @odata.Precision: 7
      @sap.label      : 'Changed Date Time'
      @sap.creatable  : 'false'
      @sap.updatable  : 'false'
      @sap.filterable : 'false'
      ChangedDateTime                : Timestamp;

      @sap.label      : 'Laboratory or Design Office'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      LaboratoryOrDesignOffice       : String(3);

      @sap.label      : 'Document Info Record Source Doc Number'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      DocInfoRecdSourceDocNumber     : String(25);

      @sap.label      : 'Document Info Record Source Doc Version'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      DocInfoRecdSourceDocVersion    : String(2);

      @sap.label      : 'Document Info Record Source Doc Part'
      @sap.sortable   : 'false'
      @sap.filterable : 'false'
      DocInfoRecdSourceDocPart       : String(3);
};

@cds.external        : true
@cds.persistence.skip: true
@sap.label           : 'Object Link Draft Set'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.requires.filter : 'true'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.ObjectLinkDraftSet {
      @sap.label     : 'Linked SAP Object'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key LinkedSAPObject                : String(10) not null;

      @sap.label     : 'Linked SAP Object Key'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key LinkedSAPObjectKey             : String(90) not null;

      @sap.label     : 'Document Info Record Doc Type'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key DocumentInfoRecordDocType      : String(3) not null;

      @sap.label     : 'Document Info Record Doc Number'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key DocumentInfoRecordDocNumber    : String(25) not null;

      @sap.label     : 'Document Info Record Doc Version'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key DocumentInfoRecordDocVersion   : String(2) not null;

      @sap.label     : 'Document Info Record Doc Part'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key DocumentInfoRecordDocPart      : String(3) not null;

      @sap.label     : 'Draft UUID'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key DraftUUID                      : UUID not null;

      @sap.label     : 'Document Info Recd is Marked for Deletion'
      @sap.creatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      @sap.semantics : 'parameters'
      DocInfoRecdIsMarkedForDeletion : Boolean;

      @sap.label     : 'Doc Link Direction is Active'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      DocLinkDirectionIsActive       : Boolean;

      @sap.label     : 'Object Description'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      ObjectDescription              : String(40);

      @sap.label     : 'Doc Info Recd Long Text UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      DocInfoRecdLongTextUUID        : String(32);

      @sap.label     : 'Document Object Link Counter'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      DocObjectLinkCounter           : Integer;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__Currencies {
      @sap.label    : 'Currency'
      @sap.semantics: 'currency-code'
  key CurrencyCode  : String(5) not null;

      @sap.label    : 'ISO code'
      ISOCode       : String(3) not null;

      @sap.label    : 'Short text'
      Text          : String(15) not null;

      @odata.Type   : 'Edm.Byte'
      @sap.label    : 'Decimals'
      DecimalPlaces : Integer not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__UnitsOfMeasure {
      @sap.label    : 'Internal UoM'
      @sap.semantics: 'unit-of-measure'
  key UnitCode      : String(3) not null;

      @sap.label    : 'ISO Code'
      ISOCode       : String(3) not null;

      @sap.label    : 'Commercial'
      ExternalCode  : String(3) not null;

      @sap.label    : 'Measurement Unit Txt'
      Text          : String(30) not null;

      @sap.label    : 'Decimal Places'
      DecimalPlaces : Integer;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__MyDocumentDescriptions {
      @sap.label    : 'UUID'
  key Id           : UUID not null;
      CreatedBy    : String(12) not null;

      @odata.Type   : 'Edm.DateTime'
      @sap.label    : 'Time Stamp'
      CreatedAt    : DateTime not null;
      FileName     : String(256) not null;
      Title        : String(256) not null;

      @cds.ambiguous: 'missing on condition?'
      Format       : Association to CV_ATTACHMENT_SRV.SAP__FormatSet
                       on Format.Id = Id;

      @cds.ambiguous: 'missing on condition?'
      TableColumns : Association to many CV_ATTACHMENT_SRV.SAP__TableColumnsSet
                       on TableColumns.Id = Id;

      @cds.ambiguous: 'missing on condition?'
      CoverPage    : Association to many CV_ATTACHMENT_SRV.SAP__CoverPageSet
                       on CoverPage.Id = Id;

      @cds.ambiguous: 'missing on condition?'
      Signature    : Association to CV_ATTACHMENT_SRV.SAP__SignatureSet
                       on Signature.Id = Id;

      @cds.ambiguous: 'missing on condition?'
      PDFStandard  : Association to CV_ATTACHMENT_SRV.SAP__PDFStandardSet
                       on PDFStandard.Id = Id;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.addressable     : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__FormatSet {
      @sap.label     : 'UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Id          : UUID not null;
      FitToPage   : CV_ATTACHMENT_SRV.SAP__FitToPage not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      FontSize    : Integer not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Orientation : String(10) not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      PaperSize   : String(10) not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      BorderSize  : Integer not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      MarginSize  : Integer not null;

      @sap.label     : 'Font Name'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      FontName    : String(255) not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.addressable     : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__PDFStandardSet {
      @sap.label     : 'UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Id                    : UUID not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      UsePDFAConformance    : Boolean not null;

      @sap.label     : 'Indicator'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      DoEnableAccessibility : Boolean not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.addressable     : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__TableColumnsSet {
      @sap.label     : 'UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Id                  : UUID not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Name                : String(256) not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Header              : String(256) not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      HorizontalAlignment : String(10) not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.addressable     : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__CoverPageSet {
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Title : String(256) not null;

      @sap.label     : 'UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Id    : UUID not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Name  : String(256) not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Value : String(256) not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.creatable       : 'false'
@sap.updatable       : 'false'
@sap.deletable       : 'false'
@sap.pageable        : 'false'
@sap.addressable     : 'false'
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__SignatureSet {
      @sap.label     : 'UUID'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
  key Id     : UUID not null;

      @sap.label     : 'Indicator'
      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      DoSign : Boolean not null;

      @sap.creatable : 'false'
      @sap.updatable : 'false'
      @sap.sortable  : 'false'
      @sap.filterable: 'false'
      Reason : String(256) not null;
};

@cds.external        : true
@cds.persistence.skip: true
@sap.content.version : '1'
entity CV_ATTACHMENT_SRV.SAP__ValueHelpSet {
  key VALUEHELP   : LargeString not null;
      FIELD_VALUE : String(10) not null;
      DESCRIPTION : LargeString;
};

@cds.external: true
type CV_ATTACHMENT_SRV.Attachments {
  @sap.label     : 'Total Count of Attachments'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'parameters'
  TotalCount       : Integer not null;

  @sap.label     : 'Count of Unconfirmed Attachments'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'parameters'
  UnconfirmedCount : Integer not null;

  @sap.label     : 'Count of Confirmed Attachments'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'parameters'
  ConfirmedCount   : Integer not null;
};

@cds.external: true
type CV_ATTACHMENT_SRV.OriginalUploadParams {
  @sap.label     : 'Application ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  ApplicationId         : String(32) not null;

  @sap.label     : 'File ID'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  FileId                : String(32) not null;

  @sap.label     : 'Media Source URI'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  OriginalUrl           : String(4096) not null;

  @sap.label     : 'Storage Category'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  Storagecategory       : String(10) not null;

  @sap.label     : 'Mime Type'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  ContentType           : LargeString not null;

  @sap.label     : 'URL to Read an Attachment'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  URLToReadAttachment   : String(4096);

  @sap.label     : 'URL to Upload an Attachment'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  URLToUploadAttachment : String(4096);

  @sap.label     : 'URL to Update an Attachment'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  URLToUpdateAttachment : String(4096);

  @sap.label     : 'Secure Access Token'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  SecureAccessToken     : String(128) not null;

  @sap.label     : 'Secure Access Cookie'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  SecureAccessCookie    : String(1024);

  @sap.label     : 'File Name'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  Filename              : String(255);

  @sap.label     : 'File Size'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  FileSize              : String(12);
};

@cds.external: true
type CV_ATTACHMENT_SRV.OperationStatus {
  @sap.label     : 'Success of Operation'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  Success : Boolean not null;
};

@cds.external: true
type CV_ATTACHMENT_SRV.ApplicationState {
  @sap.label     : 'Does the Application Have Any Unsaved Content?'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'parameters'
  IsDirty : Boolean not null;
};

@cds.external: true
type CV_ATTACHMENT_SRV.DocumentTypes {
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  SAPObjectType         : String(30);

  @sap.label     : 'Document type'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  DocumetType           : String(10);

  @sap.label     : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  Description           : String(40);

  @sap.label     : 'Document Class'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  DocumentClass         : String(20);

  @sap.label     : 'MIME type'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  MIMEType              : String(128);

  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  AttachmentFramework   : String(10);

  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  DocumentTypeIsDefault : String(1);

  @sap.label     : 'SAP Object Node Type'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  @sap.semantics : 'url'
  SAPObjectNodeType     : String(30);
};

@cds.external: true
type CV_ATTACHMENT_SRV.UsageStatus {
  @sap.label     : 'Does DIR have more than one active object link?'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  IsMultiple : Boolean not null;
};

@cds.external: true
type CV_ATTACHMENT_SRV.HDMProfileSetting {
  @sap.label     : 'Active Profile'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  ActiveProfile : String(10) not null;

  @sap.label     : 'Upload'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCUpload    : Boolean not null;

  @sap.label     : 'Upload URL'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCUploadURL : Boolean not null;

  @sap.label     : 'Rename'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCRename    : Boolean not null;

  @sap.label     : 'Assign/Unassign'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCAssign    : Boolean not null;

  @sap.label     : 'Check In/Out/Reset'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCCheckin   : Boolean not null;

  @sap.label     : 'Delete'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCDelete    : Boolean not null;

  @sap.label     : 'Download'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  UXFCDownload  : Boolean not null;
};

@cds.external: true
type CV_ATTACHMENT_SRV.SAP__FitToPage {
  @sap.label     : 'Error behavior'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  ErrorRecoveryBehavior : String(8) not null;

  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  IsEnabled             : Boolean not null;

  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable  : 'false'
  @sap.filterable: 'false'
  MinimumFontSize       : Integer not null;
};

@cds.external: true
function CV_ATTACHMENT_SRV.GetAttachmentCount(
                                              @sap.label:'Object Type'
                                              ObjectType : String(40),
                                              @sap.label:'Object Key'
                                              ObjectKey : String(90),
                                              @sap.label:'Semantic Object Type'
                                              SemanticObjectType : String(40))                       returns CV_ATTACHMENT_SRV.Attachments;

@cds.external: true
action   CV_ATTACHMENT_SRV.CancelAttachment(
                                            @sap.label:'Object Type'
                                            ObjectType : String(40),
                                            @sap.label:'Object Key'
                                            ObjectKey : String(90),
                                            @sap.label:'Attachment Framework'
                                            AttachmentFramework : LargeString,
                                            @sap.label:'Semantic Object Type'
                                            SemanticObjectType : String(40))                         returns CV_ATTACHMENT_SRV.OperationStatus;

@cds.external: true
function CV_ATTACHMENT_SRV.GetAllOriginals(
                                           @sap.label:'Object Type'
                                           ObjectType : String(40),
                                           @sap.label:'Object Key'
                                           ObjectKey : String(90),
                                           @sap.label:'Semantic Object Type'
                                           SemanticObjectType : String(40),
                                           @sap.label:'Is Draft'
                                           IsDraft : Boolean,
                                           @sap.label:'Attachment Framework'
                                           AttachmentFramework : LargeString)                        returns many CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
action   CV_ATTACHMENT_SRV.ConfirmAttachment(
                                             @sap.label:'Object Type'
                                             ObjectType : String(40),
                                             @sap.label:'Object Key'
                                             ObjectKey : String(90),
                                             @sap.label:'Attachment Framework'
                                             AttachmentFramework : LargeString,
                                             @sap.label:'Semantic Object Type'
                                             SemanticObjectType : String(40))                        returns CV_ATTACHMENT_SRV.OperationStatus;

@cds.external: true
function CV_ATTACHMENT_SRV.GetApplicationState(
                                               @sap.label:'Object Type'
                                               ObjectType : String(40),
                                               @sap.label:'Object Key'
                                               ObjectKey : String(90),
                                               @sap.label:'Semantic Object Type'
                                               SemanticObjectType : String(40))                      returns CV_ATTACHMENT_SRV.ApplicationState;

@cds.external: true
function CV_ATTACHMENT_SRV.GetDocumentTypes(SAPObjectType : String(30),
                                            SAPObjectNodeType : String(30))                          returns many CV_ATTACHMENT_SRV.DocumentTypes;

@cds.external: true
action   CV_ATTACHMENT_SRV.AssignUnassignObjectLink(
                                                    @sap.label:'Object Type'
                                                    ObjectType : String(40),
                                                    @sap.label:'Object Key'
                                                    ObjectKey : String(90),
                                                    @sap.label:'Document Version'
                                                    DocumentInfoRecordDocVersion : String(2),
                                                    @sap.label:'Document Type'
                                                    DocumentInfoRecordDocType : String(3),
                                                    @sap.label:'Document Part'
                                                    DocumentInfoRecordDocPart : String(3),
                                                    @sap.label:'Document Number'
                                                    DocumentInfoRecordDocNumber : String(25),
                                                    @sap.label:'Assign Indicator'
                                                    AssignIndicator : Boolean)                       returns CV_ATTACHMENT_SRV.OperationStatus;

@cds.external: true
function CV_ATTACHMENT_SRV.CheckIfMultipleObjectLinksExist(
                                                           @sap.label:'Document Version'
                                                           DocumentInfoRecordDocVersion : String(2),
                                                           @sap.label:'Document Type'
                                                           DocumentInfoRecordDocType : String(3),
                                                           @sap.label:'Document Part'
                                                           DocumentInfoRecordDocPart : String(3),
                                                           @sap.label:'Document Number'
                                                           DocumentInfoRecordDocNumber : String(25)) returns CV_ATTACHMENT_SRV.UsageStatus;

@cds.external: true
action   CV_ATTACHMENT_SRV.CreateUrlAsAttachment(
                                                 @sap.label:'Object Type'
                                                 ObjectType : String(40),
                                                 @sap.label:'Object Key'
                                                 ObjectKey : String(90),
                                                 @sap.label:'Semantic Object Type'
                                                 SemanticObjectType : String(40),
                                                 @sap.label:'URL'
                                                 URL : String(4096),
                                                 @sap.label:'Document Type'
                                                 DocumentType : LargeString,
                                                 @sap.label:'URL Description'
                                                 UrlDescription : String(40),
                                                 @sap.label:'MIME Type'
                                                 MIMEType : String(128),
                                                 @sap.label:'Is Draft'
                                                 IsDraft : Boolean)                                  returns CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
function CV_ATTACHMENT_SRV.GetAllChildDocuments(
                                                @sap.label:'Object Type'
                                                ObjectType : String(40),
                                                @sap.label:'Object Key'
                                                ObjectKey : String(90),
                                                @sap.label:'Semantic Object Type'
                                                SemanticObjectType : String(40))                     returns many CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
action   CV_ATTACHMENT_SRV.LinkFileShareAttachments(
                                                    @sap.label:'Object Type'
                                                    ObjectType : String(40),
                                                    @sap.label:'Object Key'
                                                    ObjectKey : String(90),
                                                    @sap.label:'Document Type'
                                                    HarmonizedDocumentType : LargeString,
                                                    @sap.label:'MIME Type'
                                                    MimeType : String(128),
                                                    @sap.label:'File Name'
                                                    Filename : String(255),
                                                    @sap.label:'Is Draft'
                                                    IsDraft : Boolean,
                                                    @sap.label:'File Share ID'
                                                    FileShareId : String(15),
                                                    @sap.label:'File Share Item ID'
                                                    FileShareItemId : String(255),
                                                    @sap.label:'File Share Item Content Size'
                                                    FileShareItemContentSize : String(12))           returns CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
action   CV_ATTACHMENT_SRV.CheckOut(
                                    @sap.label:'Application ID'
                                    ApplicationId : String(32) not null,
                                    FileId : String(32) not null,
                                    @sap.label:'Document Type'
                                    DocumentInfoRecordDocType : String(3),
                                    @sap.label:'Document'
                                    DocumentInfoRecordDocNumber : String(25),
                                    @sap.label:'Document Version'
                                    DocumentInfoRecordDocVersion : String(2),
                                    @sap.label:'Document Part'
                                    DocumentInfoRecordDocPart : String(3))                           returns CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
function CV_ATTACHMENT_SRV.GetUploadURLWithToken(
                                                 @sap.label:'File Name'
                                                 Filename : String(255),
                                                 @sap.label:'MIME Type'
                                                 MIMEType : String(128),
                                                 @sap.label:'Object Type'
                                                 ObjectType : String(40),
                                                 @sap.label:'Object Key'
                                                 ObjectKey : String(90),
                                                 @sap.label:'Count of Tokens Required'
                                                 CountOfTokensRequired : String(11))                 returns many CV_ATTACHMENT_SRV.OriginalUploadParams;

@cds.external: true
function CV_ATTACHMENT_SRV.GetAccessURLWithToken(
                                                 @sap.label:'URL to Update an Attachment'
                                                 RequestURLForPut : Boolean,
                                                 @sap.label:'URL to Read an Attachment'
                                                 RequestURLForGet : Boolean,
                                                 FileId : String(32),
                                                 @sap.label:'Count of Tokens Required'
                                                 CountOfTokensRequired : String(11),
                                                 @sap.label:'Object Type'
                                                 ObjectType : String(40),
                                                 @sap.label:'Object Key'
                                                 ObjectKey : String(90),
                                                 @sap.label:'Document Info Record Doc Type'
                                                 DocumentInfoRecordDocType : LargeString,
                                                 @sap.label:'Document Info Record Doc Number'
                                                 DocumentInfoRecordDocNumber : LargeString,
                                                 @sap.label:'Document Info Record Doc Version'
                                                 DocumentInfoRecordDocVersion : LargeString,
                                                 @sap.label:'Document Info Record Doc Part'
                                                 DocumentInfoRecordDocPart : LargeString)            returns many CV_ATTACHMENT_SRV.OriginalUploadParams;

@cds.external: true
action   CV_ATTACHMENT_SRV.FinalizeMetadata(
                                            @sap.label:'Object Type'
                                            ObjectType : String(40),
                                            @sap.label:'Semantic Object Type'
                                            SemanticObjectType : String(40),
                                            @sap.label:'Object Key'
                                            ObjectKey : String(90),
                                            @sap.label:'File Name'
                                            Filename : String(255),
                                            @sap.label:'MIME Type'
                                            MIMEType : String(128),
                                            @sap.label:'Application ID'
                                            ApplicationId : String(32),
                                            FileId : String(32))                                     returns CV_ATTACHMENT_SRV.OriginalContentSet;

@cds.external: true
function CV_ATTACHMENT_SRV.GetArchiveLinkAttachments(
                                                     @sap.label:'SAP object ID'
                                                     ArchiveObjectID : String(50) not null,
                                                     @sap.label:'Archive Object Type'
                                                     ArchiveObjectType : String(10),
                                                     @sap.label:'Semantic Object Type'
                                                     SemanticObjectType : String(40),
                                                     @sap.label:'Is Draft'
                                                     IsDraft : Boolean)                              returns many CV_ATTACHMENT_SRV.OriginalContentArchiveLink;

@cds.external: true
function CV_ATTACHMENT_SRV.GetArchiveLinkAttachmentsCount(
                                                          @sap.label:'Archive Link Document ID'
                                                          ArchiveObjectID : LargeString not null,
                                                          @sap.label:'Archive Object Type'
                                                          ArchiveObjectType : LargeString,
                                                          @sap.label:'Semantic Object Type'
                                                          SemanticObjectType : String(40))           returns CV_ATTACHMENT_SRV.Attachments;

@cds.external: true
function CV_ATTACHMENT_SRV.GetAttachmentsByAlternateKey(
                                                        @sap.label:'Object Type'
                                                        ObjectType : String(40),
                                                        @sap.label:'Object Key'
                                                        ObjectKey : String(90),
                                                        @sap.label:'Semantic Object Type'
                                                        SemanticObjectType : String(40))             returns many CV_ATTACHMENT_SRV.OriginalContentSet;
