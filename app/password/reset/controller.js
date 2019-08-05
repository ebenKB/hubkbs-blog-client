import Controller from '@ember/controller';
import config from 'hubkbs-blog/config/environment';
import { set } from '@ember/object';

export default Controller.extend({
  email: '',
  message: '',
  actions: {
    requestPasswordReset() {
      const reqOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          'email': this.email,
        }),
        dataType: JSON,
      };
      fetch(`${config.host}/${config.namespace}/password/reset`, reqOptions)
        .then(() => {
          set(this, 'message', 'Please check your email for reset link');
        });
    }
  }
});
