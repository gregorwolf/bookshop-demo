/* checksum : b8b83d0d3facf0e0c547b63079582285 */
@cds.external : true
service ZSOCDS_SRV {};

@cds.persistence.skip : true
@sap.semantics        : 'aggregate'
@sap.label            : 'EPM-Demo: Kundenauftragsposition mit externen IDs'
@sap.content.version  : '1'
entity ZSOCDS_SRV.SEPM_I_SalesOrderItem_E {
      @sap.sortable         : 'false'
      @sap.filterable       : 'false'
  key ID                             : LargeString;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Kundenauftr.-ID'
      @sap.quickinfo        : 'EPM: Kundenauftragsnummer'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      SalesOrder                     : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.text             : 'SalesOrderItem_Text'
      @sap.label            : 'Zeile der Position'
      @sap.quickinfo        : 'EPM: Zeilennummer der Kundenauftragsposition'
      SalesOrderItem                 : String(10);
      @sap.label            : 'Beschreib.'
      @sap.quickinfo        : 'EPM: Textfeld für Namen und Beschreibungen'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      SalesOrderItem_Text            : String(255);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Produkt-ID'
      @sap.quickinfo        : 'EPM: Produkt-ID'
      Product                        : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.label            : 'Währungscode'
      @sap.quickinfo        : 'EPM: Währungscode'
      @sap.semantics        : 'currency-code'
      TransactionCurrency            : String(5);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Bruttobetrag'
      @sap.quickinfo        : 'EPM: Gesamtbruttobetrag'
      @sap.filterable       : 'false'
      GrossAmountInTransacCurrency   : Decimal(16, 3);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Nettobetr.'
      @sap.quickinfo        : 'EPM: Gesamtnettobetrag'
      @sap.filterable       : 'false'
      NetAmountInTransactionCurrency : Decimal(16, 3);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Steuerbetr'
      @sap.quickinfo        : 'EPM: Gesamtsteuerbetrag'
      @sap.filterable       : 'false'
      TaxAmountInTransactionCurrency : Decimal(16, 3);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'ATP-Status'
      @sap.quickinfo        : 'EPM: ATP-Status der Kundenauftragsposition'
      ProductAvailabilityStatus      : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Zeile der Position'
      @sap.quickinfo        : 'EPM: Zeilennummer der Kundenauftragsposition'
      OpportunityItem                : String(10);
};

@cds.persistence.skip : true
@sap.semantics        : 'aggregate'
@sap.label            : 'EPM-Demo: Kundenauftrag mit externen IDs'
@sap.content.version  : '1'
entity ZSOCDS_SRV.SEPM_I_SalesOrder_E {
      @sap.sortable         : 'false'
      @sap.filterable       : 'false'
  key ID                             : LargeString;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.text             : 'SalesOrder_Text'
      @sap.label            : 'Kundenauftr.-ID'
      @sap.quickinfo        : 'EPM: Kundenauftragsnummer'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      SalesOrder                     : String(10);
      @sap.label            : 'Beschreib.'
      @sap.quickinfo        : 'EPM: Textfeld für Namen und Beschreibungen'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      SalesOrder_Text                : String(255);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Ersteller'
      @sap.quickinfo        : 'EPM: Ersteller'
      CreatedByUser                  : String(12);
      @odata.type           : 'Edm.DateTimeOffset'
      @odata.precision      : 7
      @sap.aggregation.role : 'dimension'
      @sap.label            : 'Angelegt um'
      @sap.quickinfo        : 'EPM: Angelegt um'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      CreationDateTime               : Timestamp;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Letzter Änderer'
      @sap.quickinfo        : 'EPM: Letzter Änderer'
      LastChangedByUser              : String(12);
      @odata.type           : 'Edm.DateTimeOffset'
      @odata.precision      : 7
      @sap.aggregation.role : 'dimension'
      @sap.label            : 'Geändert um'
      @sap.quickinfo        : 'EPM: Geändert um'
      @sap.creatable        : 'false'
      @sap.updatable        : 'false'
      LastChangedDateTime            : Timestamp;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Wert'
      @sap.quickinfo        : 'EPM: Boolsch'
      IsCreatedByBusinessPartner     : Boolean;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Wert'
      @sap.quickinfo        : 'EPM: Boolsch'
      IsLastChangedByBusinessPartner : Boolean;
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Kunde'
      @sap.quickinfo        : 'EPM: Kunden-ID'
      Customer                       : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Kundenkontakt'
      @sap.quickinfo        : 'EPM: Kundenkontakt für Kundenauftrag'
      CustomerContact                : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.label            : 'Währungscode'
      @sap.quickinfo        : 'EPM: Währungscode'
      @sap.semantics        : 'currency-code'
      TransactionCurrency            : String(5);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Bruttobetrag'
      @sap.quickinfo        : 'EPM: Gesamtbruttobetrag'
      @sap.filterable       : 'false'
      GrossAmountInTransacCurrency   : Decimal(16, 3);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Nettobetr.'
      @sap.quickinfo        : 'EPM: Gesamtnettobetrag'
      @sap.filterable       : 'false'
      NetAmountInTransactionCurrency : Decimal(16, 3);
      @sap.aggregation.role : 'measure'
      @sap.unit             : 'TransactionCurrency'
      @sap.label            : 'Steuerbetr'
      @sap.quickinfo        : 'EPM: Gesamtsteuerbetrag'
      @sap.filterable       : 'false'
      TaxAmountInTransactionCurrency : Decimal(16, 3);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Lebenszyklusstatus'
      @sap.quickinfo        : 'EPM: Lebenszyklusstatus des Kundenauftrags'
      SalesOrderLifeCycleStatus      : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Bestätigungsstatus'
      @sap.quickinfo        : 'EPM: Bestätigungsstatus des Kundenauftrags'
      SalesOrderBillingStatus        : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Bestellstatus'
      @sap.quickinfo        : 'EPM: Bestellstatus des Kundenauftrags'
      SalesOrderDeliveryStatus       : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Gesamtstatus'
      @sap.quickinfo        : 'EPM: Gesamtstatus Kundenaufträge'
      SalesOrderOverallStatus        : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Opportunity-ID'
      @sap.quickinfo        : 'EPM: Opportunity-ID für SoD-IDoc-Verarbeitung'
      Opportunity                    : String(35);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Zahlweg'
      @sap.quickinfo        : 'EPM: Zahlweg für Kundenauftrag'
      SalesOrderPaymentMethod        : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Zahlungsbedingungen'
      @sap.quickinfo        : 'EPM: Zahlungsbedingungen für Kundenauftrag'
      SalesOrderPaymentTerms         : String(1);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Rechnungsempfänger'
      @sap.quickinfo        : 'EPM: Rechnungsempfänger des Kundenauftrags'
      BillToParty                    : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Partnerrolle'
      @sap.quickinfo        : 'EPM: Partnerrolle'
      BillToPartyRole                : String(3);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Warenempfänger'
      @sap.quickinfo        : 'EPM: Warenempfänger des Kundenauftrags'
      ShipToParty                    : String(10);
      @sap.aggregation.role : 'dimension'
      @sap.display.format   : 'UpperCase'
      @sap.label            : 'Partnerrolle'
      @sap.quickinfo        : 'EPM: Partnerrolle'
      ShipToPartyRole                : String(3);
      @cds.ambiguous        : 'missing on condition?'
      to_Item                        : Association to many ZSOCDS_SRV.SEPM_I_SalesOrderItem_E
                                         on to_Item.SalesOrder = SalesOrder;
};
