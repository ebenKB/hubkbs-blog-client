import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
  session: service(),
  currentUser: service('current-user'),
  beforeModel() {
    if (this.currentUser.user) {
      if (!this.currentUser.user.isAdmin) {
        console.log('you are not an admin');
        this.transitionTo('/');
      }
    } else this.transitionTo('/');
  }
});
