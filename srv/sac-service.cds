using {com.sap.cloudDataIntegration as external} from './external/Planned_Events_Sample';

service SacService {
  function importData()  returns String;
  function getEntities() returns String;
  function getStates()   returns String;
  entity States as projection on external.State_66z5a03o60Master;
}
