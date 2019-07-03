import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
    session: service(),
    authorize(xhr) {
        let { access_token } = this.get('session.data.authenticated');
        if (isPresent(access_token)) {
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        }
    },

    host:config.host,
    namespace:config.namespace,
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    headers: {
        'Acess-Control-Allow-Origin' : "http://localhost:8080/api/v1/posts",
    },
});
