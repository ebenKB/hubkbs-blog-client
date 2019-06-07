import Controller from '@ember/controller';

export default Controller.extend({
    body : '<h3>Body of the blog post is here again...</h3>',
    title:'', 
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    options: {

    },

    actions: {
        createPost() {
            console.log('you want to create a new post')
        }
    }
});
