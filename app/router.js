import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', { path: '/' }, function() {
    this.route('show', { path: '/posts/:id'});
    this.route('new', { path: 'posts/new'});
  });
  // this.route('post', function() {
  //   this.route('show');
  // });
  this.route('signin');
  this.route('signup');
  this.route('dashboard');
});

export default Router;
