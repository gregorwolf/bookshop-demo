using AdminService as service from '../../../srv/admin-service';

annotate service.BooksAnalytics with @Aggregation.ApplySupported : {
  Transformations        : [
    'aggregate',
    'topcount',
    'bottomcount',
    'identity',
    'concat',
    'groupby',
    'filter',
    'expand',
    'top',
    'skip',
    'orderby',
    'search'
  ],
  Rollup                 : #None,
  PropertyRestrictions   : true,
  GroupableProperties    : [
    authorID,
    genresID,
  ],
  AggregatableProperties : [
    {Property : count},
    {Property : stock},
  ],
};

annotate service.BooksAnalytics with @Analytics.AggregatedProperties : [
  {
    Name                 : 'sumStock',
    AggregationMethod    : 'sum',
    AggregatableProperty : stock,
    @Common.Label        : '{i18n>TotalStock}'
  },
  {
    Name                 : 'sumBooks',
    AggregationMethod    : 'sum',
    AggregatableProperty : count,
    @Common.Label        : '{i18n>TotalNumberOfBooks}'
  },
  {
    Name                 : 'countBooks',
    AggregationMethod    : 'countdistinct',
    AggregatableProperty : ID,
    @Common.Label        : '{i18n>Books}'
  }
];

annotate service.BooksAnalytics with @UI.PresentationVariant : {
  GroupBy        : [ // default grouping in table
  authorID],
  Total          : [ // default aggregation in table
  stock],
  Visualizations : ['@UI.LineItem', ]
};

annotate service.BooksAnalytics with @(
  UI.SelectionFields : [
    author_ID,
    genre_ID,
  ],

  UI.LineItem        : [
    {
      $Type : 'UI.DataField',
      Value : authorID
    },
    {
      $Type : 'UI.DataField',
      Value : count
    }
  ],

) {};
