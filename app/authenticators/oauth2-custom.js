import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from '../config/environment';
// import Configuration from 'ember-simple-auth/configuration';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${config.host}/${config.namespace}/login`,
  // routeAfterAuthentication: '/'
});