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

annotate AdminService.Roles with @(
  UI: {
    SelectionFields: [ rolename ],

    LineItem: [
      { Value: rolename },
      { Value: description }
    ],
		HeaderInfo: {
			TypeName: 'Role', TypeNamePlural: 'Roles',
			Title: {
				Label: 'Role name ', //A label is possible but it is not considered on the ObjectPage yet
				Value: rolename
			},
			Description: {Value: description}
		},

		Identification: [ //Is the main field group
			{Value: rolename },
		],

		HeaderFacets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Created}', Target: '@UI.FieldGroup#Created'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Modified}', Target: '@UI.FieldGroup#Modified'},
		],

		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: 'Assigned Business Objects', Target: 'BusinessObjects/@UI.LineItem'},
			{$Type: 'UI.ReferenceFacet', Label: 'Assigned Users', Target: 'Users/@UI.LineItem'},
		],

		FieldGroup#Created: {
			Data: [
				{Value: createdBy},
				{Value: createdAt},
			]
		},
		FieldGroup#Modified: {
			Data: [
				{Value: modifiedBy},
				{Value: modifiedAt},
			]
		},
  }

);

annotate AdminService.Role_BusinessObject with {
	BusinessObject @(
		Common: {
			FieldControl: #Mandatory
		},
		ValueList.entity:'BusinessObjects',
	);	
};

annotate AdminService.Role_BusinessObject with @(
  UI.SelectionFields: [ BusinessObject ],

  UI.LineItem: [
    // {$Type: 'UI.DataField', Value: parent_ID },
		{Value: BusinessObject},
  ],

  UI.HeaderInfo: {
    Title: { Value: BusinessObject },
  }
);

annotate AdminService.Role_User with {
	user @(
		Common: {
			FieldControl: #Mandatory
		},
		ValueList.entity:'Users',
	);
};

annotate AdminService.Role_User with @(
  UI: {
    SelectionFields: [ user ],

    LineItem: [
      // {Value: parent_ID },
      { Value: user },
    ],

    HeaderInfo: {
      Title: { Value: user },
    }
  }
);

annotate AdminService.User with {
  username @Common.FieldControl: #ReadOnly;
};

annotate AdminService.User with @(
  UI.SelectionFields: [ username ],

  UI.LineItem: [
    {$Type: 'UI.DataField', Value: username },
    {$Type: 'UI.DataField', Value: address.street },
    {$Type: 'UI.DataField', Value: address.city }
  ],

  UI.HeaderInfo: {
    Title: { Value: username }
  },

  UI.Facets: [
    {
      $Type:'UI.CollectionFacet',
      Label: 'User',
      Facets:[
        { $Type: 'UI.ReferenceFacet', Label: 'User',  Target: '@UI.FieldGroup#User' },
      ]
    }
  ],

  UI.FieldGroup#User: {
    Label: 'User',
    Data: [
    {$Type: 'UI.DataField', Value: username },
    {$Type: 'UI.DataField', Value: address.street },
    {$Type: 'UI.DataField', Value: address.city }
    ]
  },

);