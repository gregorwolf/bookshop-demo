/*
  This model controls what gets deployed to the database.
*/
namespace my.bookshop;

// 1) The persistence data model
using from './schema';
// persistence for roles
using from './roles';
// Types for the jobscheduler
using from './jobscheduler';
// Types for Cloud Foundry
using from './cloudFoundry';
// extension of sap.common.Currencies
using from './currencies';
// temporal example
using from './temporal';
// agreement example
using from './agreement';
// $session example
using from './directory';
// 2) In addition, generic service providers need views for exposed entities
using from '../srv/admin-service';
using from '../srv/cat-service';
using from '../srv/iot-service';
using from './maintainer-group';
