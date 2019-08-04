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
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    if (isPresent(token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    }
  },

  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  headers: {
    // 'Content-Type': 'application/json',
    // 'Acess-Control-Allow-Origin': 'http://localhost:8080/api/v1/posts',
    // 'Acess-Control-Allow-Origin': 'https://hubkbsblog.herokuapp.com',
  },
});
