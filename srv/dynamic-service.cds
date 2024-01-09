using dynamic from '../db/dynamic-service';

service DynamicService {

  entity ServiceDefinitions as projection on dynamic.ServiceDefinition;

}
