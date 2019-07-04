/* eslint-disable ember/new-module-imports */
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Component.extend({
  session: service(),
  post: null,
  likes: 0,

  actions: {
    likePost() {
      get(this, 'didLikePost')();
      // const likes = post.likes;
      // const user_id = get(this, 'currentUser.user.id');
      // if (likes.includes(user_id)) {
      //   console.log('you have like already');
      // } else {
      //   post.likes.push(user_id);
      //   console.log('you liked this post...', post)
      //   post.save();
      // }
    },

    commentPost() {
    }
  }
});
