import Component from '@ember/component';

export default Component.extend({
  body: '<h3>Body of the blog post is here again...</h3>',
  title: '',
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  options: {

  },
  actions: {
    onCreatePost() {
      this.get('onCreatePost')();
    }
  }
});
