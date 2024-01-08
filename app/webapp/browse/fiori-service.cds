using CatalogService from '../../../srv/cat-service';


annotate CatalogService.BookPlants with @(UI: {
  LineItem                    : [
    {Value: purchasingGroup},
    {Value: stock},
  ],
  DataPoint #dataPointForChart: {
                                 //Search-Terms: #microChartColumn, #microChartStackedBar, #microChartComparision
                                Value: stock},
  Chart #stackedBarChart      : {
    //Search-Term: #microChartStackedBar
    Title            : '{i18n>stackedBarChartStock}',
    Description      : '{i18n>stackedBarChartStockDescription}',
    ChartType        : #BarStacked,
    Measures         : [stock],
    MeasureAttributes: [{
      $Type    : 'UI.ChartMeasureAttributeType',
      Measure  : stock,
      Role     : #Axis1,
      DataPoint: '@UI.DataPoint#dataPointForChart',
    }]
  },
}) {};


////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.Books with @(UI: {

  HeaderFacets     : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Description}',
      Target: '@UI.FieldGroup#Descr'
    },
    {
      //Search-Term: #OPMicroChart
      $Type : 'UI.ReferenceFacet',
      Target: 'plants/@UI.Chart#stackedBarChart'
    },
  ],
  Facets           : [
    {
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Details}',
      Target: '@UI.FieldGroup#Price'
    },
    {
      $Type : 'UI.ReferenceFacet',
      Target: 'plants/@UI.LineItem',
    },
  ],
  FieldGroup #Descr: {Data: [{Value: descr}, ]},
  FieldGroup #Price: {Data: [
    {Value: price},
    {
      Value: currency.symbol,
      Label: '{i18n>Currency}'
    },
  ]}
}) {};
