using AdminService from '../../../srv/admin-service';

annotate AdminService.SEPMRA_I_Product_E with @(UI : {
  ////////////////////////////////////////////////////////////////////////////
  //
  //	Lists of Orders
  //
  SelectionFields : [
    Product,
    ProductType,
    Supplier,
  ],
  LineItem        : [
    {Value : Product, },
    {Value : ProductType, },
    {Value : Supplier, },
  ]
}) {};
