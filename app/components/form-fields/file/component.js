import Component from '@ember/component';

export default Component.extend({
  type: 'file',
  classNames: 'ui input',
  inputID:null,

  actions: {
      onChange(){
        this.get('onChange')();
      }
  }
});
