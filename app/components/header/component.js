import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  session: service(),
  currentUser: service('current-user'),

  didInsertElement() {
    $('.ui.dropdown').dropdown('hide');
  },

  actions: {
    invalidateSession() {
      get(this, 'session').invalidate();
    }
  }
});
