/*
  This model controls what gets served to Fiori frontends...
*/

// 1) the annotated services per app...
using from './admin/fiori-service';
using from './browse/fiori-service';
using from './orders/fiori-service';


// 2) fiori annotations common to all apps...
using my.bookshop as my from '../db/schema';


////////////////////////////////////////////////////////////////////////////
//
//	Books Lists
//
annotate my.Books with @(
	UI: {
		Identification: [{Value:title}],
	  SelectionFields: [ ID, author.name, price, currency_code ],
		LineItem: [
			{Value: ID},
			{Value: title},
			{
				$Type:'UI.DataFieldWithIntentBasedNavigation', 
				Value: author.name, 
				Label:'{i18n>Author}', 
				SemanticObject: 'Author',
				Action: 'manage'
			},
			{
				$Type:'UI.DataFieldWithIntentBasedNavigation', 
				Value: author_ID, 
				Label:'{i18n>AuthorID}', 
				SemanticObject: 'Author',
				Action: 'manage'
			},
			// {Value: author_ID, Label:'{i18n>AuthorID}'},
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
	  SelectionFields: [ ID, name, alive ],
		LineItem: [
			{Value: ID},
			{Value: name},
			{Value: dateOfBirth},
			{Value: placeOfBirth},
			{Value: placeOfDeath},
			{Value: placeOfDeath},
		]
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
