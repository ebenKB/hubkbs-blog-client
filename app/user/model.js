import DS from 'ember-data';

export default DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    email: DS.attr('string'),
    contact: DS.attr('string'), 
    password: DS.attr('string'),
    // posts: DS.hasMany('post')
});
