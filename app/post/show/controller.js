import Controller from '@ember/controller';
import { set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    newComment: '',
    canShowComment: false,
    canWriteComment: false,
    didToggleLike: false,
    session: service(),
    currentUser: service('current-user'),

    actions: {
      toggleComments(){
          set(this, 'canShowComment', true);
      },

      showCommentText() {
      },

      createComment(post) {
        console.log('we want to create a comment on this post', post, 'and this is the comment', this.comment);
      },

      likePost() {
        if(this.session.isAuthenticated) {
          this.toggleProperty('didToggleLike');
          const user_id = get(this, 'currentUser.user.id');
          if (get(this, 'model').likes.includes(user_id)) {
           get(this, 'model').likes.removeObject(user_id);
            // post.likes.removeObject(user_id);
          } else {
            get(this, 'model').likes.addObject(user_id);
          }

          // persist the records
          setTimeout(() => {
            if(this.didToggleLike) {
              // console.log('this is the post we are saving', post, 'and these are the likes', { post})
              get(this, 'model').save();
            }
          }, 3000);
        } else alert('pls login')
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
