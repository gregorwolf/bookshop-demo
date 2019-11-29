using AdminService from '../../srv/admin-service';

////////////////////////////////////////////////////////////////////////////
//
//	Role Management
//
annotate AdminService.Role with {
  ID @Common.FieldControl: #ReadOnly;
};

annotate AdminService.Role with @(
  UI.SelectionFields: [ rolename ],

  UI.LineItem: [
    {$Type: 'UI.DataField', Value: rolename },
    {$Type: 'UI.DataField', Value: description }
  ],

  UI.HeaderInfo: {
    Title: { Value: rolename },
    Description: { Value: description }
  },

  UI.Facets: [
    {
      $Type:'UI.CollectionFacet',
      Label: 'Role',
      Facets:[
        { $Type: 'UI.ReferenceFacet', Label: 'Role',  Target: '@UI.FieldGroup#Role' },
      ]
    },
    {
      $Type:'UI.CollectionFacet',
      Label: 'Assigned Business Objects',
      Facets:[
        {$Type: 'UI.ReferenceFacet', Label: 'Assigned Business Objects', Target: 'BusinessObjects/@UI.LineItem'},
      ]
    },
    {
      $Type:'UI.CollectionFacet',
      Label: 'Assigned Users',
      Facets:[
        {$Type: 'UI.ReferenceFacet', Label: 'Assigned Users', Target: 'Users/@UI.LineItem'},
      ]
    }
  ],

  UI.FieldGroup#Role: {
    Label: 'Role',
    Data: [
    {$Type: 'UI.DataField', Value: rolename },
    {$Type: 'UI.DataField', Value: description },
    ]
  },

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
		{Value: BusinessObject_ID, Label:'Business Object'},
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
  UI.SelectionFields: [ user_username ],

  UI.LineItem: [
    // {$Type: 'UI.DataField', Value: parent_ID },
    {$Type: 'UI.DataField', Value: user_username },
  ],

  UI.HeaderInfo: {
    Title: { Value: user_username },
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