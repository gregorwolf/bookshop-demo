namespace iot;

using {
    managed,
    cuid
} from '@sap/cds/common';

entity Environment : managed, cuid {
    device_id   : String;
    received_at : Timestamp;
    air         : Integer;
    humidity    : Decimal(5, 2);
    pressure    : Decimal(6, 2);
    temperature : Decimal(5, 2);
}
