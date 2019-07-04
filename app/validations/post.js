import {
  validatePresence,
  validateLength,
  // validateConfirmation,
  // validateFormat
} from 'ember-changeset-validations/validators';

export default {
  title: [
    validatePresence(true),
    validateLength({min: 8}),
  ],

  body: [
    validatePresence(true),
    validateLength({min: 32, message: 'Body is too short. Make sure it is at least 32 characters'})
  ],

  // image: [
  //   validateFormat({type: 'file'})
  // ],

  category: [
    validatePresence(true),
    validateLength({min: 3})
  ]
};
