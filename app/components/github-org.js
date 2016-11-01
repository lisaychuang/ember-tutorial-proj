import Ember from 'ember';
import isInArray from '../utils/is-in-array';

export default Ember.Component.extend({
// Change root element from <div> to <li>
 	tagName: 'li', 
 	classNames: ['github-org'],
 	attributeBindings: ['org.id:github-org-name'],

 	// inject favorites services
	favorites: Ember.inject.service(),

	// adding Computer property macros
	isFavorited: isInArray('org.id', 'favorites.items'),

 	actions: {
 		favoriteWasClicked() {
 			this.sendAction('on-fav-clicked', 
 			this.get('org.id'));
 		}
 	}
});
