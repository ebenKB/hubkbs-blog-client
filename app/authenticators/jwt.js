import Base from 'ember-simple-auth/authenticators/base';
import { isEmpty } from '@ember/utils';
import config from 'hubkbs-blog/config/environment';
import { run } from '@ember/runloop';

export default Base.extend({
  tokenEndpoint: `${config.host}/${config.namespace}/users/login`,

  restore(data) {
    return new Promise((resolve, reject) => {
      if (!isEmpty(data.token)) {
        resolve(data);
      } else {
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
      fetch(this.tokenEndpoint, reqOptions)
        .then((response) => {
          if (response.ok) {
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
          } else if (response.status == 404) reject('invalid credentials');
        })
        .catch((err) => reject(err));
    });
  },

  invalidate(data) {
    return Promise.resolve(data);
  }
});
