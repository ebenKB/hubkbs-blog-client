import Base from 'ember-simple-auth/authenticators/base';
import { isEmpty } from '@ember/utils';
import config from 'hubkbs-blog/config/environment';
import { run } from '@ember/runloop';

export default Base.extend({
  tokenEndpoint: `${config.host}/${config.namespace}/users/login`,

  restore(data) {
    console.log('this is the data in the restore function', data.token);
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        console.log('it is not empty');
        resolve(data);
      } else {
        console.log('it is empty');
        reject();
      }
    });
  },

  authenticate(credentials) {
    const { email, password } = credentials;
    const data = JSON.stringify({
      email,
      password,
    });

    // specify the request options
    const reqOptions = {
      url: this.tokenEndpoint,
      method: 'POST',
      mode: 'cors',
      body: data,
      dataType: JSON,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return new Promise((resolve, reject) => {
      fetch(this.tokenEndpoint, reqOptions, {mode: 'no-cors'})
        .then((response) => {
          response.json()
            .then((data) => {
              // use run to wrapp asyn operation in ember
              run(() => {
                if (! data.error) {
                  resolve({ token: data.token, user_id: data.user._id });
                } else {
                  reject(data.error);
                }
              });
            }, (error) => {
              run(() => {
                reject(error);
              });
            });
        });
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
