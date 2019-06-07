import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  // load records for the front end
  model() {
    return RSVP.hash({
      posts: this.store.findAll('post'),
    });
  },
});
