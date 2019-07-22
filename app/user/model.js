import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  contact: DS.attr('string'),
  password: DS.attr('string'),
  initials: computed('firstanme', 'lastname', function() {
    return `${this.firstname.split('')[0]} ${this.lastname.split('')[0]}`;
  }),
  // posts: DS.hasMany('post')
});
