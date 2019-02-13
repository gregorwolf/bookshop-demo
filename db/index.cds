/*
  This model controls what gets deployed to the database.
*/

// 1) The persistence data model
using from './data-model';

// 2) In addition, generic service providers need views for exposed entities
using from '../srv/admin-service';
using from '../srv/cat-service';
