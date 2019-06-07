import Route from '@ember/routing/route';

export default Route.extend({
    model({ id }) {
        if (id != 'undefined' && id != null) {
            return this.store.findRecord('post', id)
          }
    }
});
