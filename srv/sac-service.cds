using {com.sap.cloudDataIntegration as external} from './external/Planned_Events_Sample';

service SacService {
  function importData() returns String;
  entity State as projection on external.State_66z5a03o60Master;
}
