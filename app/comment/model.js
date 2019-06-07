import DS from 'ember-data';

export default DS.Model.extend({
    text: DS.attr('string'),
    // post: DS.belongsTo('post', {async: true}),
    user: DS.belongsTo('user', { async: true}),
});
