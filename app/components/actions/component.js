import Component from '@ember/component';

export default Component.extend({
    actions: {
        likePost(){
            console.log('you want to like the post');
        },

        commentPost() {
            console.log('you want to comment post')
        }
    }
});
