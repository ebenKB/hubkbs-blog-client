import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  this.route('post', { path: '/' }, function() {
    this.route('show', { path: '/posts/:id/:slug'}, function() {});
    this.route('new', { path: 'posts/new'});
    this.route('edit', { path: 'posts/:id/edit'});
  });
  this.route('login');
  this.route('signup', function() {
    this.route('confirm', { path: '/:token' });
  });
  this.route('dashboard', function() {
    this.route('post', { path: '/'});
    this.route('comment');
    this.route('user');
    this.route('category');
  });

  this.route('authenticated', { path: '/auth'}, function() {
    // this.route('dashboard');
    // this.route('dashboard',  { resetNamespace: true });
    // this.route('post',  { path: 'posts/new', resetNamespace: true });
    // this.route('edit', { path: 'posts/:id/edit'});
  });

  this.route('password', function() {
    this.route('reset');
    this.route('confirm', { path: '/:token'});
  });
});

export default Router;
