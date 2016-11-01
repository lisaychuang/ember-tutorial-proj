import Ember from 'ember';

export default Ember.Component.extend({
	// Change root element from <div> to <li>
 	tagName: 'li', 
 	classNames: ['github-repo'],
 	attributeBindings: ['repo.name:github-repo-id']
});
