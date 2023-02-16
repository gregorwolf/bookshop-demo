using my.bookshop as db from '../db/';

service AnalyticsService @(requires: ['admin', ]) {
  @readonly
  entity BooksAnalytics as projection on db.BooksAnalytics;
}
