import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { get } from '@ember/object';

export default Route.extend({
  model() {
    return RSVP.hash({
      categories: get(this, 'store').findAll('category'),
      posts: get(this, 'store').createRecord('post', {
        title: 'Title from change set',
        body: 'This is the body from change set',
        image: null,
        category: null,
        comments: [],
      })
    });
  }
});
