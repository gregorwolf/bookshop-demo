using my.bookshop as my from '../db/data-model';


////////////////////////////////////////////////////////////////////////////
//
//	Books Lists
//
annotate my.Books with @(
	UI: {
		Identification: [ title ],
	  SelectionFields: [ ID, title, author.name, price, currency_code ],
		LineItem: [
			{Value: ID},
			{Value: title},
			{$Type:'UI.DataFieldWithNavigationPath', Value: author.name, Label:'{i18n>Author}', Target:'author'},
			{$Type:'UI.DataFieldWithNavigationPath', Value: author_ID, Label:'{i18n>AuthorID}', Target:'author'},
			{Value: stock},
			{Value: price},
			{Value: currency.symbol, Label:''},
		]
	},
) {
	author @(
		// Common.Text: { $value:author.name, "@UI.TextArrangement": #TextOnly },
		ValueList.entity:'Authors',
		Common.ValueList.Parameters:[
			{ $Type:'Common.ValueListParameterInOut', LocalDataProperty:author_name, ValueListProperty:'name' },
		],
	);
}

annotate my.Authors with @(
	UI: {
		Identification: [ name ],
	}
);


////////////////////////////////////////////////////////////////////////////
//
//	Books Details
//
annotate my.Books with @(
	UI: {
  	HeaderInfo: {
  		TypeName: '{i18n>Book}',
  		TypeNamePlural: '{i18n>Books}',
  		Title: {Value: title},
  		Description: {Value: author.name}
  	},
	}
);



////////////////////////////////////////////////////////////////////////////
//
//	Books Elements
//
annotate my.Books with {
	ID @title:'{i18n>ID}' @UI.HiddenFilter;
	title @title:'{i18n>Title}';
	author @title:'{i18n>AuthorID}';
	price @title:'{i18n>Price}';
	stock @title:'{i18n>Stock}';
	descr @UI.MultiLineText;
}


////////////////////////////////////////////////////////////////////////////
//
//	Authors Elements
//
annotate my.Authors with {
	ID @title:'{i18n>ID}' @UI.HiddenFilter;
	name @title:'{i18n>AuthorName}';
}



////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//

using CatalogService from './cat-service';
annotate CatalogService.Books with @(
	UI: {
		HeaderFacets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Description}', Target: '@UI.FieldGroup#Descr'},
		],
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Details}', Target: '@UI.FieldGroup#Price'},
		],
		FieldGroup#Descr: {
			Data: [
				{Value: descr},
			]
		},
		FieldGroup#Price: {
			Data: [
				{Value: price},
				{Value: currency.symbol, Label: '{i18n>Currency}'},
			]
		},
	}
);



////////////////////////////////////////////////////////////////////////////
//
//	Books for Admins
//

using AdminService from './admin-service';
annotate AdminService.Books with @(
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Details}', Target: '@UI.FieldGroup#Details'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'},
		],
		FieldGroup#General: {
			Data: [
				{Value: title},
				{Value: author_ID},
				{Value: descr},
			]
		},
		FieldGroup#Details: {
			Data: [
				{Value: stock},
				{Value: price},
				{Value: currency.symbol, Label: '{i18n>Currency}'},
			]
		},
		FieldGroup#Admin: {
			Data: [
				{Value: createdBy},
				{Value: createdAt},
				{Value: modifiedBy},
				{Value: modifiedAt}
			]
		}
	}
);




////////////////////////////////////////////////////////////////////////////
//
//	Order Mgmt
//


annotate my.OrderItems with {
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

annotate my.Orders with {
	dummy @(
		// Common.Text: { $value:book.title, "@UI.TextArrangement": #TextOnly },
		Common.Text: dummy.title,
		Common.FieldControl: #Mandatory,
		ValueList.entity:'Books',
	);
}

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

annotate AdminService.Orders with @(
	odata.draft.enabled,
	UI: {
	  SelectionFields: [ createdAt, createdBy ],
		LineItem: [
			{Value: ID, Label:'ID'},
			{Value: createdBy, Label:'Customer'},
			{Value: createdAt, Label:'Date'},
		],
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
				// {$Type:'UI.DataFieldWithNavigationPath', Value: dummy_ID, Label:'Dummy Book', Target:'dummy'},
				{$Type:'UI.DataField', Value: dummy_ID, Label:'Dummy Book', Target:'dummy'},
				{Value: anInteger, Label:'An Integer'},
				{Value: aString, Label:'A String'},
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
