using my.bookshop as db from '../db/';

service OrderService @(
  impl    : './order-service.js',
  requires: ['admin', ]
) {
  @odata.draft.enabled
  @cds.redirection.target
  /*
  @UI.CreateHidden: {$edmJson: {$Path: '/OrderService.EntityContainer/Authorizations.is_admin'}}
  @Common.SideEffects #effect: {
    SourceProperties: [taxPercentage],
    TargetProperties: [
      ComputedTotalWithTax,
      ComputedTax,
      //VirtualTotalWithTax
    ]
  }
  */
  entity Orders                  as
    select from db.Orders {
      @Measures.ISOCurrency   : currency.code
      @Core.Computed
      round(
        total * taxPercentage / 100, 2
      )            as ComputedTax          : Decimal(15, 2),
      @Measures.ISOCurrency   : currency.code
      @Core.Computed
      round(
        total + total * taxPercentage / 100, 2
      )            as ComputedTotalWithTax : Decimal(15, 2),
      virtual null as VirtualTotalWithTax  : Decimal(15, 2),
      *
    }
    actions {
      action deleteOrder();
      action deleteOrderItems();
      action checkConsistency();
      @(
        /*
        Core.OperationAvailable             : {$edmJson : {$Eq : [
          {$Path : 'in/orderstatus_code'},
          'N'
        ]}},
        */
        Core.OperationAvailable            : {$edmJson: {$In: [
          {$Path: 'in/orderstatus_code'},
          'N',
          'I'
        ]}},
        Common.SideEffects.TargetProperties: ['in/orderstatus_code'],
      )
      action checkConsistencyInline();
      @Core.OperationAvailable: {$edmJson: {$Path: '/AdminService.EntityContainer/Authorizations.is_admin'}}
      action setOrderParameters(vipOrder : db.Orders:vipOrder not null @UI.ParameterDefaultValue:false,
                                employeeOrder : db.Orders:employeeOrder not null @UI.ParameterDefaultValue:true );
      action NewAction(OrderNo : db.Orders:OrderNo not null, CustomerOrderNo : db.Orders:CustomerOrderNo);

    };

  annotate Orders with {
    ID @Core.Computed;
  }

  //------- auto-exposed --------
  entity OrderItems              as
    projection on db.OrderItems {
      @Core.Computed
      amount * book.price as ComputedTotal : Decimal(15, 2),
      *,
      book                                 : redirected to Books
    };

  entity OrderShippingAddress    as
    projection on db.OrderShippingAddress {
      *,
      street || ', ' || city as address : String
    };

  entity Books                   as projection on db.Books;
  entity A_SalesOrganizationText as projection on db.A_SalesOrganizationText;
  annotate A_SalesOrganizationText with @cds.odata.valuelist;

  @readonly
  @odata.singleton
  entity Userdetails {
    key username       : String;
        authorizations : Association to one Authorizations;

  };

  @readonly
  @odata.singleton
  entity Authorizations {
    key username      : String;
        is_admin      : Boolean;
        is_roleadmin  : Boolean;
        is_booksadmin : Boolean;
  };


  function readCdsEnv()                   returns String;

  action   sendmail(sender : String,
                    to : String,
                    @UI.ParameterDefaultValue:'Test'
                    subject : String,
                    body : String,
                    destination : String) returns String;

}
