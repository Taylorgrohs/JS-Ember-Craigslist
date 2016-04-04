import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('room-rent');
  this.route('room-wanted');
  this.route('missed-connection');
  this.route('single-profile');
});

export default Router;
