using AdminService from '../../../srv/admin-service';

annotate AdminService.Approval with @(
  UI.SelectionFields      : [
    approver,
    changedEntity
  ],

  UI.LineItem             : [
    {
      $Type : 'UI.DataField',
      Value : approver
    },
    {
      $Type : 'UI.DataField',
      Value : changedEntity
    },
    {
      $Type : 'UI.DataField',
      Value : status
    },
    {
      $Type  : 'UI.DataFieldForAction',
      Label  : '{i18n>approve}',
      Action : 'AdminService.Approval/Approval_approve',
      Inline : true
    },
    {
      $Type  : 'UI.DataFieldForAction',
      Label  : '{i18n>reject}',
      Action : 'AdminService.Approval/Approval_reject',
      Inline : true
    }
  ],

  UI.HeaderInfo           : {
    Title       : {Value : approver},
    Description : {Value : changedEntity}
  },

  UI.Facets               : [{
    $Type  : 'UI.CollectionFacet',
    Label  : 'Approval',
    Facets : [{
      $Type  : 'UI.ReferenceFacet',
      Label  : 'Approval',
      Target : '@UI.FieldGroup#Approval'
    }, ]
  }],

  UI.FieldGroup #Approval : {
    Label : 'Approval',
    Data  : [
      {Value : approver},
      {Value : changedEntity},
      {Value : testDecimalFloat},
      {Value : testDecimal},
    ]
  },

) {
  createdAt @UI.HiddenFilter : false;
  createdBy @UI.HiddenFilter : false;
};
