import Controller from '@ember/controller';
import { get,set } from '@ember/object';
import PostValidator from '../../validations/post';

export default Controller.extend({
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
					changeset.validate()
						.then(() => {
							const file = document.getElementById('postImage').files[0];
							set(changeset, 'image', file);
							return changeset.save();
					});
			},

			rollback(changeset) {
				return changeset.rollback();
			},

			validate({ key, newValue, oldValue, changes, content }) {
			},

			fileChange() {
			},

			uploadImage(file){
				get(this, 'upload').perform(file);
			}
	},
});
