namespace dynamic;

using {
  cuid,
  managed,
} from '@sap/cds/common';

entity ServiceDefinition : cuid, managed {
  ServiceName    : String(256);
  CSN            : LargeString;
  ServicePath    : String(256);
  Implementation : LargeString;
}
