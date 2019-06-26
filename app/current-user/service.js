import Service from '@ember/service';
import {  get } from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),

  load() {
    let userId = this.get('session.data.authenticated.user._id');
    if(!isEmpty(userId)) {
      return get(this, 'store').findRecord('user', userId)
        .then((user) => {
          this.set('user', user);
        });
    }  else {
      return RSVP.resolve();
    }
  }
});
