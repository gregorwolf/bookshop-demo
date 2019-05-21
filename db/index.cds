/*
  This model controls what gets deployed to the database.
*/
namespace my.bookshop;

// 1) The persistence data model
using from './schema';

// 2) In addition, generic service providers need views for exposed entities
using from '../srv/admin-service';
using from '../srv/cat-service';
