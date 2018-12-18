namespace my.bookshop;
using { Currency, managed } from '@sap/cds/common';

entity Books : managed {
  key ID : Integer;
  title  : localized String;
  descr  : localized String;
  author : Association to Authors;
  stock  : Integer;
  price  : Decimal(9,2);
  currency : Currency;
}

entity Authors : managed {
  key ID : Integer;
  name   : String;
  dateOfBirth : Date;
  dateOfDeath : Date;
  placeOfBirth : String;
  placeOfDeath : String;
  books  : Association to many Books on books.author = $self;
}

entity Orders : managed {
  key ID  : UUID;
  book    : Association to Books;
  amount  : Integer;
}
