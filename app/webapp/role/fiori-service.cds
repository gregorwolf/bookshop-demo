using AdminService from '../../../srv/admin-service';

////////////////////////////////////////////////////////////////////////////
//
//	Role Management
//
/*
annotate AdminService.Roles with {
  ID @Common.FieldControl: #ReadOnly;
};
*/

annotate AdminService.Roles with {
  ID @Core.Computed;
}

annotate AdminService.Roles with {
  ID @(
    sap.value.list : 'fixed-values',
    Common         : {
      Text            : rolename,
      TextArrangement : #TextOnly
    }
  )
};

annotate AdminService.Roles with @(UI : {
  SelectionFields            : [rolename],

  LineItem                   : [
    {Value : rolename},
    {Value : description}
  ],
  HeaderInfo                 : {
    TypeName       : 'Role',
    TypeNamePlural : 'Roles',
    Title          : {
      Label : 'Role name ', //A label is possible but it is not considered on the ObjectPage yet
      Value : rolename
    },
    Description    : {Value : description}
  },

  Identification             : [ //Is the main field group
  {Value : rolename}, ],

  HeaderFacets               : [
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

  Facets                     : [
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Description',
      Target : '@UI.FieldGroup#Description'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Translations',
      Target : 'texts/@UI.LineItem'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Authorizations',
      Target : '@UI.FieldGroup#Authorizations'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Assigned Business Objects',
      Target : 'BusinessObjects/@UI.LineItem'
    },
    {
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Assigned Users',
      Target : 'Users/@UI.LineItem'
    },
  ],

  FieldGroup #Created        : {Data : [
    {Value : createdBy},
    {Value : createdAt},
  ]},
  FieldGroup #Modified       : {Data : [
    {Value : modifiedBy},
    {Value : modifiedAt},
  ]},
  FieldGroup #Description    : {Data : [
    {Value : rolename},
    {Value : description},
  ]},
  FieldGroup #Authorizations : {Data : [
    {Value : read},
    {Value : authcreate},
    {Value : authupdate},
    {Value : approve},
  ]},
}

);

annotate AdminService.Roles_texts with @(UI : {
  Identification  : [{Value : rolename}],
  SelectionFields : [
    locale,
    rolename
  ],
  LineItem        : [
    {
      Value : locale,
      Label : 'Locale'
    },
    {
      Value : rolename,
      Label : 'Title'
    },
    {
      Value : description,
      Label : 'Description'
    },
  ]
});

// Add Value Help for Locales
annotate AdminService.Roles_texts {
  locale @ValueList : {
    entity : 'Languages',
    type   : #fixed
  }
}

annotate AdminService.Role_BusinessObject with {
  ID             @UI.Hidden : true;
  BusinessObject @(
    Common           : {FieldControl : #Mandatory},
    ValueList.entity : 'BusinessObjects',
  );
};

annotate AdminService.Role_BusinessObject with @(
  UI.SelectionFields : [BusinessObject],

  UI.LineItem        : [
                        // {$Type: 'UI.DataField', Value: parent_ID },
                       {Value : BusinessObject}, ],

  UI.HeaderInfo      : {
    Title          : {Value : BusinessObject},
    TypeName       : 'Business Object',
    TypeNamePlural : 'Business Objects'
  }
);

annotate AdminService.Role_User with {
  ID   @UI.Hidden : true;
  user @(
    Common           : {FieldControl : #Mandatory},
    ValueList.entity : 'Users',
  );
};

annotate AdminService.Role_User with @(UI : {
  SelectionFields : [user],

  LineItem        : [
    {Value : parent.rolename},
    {Value : user},
    {Value : requester_ID},
  ],

  HeaderInfo      : {
    Title          : {Value : user},
    TypeName       : 'User',
    TypeNamePlural : 'Users'
  }
}) {
  requester @Common : {
    Text                     : requester.email,
    TextArrangement          : #TextOnly,
    ValueListWithFixedValues : false,
  };
};

annotate AdminService.User with {
  username @Common.FieldControl : #ReadOnly;
};

annotate AdminService.User with @(
  UI.SelectionFields  : [username],

  UI.LineItem         : [
    {
      $Type : 'UI.DataField',
      Value : username
    },
    {
      $Type : 'UI.DataField',
      Value : address.street
    },
    {
      $Type : 'UI.DataField',
      Value : address.city
    }
  ],

  UI.HeaderInfo       : {Title : {Value : username}},

  UI.Facets           : [{
    $Type  : 'UI.CollectionFacet',
    Label  : 'User',
    Facets : [{
      $Type  : 'UI.ReferenceFacet',
      Label  : 'User',
      Target : '@UI.FieldGroup#User'
    }, ]
  }],

  UI.FieldGroup #User : {
    Label : 'User',
    Data  : [
      {
        $Type : 'UI.DataField',
        Value : username
      },
      {
        $Type : 'UI.DataField',
        Value : address.street
      },
      {
        $Type : 'UI.DataField',
        Value : address.city
      }
    ]
  },

);
