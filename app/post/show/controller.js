import Controller from '@ember/controller';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    newComment: 'this is the new comment from the controller',
    canShowComment: false,
    canWriteComment: false,
    session: service(),
    currentUser: service('current-user'),

    actions: {
      toggleComments(){
          set(this, 'canShowComment', true)
          // this.toggleProperty('canShowComment');
      },

      showCommentText(){
      },

      createComment(post) {
        console.log('we want to create a comment on this post', post, 'and this is the comment', this.comment);
      },

      likePost(post) {
        // console.log('this is the post we want to like', post);
        // const likes = post.likes;
        // const user_id = get(this, 'currentUser.user.id');
        // if (likes.includes(user_id)) {
        //   console.log('you have like already');
        // } else {
        //   console.log('you liked this post...');
        //   post.likes.push(user_id);
        // }
      },

      didAddComment(post) {
        if(this.newComment != null && this.session.isAuthenticated) {
          const comment = this.store.createRecord('comment', {
            text: this.newComment,
            user: this.currentUser.user,
          });
          comment.save()
            .then((data) => {
              post.comments.addObject(data);
              post.save()
              .then(() => console.log('we have saved the post'))
              .catch((err) => console.log('an error occured', err))
            });
        } else console.log('please make sure you are logged in');
      }
    }
});
