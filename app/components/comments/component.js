import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  canShowComment: false,
  canWriteComment: false,
  currrentUser: service('current-user'),
  post: null,
  comment: '',

    actions: {
        toggleComments() {
            this.get('toggleComments')();
        },

        showCommentText() {
            this.get('showCommentText')();
        },

        canWriteComment() {
          this.toggleProperty('canWriteComment');
        },

        createComment(post) {
          this.get('didAddComment')(post);
        },

        cancelComment() {
          set(this, 'comment', '');
          set(this, 'canWriteComment', false);
        },

        clickOutside() {
          set(this, 'canWriteComment', false);
        }
    }
});

