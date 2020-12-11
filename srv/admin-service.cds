using my.bookshop as db from '../db/';

service AdminService @(impl: './admin-service.js', requires: ['admin', 'booksadmin']) {
  @odata.draft.enabled
  entity Approval as projection on db.Approval;
  entity Books @(		
    restrict: [ 
      { grant: 'READ', to: 'admin' },
      { grant: '*', to: 'booksadmin' },
    ],
    Capabilities: {
      InsertRestrictions: {Permissions:[{Scopes:[{Scope:'booksadmin'}]}]},
      UpdateRestrictions: {Updatable: true},
      DeleteRestrictions: {Deletable: true}
    },) as projection on db.Books;
  entity Images as projection on db.Images;
  // view BooksAnalytics as select from db.BooksAnalytics;
  entity Authors @(
    restrict: [ 
      { grant: 'READ', to: 'admin' },
    ]) as projection on db.Authors {
      *
    };

  entity Orders as select from db.Orders
    actions {
      action checkConsistency();
      action checkConsistencyInline();
    };
  annotate Orders with @odata.draft.enabled;

  //------- auto-exposed --------
  entity OrderItems as projection on db.OrderItems {
      *
      ,book: redirected to Books
    };
  entity OrderShippingAddress as projection on db.OrderShippingAddress;  
  //> these shall be removed but this would break the Fiori UI

  entity Roles 
  @(restrict: [ { grant: ['*'], to: 'roleadmin' }, ]) 
  as projection on db.Roles;
  annotate Roles with @odata.draft.enabled;	
  //------- auto-exposed --------
  entity Role_BusinessObject as projection on db.Role_BusinessObject;
  entity Role_User as projection on db.Role_User;
  //> these shall be removed but this would break the Fiori UI

	entity BusinessObjects 
	@(restrict: [ { grant: ['READ'], to: 'admin' }, ]) 
	as projection on db.BusinessObjects;

	entity Users 
	@(restrict: [ { grant: ['READ'], to: 'admin' }, ]) 
	as projection on db.Users;

  entity Address as projection on db.Address;

	@readonly
	entity UserScopes {
    key username:    String;
      is_admin:      Boolean;
      is_roleadmin:  Boolean;
      is_booksadmin: Boolean;
  };

  @readonly
  entity BooksAnalytics as projection on db.BooksAnalytics;

  function readJobs() returns array of db.Jobs;
  function readJobDetails(jobId: Integer) returns db.Jobs;
  function readJobSchedules(jobId: Integer) returns array of db.Schedules;
  action createJob(url: String, cron: String) returns Integer;
  action updateJob(jobId: Integer, active: Boolean) returns String;
  action deleteJob(jobId: Integer) returns String;
}
