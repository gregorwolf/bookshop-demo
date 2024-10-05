/*
  This model controls what gets served to Fiori frontends...
*/

// 1) the annotated services per app...
using from './webapp/admin/fiori-service';
using from './webapp/approval/fiori-service';
using from './webapp/browse/fiori-service';
using from './webapp/orders/fiori-service';
using from './webapp/role/fiori-service';
using from './webapp/users/fiori-service';
using from './webapp/employees/fiori-service';
using from './webapp/workAssignments/fiori-service';
using from './webapp/productUI5latest/fiori-service';
using from './webapp/maintainer-group/ui';
using from './webapp/books-analytics/fiori-service';
using from './webapp/uom-mapping/annotations';
// 2) fiori annotations common to all apps...
using my.bookshop as my from '../db/schema';
using {sap.common} from '../srv/admin-service';

annotate common.Languages with @(
    Common.SemanticKey: [code],
    Identification    : [{Value: code}],
    UI                : {
        SelectionFields    : [
            name,
            descr
        ],
        LineItem           : [
            {Value: code},
            {Value: name},
        ],
        HeaderInfo         : {
            TypeName      : '{i18n>Language}',
            TypeNamePlural: '{i18n>Languages}',
            Title         : {Value: name},
            Description   : {Value: descr}
        },
        Facets             : [{
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Details}',
            Target: '@UI.FieldGroup#Details'
        }, ],
        FieldGroup #Details: {Data: [
            {Value: code},
            {Value: name},
            {Value: descr}
        ]},
    }
);

annotate my.Authors with @(UI: {
    Identification             : [{Value: name}],
    SelectionFields            : [
        ID,
        name,
        alive
    ],
    LineItem                   : [
        {
            $Type         : 'UI.DataFieldWithIntentBasedNavigation',
            Label         : 'To Books With Intent Based',
            Value         : ID,
            SemanticObject: 'Books',
            Action        : 'displayUI5latest',
            Mapping       : [{
                LocalProperty         : ID,
                SemanticObjectProperty: 'author_ID',
            }, ],
        },
        {
            $Type         : 'UI.DataFieldForIntentBasedNavigation',
            SemanticObject: 'Books',
            Action        : 'displayUI5latest',
            Label         : 'To Books For Intent Based',
            Inline        : true,
            Mapping       : [{
                LocalProperty         : ID,
                SemanticObjectProperty: 'author_ID',
            }, ],
        },
        {Value: name},
        {Value: dateOfBirth},
        {Value: placeOfBirth},
        {Value: dateOfDeath},
        {Value: placeOfDeath},
        {Value: country.name},
    ],
    HeaderInfo                 : {
        TypeName      : '{i18n>Author}',
        TypeNamePlural: '{i18n>Authors}',
        Title         : {Value: ID},
        Description   : {Value: name}
    },
    Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Details}',
            Target: '@UI.FieldGroup#Details'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Books}',
            Target: 'BooksAuthorsAssignment_ASSOC_Authors/@UI.LineItem'
        },
    ],
    FieldGroup #Details        : {Data: [
        {Value: name},
        {Value: dateOfBirth},
        {Value: placeOfBirth},
        {Value: dateOfDeath},
        {Value: placeOfDeath},
    ]},

    QuickViewFacets            : [{
        $Type : 'UI.ReferenceFacet',
        Label : '{i18n>Author}',
        Target: '@UI.FieldGroup#AuthorQuickView'
    }],
    FieldGroup #AuthorQuickView: {Data: [
        {
            $Type: 'UI.DataField',
            Value: name
        },
        {
            $Type: 'UI.DataField',
            Value: dateOfBirth
        },
        {
            $Type: 'UI.DataField',
            Value: placeOfBirth
        }
    ]}
});

annotate my.Documents with @(UI: {
    Identification     : [{Value: filename}],
    SelectionFields    : [filename, ],
    LineItem           : [
        {Value: filename},
        {Value: content},
    ],
    HeaderInfo         : {
        TypeName      : '{i18n>Document}',
        TypeNamePlural: '{i18n>Documents}',
        Title         : {Value: ID},
        Description   : {Value: filename}
    },
    Facets             : [{
        $Type : 'UI.ReferenceFacet',
        Label : '{i18n>Details}',
        Target: '@UI.FieldGroup#Details'
    }],
    FieldGroup #Details: {Data: [
        {Value: filename},
        {Value: content},
    ]},
});


