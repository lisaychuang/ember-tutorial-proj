import Ember from 'ember';

export default Ember.Route.extend({
 	model() {
	 // Get the "id" property from the model resolved in the "org" route
	 	let orgName = this.modelFor('org').login;
	 	let repoName = this.modelFor('org.repo').name;
	 // Fetch API data
	 	return Ember.$.get(`https://api.github.com/repos/${orgName}/${repoName}/contributors`);
 	},

 setupController(controller) {
 this._super(...arguments);
 // Make the model resolved in the "org" route available to
 // this route's template, via a property called "org"
 controller.set('lisaRepo', this.modelFor('org.repo'));
 }
});