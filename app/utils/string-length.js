import Ember from 'ember';

const { computed } = Ember;

export default function stringLength(strPropKey) {
  return computed(strPropKey, function() {
  	// this --> the owner of this computed property
  	return this.get(strPropKey) // string
  		.length; // length of the string
  });
}
