import Ember from 'ember';

export default Ember.Service.extend({
	items: [],
	addFav(val){
		let array = this.get('items');
			array.addObject(val);
			console.log(array);
	}
});
