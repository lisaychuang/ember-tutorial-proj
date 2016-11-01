import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

function itemDummy(item1, list1) {
  // We'll create a new type of object 
  return Ember.Object.extend({
  	item: item1,
  	list: list1,
  	isInArray: isInArray('item','list') // building a macro
  }).create(); // and make an instance of one
}

// Replace this with your real tests.
test('it works under normal circumstances', function(assert) {
	var o = itemDummy('apple', ['apple', 'orange']);
	assert.equal(o.get('isInArray'), true, 'item is in array');

	o.set('item', 'pear');
	assert.equal(o.get('isInArray'), false, 'item is not in array');

	o.get('list').addObject('pear');
	assert.equal(o.get('isInArray'), true, 'item is back in array');
});

test('it works for weird stuff', function(assert) {
	var o = itemDummy('apple', {apple: true});
	
	assert.throws(function() {
		o.get('isInArray');
	}, "second property must be an array", 'throws if second argument is not an array');

	// assert.equal(o.get('isInArray'), true, 'item is in array');
});


// works for empty array  > false
// not empty array >> contains / not contain answer
