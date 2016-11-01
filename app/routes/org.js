import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		error(jqXhr) {
			if (jqXhr.status === 404) {
				this.intermediateTransitionTo('org.notfound'); 
			} else {
				return true; //bubble up error state
			}
		}
	},

	model(params){
		return Ember.$.get(`https://api.github.com/orgs/${params.id}`);
	}
});
