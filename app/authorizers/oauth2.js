/* eslint-disable ember/new-module-imports */
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';
// import Ember from 'ember';
import { inject as service } from '@ember/service';

export default OAuth2Bearer.extend({
    session: service(),
});
