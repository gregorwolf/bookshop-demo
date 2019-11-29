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

entity Images {
  key ID : UUID;
  @Core.MediaType: mediatype
  content : LargeBinary;
  @Core.IsMediaType : true
  mediatype : String;
}

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

entity Users {
  key username : String @( title: 'Username', );
  address           : Composition of Address on address.parent=$self;
};

entity Address : cuid, managed {
  parent : Association to Users;
  street : String(60) @( title: 'Street', );
  city : String(60) @( title: 'City', );
};


entity BusinessObjects {
  key ID   : String @( title: 'Business Object', );
  parent   : Association to BusinessObjects;
  children : Composition of many BusinessObjects on children.parent = $self;
};

entity Role : cuid, managed {
      rolename    : String(255) @( title: 'Role Name', );
      description : String      @( title: 'Description', );
      BusinessObjects : Composition of many Role_BusinessObject on BusinessObjects.parent=$self;
      Users           : Composition of many Role_User on Users.parent=$self;
};

entity Role_BusinessObject : cuid, managed {
  parent : Association to Role;
  BusinessObject : Association to BusinessObjects;
};

entity Role_User : cuid, managed {
  parent : Association to Role;
  user : Association to Users;
};