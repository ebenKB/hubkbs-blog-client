import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
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
    // set(this, 'columns', [
    //     {
    //         name: `First Name`,
    //         valuePath: `firstName`
    //     },
    //     {
    //         name: `Last Name`,
    //         valuePath: `lastName`
    //     }
    // ]),

    // set(this, 'rows', [
    //     {
    //         firstName: 'Tony',
    //         lastName: 'Stark',
    //     },
    //     {
    //         firstName: 'Tom',
    //         lastName: 'Dale',
    //     }
    // ])
  }
});


// 'Action','Title', 'Body','Created By', 'Created at'