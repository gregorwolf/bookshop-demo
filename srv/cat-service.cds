using my.bookshop as db from '../db/schema';
using {ZPDCDS_SRV as external} from './external/ZPDCDS_SRV.csn';

@cds.query.limit: 100
service CatalogService @(impl: './cat-service.js') {
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

  @Capabilities.SearchRestrictions.Searchable: true
  @readonly
  entity Books @(Capabilities: {
    InsertRestrictions: {
      Insertable : true,
      Permissions: [{Scopes: [{Scope: 'admin'}]}]
    },
    UpdateRestrictions: {Updatable: true},
    DeleteRestrictions: {Deletable: true}
  }, )                          as
    projection on db.Books {
      *,
      virtual 'Value from Srv' as VirtualFromSrv : String,
    // Element or variable “VirtualFromSrvDefault” has not been foundCDS (compiler)(ref-undefined-var)
    // Extraneous DEFAULT, expecting ‘,’, ‘.’, ‘:’, ‘(’, ‘}’, ‘@’CDS (compiler)(syntax-extraneous-token)
    // virtual VirtualFromSrvDefault : String default 'Default value from Srv',
    }
    excluding {
      createdBy,
      modifiedBy
    }
    actions {
      action updateBook()
    };

  function getBooks()                       returns array of Books;
  // OData Structure for Dynamic App Launchers
  // https://help.sap.com/viewer/ad4b9f0b14b0458cad9bd27bf435637d/Cloud/en-US/8e7cec3cf6494b09a01d09606119b9dd.html
  function getNumberOfBooksForDynamicTile() returns DynamicAppLauncher;
  function hello(to : String)               returns String;

  @readonly
  entity BooksAuthorsAssignment as
    projection on db.BooksAuthorsAssignment {
      *
    };

  @readonly
  entity Authors                as
    projection on db.Authors
    excluding {
      createdBy,
      modifiedBy
    };

  @readonly
  entity Publishers             as
    projection on db.Publishers
    excluding {
      createdBy,
      modifiedBy
    };

  // @readonly entity BusinessPartner as projection on bp.BusinessPartner;
  entity Orders @(restrict: [
    {
      grant: [
        'CREATE',
        'UPDATE'
      ],
      to   : 'authenticated-user'
    },
    {
      grant: 'READ',
      where: 'createdBy = $user AND $user.level > 2'
    },
  ])                            as
    projection on db.OrdersView {
      ID,
      // @Core.Immutable
      OrderNo,
      salesOrganization,
      CustomerOrderNo,
      Items,
      ShippingAddress,
      total,
      totalTax,
      totalWithTax,
      orderstatus,
      deliverystatus,
      currency,
      createdBy,
    };

  @requires_: 'authenticated-user'
  action   submitOrder(book : Books : ID, amount : Integer);

  action   multipleOrders(numberOfOrders : Integer);

  @requires: 'authenticated-user'
  @odata.singleton
  @cds.persistency.skip
  @readonly
  entity UserScopes {
    key username      : String;
        is_admin      : Boolean;
        is_roleadmin  : Boolean;
        is_booksadmin : Boolean;
  };

  @readonly
  entity SEPMRA_I_Product_E     as
    projection on external.SEPMRA_I_Product_E
    excluding {
      CreationDateTime,
      LastChangedDateTime
    };

  @readonly
  @odata.singleton
  entity Userdetails {
    key username       : String;
        authorizations : Association to one Authorizations;

  };

  @readonly
  @odata.singleton
  entity Authorizations {
    key username      : String;
        is_admin      : Boolean;
        is_roleadmin  : Boolean;
        is_booksadmin : Boolean;
  };

  @readonly
  entity Genres                 as projection on db.Genres;

}


// Tell Fiori about the structure of the hierarchy
annotate CatalogService.Genres with @Aggregation.RecursiveHierarchy #GenresHierarchy: {
  ParentNavigationProperty: parent, // navigates to a node's parent
  NodeProperty            : ID, // identifies a node, usually the key
};

// Fiori expects the following to be defined explicitly, even though they're always the same
extend CatalogService.Genres with @(
  // The columns expected by Fiori to be present in hierarchy entities
  Hierarchy.RecursiveHierarchy #GenresHierarchy          : {
    LimitedDescendantCount: LimitedDescendantCount,
    DistanceFromRoot      : DistanceFromRoot,
    DrillState            : DrillState,
    LimitedRank           : LimitedRank
  },
  // Disallow filtering on these properties from Fiori UIs
  Capabilities.FilterRestrictions.NonFilterableProperties: [
    'LimitedDescendantCount',
    'DistanceFromRoot',
    'DrillState',
    'LimitedRank'
  ],
  // Disallow sorting on these properties from Fiori UIs
  Capabilities.SortRestrictions.NonSortableProperties    : [
    'LimitedDescendantCount',
    'DistanceFromRoot',
    'DrillState',
    'LimitedRank'
  ],
) columns { // Ensure we can query these fields from database
  null as LimitedDescendantCount : Int16,
  null as DistanceFromRoot       : Int16,
  null as DrillState             : String,
  null as LimitedRank            : Int16,
};
