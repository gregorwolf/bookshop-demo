service RecursiveService {
  @cds.persistence.skip : true
  define entity ItemGrouping {
    key ID       : String(10);
        children : Association to many ItemGrouping;
  }

  function getItemGrouping(includeLeaves : Boolean) returns ItemGrouping;

}
