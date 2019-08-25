using my.bookshop as db from '../db/schema';

service CatalogService {
  abstract entity DynamicAppLauncher {
    icon: String;
    info: String;
    infoState: String;
    number: Decimal(9,2);
    numberDigits: Integer;
    numberFactor: String;
    numberState: String;
    numberUnit: String;
    stateArrow: String;
    subtitle: String;
    title: String;
  }

  @readonly entity Books as projection on db.Books excluding {
    createdBy, modifiedBy
  };
  // OData Structure for Dynamic App Launchers
  function getNumberOfBooksForDynamicTile() returns DynamicAppLauncher;

  @readonly entity Authors as projection on db.Authors excluding {
    createdBy, modifiedBy
  };

  @requires: 'authenticated-user'
  @insertonly entity Orders as projection on db.Orders;
}
