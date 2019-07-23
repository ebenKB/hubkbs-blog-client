/* eslint-disable no-duplicate-imports */
/* eslint-disable no-undef */
import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    const userId = this.get('session.data.authenticated.user_id');
    if (!isEmpty(userId)) {
      // alert('it is not empty');
      return this.store.findRecord('user', userId)
        .then((user) => {
          this.set('user', user);
        });
    } else {
      return RSVP.resolve();
    }
  }
});
