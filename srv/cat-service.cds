using my.bookshop as db from '../db/schema';
using {ZPDCDS_SRV as external} from './external/ZPDCDS_SRV.csn';

@cds.query.limit : 100
service CatalogService @(impl : './cat-service.js') {
  type DynamicAppLauncher {
    icon         : String;
    info         : String;
    infoState    : String;
    number       : Decimal(9, 2);
    numberDigits : Integer;
    numberFactor : String;
    numberState  : String;
    numberUnit   : String;
    stateArrow   : String;
    subtitle     : String;
    title        : String;
  }

  @Capabilities.SearchRestrictions.Searchable : true
  @readonly
  entity Books @(Capabilities : {
    InsertRestrictions : {
      Insertable  : true,
      Permissions : [{Scopes : [{Scope : 'admin'}]}]
    },
    UpdateRestrictions : {Updatable : true},
    DeleteRestrictions : {Deletable : true}
  }, )                          as projection on db.Books excluding {
    createdBy,
    modifiedBy
  } actions {
    action updateBook()
  };

  function getBooks() returns array of Books;
  // OData Structure for Dynamic App Launchers
  // https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/Cloud/en-US/8e7cec3cf6494b09a01d09606119b9dd.html
  function getNumberOfBooksForDynamicTile() returns DynamicAppLauncher;
  function hello(to : String) returns String;

  @readonly
  entity BooksAuthorsAssignment as projection on db.BooksAuthorsAssignment {
    *
  };

  @readonly
  entity Authors                as projection on db.Authors excluding {
    createdBy,
    modifiedBy
  };

  @readonly
  entity Publishers             as projection on db.Publishers excluding {
    createdBy,
    modifiedBy
  };

  // @readonly entity BusinessPartner as projection on bp.BusinessPartner;
  entity Orders @(restrict : [
    {
      grant : 'CREATE',
      to    : 'authenticated-user'
    },
    {
      grant : 'READ',
      where : 'createdBy = $user AND $user.level > 2'
    },
  ])                            as projection on db.Orders;

  @requires_ : 'authenticated-user'
  action submitOrder(book : Books:ID, amount : Integer);

  action multipleOrders(numberOfOrders : Integer);

  @requires_ : 'authenticated-user'
  @readonly
  entity UserScopes {
    key username      : String;
        is_admin      : Boolean;
        is_roleadmin  : Boolean;
        is_booksadmin : Boolean;
  };

  @readonly
  entity SEPMRA_I_Product_E     as projection on external.SEPMRA_I_Product_E excluding {
    CreationDateTime,
    LastChangedDateTime
  };

}
