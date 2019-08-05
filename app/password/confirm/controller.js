import Controller from '@ember/controller';
import config from 'hubkbs-blog/config/environment';
import { get } from '@ember/object';

export default Controller.extend({
  password: '',
  password_confirmation: '',
  token: '',
  actions: {
    confirmPasswordReset() {
      const reqOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          'password': this.password,
          'token': get(this, 'model').token,
        }),
        dataType: JSON,
      };
      fetch(`${config.host}/${config.namespace}/password/reset/confirm`, reqOptions)
        .then((response) => {
          console.log(response);
          // set(this, 'message', 'Please check your email for reset link');
        });
    }
  }
});
