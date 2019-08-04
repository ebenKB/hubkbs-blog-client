import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  queryParams: ['isConfirmed'],

  isConfirmed: true,
  columns: null,
  rows: null,
  init() {
    this._super();
    set(this, 'columns', [
      {
        name: 'Action',
        valuePath: 'title',
      },
      {
        name: 'Title',
        valuePath: 'title'
      },
      {
        name: 'Description',
        valuePath: 'body',
      },
      {
        name: 'Author',
        valuePath: 'title'
      },
      {
        name: 'Date Created',
        valuePath: 'createdAt'
      }
    ]);
  },
  actions: {
    deletePost() {
      console.log('you want to delete this post');
    }
  }
});
