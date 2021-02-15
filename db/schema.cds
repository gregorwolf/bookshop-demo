namespace my.bookshop;

using {
  Currency,
  managed,
  cuid,
  User,
  Country,
  sap
} from '@sap/cds/common';

annotate BusinessObject with @(
  title       : '{i18n>BusinessObject}',
  description : '{i18n>BusinessObject.Description}'
);

/**
 * Entity to store change requests for entities JSON
 * serialized.
 */
entity Approval : managed, cuid {
  approver          : User         @(title : 'Approver', );
  changedEntity     : String(255)  @(title : 'Changed Entity', );
  changedEntityKey  : LargeString  @(title : 'Changed Entity Key', );
  changedEntityData : LargeString  @(title : 'Changed Entity Data', );
  testDecimalFloat  : DecimalFloat @(title : 'Test Decimal Float', );
  testDecimal       : Decimal(9, 2)@(title : 'Test Decimal (9,2)');
  status            : String(1)    @(title : 'Status', )
  enum {
    requested = 'R'         @(title : 'Requested');
              pending = 'P' @(title : 'Pending');
              approved = 'A'@(title : 'Approved');
              rejected = 'N'       @(title : 'Rejected');
  };
};

entity Books : managed {
  key ID                                 : Integer;
  key BusinessValidFrom                  : Date;
  key BusinessValidTo                    : Date;
      title                              : localized String(111);
      descr                              : localized String(1111);
      stock                              : Integer;
      price                              : Decimal(9, 2);
      currency                           : Currency;
      virtual semanticURLtoAuthor        : String;
      weight                             : DecimalFloat @title : 'Weight (DecimalFloat)';
      height                             : Double       @title : 'Height (Double)';
      width                              : Decimal(9, 2)@title : 'Width (Decimal(9,2))';
      visible                            : Boolean      @title : 'Visible (Boolean)';
      releaseDate                        : DateTime     @title : 'Release Date (DateTime)';
      readingTime                        : Time         @title : 'Reading Time (Time)';
      author                             : Association to one Authors;
      BooksAuthorsAssignment_ASSOC_Books : Association to many BooksAuthorsAssignment
                                             on BooksAuthorsAssignment_ASSOC_Books.ASSOC_Book = $self;
};

entity BooksAuthorsAssignment {
  key BusinessValidFrom : Date;
  key BusinessValidTo   : Date;
  key Role              : String(50);
  key ASSOC_Book_ID     : Integer;
      ASSOC_Book        : Association to Books
                            on ASSOC_Book.ID = ASSOC_Book_ID;
  key ASSOC_Author_ID   : Integer;
      ASSOC_Author      : Association to Authors
                            on ASSOC_Author.ID = ASSOC_Author_ID;
}

entity Authors : managed {
  key ID                                   : Integer;
  key BusinessValidFrom                    : Date;
  key BusinessValidTo                      : Date;
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

@Aggregation.ApplySupported.PropertyRestrictions : true
view BooksAnalytics as
  select from Books {
    key ID,
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
        @Analytics.Measure   : true
        @Aggregation.default : #SUM
        stock,
        @Analytics.Dimension : true
        currency
  };

entity Images {
  key ID      : UUID;
      @Core.MediaType : 'image/png'
      content : LargeBinary;
/*
content : LargeBinary @Core.MediaType: mediatype;
@Core.IsMediaType : true
mediatype : String;
*/
}

entity Orderstatuses : sap.common.CodeList {
  key code : String(1);
}

type Orderstatus : Association to Orderstatuses;
annotate Orderstatus with @title : '{i18n>Orderstatus}';
annotate Orderstatuses.name with @title : '{i18n>Orderstatus}'  @description : '{i18n>Orderstatus}';

entity Orders : cuid, managed {
  OrderNo         : String       @title : 'Order Number'; //> readable key
  CustomerOrderNo : String(80)   @title : 'Customer Order Number';
  Items           : Composition of many OrderItems
                      on Items.parent = $self;
  ShippingAddress : Composition of one OrderShippingAddress
                      on ShippingAddress.parent = $self;
  total           : Decimal(9, 2)@readonly;
  orderstatus     : Orderstatus;
  currency        : Currency;
}

entity OrderItems : cuid {
  parent    : Association to Orders not null;
  book      : Association to Books;
  amount    : Integer;
  netAmount : Decimal(9, 2);
}

entity OrderShippingAddress : cuid, managed {
  parent : Association to Orders not null;
  street : String(60)@(title : 'Street', );
  city   : String(60)@(title : 'City', );
};

entity Meterings : cuid {
  tennant   : String(64);
  userhash  : String(64);
  method    : String(10);
  entity    : String(256);
  timestamp : Timestamp;
};

@Aggregation.ApplySupported.PropertyRestrictions : true
view MeteringAnalytics as select from Meterings {
    key ID,
    @Analytics.Dimension : true
    tennant,
    @Analytics.Dimension : true
    userhash,
    @Analytics.Dimension : true
    method,
    @Analytics.Dimension : true
    entity,
    @Analytics.Dimension : true
    timestamp,
    @Analytics.Measure   : true
    @Aggregation.default : #SUM
    1 as calls: Integer
};