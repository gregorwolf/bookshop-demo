using BusinessObjectService as service from '../../srv/bo-service';

annotate service.BusinessObjectsCUID with @(UI: {LineItem: [
  {Value: ID},
  {Value: name},
  {Value: validFrom},
  {Value: validTo},
  {Value: parent_ID}
], });

// Details
annotate service.BusinessObjectsCUID with @(UI: {
  Identification: [{Value: name}],
  HeaderInfo    : {
    TypeName      : '{i18n>BusinessObject}',
    TypeNamePlural: '{i18n>BusinessObjects}',
    Title         : {Value: name},
    Description   : {Value: ID}
  }
});
