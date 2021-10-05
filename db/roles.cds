namespace my.bookshop;

using {
  managed,
  cuid,
  User
} from '@sap/cds/common';

type BusinessObject : String(255);

entity Roles : cuid, managed {
  @mandatory
  rolename        : localized String(255) not null @(title : 'Role Name', );
  description     : localized String not null      @(title : 'Description', );
  read            : Boolean                        @(title : 'Read', );
  authcreate      : Boolean                        @(title : 'Create', );
  authupdate      : Boolean                        @(title : 'Update', );
  approve         : Boolean                        @(title : 'Approve', );
  BusinessObjects : Composition of many Role_BusinessObject
                      on BusinessObjects.parent = $self;
  Users           : Composition of many Role_User
                      on Users.parent = $self;
};

annotate Roles with @fiori.draft.enabled;

entity BusinessObjects {
  key ID       : BusinessObject;
      parent   : Association to BusinessObjects;
      children : Composition of many BusinessObjects
                   on children.parent = $self;
};

entity Role_BusinessObject : cuid {
  parent         : Association to Roles;
  BusinessObject : BusinessObject;
};

entity Role_User : cuid {
  parent : Association to Roles;
  user   : User;
};

entity Users {
  key username    : String @(title : 'Username', );
      employee    : Employee;
      responsible : Employee;
      address     : Composition of Address
                      on address.parent = $self;
      role        : Association to Roles;
};

entity Address : cuid, managed {
  parent : Association to Users;
  street : String(60)@(title : 'Street', );
  city   : String(60)@(title : 'City', );
};

type XSUAAUsers {
  id         : String;
  externalId : String;
  userName   : String;
}

entity Employees {
      @Common.Text : {
        $value              : email,
        @UI.TextArrangement : #TextOnly
      }
  key ID         : UUID;
      @(title : '{i18n>BusinessPartnerFirstName}')
      firstName  : String;
      @(title : '{i18n>BusinessPartnerName}')
      lastName   : String;
      @(title : '{i18n>BusinessPartnerCompany}')
      company    : String;
      @(title : '{i18n>BusinessPartnerDepartment}')
      department : String;
      @(title : '{i18n>BusinessPartnerEmailAddress}')
      @mandatory
      email      : String not null;
}

type Employee : Association to Employees;
annotate Employees with @UI.Identification : [{Value : email}, ];
annotate Employees with @cds.odata.valuelist;
