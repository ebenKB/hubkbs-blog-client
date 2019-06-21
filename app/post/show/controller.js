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

        },

        createComment(){

        }
    }
});
