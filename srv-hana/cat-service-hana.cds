using my.bookshop as db from '../db-hana/genres';
using {CatalogService} from '../srv/cat-service';

extend service CatalogService with {
  entity GenresHierarchy as
    projection on db.GenresHierarchy {
      HIERARCHY_RANK        as HierarchyRank,
      HIERARCHY_TREE_SIZE   as HierarchyTreeSize,
      HIERARCHY_PARENT_RANK as HierarchyParentRank,
      HIERARCHY_ROOT_RANK   as HierarchyRootRank,
      HIERARCHY_LEVEL       as HierarchyLevel,
      HIERARCHY_IS_CYCLE    as HierarchyIsCycle,
      HIERARCHY_IS_ORPHAN   as HierarchyIsOrphan,
      NODE_ID               as NodeId,
      NAME                  as name,
      DESCR                 as descr,
      PARENT_ID             as parent_ID,
      parent,
      ID                    as ID
    };
}
