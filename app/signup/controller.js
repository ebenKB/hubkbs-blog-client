import Controller from '@ember/controller';
import UserValidations from 'hubkbs-blog/validations/user';
import { get, set } from '@ember/object';

export default Controller.extend({
  UserValidations,
  firstname: '',
  lastname: '',
  email: '',
  contact: '',
  password: '',
  isAuthenticating: false,

  actions: {
    signup(changeset) {
      set(this, 'isAuthenticating', true);
      if (this._checkPassword(get(changeset, 'password'),
        get(changeset, 'password_confirmation'))) {
        if (get(changeset, 'isValid')) {
          changeset.save()
            .catch(() => set(this, 'isAuthenticating', false));
        }
      } else {
        set(this, 'isAuthenticating', false);
      }
    }
  },
  _checkPassword(pass1, pass2) {
    return pass1 === pass2;
  }
});
