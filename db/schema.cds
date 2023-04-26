namespace my.bookshop;

using {
  Currency,
  managed,
  cuid,
  User,
  Country,
  sap,
  sap.common.CodeList
} from '@sap/cds/common';

annotate BusinessObject with @(
  title      : '{i18n>BusinessObject}',
  description: '{i18n>BusinessObject.Description}'
);

using {ZPDCDS_SRV.SEPMRA_I_Product_E} from '../srv/external/ZPDCDS_SRV.csn';


/**
 * Entity to store change requests for entities JSON
 * serialized.
 */
entity Approval : managed, cuid {
  approver          : User          @(title: 'Approver', );
  changedEntity     : String(255)   @(title: 'Changed Entity', );
  changedEntityKey  : LargeString   @(title: 'Changed Entity Key', );
  changedEntityData : LargeString   @(title: 'Changed Entity Data', );
  testDecimalFloat  : DecimalFloat  @(title: 'Test Decimal Float', );
  testDecimal       : Decimal(9, 2) @(title: 'Test Decimal (9,2)');
  status            : String(1)     @(title: 'Status', )
  enum {
    requested = 'R'

    @(title: 'Requested');
    pending   = 'P'

    @(title: 'Pending');
    approved  = 'A'

    @(title: 'Approved');
    rejected  = 'N'                 @(title: 'Rejected');
  } default 'R';
};

entity Books : managed {
  key ID                             : Integer;
      title                          : localized String(111);
      descr                          : localized String(1111);
      genre                          : Association to Genres;
      stock                          : Integer;

      @sap.unit                     : 'currency_code'
      @Semantics.amount.currencyCode: 'currency_code'
      @Measures.ISOCurrency         : currency_code
      price                          : DecimalFloat;

      @Common.IsCurrency
      @sap.semantics                : 'currency-code'
      @Semantics.currencyCode
      currency                       : Currency;
      virtual virtualFromDB          : String default 'Value from DB';
      virtual semanticURLtoPublisher : String;
      weight                         : DecimalFloat  @title: 'Weight (DecimalFloat)';
      height                         : Double        @title: 'Height (Double)';
      width                          : Decimal(9, 2) @title: 'Width (Decimal(9,2))';
      visible                        : Boolean       @title: 'Visible (Boolean)';
      releaseDate                    : DateTime      @title: 'Release Date (DateTime)';
      readingTime                    : Time          @title: 'Reading Time (Time)';
      author                         : Association to one Authors;
      publisher                      : Association to one Publishers;
      plants                         : Association to many BookPlants
                                         on plants.book = $self;
      to_BooksAuthorsAssignment      : Association to BooksAuthorsAssignment
                                         on to_BooksAuthorsAssignment.ASSOC_Book = $self;
};

@cds.autoexpose
entity BookPlants : managed {
  key book            : Association to one Books;
  key plant           : Association to one Plant;
      purchasingGroup : String(3);
}

@fiori.draft.enabled
@cds.autoexpose
@Common: {SemanticKey: [ID], }
entity Plant : CodeList, managed {
  key ID : String(4);
}

entity BooksAuthorsAssignment {
  key Role         : String(50);
  key ASSOC_Book   : Association to one Books;
  key ASSOC_Author : Association to one Authors;
}

@cds.autoexpose
entity Authors : managed {
  key ID                                   : Integer;
      name                                 : String(111);
      dateOfBirth                          : Date;
      dateOfDeath                          : Date;
      placeOfBirth                         : String;
      placeOfDeath                         : String;
      alive                                : Boolean;
      country                              : Country;
      BooksAuthorsAssignment_ASSOC_Authors : Association to many BooksAuthorsAssignment
                                               on BooksAuthorsAssignment_ASSOC_Authors.ASSOC_Author = $self;
}

/**
 * Hierarchically organized Code List for Genres
 */
@cds.autoexpose
@Common: {
  SemanticKey   : [ID],
  SemanticObject: 'genres',
}
entity Genres : sap.common.CodeList {
        @title                : '{i18n>genreID}'
        @Common.SemanticObject: genreSemanticObject
  key ID                          : Integer;

        @title                : '{i18n>parent}'
      parent                      : Association to Genres;
      children                    : Composition of many Genres
                                      on children.parent = $self;
      nodeType                    : String(1) @(title: 'nodeType', )
      enum {
        requested = 'F'

        @(title: 'Folder');
        pending   = 'L'                       @(title: 'Leaf');
      } default 'F';

        @title                : '{i18n>nodeType_FC}'
      virtual nodeType_FC         : Integer;

        @title                : '{i18n>SemanticObject}'
      virtual genreSemanticObject : String;
}

entity Publishers : managed {
  key ID   : Integer;
      name : String(111) @(
        title      : '{i18n>Publisher}',
        description: '{i18n>PublisherDesc}'
      );
      book : Association to many Books
               on book.publisher = $self;
};

view BooksAnalytics as
  select from Books {
    ID,
    @Analytics.Dimension: true
    @title              : '{i18n>authorID}'
    author.ID as authorID,
    // author.name as authorName,
    author,
    @Analytics.Dimension: true
    genre.ID  as genresID,
    genre,
    @Analytics.Dimension: true
    currency,
    @Aggregation.default: #SUM
    @Analytics.Measure  : true
    stock,
    @Aggregation.default: #SUM
    @Analytics.Measure  : true
    @title              : '{i18n>numberOfBooks}'
    1         as count : Integer,
  };

