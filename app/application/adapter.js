import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
    host:config.host,
    namespace:config.namespace,
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    headers: {
        'Acess-Control-Allow-Origin' : "http://localhost:8080/api/v1/posts",
	},
});
