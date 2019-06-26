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
  this.route('login');
  this.route('signup');
  this.route('dashboard');
  this.route('protected');

  this.route('authenticated', { path: '/auth'}, function() {
    // this.route('post', {
    //   resetNamespace: true,
    // }, function() {
    //   this.route('new');
    // });

    // this.route('dashboard', {
    //   resetNamespace: true
    // })
  });
});

export default Router;
