using {ZAPI_USER_NAME_SRV as external} from './external/ZAPI_USER_NAME_SRV';

service UserService @(requires: ['authenticated-user']) {

  entity UserDetails as projection on external.UserDetailsSet;

}
