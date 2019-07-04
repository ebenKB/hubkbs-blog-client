import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  password: null,
  email: null,

  actions: {
    authenticate() {
      const { email, password } = this.getProperties('email', 'password');
      this.get('session').authenticate('authenticator:oauth2-custom', email, password)
        .then(() => {
          this.transitionToRoute('/');
        })
        .catch(() => {
          // you can set the error to the login error message
          // console.log('an error occured while loggin in.', reason.error || reason);
        });
    }
  }
});
