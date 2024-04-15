using {my.bookshop as my} from './schema';
using {Attachments} from '@cap-js/attachments';

extend my.Orders with {
  attachments : Composition of many Attachments
}
