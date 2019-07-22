import Route from '@ember/routing/route';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Route.extend(RouteMixin, {
  queryParams: {
    limit: {
      refreshModel: true
    },

    page: {
      refreshModel: true
    },

    isConfirmed: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('post', params);
  }
});
