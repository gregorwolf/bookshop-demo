namespace my.bookshop;

@cds.persistence.exists
entity GenresHierarchy {
      HIERARCHY_RANK        : Integer64;
      HIERARCHY_TREE_SIZE   : Integer64;
      HIERARCHY_PARENT_RANK : Integer64;
      HIERARCHY_ROOT_RANK   : Integer64;
      HIERARCHY_LEVEL       : Int32;
      HIERARCHY_IS_CYCLE    : Int16;
      HIERARCHY_IS_ORPHAN   : Int16;
      NODE_ID               : Int32;
      NAME                  : String(255);
      DESCR                 : String(1000);
      PARENT_ID             : Int32;
      parent                : Association to GenresHierarchy
                                on $self.PARENT_ID = parent.ID;
  key ID                    : Int32;
}
