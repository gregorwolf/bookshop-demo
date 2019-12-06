using AdminService from '../../../srv/admin-service';

annotate AdminService.Approval with @(
  UI.SelectionFields: [ approver, changedEntity ],

  UI.LineItem: [
    {$Type: 'UI.DataField', Value: approver },
    {$Type: 'UI.DataField', Value: changedEntity }
  ],

  UI.HeaderInfo: {
    Title: { Value: approver },
    Description: { Value: changedEntity }
  },

  UI.Facets: [
    {
      $Type:'UI.CollectionFacet',
      Label: 'Approval',
      Facets:[
        { $Type: 'UI.ReferenceFacet', Label: 'Approval',  Target: '@UI.FieldGroup#Approval' },
      ]
    }
  ],

  UI.FieldGroup#Approval: {
    Label: 'Approval',
    Data: [
    {$Type: 'UI.DataField', Value: approver },
    {$Type: 'UI.DataField', Value: changedEntity },
    ]
  },

) {
	createdAt @UI.HiddenFilter:false;
	createdBy @UI.HiddenFilter:false;
};
