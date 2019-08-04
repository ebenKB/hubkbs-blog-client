import Component from '@ember/component';

export default Component.extend({
  placeholder: null,
  disabled: null,
  type: 'text',
  name: null,
  classNames: '',
  changeset: null,
  property: null,
  actions: {
    onChange(){
      this.get('onChange')();
    }
  }
});
