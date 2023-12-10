using {my.bookshop as my} from '../db/';

service UomMappingsService {

  @odata.draft.enabled
  entity XRechnungUOMs as projection on my.XRechnungUOMs;

}
