using {ZSOCDS_SRV as external} from './external/ZSOCDS_SRV';

service SalesOrderService {

  entity SEPM_I_SalesOrder_E     as projection on external.SEPM_I_SalesOrder_E excluding {
    ID
  };

  entity SEPM_I_SalesOrderItem_E as projection on external.SEPM_I_SalesOrderItem_E excluding {
    ID
  };
}
