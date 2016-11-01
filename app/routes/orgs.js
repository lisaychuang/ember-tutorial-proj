import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
		{id: "emberjs"},
		{id: "ember-cli"},
		{id: "microsoft"},
		{id: "yahoo"},
		{id: "netflix"},
		{id: "facebook"},
		];
	},

	// inject favorites services
	favorites: Ember.inject.service(),

	setupController(controller) {
		this._super(...arguments);
		controller.set('items', this.get('favorites.items'));
	},

	actions: {
		addToFav(val) {
			if (this.get('favorites.items').indexOf(val) <0) {
				this.get('favorites').addFav(val);
			} else {
				this.get('favorites.items').removeObject(val);
				console.log(this.get('favorites.items'));
			}
			
		}
	}
});
