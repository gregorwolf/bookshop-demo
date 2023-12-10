using {
  cuid,
  managed,
  sap.common.CodeList,
} from '@sap/cds/common';

namespace my.bookshop;

@assert.unique: {uom: [UOM, ], }
entity XRechnungUOMs : cuid, managed, CodeList {
  //Name : String;
  UOM        : String;
  MappingUOM : Composition of many XRechnungToB1UOMMappings
                 on MappingUOM.UOMxRechnung = $self;
}

@assert.unique: {mapping: [
  UOMxRechnung,
  UOMB1
], }
@cds.autoexpose
entity XRechnungToB1UOMMappings : cuid, managed {
  UOMxRechnung : Association to XRechnungUOMs;
  UOMB1        : String;
}