annotate my.Publishers with @(UI: {
    Identification     : [{Value: name}],
    SelectionFields    : [
        ID,
        name
    ],
    LineItem           : [
        {Value: ID},
        {Value: name},
        {
            $Type         : 'UI.DataFieldWithIntentBasedNavigation',
            Label         : '{i18n>ToBooksIntentBased}',
            Value         : ID,
            SemanticObject: 'Books',
            Action        : 'display',
            Mapping       : [{
                $Type                 : 'Common.SemanticObjectMappingType',
                LocalProperty         : ID,
                SemanticObjectProperty: 'publisher_ID',
            }, ],
        }
    ],
    HeaderInfo         : {
        TypeName      : '{i18n>Publisher}',
        TypeNamePlural: '{i18n>Publishers}',
        Title         : {Value: ID},
        Description   : {Value: name}
    },
    Facets             : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Details}',
            Target: '@UI.FieldGroup#Details'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Books}',
            Target: 'books/@UI.LineItem'
        },
    ],
    FieldGroup #Details: {Data: [{Value: name}, ]},
});

////////////////////////////////////////////////////////////////////////////
//
//	Books Lists
//
annotate my.Books with @(UI: {
    PresentationVariant                : {
        $Type    : 'UI.PresentationVariantType',
        MaxItems : 10,
        SortOrder: [{
            $Type     : 'Common.SortOrderType',
            Property  : stock,
            Descending: true
        }]
    },
    Identification                     : [{Value: title}],
    SelectionFields                    : [
        ID,
        title,
        author.name,
        stock
    ],
    DataPoint #weight                  : {
        Value      : weight,
        ValueFormat: {
            $Type                   : 'UI.NumberFormat',
            ScaleFactor             : 1,
            NumberOfFractionalDigits: 2,
        },
    },
    DataPoint #bulletChartStockVsTarget: {
        //Search-Terms: #MicroChart, #microChartBullet
        Value       : stock,
        TargetValue : stockTarget,
        MinimumValue: 0,
    },
    Chart #bulletChartStockVsTarget    : {
        //Search-Terms: #MicroChart, #microChartBullet
        Title            : '{i18n>bulletChartStockVsTarget}',
        Description      : '{i18n>bulletChartStockVsTargetDescription}',
        ChartType        : #Bullet,
        Measures         : [stock],
        MeasureAttributes: [{
            $Type    : 'UI.ChartMeasureAttributeType',
            Measure  : stock,
            Role     : #Axis1,
            DataPoint: '@UI.DataPoint#bulletChartStockVsTarget',
        }, ],
    },
    LineItem                           : [
        {Value: ID},
        {Value: stock, },
        {
            $Type            : 'UI.DataFieldWithIntentBasedNavigation',
            ![@UI.Importance]: #High,
            Value            : relatedBook_ID,
            SemanticObject   : 'V4Books',
            Action           : 'displayUI5latest',
            Mapping          : [{
                $Type                 : 'Common.SemanticObjectMappingType',
                LocalProperty         : relatedBook_ID,
                SemanticObjectProperty: 'ID',
            }, ]
        },
        {
            //Search-Term: #MicroChart
            $Type            : 'UI.DataFieldForAnnotation',
            Label            : '{i18n>bulletChartStockVsTarget}',
            Target           : '@UI.Chart#bulletChartStockVsTarget',
            ![@UI.Importance]: #High,
        },
        {Value: stockTarget},
        {
            $Type : 'UI.DataFieldForAnnotation',
            Target: '@UI.DataPoint#weight',
        },
        {Value: title},
        {Value: author_ID},
        {
            Value               : author.name,
            ![@HTML5.LinkTarget]: '_blank',
        },
        /*
        {
            $Type          : 'UI.DataFieldWithIntentBasedNavigation',
            Value          : author.name,
            Label          : 'V4 Action for Navigation to Author',
            SemanticObject : 'V4Authors',
            Action         : 'displayUI5latest',
            Mapping        : [{
                $Type                  : 'Common.SemanticObjectMappingType',
                LocalProperty          : author.ID,
                SemanticObjectProperty : 'ID',
            }, ],
        },
        */
        {
            $Type               : 'UI.DataFieldWithIntentBasedNavigation',
            Value               : author.ID,
            Label               : 'V2 Action for Navigation to Author',
            SemanticObject      : 'Authors',
            Action              : 'displayUI5latest',
            ![@HTML5.LinkTarget]: '_blank',
            Mapping             : [{
                $Type                 : 'Common.SemanticObjectMappingType',
                LocalProperty         : author_ID,
                SemanticObjectProperty: 'ID',
            }, ]
        },
        {Value: price, },
        {
            Value: currency.symbol,
            Label: '',
        },
        {
            $Type               : 'UI.DataFieldWithUrl',
            Label               : '{i18n>ToPublisherUrl}',
            IconUrl             : 'sap-icon://chain-link',
            Value               : publisher_ID, // Works
            // Value  : 'Link', // Shows warning that this is not an i18n Text + Dumps in Browser
            // Value  : '{i18n>ToPublisherUrl}', // Dumps in Browser
            ![@HTML5.LinkTarget]: '_blank',
            Url                 : semanticURLtoPublisher,
        },
    /*
        {Value: semanticURLtoPublisher},
        {Value: '{i18n>WithUrl}'},
        {
            $Type: 'UI.DataFieldWithUrl',
            Label: '{i18n>ToPublisherUrl}',
            Value: '{i18n>WithUrl}',
            Url  : semanticURLtoPublisher,
        },
    {Value : publisher.name},
    {
        $Type: 'UI.DataFieldWithIntentBasedNavigation',
        Label: '{i18n>ToPublisherIntentBased}',
        Value: publisher.name,
        Mapping : [
            {
                $Type : 'Common.SemanticObjectMappingType',
                LocalProperty : publisher_ID,
                SemanticObjectProperty : 'ID',
            },
        ],
        SemanticObject: 'Publishers',
        Action: 'display'
    },
    {
        $Type : 'UI.DataFieldForIntentBasedNavigation',
        SemanticObject : 'Publishers',
        Action : 'display',
        Label: '{i18n>ToPublisherForIntentBased}',
        Mapping : [
            {
                $Type : 'Common.SemanticObjectMappingType',
                LocalProperty : publisher_ID,
                SemanticObjectProperty : 'ID',
            },
        ],
    },
    */
    // {Value: author_ID, Label:'{i18n>AuthorID}'},
    /*
    {
        $Type:'UI.DataFieldWithNavigationPath',
        Value: author_ID,
        Label:'{i18n>AuthorID}',
        Target:'author'
    },
    {
        $Type:'UI.DataFieldWithNavigationPath',
        Value: author.ID,
        Label:'Navigate to Author',
        SemanticObject: 'Authors',
        Action: 'manage'
    }
    */
    ]
}, ) {
    @Common.SemanticObject: 'V4Authors'
    /*
    @Common.SemanticObjectMapping : {$value : {
        LocalProperty          : author.ID,
        SemanticObjectProperty : 'ID',
    }}
    */
    author @(
             // Common.Text: { $value:author.name, "@UI.TextArrangement": #TextOnly },
           ValueList.entity: 'Authors',
                                        // Common.ValueList.Parameters:[
                                        // 	{ $Type:'Common.ValueListParameterInOut', LocalDataProperty:author_name, ValueListProperty:'name' },
                                        // ],
                             );
}

