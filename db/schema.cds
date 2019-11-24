namespace my.bookshop;
using { Currency, managed, cuid, User } from '@sap/cds/common';

entity Approval : managed, cuid {
    approver              : User        @( title: 'Approver',);
    changedEntity         : String(255) @( title: 'Changed Entity', );
    changedEntityKey      : LargeString @( title: 'Changed Entity Key', );
    changedEntityData     : LargeString @( title: 'Changed Entity Data', );
    status                : String(1) 
      @( title: 'Status', ) enum {
        requested = 'R' @( title: 'Requested');
        pending   = 'P' @( title: 'Pending');
        approved  = 'A' @( title: 'Approved');
        rejected  = 'N' @( title: 'Rejected');
    };
};

entity Books : managed {
  key ID : Integer;
  title  : localized String(111);
  descr  : localized String(1111);
  author : association to Authors { ID };
  stock  : Integer;
  price  : Decimal(9,2);
  currency : Currency;
  virtual semanticURLtoAuthor : String;
};

@Aggregation.ApplySupported.PropertyRestrictions: true
view BooksAnalytics as select from Books {
  key ID,
  @Analytics.Dimension: true
  author,
  @Analytics.Measure: true
  @Aggregation.default: #SUM
  stock,
  @Analytics.Dimension: true
  currency
};

entity Authors : managed {
  key ID : Integer;
  name   : String(111);
  dateOfBirth  : Date;
  dateOfDeath  : Date;
  placeOfBirth : String;
  placeOfDeath : String;
  alive: Boolean; 
  books  : Association to many Books on books.author = $self;
}

entity Orders : cuid, managed {
  OrderNo  : String @title:'Order Number'; //> readable key
  Items    : Composition of many OrderItems on Items.parent = $self;
  total    : Decimal(9,2) @readonly;
  currency : Currency;
}

entity OrderItems : cuid {
  parent  : Association to Orders not null;
  book   : Association to Books;
  amount : Integer;
  netAmount: Decimal(9,2);
}