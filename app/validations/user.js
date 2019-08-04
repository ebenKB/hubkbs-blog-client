import {
  validatePresence,
  validateLength,
  // validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  firstname: [
    validatePresence(true, { message: ' '}),
    validateLength({min: 3}),
  ],

  lastname: [
    validatePresence(true, { message: '' }),
    validateLength({min: 3, message: 'name is too short'})
  ],

  contact: [
    validatePresence(true),
    validateLength({min: 3}),
    validateFormat('phone')
  ],

  password: [
    validatePresence(true, { message: ' '}),
    validateLength({min: 4}),
  ],
  email: [
    validateFormat('email'),
    validatePresence(true, { message: ' '})
  ]
};
