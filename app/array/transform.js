/* eslint-disable ember/new-module-imports */
// import DS from 'ember-data';

// export default DS.Transform.extend({
//   deserialize(serialized) {
//     return serialized;
//   },

//   serialize(deserialized) {
//     return deserialized;
//   }
// });


import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (Ember.isArray(serialized)) {
      return Ember.A(serialized);
    } else {
      return Ember.A();
    }
  },

  serialize(deserialized) {
    if (Ember.isArray(deserialized)) {
      return Ember.A(deserialized);
    } else {
      return Ember.A();
    }
  }
});