using AdminService from '../../../srv/admin-service';

annotate AdminService.Books with {
  price @Common.FieldControl: #ReadOnly;
}

////////////////////////////////////////////////////////////////////////////
//
//	Common
//
annotate AdminService.Orders with {
  OrderNo @Common.FieldControl: #ReadOnly;
}

annotate AdminService.Orders with @(UI: {
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Lists of Orders
  //
  SelectionFields                        : [
    OrderNo,
    Items.product,
    salesOrganization,
    Items.book_ID,
    createdAt,
    createdBy,
  ],
  SelectionPresentationVariant #New      : {
    $Type              : 'UI.SelectionPresentationVariantType',
    Text               : 'New',
    SelectionVariant   : ![@UI.SelectionVariant#New],
    PresentationVariant: ![@UI.PresentationVariant#Default]
  },
  SelectionPresentationVariant #InProcess: {
    $Type              : 'UI.SelectionPresentationVariantType',
    Text               : 'InProcess',
    SelectionVariant   : ![@UI.SelectionVariant#InProcess],
    PresentationVariant: ![@UI.PresentationVariant#Default]
  },
  SelectionPresentationVariant #Completed: {
    $Type              : 'UI.SelectionPresentationVariantType',
    Text               : 'Completed',
    SelectionVariant   : ![@UI.SelectionVariant#Completed],
    PresentationVariant: ![@UI.PresentationVariant#Default]
  },
  SelectionPresentationVariant #Empty    : {
    $Type              : 'UI.SelectionPresentationVariantType',
    Text               : 'Empty',
    SelectionVariant   : ![@UI.SelectionVariant#Empty],
    PresentationVariant: ![@UI.PresentationVariant#Default]
  },
  PresentationVariant #Default           : {
    Text          : 'Sort decending',
    RequestAtLeast: [
      orderstatus_code,
      createdAt
    ],
    SortOrder     : [{
      Property  : createdAt,
      Descending: true,
    }, ],
  },
  SelectionVariant #New                  : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'New',
    Text         : 'New',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: orderstatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'N',
      }, ],
    }, ],
  },
  // According to
  // https://ui5.sap.com/#/topic/0d390fed360c4c58a0f0619338938de1
  // The FilterExpression of the SelectionVariantType is not supported.
  /*
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
  */
  SelectionVariant #InProcess            : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'InProcess',
    Text         : 'In Process',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: orderstatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'I',
      }, ],

    }, ],
  },
  SelectionVariant #Completed            : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'Completed',
    Text         : 'Completed',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: orderstatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'C',
      }, ],

    }, ],
  },
  SelectionVariant #Empty                : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'Empty',
    Text         : 'Empty',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: orderstatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : '',
      }, ],

    }, ],
  },
  SelectionVariant #DeliveryNew          : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'DeliveryNew',
    Text         : 'Delivery New',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: deliverystatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'N',
      }, ],

    }, ],
  },
  SelectionVariant #DeliveryInProcess    : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'DeliveryInProcess',
    Text         : 'Delivery In Process',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: deliverystatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'I',
      }, ],

    }, ],
  },
  SelectionVariant #DeliveryCompleted    : {
    $Type        : 'UI.SelectionVariantType',
    ID           : 'DeliveryCompleted',
    Text         : 'Delivery Completed',
    SelectOptions: [{
      $Type       : 'UI.SelectOptionType',
      PropertyName: deliverystatus_code,
      Ranges      : [{
        $Type : 'UI.SelectionRangeType',
        Sign  : #I,
        Option: #EQ,
        Low   : 'C',
      }, ],

    }, ],
  },
  LineItem                               : [
    {
      Value: OrderNo,
      Label: 'Order Number'
    },
    {
      Value: createdBy,
      Label: 'Customer'
    },
    {
      Value: total,
      Label: 'Order Value'
    },
    {
      Value: createdAt,
      Label: 'Creation Date'
    },
    {Value: orderstatus_code},
    {
      Value: orderstatus.name,
      Label: '{i18n>Orderstatus}'
    },
    {
      Value: deliverystatus.name,
      Label: '{i18n>Deliverystatus}'
    },
    {
      $Type : 'UI.DataFieldForAction',
      Action: 'AdminService.EntityContainer/readCdsEnv',
      Label : '{i18n>readCdsEnv}'
    },
    {
      $Type : 'UI.DataFieldForAction',
      Action: 'AdminService.EntityContainer/sendmail',
      Label : '{i18n>sendmail}'
    },
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>checkConsistency}',
      Action: 'AdminService.EntityContainer/Orders_checkConsistency',
      Inline: false
    },
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>setOrderParameters}',
      Action: 'AdminService.EntityContainer/Orders_setOrderParameters',
      Inline: false
    },
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>checkConsistencyV4}',
      Action: 'AdminService.checkConsistency',
      Inline: false
    },
    {
      $Type  : 'UI.DataFieldForAction',
      Label  : '{i18n>setOrderParametersV4}',
      Action : 'AdminService.setOrderParameters',
      Inline : false,
      IconUrl: 'sap-icon://survey',
    },
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>checkConsistency}',
      Action: 'AdminService.Orders/Orders_checkConsistencyInline',
      Inline: true
    },
    {
      $Type  : 'UI.DataFieldForAction',
      Label  : '{i18n>checkConsistencyV4}',
      Action : 'AdminService.checkConsistencyInline',
      Inline : true,
      IconUrl: 'sap-icon://commission-check',
    }
  ],
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Order Details
  //
  HeaderInfo                             : {
    TypeName      : 'Order',
    TypeNamePlural: 'Orders',
    Title         : {
      Label: 'Order number ', //A label is possible but it is not considered on the ObjectPage yet
      Value: OrderNo
    },
    Description   : {Value: createdBy}
  },
  Identification                         : [ //Is the main field group
    {
      Value: createdBy,
      Label: 'Customer'
    },
    {
      Value: createdAt,
      Label: 'Date'
    },
    {Value: OrderNo},
    {
      $Type : 'UI.DataFieldForAction',
      Label : '{i18n>checkConsistency}',
      Action: 'AdminService.Orders/Orders_checkConsistency',
      Inline: true
    },
    {
      $Type : 'UI.DataFieldForAction',
      Action: 'AdminService.EntityContainer/sendmail',
      Label : '{i18n>sendmail}',
      Inline: true
    },
  ],
  HeaderFacets                           : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Created}',
      Target: '@UI.FieldGroup#Created'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Modified}',
      Target: '@UI.FieldGroup#Modified'
    },
  ],

  Facets                                 : [
    {
      $Type : 'UI.CollectionFacet',
      Label : '{i18n>Details}',
      Facets: [
        {
          $Type : 'UI.ReferenceFacet',
          Label : '{i18n>Details}',
          Target: '@UI.FieldGroup#Details',
        },
        {
          $Type : 'UI.ReferenceFacet',
          Label : '{i18n>OrderValue}',
          Target: '@UI.FieldGroup#OrderValue',
        },
        {
          $Type : 'UI.ReferenceFacet',
          Label : '{i18n>orderstatus}',
          Target: '@UI.FieldGroup#orderstatus',
        },
        {
          $Type        : 'UI.ReferenceFacet',
          Label        : '{i18n>deliverystatus}',
          Target       : '@UI.FieldGroup#deliverystatus',
          ![@UI.Hidden]: {$edmJson: {$If: [
            {$Eq: [
              {$Path: 'orderstatus_code'},
              'N'
            ]},
            true,
            false
          ]}, }
        },
      ]
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>OrderItems}',
      Target: 'Items/@UI.LineItem'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>ShippingAddress}',
      Target: 'ShippingAddress/@UI.Identification'
    },
  ],

  FieldGroup #OrderValue                 : {Data: [
    {
      Value: total,
      Label: 'Total'
    },
    {
      Value: totalTax,
      Label: 'Total Tax'
    },
    {
      Value: totalWithTax,
      Label: 'Total with Tax'
    },
    {
      Value: taxPercentage,
      Label: 'Tax Percentage'
    },
    {
      Value: ComputedTax,
      Label: 'Computed Tax'
    },
    {
      Value: ComputedTotalWithTax,
      Label: 'Computed Total with Tax'
    },
  /*
  // Remove as it leads to an endless loop in the Fiori Elements App
  {
    Value: VirtualTotalWithTax,
    Label: 'Virtual Total with Tax'
  },
  */
  ]},

  FieldGroup #Details                    : {Data: [
    {Value: salesOrganization},
    {
      Value: currency_code,
      Label: 'Currency'
    },
    {Value: CustomerOrderNo},
    {Value: vipOrder},
    {Value: ShippingAddress.street},
    {
      Value                  : ShippingAddress.city,
      ![@Common.FieldControl]: #ReadOnly,
    },
  ]},

  FieldGroup #Created                    : {Data: [
    {Value: createdBy},
    {Value: createdAt},
  ]},

  FieldGroup #Modified                   : {Data: [
    {Value: modifiedBy},
    {Value: modifiedAt},
  ]},

  FieldGroup #orderstatus                : {Data: [
    {Value: orderstatus_code},
    {
      Value: orderstatus.name,
      Label: '{i18n>Orderstatus}'
    },
  ]},

  FieldGroup #deliverystatus             : {Data: [
    {Value: deliverystatus_code},
    {
      Value: deliverystatus.name,
      Label: '{i18n>Deliverystatus}'
    },
  ]},
},
/*
Common : {SideEffects #AmountChanges : {
  SourceEntities   : [Items],
  TargetProperties : [total]
}}
*/
) {
  @UI.HiddenFilter                : false
  createdAt;
  @UI.HiddenFilter                : false
  createdBy;
  @Common.FieldControl            : #ReadOnly
  total; //Bind the currency field to the amount field
  @(ValueList.entity: 'A_SalesOrganizationText')
  @Common.ValueListWithFixedValues: true
  @mandatory
  salesOrganization;
//In all services we always find currency as the code and not as an object that contains a property code
//it seems to work but at least to me this is unconventional modeling.
};