@Aggregation.ApplySupported.PropertyRestrictions: true
view BooksViewWOkey as
  select from Books {
    ID,
    /*
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
        */
    @Analytics.Measure  : true
    @Aggregation.default: #SUM
    stock,
    @Analytics.Dimension: true
    currency
  };

@Aggregation.ApplySupported.PropertyRestrictions: true
view BooksViewWOtype as
  select from Books {
    key ID,
        /*
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
            */
        @Analytics.Measure  : true
        @Aggregation.default: #SUM
        stock,
        @Analytics.Dimension: true
        currency,
        1 as count
  };

entity Documents : cuid, managed {
  @Core.MediaType                  : mediatype
  @Core.ContentDisposition.Filename: filename
  content   : LargeBinary     @title: '{i18n>content}';

  @Core.IsMediaType                : true
  @mandatory
  mediatype : String not null;

  @mandatory
  filename  : String not null @title: '{i18n>filename}';
}

entity Orderstatuses : sap.common.CodeList {
  key code : String(1);
}

type Orderstatus           : Association to Orderstatuses;
annotate Orderstatus with @title: '{i18n>Orderstatus}';
annotate Orderstatuses.name with  @title: '{i18n>Orderstatus}'  @description: '{i18n>Orderstatus}';

entity Deliverystatuses : sap.common.CodeList {
  key code : String(1);
}

type Deliverystatus        : Association to Deliverystatuses;
annotate Deliverystatus with @title: '{i18n>Deliverystatus}';
annotate Deliverystatuses.name with  @title: '{i18n>Deliverystatus}'  @description: '{i18n>Deliverystatus}';

@Core.Description    : '{i18n>salesOrganization}'
@Core.LongDescription: '{i18n>salesOrganizationDescription}'
type SalesOrganizationCode : String(4) @(
  title      : '{i18n>salesOrganization}',
  description: '{i18n>salesOrganizationDescription}'
);

entity A_SalesOrganizationText {
  key SalesOrganization     : SalesOrganizationCode;

      @Core.Description    : '{i18n>salesOrganization}'
      @Core.LongDescription: '{i18n>salesOrganizationDescription}'
      SalesOrganizationName : String @(
        title      : '{i18n>salesOrganization}',
        description: '{i18n>salesOrganizationDescription}'
      );
}

@assert.unique: {OrderNo: [OrderNo], }
entity Orders : cuid, managed {
  @Core.Immutable
  OrderNo           : String     @title: 'Order Number'; //> readable key

  @Core.Immutable
  salesOrganization : SalesOrganizationCode not null;
  CustomerOrderNo   : String(80) @title: 'Customer Order Number';
  Items             : Composition of many OrderItems
                        on Items.parent = $self
                                 @title: 'Items';
  ShippingAddress   : Composition of one OrderShippingAddress
                        on ShippingAddress.parent = $self;

  @readonly
  total             : DecimalFloat;

  totalTax          : Decimal(15, 2);
  totalWithTax      : Double;
  vipOrder          : Boolean    @title: '{i18n>vipOrder}';
  employeeOrder     : Boolean    @title: '{i18n>employeeOrder}';

  @Common.ValueListWithFixedValues: true
  @Common.Text                    : orderstatus.descr
  @Common.TextArrangement         : #TextOnly
  @UI.Hidden                      : {$edmJson: {$If: [
    {$Eq: [
      {$Path: 'orderstatus_code'},
      'N'
    ]},
    false,
    true
  ]}}
  @readonly
  orderstatus       : Orderstatus;

  @readonly
  @Common.ValueListWithFixedValues: true
  deliverystatus    : Deliverystatus;

  @Core.Immutable
  currency          : Currency;
}

view OrdersView as
  select from Orders {
    *
  };

annotate OrdersView with {
  // @Core.Immutable
  OrderNo;
};


@assert.unique: {item: [
  parent,
  itemNo
]}
entity OrderItems : cuid {
  parent    : Association to Orders not null;
  itemNo    : Integer not null @(title: 'itemNo', );
  book      : Association to Books;
  product   : SEPMRA_I_Product_E:Product;
  amount    : Integer;
  netAmount : Decimal(9, 2);
}

entity OrderShippingAddress : cuid, managed {
  parent : Association to Orders not null;

  @(UI: {Placeholder: '{i18n>placeholderStreet}'})
  @(title: 'Street', )
  street : String(60);

  @(title: 'City', )
  city   : String(60);
};

entity Meterings : cuid {
  tennant     : String(128);
  application : String(64);
  userhash    : String(64);
  eventName   : String(32);
  entityName  : String(256);
  timestamp   : Timestamp @cds.on.insert: $now;
};

@Aggregation.ApplySupported.PropertyRestrictions: true
view MeteringAnalytics as
  select from Meterings {
    key ID,
        @Analytics.Dimension: true
        tennant,
        @Analytics.Dimension: true
        application,
        @Analytics.Dimension: true
        userhash,
        @Analytics.Dimension: true
        eventName,
        @Analytics.Dimension: true
        entityName,
        @Analytics.Dimension: true
        timestamp,
        @Analytics.Measure  : true
        @Aggregation.default: #SUM
        1 as calls : Integer
  };