////////////////////////////////////////////////////////////////////////////
//
//	Books Details
//
annotate my.Books with @(UI: {HeaderInfo: {
    TypeName      : '{i18n>Book}',
    TypeNamePlural: '{i18n>Books}',
    Title         : {Value: title},
    ImageUrl      : 'https://raw.githubusercontent.com/gregorwolf/bookshop-demo/master/tests/app/Test.png',
    Description   : {Value: author.name}
}, });


////////////////////////////////////////////////////////////////////////////
//
//	Books Elements
//
annotate my.Books with {
    ID          @(
        title : '{i18n>ID}',
        Common: {
            Text           : title,
            TextArrangement: #TextFirst
        }
    );
    title       @title: '{i18n>Title}';
    author      @title: '{i18n>AuthorID}';
    price       @title: '{i18n>Price}';
    stock       @title: '{i18n>Stock}';
    stockTarget @title: '{i18n>StockTarget}';
    descr       @UI.MultiLineText;
}

////////////////////////////////////////////////////////////////////////////
//
//	Authors Elements
//
annotate my.Authors with {
    ID   @(
        title : '{i18n>ID}',
        Common: {
            Text           : name,
            TextArrangement: #TextFirst
        }
    )  @UI.HiddenFilter;
    name @title: '{i18n>AuthorName}';
}
