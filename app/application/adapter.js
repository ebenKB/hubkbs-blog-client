import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  session: service(),
  host: config.host,
  namespace: config.namespace,

  authorize(xhr) {
    const { token } = this.get('session.data.authenticated');
    console.log('trying to authroize. this is the list');
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    if (isPresent(token)) {
      console.log('there is a token');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    } else {
      console.log('there is no token present');
    }
  },

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  headers: {
    // 'Content-Type': 'application/json',
    'Acess-Control-Allow-Origin': 'http://localhost:8080/api/v1/posts',
  },
});
