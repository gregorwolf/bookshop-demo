using UomMappingsService as service from '../../../srv/uom-mapping-service';

annotate service.XRechnungUOMs with @(UI: {
    SelectionFields: [UOM],

    LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'UOM',
            Value: UOM,
        },
        {
            $Type: 'UI.DataField',
            Value: name,
        },
    ],
    HeaderInfo     : {
        TypeName      : 'UOM',
        TypeNamePlural: 'UOMs',
        Title         : {Value: UOM},
        Description   : {Value: name}
    },

    Identification : [{Value: UOM}, ],

    Facets         : [{
        $Type : 'UI.ReferenceFacet',
        Label : 'UOM Mappings',
        Target: 'MappingUOM/@UI.LineItem'
    }],
});

annotate service.XRechnungToB1UOMMappings with @(UI: {
    Identification: [{Value: UOMB1}, ],
    HeaderInfo    : {
        TypeName      : 'B1 UOM',
        TypeNamePlural: 'B1 UOMs',
        Title         : {Value: UOMB1},
    },
    LineItem      : [{
        $Type: 'UI.DataField',
        Value: UOMB1,
    }, ],
});
