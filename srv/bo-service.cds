using my.bookshop as db from '../db/';

service BusinessObjectService @(requires: ['admin',
]) {
  @odata.draft.enabled
  entity BusinessObjectsCUID as projection on db.BusinessObjectsCUID;
}

// annotate BusinessObjectService.BusinessObjectsCUID with @hierarchy;
// declare a hierarchy with the qualifier "BusinessObjectsCUIDHierarchy"
annotate BusinessObjectService.BusinessObjectsCUID with @Aggregation.RecursiveHierarchy #BusinessObjectsCUIDHierarchy: {
  NodeProperty            : ID, // identifies a node, usually the key
  ParentNavigationProperty: parent // navigates to a node's parent
};

extend BusinessObjectService.BusinessObjectsCUID with @(
  // The computed properties expected by Fiori to be present in hierarchy entities
  Hierarchy.RecursiveHierarchy #BusinessObjectsCUIDHierarchy: {
    LimitedDescendantCount: LimitedDescendantCount,
    DistanceFromRoot      : DistanceFromRoot,
    DrillState            : DrillState,
    LimitedRank           : LimitedRank
  },
  // Disallow filtering on these properties from Fiori UIs
  Capabilities.FilterRestrictions.NonFilterableProperties   : [
    'LimitedDescendantCount',
    'DistanceFromRoot',
    'DrillState',
    'LimitedRank'
  ],
  // Disallow sorting on these properties from Fiori UIs
  Capabilities.SortRestrictions.NonSortableProperties       : [
    'LimitedDescendantCount',
    'DistanceFromRoot',
    'DrillState',
    'LimitedRank'
  ],
) columns { // Ensure we can query these columns from the database
  null as LimitedDescendantCount : Int16,
  null as DistanceFromRoot       : Int16,
  null as DrillState             : String,
  null as LimitedRank            : Int16
};
