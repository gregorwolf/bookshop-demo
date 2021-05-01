using { sap } from '@sap/cds/common';

extend sap.common.Currencies with {
  decimalPlaces: Integer;
};

annotate sap.common.Currencies with {
  @CodeList.StandardCode: code
  @Common.UnitSpecificScale: decimalPlaces
  @Common.Text: name
  @sap.semantics: 'currency-code'
  code;
};
