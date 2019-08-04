import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  currentModel: null,
  limit: 10,

  actions: {
  },
  init() {
    this._super();
    set(this, 'filter', ['A-Z', 'Z-A', 'title', 'body', 'date']);
  }
});
