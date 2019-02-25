using AdminService from '../../srv/admin-service';


////////////////////////////////////////////////////////////////////////////
//
//	Common
//
annotate AdminService.OrderItems with {
	book @(
		// Common.Text: { $value:book.title, "@UI.TextArrangement": #TextOnly },
		Common: {
			Text: book.title,
			FieldControl: #Mandatory
		},
		ValueList.entity:'Books',
	);
	amount @(
		Common.FieldControl: #Mandatory
	);
}


annotate AdminService.Orders with @(
	UI: {
		////////////////////////////////////////////////////////////////////////////
		//
		//	Lists of Orders
		//
		SelectionFields: [ createdAt, createdBy ], //they are somehwere set to hddenFilter:true which means they are ignored
		LineItem: [
			//{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
			{Value: createdBy, Label:'Customer'},
			{Value: total, Label: 'Order Value' },
			{Value: createdAt, Label:'Date'}
		],
		////////////////////////////////////////////////////////////////////////////
		//
		//	Order Details
		//
		HeaderInfo: {
			TypeName: 'Order', TypeNamePlural: 'Orders',
			Title: {
				Label: 'Order from ', //A label is possible but it is not considered on the ObjectPage yet
				Value: createdAt
			},
			Description: {Value: createdBy}
		},
		Identification: [ //Is the main field group
			//{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
			{Value: createdBy, Label:'Customer'},
			{Value: createdAt, Label:'Date'},
		],
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
) {
	createdAt @UI.HiddenFilter:false; //These fields are set to not show up in the
	createdBy @UI.HiddenFilter:false; //FilterBar but I don't find anything better
	total
		@Common.FieldControl: #ReadOnly
		@Measures.ISOCurrency:currency.code; //Bind the currency field to the amount field
		//In all services we always find currency as the code and not as an object that contains a property code
		//it seems to work but at least to me this is unconventional modeling.
};



//The enity types name is AdminService.my_bookshop_OrderItems
//The annotations below are not generated in edmx WHY?
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
			//The following entry is only used to have the assoication followed in the read event
			{Value: book.price, Label:'Book Price'},
			{Value: amount, Label:'Quantity'},
			{Value: netAmount, Label: 'Net amount'}
		],
		Identification: [ //Is the main field group
			//{Value: ID, Label:'ID'}, //A guid shouldn't be on the UI
			{Value: book_ID, Label:'Book'},
			{Value: amount, Label:'Amount'},
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
