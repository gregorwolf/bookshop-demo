CLASS zaitempricing_dg DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    INTERFACES: if_oo_adt_classrun.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zaitempricing_dg IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.
    TYPES: aitempricings_type TYPE STANDARD TABLE OF zaitempricing WITH KEY id item.
    DATA: aitempricings TYPE aitempricings_type.
    out->write( 'Starting Data Generation' ).
    aitempricings = VALUE aitempricings_type( ( id = '1' item = '1' validfrom = '20240101' validto = '20241231'  ) ).
    INSERT zaitempricing FROM TABLE @aitempricings.

  ENDMETHOD.
ENDCLASS.