//The enity types name is AdminService.my_bookshop_OrderItems
//The annotations below are not generated in edmx WHY?

annotate AdminService.OrderItems with {
  book   @(
    Common          : {
      Text        : book.title,
      FieldControl: #Mandatory
    },
    ValueList.entity: 'Books',
  );
  amount @(Common.FieldControl: #Mandatory);
  @(ValueList.entity: 'SEPMRA_I_Product_E')
  @mandatory
  product;
}

annotate AdminService.OrderItems with @(UI: {
  HeaderInfo         : {
    TypeName      : 'Order Item',
    TypeNamePlural: '	',
    Title         : {Value: book.title},
    Description   : {Value: book.descr}
  },
  // There is no filterbar for items so the selctionfileds is not needed
  SelectionFields    : [book_ID],
  PresentationVariant: {
    $Type         : 'UI.PresentationVariantType',
    Text          : 'Sort ascending',
    RequestAtLeast: [itemNo],
    SortOrder     : [{
      $Type     : 'Common.SortOrderType',
      Property  : itemNo,
      Descending: false,
    }, ],
  },
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Lists of OrderItems
  //
  LineItem           : [
    {Value: itemNo, },
    {
      $Type         : 'UI.DataFieldWithIntentBasedNavigation',
      Value         : book_ID,
      Label         : 'Book',
      SemanticObject: 'V4Books',
      Action        : 'displayUI5latest',
      Mapping       : [{
        LocalProperty         : book_ID,
        SemanticObjectProperty: 'ID',
      }, ]
    },
    //The following entry is only used to have the assoication followed in the read event
    {
      Value: book.price,
      Label: 'Book Price'
    },
    {
      Value: amount,
      Label: 'Quantity'
    },
    {
      Value: netAmount,
      Label: 'Net amount'
    },
    {
      Value: ComputedTotal,
      Label: 'Computed Total'
    }
  ],
  Identification     : [ //Is the main field group
    //{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
    {
      Value: book_ID,
      Label: 'Book'
    },
    {
      Value: amount,
      Label: 'Amount'
    },
    {
      Value: netAmount,
      Label: 'Net amount'
    }
  ],
  Facets             : [{
    $Type : 'UI.ReferenceFacet',
    Label : '{i18n>OrderItems}',
    Target: '@UI.Identification'
  }, ],
},
/*
Common: {
  SideEffects #AmountChanges: {
    SourceProperties: [amount],
    TargetProperties: [
      netAmount,
      parent.total
    ]
  },
  SideEffects #BookChanges  : {
    SourceProperties: [book_ID],
    TargetProperties: [
      netAmount,
      book.price,
      parent.total
    ]
  }
}
*/
) {
  netAmount
  @Common.FieldControl: #ReadOnly;
//ERROR ALERT: The following line refering to the parents currency code will lead to a server error
//@Measures.ISOCurrency:parent.currency.code; //Bind the currency field to the amount field of the parent
};


annotate AdminService.OrderShippingAddress with @(UI: {
  HeaderInfo     : {
    TypeName      : '{i18n>ShippingAddress}',
    TypeNamePlural: ' ',
    Title         : {Value: city},
    Description   : {Value: city}
  },
  // There is no filterbar for items so the selctionfileds is not needed
  SelectionFields: [city],
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Lists of ShippingAddress
  //
  LineItem       : [
    {Value: street, },
    {Value: city, },
  ],
  Identification : [ //Is the main field group
    //{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
    {Value: street, },
    {Value: city, },
  ],
  Facets         : [{
    $Type : 'UI.ReferenceFacet',
    Label : '{i18n>ShippingAddress}',
    Target: '@UI.Identification'
  }, ],
}) {};
