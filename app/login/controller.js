import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set, get } from '@ember/object';

export default Controller.extend({
  session: service(),
  password: null,
  email: null,
  isAuthenticating: false,

  actions: {
    authenticate() {
      set(this, 'isAuthenticating', true);
      this.get('session').authenticate('authenticator:jwt',
        { email: this.email, password: this.password })
        .then(() => {
          // this.transitionToRoute('/');
          set(this, 'isAuthenticating', false);
        })
        .catch(() => {
          set(this, 'isAuthenticating', false);
          get(this, 'session').invalidate();
          // you can set the error to the login error message
          // console.log('an error occured while loggin in.', reason.error || reason);
        });
    }
  }
});
