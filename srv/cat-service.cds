using my.bookshop as db from '../db/schema';

service CatalogService {
  type DynamicAppLauncher {
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
  // https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/Cloud/en-US/8e7cec3cf6494b09a01d09606119b9dd.html
  function getNumberOfBooksForDynamicTile() returns DynamicAppLauncher;
  function hello (to:String) returns String;

  @readonly entity Authors as projection on db.Authors excluding {
    createdBy, modifiedBy
  };

  @requires: 'authenticated-user'
  @insertonly entity Orders as projection on db.Orders;
}
