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
  } default 'R';
};

entity Books : managed {
  key ID                             : Integer;
      title                          : localized String(111);
      descr                          : localized String(1111);
      stock                          : Integer;
      @sap.unit                      :                       'currency_code'
      @Semantics.amount.currencyCode :                       'currency_code'
      @Measures.ISOCurrency          :                       currency_code
      price                          : DecimalFloat;
      @Common.IsCurrency
      @sap.semantics                 :                       'currency-code'
      @Semantics.currencyCode
      currency                       : Currency;
      virtual semanticURLtoPublisher : String;
      weight                         : DecimalFloat @title : 'Weight (DecimalFloat)';
      height                         : Double       @title : 'Height (Double)';
      width                          : Decimal(9, 2)@title : 'Width (Decimal(9,2))';
      visible                        : Boolean      @title : 'Visible (Boolean)';
      releaseDate                    : DateTime     @title : 'Release Date (DateTime)';
      readingTime                    : Time         @title : 'Reading Time (Time)';
      author                         : Association to one Authors;
      publisher                      : Association to one Publishers;
      to_BooksAuthorsAssignment      : Association to BooksAuthorsAssignment
                                         on to_BooksAuthorsAssignment.ASSOC_Book = $self;
};

entity BooksAuthorsAssignment {
  key Role         : String(50);
  key ASSOC_Book   : Association to one Books;
  key ASSOC_Author : Association to one Authors;
}

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

entity Publishers : managed {
  key ID   : Integer;
      name : String(111)@(
        title       : '{i18n>Publisher}',
        description : '{i18n>PublisherDesc}'
      );
      book : Association to many Books
               on book.publisher = $self;
};

@Aggregation.ApplySupported.PropertyRestrictions : true
view BooksAnalytics as
  select from Books {
    key ID,
        /*
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
            */
        @Analytics.Measure   : true
        @Aggregation.default : #SUM
        stock,
        @Analytics.Dimension : true
        currency
  };

@Aggregation.ApplySupported.PropertyRestrictions : true
view BooksViewWOkey as
  select from Books {
    ID,
    /*
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
        @Analytics.Dimension : true
        BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
        */
    @Analytics.Measure   : true
    @Aggregation.default : #SUM
    stock,
    @Analytics.Dimension : true
    currency
  };

@Aggregation.ApplySupported.PropertyRestrictions : true
view BooksViewWOtype as
  select from Books {
    key ID,
        /*
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.name,
            @Analytics.Dimension : true
            BooksAuthorsAssignment_ASSOC_Books.ASSOC_Author.country.code,
            */
        @Analytics.Measure   : true
        @Aggregation.default : #SUM
        stock,
        @Analytics.Dimension : true
        currency,
        1 as count
  };

entity Documents : cuid, managed {
  @Core.MediaType                   :  mediatype
  @Core.ContentDisposition.Filename :  filename
  content   : LargeBinary     @title : '{i18n>content}';
  @Core.IsMediaType                 :  true
  @mandatory
  mediatype : String not null;
  @mandatory
  filename  : String not null @title : '{i18n>filename}';
}

entity Orderstatuses : sap.common.CodeList {
  key code : String(1);
}

type Orderstatus : Association to Orderstatuses;
annotate Orderstatus with @title : '{i18n>Orderstatus}';
annotate Orderstatuses.name with @title : '{i18n>Orderstatus}'  @description : '{i18n>Orderstatus}';

entity Deliverystatuses : sap.common.CodeList {
  key code : String(1);
}

type Deliverystatus : Association to Deliverystatuses;
annotate Deliverystatus with @title : '{i18n>Deliverystatus}';
annotate Deliverystatuses.name with @title : '{i18n>Deliverystatus}'  @description : '{i18n>Deliverystatus}';

entity Orders : cuid, managed {
  OrderNo         : String    @title : 'Order Number'; //> readable key
  CustomerOrderNo : String(80)@title : 'Customer Order Number';
  Items           : Composition of many OrderItems
                      on Items.parent = $self;
  ShippingAddress : Composition of one OrderShippingAddress
                      on ShippingAddress.parent = $self;
  @readonly
  total           : DecimalFloat;
  totalTax        : Decimal(15, 2);
  totalWithTax    : Double;
  vipOrder        : Boolean   @title : '{i18n>vipOrder}';
  employeeOrder   : Boolean   @title : '{i18n>employeeOrder}';
  orderstatus     : Orderstatus;
  deliverystatus  : Deliverystatus;
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
  @(UI : {Placeholder : '{i18n>placeholderStreet}'})
  @(title : 'Street', )
  street : String(60);
  @(title : 'City', )
  city   : String(60);
};

entity Meterings : cuid {
  tennant     : String(128);
  application : String(64);
  userhash    : String(64);
  eventName   : String(32);
  entityName  : String(256);
  timestamp   : Timestamp @cds.on.insert : $now;
};

@Aggregation.ApplySupported.PropertyRestrictions : true
view MeteringAnalytics as
  select from Meterings {
    key ID,
        @Analytics.Dimension : true
        tennant,
        @Analytics.Dimension : true
        application,
        @Analytics.Dimension : true
        userhash,
        @Analytics.Dimension : true
        eventName,
        @Analytics.Dimension : true
        entityName,
        @Analytics.Dimension : true
        timestamp,
        @Analytics.Measure   : true
        @Aggregation.default : #SUM
        1 as calls : Integer
  };
