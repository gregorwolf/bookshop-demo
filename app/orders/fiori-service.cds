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
		HeaderInfo: {
			TypeName: 'Order Item', TypeNamePlural: '	',
			Title: {
				Value: book.title
			},
			Description: {Value: book.descr}
		},
		// There is no filterbar for items so the selctionfileds is not needed
		SelectionFields: [ book_ID ],
		////////////////////////////////////////////////////////////////////////////
		//
		//	Lists of OrderItems
		//
		LineItem: [
			{Value: book_ID, Label:'Book'},
			{Value: amount, Label:'Quantity'},
			{Value: netAmount, Label: 'Net amount'}
		],
		Identification: [ //Is the main field group
			//{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
			{Value: book_ID, Label:'Book'},
			{Value: amount, Label:'Amount'},
			{Value: netAmount, Label: 'Net amount'}
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>OrderItems}', Target: '@UI.Identification'},
		],
	}
) {
	netAmount
		@Common.FieldControl: #ReadOnly;
		//ERROR ALERT: The following line refering to the parents currency code will lead to a server error
		//@Measures.ISOCurrency:parent.currency.code; //Bind the currency field to the amount field of the parent
};