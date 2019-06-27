import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
  model({ id }) {
    let post = null;
    post = get(this, 'store').peekRecord('post', id);

    if(post == null) {
      post =this.store.findRecord('post', id);
    }
    return post;
  }
});
