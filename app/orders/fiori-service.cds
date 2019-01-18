using AdminService from '../../srv/admin-service';

////////////////////////////////////////////////////////////////////////////
//
//	Common
//
annotate AdminService.OrderItems with {
	book @(
		// Common.Text: { $value:book.title, "@UI.TextArrangement": #TextOnly },
		Common.Text: book.title,
		Common.FieldControl: #Mandatory,
		ValueList.entity:'Books',
	);
	amount @(
		Common.FieldControl: #Mandatory
	);
}


////////////////////////////////////////////////////////////////////////////
//
//	Lists of Orders
//
annotate AdminService.Orders with @(
	UI: {
	  SelectionFields: [ createdAt, createdBy ],
		LineItem: [
			{Value: ID, Label:'ID'},
			{Value: createdBy, Label:'Customer'},
			{Value: createdAt, Label:'Date'},
		],
	}
);


////////////////////////////////////////////////////////////////////////////
//
//	Order Details
//
annotate AdminService.Orders with @(
	odata.draft.enabled,
	UI: {
  	HeaderInfo: {
  		TypeName: 'Order', TypeNamePlural: 'Orders',
  		Title: {Value: createdAt},
  		Description: {Value: createdBy}
  	},
		HeaderFacets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Created}', Target: '@UI.FieldGroup#Created'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Modified}', Target: '@UI.FieldGroup#Modified'},
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Test}', Target: '@UI.FieldGroup#Test'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>OrderItems}', Target: 'Items/@UI.LineItem'},
		],
		FieldGroup#Test: {
			Data: [
				{Value: total, Label:'Total (a Decimal)'},
				{Value: currency_code},
			]
		},
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
		}
	}
);



////////////////////////////////////////////////////////////////////////////
//
//	Lists of OrderItems
//
annotate AdminService.OrderItems with @(
	UI: {
	  SelectionFields: [ book_ID ],
		LineItem: [
			{Value: book_ID, Label:'Book'},
			{Value: amount, Label:'Amount'},
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>OrderItems}', Target: '@UI.LineItem'},
		],
	}
);
