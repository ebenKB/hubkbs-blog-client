import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    canShowComment: false,

    actions: {
        toggleComments(){
            set(this, 'canShowComment', true)
            // this.toggleProperty('canShowComment');
        },

        showCommentText(){
            console.log('you want to show comment text');
        },

        createComment(){
            console.log('you want to create comment')
        }
    }
});
