import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
    currentUser: service(),
    session: service(),

    beforeModel() {
        return this._loadCurrentUser();
    },

    sessionAuthenticated() {
        this._super(...arguments);
        this._loadCurrentUser();
    },

    _loadCurrentUser() {
        console.log('loading the current user from app route');
        return this.get('currentUser').load()
            .catch(() => this.get('session').invalidate());
    }
});
