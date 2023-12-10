using UomMappingsService as service from '../../../srv/uom-mapping-service';

annotate service.XRechnungUOMs with @(UI.LineItem: [
    {
        $Type: 'UI.DataField',
        Value: name,
    },
    {
        $Type: 'UI.DataField',
        Value: descr,
    },
    {
        $Type: 'UI.DataField',
        Label: 'UOM',
        Value: UOM,
    },
]);
