import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    title:  DS.attr('string'),
    body: DS.attr('string'),
    image: DS.attr(),
    createdAt: DS.attr(),
    author: DS.belongsTo('user'),
    comments: DS.hasMany('comment'),
    likes: DS.attr(),
    category: DS.attr('string'),

    postCaption: computed('body', function() {
        // trim off excess content and show just a summary of the post body
        return `${this.body.split(" ").slice(0, 20).join(" ")} ...`;
    })
});
