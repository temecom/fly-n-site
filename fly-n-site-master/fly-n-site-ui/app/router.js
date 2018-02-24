import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('clubs');
  this.route('club',{path:"club/:id"});
  this.route('login');
  this.route('sites');
  this.route('site');
  this.route('administration', function() {
    this.route('clubs');
    this.route('sites');
  });
});

export default Router;
