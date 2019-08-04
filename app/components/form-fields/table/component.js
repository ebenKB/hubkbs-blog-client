/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  columns: null,
  rows: null,

  actions: {
    tableAction() {
      console.log('we called the table action');
      get(this, 'tableAction')();
      // console.log('you want to apply an action to the table', { data });
    }
  }
});

