import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model(params) {
    // return get(this, 'store').findAll('post');
    return get(this, 'store').query('post', params);
  },
});
