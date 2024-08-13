using CatalogService from '../../../srv/cat-service';

////////////////////////////////////////////////////////////////////////////
//
//	Books Object Page
//
annotate CatalogService.Genres with @(
  Aggregation.RecursiveHierarchy #GenresHierarchy: {
    NodeProperty            : ID,
    ParentNavigationProperty: parent
  },
  Hierarchy.RecursiveHierarchy #GenresHierarchy  : {
    LimitedDescendantCount: _LimitedDescendantCount,
    DistanceFromRoot      : _DistanceFromRoot,
    DrillState            : drillState,
    Matched               : _Matched,
    MatchedDescendantCount: _MatchedDescendantCount
  },
  Capabilities.FilterRestrictions                : {NonFilterableProperties: [
    _LimitedDescendantCount,
    _DistanceFromRoot,
    drillState,
    _Matched,
    _MatchedDescendantCount
  ]},
  Capabilities.SortRestrictions                  : {NonSortableProperties: [
    _LimitedDescendantCount,
    _DistanceFromRoot,
    drillState,
    _Matched,
    _MatchedDescendantCount
  ]},
  UI                                             : {
    SelectionFields    : [
      name,
      parent_ID,
    ],
    LineItem           : [
      {
        $Type: 'UI.DataField',
        Value: ID,
      },
      /*
      {
        $Type          : 'UI.DataFieldWithIntentBasedNavigation',
        Value          : ID,
        SemanticObject : 'genres',
        //SemanticObject : 'V4Authors',
        Action         : 'display',
      },
      */
      {Value: parent_ID},
      {Value: name},
      {Value: genreSemanticObject},
      {Value: nodeType},
      {Value: nodeType_FC},
    ],
    Facets             : [{
      $Type : 'UI.ReferenceFacet',
      Label : '{i18n>Details}',
      Target: '@UI.FieldGroup#Details'
    }],
    FieldGroup #Details: {Data: [
      {Value: ID},
      {Value: name},
      {Value: genreSemanticObject},
      {Value: nodeType},
      {Value: nodeType_FC},
    ]},
  }
) {
  @Common.FieldControl: nodeType_FC
  nodeType;
};
