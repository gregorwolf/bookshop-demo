using AdminService from '../../../srv/admin-service';

annotate AdminService.Books with {
  price @Common.FieldControl : #ReadOnly;
}

////////////////////////////////////////////////////////////////////////////
//
//	Common
//
annotate AdminService.Orders with {
  OrderNo @Common.FieldControl : #ReadOnly;
}

annotate AdminService.Orders with @(
  UI     : {
    ////////////////////////////////////////////////////////////////////////////
    //
    //	Lists of Orders
    //
    SelectionFields             : [
      createdAt,
      createdBy,
      deliverystatus_code,
      deliverystatus.name,
      orderstatus_code
    ],
    PresentationVariant         : {
      $Type     : 'UI.PresentationVariantType',
      Text      : 'Sort decending',
      SortOrder : [{
        $Type      : 'Common.SortOrderType',
        Property   : createdAt,
        Descending : true,
      }, ],
    },
    SelectionVariant #New       : {
      $Type         : 'UI.SelectionVariantType',
      ID            : 'New',
      Text          : 'New',
      SelectOptions : [{
        $Type        : 'UI.SelectOptionType',
        PropertyName : orderstatus_code,
        Ranges       : [{
          $Type  : 'UI.SelectionRangeType',
          Sign   : #I,
          Option : #EQ,
          Low    : 'N',
        }, ],
      }, ],
    },
    // According to
    // https://sapui5.hana.ondemand.com/#/topic/0d390fed360c4c58a0f0619338938de1
    // The FilterExpression of the SelectionVariantType is not supported.
    SelectionVariant #InProcess : {
      $Type         : 'UI.SelectionVariantType',
      ID            : 'InProcess',
      Text          : 'In Process',
      SelectOptions : [{
        $Type            : 'UI.SelectOptionType',
        PropertyName     : orderstatus_code,
        FilterExpression : ![orderstatus_code eq 'I']
      }, ],
    },
    SelectionVariant #Completed : {
      $Type         : 'UI.SelectionVariantType',
      ID            : 'Completed',
      Text          : 'Completed',
      SelectOptions : [{
        $Type        : 'UI.SelectOptionType',
        PropertyName : orderstatus_code,
        Ranges       : [{
          $Type  : 'UI.SelectionRangeType',
          Sign   : #I,
          Option : #EQ,
          Low    : 'C',
        }, ],

      }, ],
    },
    SelectionVariant #Empty     : {
      $Type         : 'UI.SelectionVariantType',
      ID            : 'Empty',
      Text          : 'Empty',
      SelectOptions : [{
        $Type        : 'UI.SelectOptionType',
        PropertyName : orderstatus_code,
        Ranges       : [{
          $Type  : 'UI.SelectionRangeType',
          Sign   : #I,
          Option : #EQ,
          Low    : '',
        }, ],

      }, ],
    },
    LineItem                    : [
      {
        Value : OrderNo,
        Label : 'Order Number'
      },
      {
        Value : createdBy,
        Label : 'Customer'
      },
      {
        Value : total,
        Label : 'Order Value'
      },
      {
        Value : createdAt,
        Label : 'Date'
      },
      {Value : orderstatus.name},
      {Value : deliverystatus.name},
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>checkConsistency}',
        Action : 'AdminService.EntityContainer/Orders_checkConsistency',
        Inline : false
      },
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>checkConsistencyV4}',
        Action : 'AdminService.checkConsistency',
        Inline : false
      },
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>setOrderParameters}',
        Action : 'AdminService.setOrderParameters',
        Inline : false
      },
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>checkConsistency}',
        Action : 'AdminService.Orders/Orders_checkConsistencyInline',
        Inline : true
      },
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>checkConsistencyV4}',
        Action : 'AdminService.checkConsistencyInline',
        Inline : true
      }
    ],
    ////////////////////////////////////////////////////////////////////////////
    //
    //	Order Details
    //
    HeaderInfo                  : {
      TypeName       : 'Order',
      TypeNamePlural : 'Orders',
      Title          : {
        Label : 'Order number ', //A label is possible but it is not considered on the ObjectPage yet
        Value : OrderNo
      },
      Description    : {Value : createdBy}
    },
    Identification              : [ //Is the main field group
      {
        Value : createdBy,
        Label : 'Customer'
      },
      {
        Value : createdAt,
        Label : 'Date'
      },
      {Value : OrderNo},
      {
        $Type  : 'UI.DataFieldForAction',
        Label  : '{i18n>checkConsistency}',
        Action : 'AdminService.Orders/Orders_checkConsistency',
        Inline : true
      },
    ],
    HeaderFacets                : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Created}',
        Target : '@UI.FieldGroup#Created'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Modified}',
        Target : '@UI.FieldGroup#Modified'
      },
    ],
    Facets                      : [
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>Details}',
        Target : '@UI.FieldGroup#Details'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>OrderItems}',
        Target : 'Items/@UI.LineItem'
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : '{i18n>ShippingAddress}',
        Target : 'ShippingAddress/@UI.Identification'
      },
    ],
    FieldGroup #Details         : {Data : [
      {
        Value : total,
        Label : 'Total'
      },
      {
        Value : currency_code,
        Label : 'Currency'
      },
      {Value : CustomerOrderNo},
      {Value : vipOrder},
      {Value : ShippingAddress.street},
      {
        Value                   : ShippingAddress.city,
        ![@Common.FieldControl] : #ReadOnly,
      },

    ]},
    FieldGroup #Created         : {Data : [
      {Value : createdBy},
      {Value : createdAt},
    ]},
    FieldGroup #Modified        : {Data : [
      {Value : modifiedBy},
      {Value : modifiedAt},
    ]},
  },
  Common : {SideEffects #AmountChanges : {
    SourceEntities   : [Items],
    TargetProperties : [total]
  }}
) {
  @UI.HiddenFilter      : false
  createdAt;
  @UI.HiddenFilter      : false
  createdBy;
  @Common.FieldControl  : #ReadOnly
  @Measures.ISOCurrency : currency.code
  total; //Bind the currency field to the amount field
//In all services we always find currency as the code and not as an object that contains a property code
//it seems to work but at least to me this is unconventional modeling.
};

