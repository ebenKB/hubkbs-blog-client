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
  this.route('login');
  this.route('signup');
  this.route('dashboard');
  this.route('protected');
  // put all the authenticated routes here
  this.route('authenticated', { path: '/authenticated' }, () => {

  });
});

export default Router;
