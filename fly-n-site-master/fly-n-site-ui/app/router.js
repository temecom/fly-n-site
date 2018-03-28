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
  this.route('site',{path:"site/:id"});
  this.route('stories');
  this.route('memberships');
  this.route('membership',{path:"membership/:id"});
  this.route('people');
  this.route('person',{path:"person/:id"});
});

export default Router;
