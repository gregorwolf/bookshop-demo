using {
  cuid,
  managed,
  sap.common.CodeList,
} from '@sap/cds/common';

namespace my.bookshop;

@assert.unique: {mapping: [
  UOMxRechnung,
  UOMB1
], }
entity XRechnungToB1UOMMappings : cuid, managed {
  UOMxRechnung : Association to XRechnungUOM;
  UOMB1        : String;
}

@assert.unique: {uom: [UOM, ], }
entity XRechnungUOM : cuid, managed, CodeList {
  //Name : String;
  UOM        : String;
  MappingUOM : Association to many XRechnungToB1UOMMappings
                 on MappingUOM.UOMxRechnung = $self;
}
