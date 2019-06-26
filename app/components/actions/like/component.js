/* eslint-disable ember/new-module-imports */
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';

export default Component.extend({
  post: null,
  likes:0,

  actions: {
    likePost() {
      const likes = this.post.likes;
      const user_id = get(this, 'currentUser.user.id');
      if (likes.includes(user_id)) {
        console.log('you have like already');
      } else {
        this.post.likes.push(user_id);
        console.log('you liked this post...', this.post.likes.length)
      }
    },

    commentPost() {
    }
  }
});
