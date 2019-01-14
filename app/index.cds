/*
  This model controls what gets served to Fiori frontends...
*/

// 1) the annotated services per app...
using from './admin/fiori-service';
using from './browse/fiori-service';
using from './orders/fiori-service';


// 2) fiori annotations common to all apps...
using my.bookshop as my from '../db/data-model';


////////////////////////////////////////////////////////////////////////////
//
//	Books Lists
//
annotate my.Books with @(
	UI: {
		Identification: [{Value:title}],
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
		// Common.ValueList.Parameters:[
		// 	{ $Type:'Common.ValueListParameterInOut', LocalDataProperty:author_name, ValueListProperty:'name' },
		// ],
	);
}

annotate my.Authors with @(
	UI: {
		Identification: [{Value:name}],
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
