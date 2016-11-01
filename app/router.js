import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  // this.route('home');

    // LIST OF ORGS
  this.route('orgs', function() { //orgs
  });
  // INDIVIDUAL ORG
  this.route('org', {path: 'org/:id'}, function() {
    //org/

    // LIST OF REPOS
    this.route('repos');

    // INDIVIDUAL REPO
    this.route('repo', {path: ':repoid'}, function() {
      this.route('contributors');
      this.route('issues');
    }); // org/jquery/jquery-ui

    this.route('notfound');
  });
  this.route('notfound', {path: '*path'});
});

export default Router;
