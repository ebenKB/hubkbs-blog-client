import Controller from '@ember/controller';
import UserValidations from 'hubkbs-blog/validations/user';
import { get } from '@ember/object';

export default Controller.extend({
  UserValidations,
  firstname: '',
  lastname: '',
  email: '',
  contact: '',
  password: '',

  actions: {
    signup(changeset) {
      // const user = {
      //   firstname: this.firstname,
      //   lastname: this.lastname,
      //   email: this.email,
      //   contact: this.contact,
      //   password: this.password,
      // };
      // const created = this.store.createRecord('user', user);
      // created.save();
      if (this._checkPassword(get(changeset, 'password'),
        get(changeset, 'password_confirmation'))) {
        if (get(changeset, 'isValid')) {
          changeset.save();
        }
      } else {
        console.log('passwords do not match');
      }
    }
  },
  _checkPassword(pass1, pass2) {
    return pass1 === pass2;
  }
});
