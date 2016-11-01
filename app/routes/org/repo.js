import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let orgName = this.modelFor('org').login;
	return Ember.$.get(`https://api.github.com/repos/${orgName}/${params.repoid}`);
	}
});
