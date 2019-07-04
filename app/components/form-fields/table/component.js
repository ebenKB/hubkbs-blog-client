/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Component from '@ember/component';

export default Component.extend({
  columns: null,
  rows: null,

  actions: {
    tableAction() {
      // console.log('you want to apply an action to the table', { data });
    }
  }
});

