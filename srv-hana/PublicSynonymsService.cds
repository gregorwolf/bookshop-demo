namespace external;

using {PUBLIC} from '../db-hana/externalTypes';

@(requires : ['admin', ])
service PublicSynonymsService {

  entity Synonyms     as projection on PUBLIC.SYNONYMS;
  entity TableColumns as projection on PUBLIC.TABLE_COLUMNS;
  entity ViewColumns  as projection on PUBLIC.VIEW_COLUMNS;

}
