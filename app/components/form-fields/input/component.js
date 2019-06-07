import Component from '@ember/component';

export default Component.extend({
  placeholder: null,
  disabled: null,
  type: 'text',
  name:null,
  classNames: '',
  actions: {
    onChange(){
      this.get('onChange')();
    }
  }
});
