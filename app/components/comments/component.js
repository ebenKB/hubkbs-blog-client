import Component from '@ember/component';

export default Component.extend({
    actions: {
        toggleComments() {
            this.get('toggleComments')();
        },
        showCommentText() {
            this.get('showCommentText')();
        },
        createComment() {
        }
    }
});
