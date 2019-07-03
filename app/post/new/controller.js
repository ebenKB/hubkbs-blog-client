import Controller from '@ember/controller';
import { get,set } from '@ember/object';
import PostValidator from '../../validations/post';
import { inject as service } from '@ember/service'

export default Controller.extend({
    session: service(),
    currentUser: service('current-user'),
    PostValidator,
    body : null,
    title: null,
    image: null,
    author: null,
    category: null,
    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    options: {

    },

    actions: {
        createPost(changeset) {
            if(this.session.isAuthenticated) { // cannot create post if the user is not authenticated
                const file = document.getElementById('postImage').files[0];
                set(changeset, 'image', file);
                set(changeset, 'author', get(this, 'currentUser.user'));
                changeset.validate()
                    .then(() => {
                        if(changeset.isValid) { // make sure the post is valid before you save it
                            return changeset.save();
                        }
                    });
            } else this.transitionToRoute('login');
        },

        rollback(changeset) {
            return changeset.rollback();
        },

        validate({ key, newValue, oldValue, changes, content }) {

        },

        fileChange() {
        },

        uploadImage(file) {
            get(this, 'upload').perform(file);
        }
    },
});