//The enity types name is AdminService.my_bookshop_OrderItems
//The annotations below are not generated in edmx WHY?

annotate AdminService.OrderItems with {
  book   @(
    Common           : {
      Text         : book.title,
      FieldControl : #Mandatory
    },
    ValueList.entity : 'Books',
  );
  amount @(Common.FieldControl : #Mandatory);
}

annotate AdminService.OrderItems with @(
  UI     : {
    HeaderInfo      : {
      TypeName       : 'Order Item',
      TypeNamePlural : '	',
      Title          : {Value : book.title},
      Description    : {Value : book.descr}
    },
    // There is no filterbar for items so the selctionfileds is not needed
    SelectionFields : [book_ID],
    ////////////////////////////////////////////////////////////////////////////
    //
    //	Lists of OrderItems
    //
    LineItem        : [
      {
        Value : book_ID,
        Label : 'Book'
      },
      //The following entry is only used to have the assoication followed in the read event
      {
        Value : book.price,
        Label : 'Book Price'
      },
      {
        Value : amount,
        Label : 'Quantity'
      },
      {
        Value : netAmount,
        Label : 'Net amount'
      }
    ],
    Identification  : [ //Is the main field group
      //{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
      {
        Value : book_ID,
        Label : 'Book'
      },
      {
        Value : amount,
        Label : 'Amount'
      },
      {
        Value : netAmount,
        Label : 'Net amount'
      }
    ],
    Facets          : [{
      $Type  : 'UI.ReferenceFacet',
      Label  : '{i18n>OrderItems}',
      Target : '@UI.Identification'
    }, ],
  },
  Common : {
    SideEffects #AmountChanges : {
      SourceProperties : [amount],
      TargetProperties : [
        netAmount,
        parent.total
      ]
    },
    SideEffects #BookChanges   : {
      SourceProperties : [book_ID],
      TargetProperties : [
        netAmount,
        book.price,
        parent.total
      ]
    }
  }
) {
  netAmount
  @Common.FieldControl : #ReadOnly;
//ERROR ALERT: The following line refering to the parents currency code will lead to a server error
//@Measures.ISOCurrency:parent.currency.code; //Bind the currency field to the amount field of the parent
};


annotate AdminService.OrderShippingAddress with @(UI : {
  HeaderInfo      : {
    TypeName       : '{i18n>ShippingAddress}',
    TypeNamePlural : ' ',
    Title          : {Value : city},
    Description    : {Value : city}
  },
  // There is no filterbar for items so the selctionfileds is not needed
  SelectionFields : [city],
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Lists of ShippingAddress
  //
  LineItem        : [
    {Value : street, },
    {Value : city, },
  ],
  Identification  : [ //Is the main field group
    //{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
    {Value : street, },
    {Value : city, },
  ],
  Facets          : [{
    $Type  : 'UI.ReferenceFacet',
    Label  : '{i18n>ShippingAddress}',
    Target : '@UI.Identification'
  }, ],
}) {};
