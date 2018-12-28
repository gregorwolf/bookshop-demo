using my.bookshop as my from '../db/data-model';


////////////////////////////////////////////////////////////////////////////
//
//	Books Lists
//
annotate my.Books with @(
	UI: {
	  SelectionFields: [ ID, title, author.name, price, currency_code ],
		LineItem: [
			{Value: ID},
			{Value: title},
			{Value: author.name, Label:'{i18n>Author}'},
			{Value: author_ID},
			{Value: stock},
			{Value: price},
			{Value: currency.symbol, Label:''},
		]
	},
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
				{$Type: 'UI.DataField', Value: descr},
			]
		},
		FieldGroup#Price: {
			Data: [
				{$Type: 'UI.DataField', Value: price},
				{$Type: 'UI.DataField', Value: currency.symbol, Label: '{i18n>Currency}'},
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
	// odata.draft.enabled,
	UI: {
		Facets: [
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>General}', Target: '@UI.FieldGroup#General'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Details}', Target: '@UI.FieldGroup#Details'},
			{$Type: 'UI.ReferenceFacet', Label: '{i18n>Admin}', Target: '@UI.FieldGroup#Admin'},
		],
		FieldGroup#General: {
			Data: [
				{$Type: 'UI.DataField', Value: title},
				{$Type: 'UI.DataField', Value: author_ID},
				{$Type: 'UI.DataField', Value: descr},
			]
		},
		FieldGroup#Details: {
			Data: [
				{$Type: 'UI.DataField', Value: stock},
				{$Type: 'UI.DataField', Value: price},
				{$Type: 'UI.DataField', Value: currency.symbol, Label: '{i18n>Currency}'},
			]
		},
		FieldGroup#Admin: {
			Data: [
				{$Type: 'UI.DataField', Value: createdBy, "@UI.Importance": #Medium},
				{$Type: 'UI.DataField', Value: createdAt, "@UI.Importance": #Medium},
				{$Type: 'UI.DataField', Value: modifiedBy, "@UI.Importance": #Medium},
				{$Type: 'UI.DataField', Value: modifiedAt, "@UI.Importance": #Medium}
			]
		}
	}
);
