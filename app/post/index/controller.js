import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import pagedArray from 'ember-cli-pagination/computed/paged-array';


export default Controller.extend({
  queryParams: ["page", "perPage"],

  // set default values for paging
  page: 1,
  perPage: 10,

  // get only the first two posts
  recentPost: computed('model' , function() {
    return this.model.slice(0, 2) ;
  }),

  // return all posts except the first two posts
  allPosts: computed('model', function() {
    return get(this, 'model').slice(2);
  }),

  // paginate the content
  paginatedPosts: pagedArray("allPosts", {
    page: computed.alias("parent.page"),
    pagedArray: computed.alias("parent.perPage")
  }),

  totalPages: computed.oneWay("paginatedPosts.totalPages"),
});
