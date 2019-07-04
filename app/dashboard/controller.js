import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  currentModel: null,
  limit: 10,
  // data: computed('currentModel', () => {
  //     return get(this, 'model').post;
  // }),

  actions: {
    // _changeCurrentModel(name) {
    //     set(this, 'currentModle', name);
    // }
  },
  init() {
    this._super();
    set(this, 'filter', ['A-Z', 'Z-A', 'title', 'body', 'date']);
  }
});
