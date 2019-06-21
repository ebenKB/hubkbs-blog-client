import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
  
  limit: 10,
    init() {
      this._super();
      set(this, 'rows',['Action','Title', 'Body','Created By', 'Created at']);
      set(this, 'filter', ['A-Z','Z-A', 'title', 'body', 'date']);
    }
});
