import stringLength from 'github-ui/utils/string-length';
import { module, test } from 'qunit';

module('Unit | Utility | string length');

function makeObjWithString(str) {
  // We'll create a new type of object 
  return Ember.Object.extend({
  	s: str,
  	l: stringLength('s') // length of whatever you find in s
  }).create(); // and make an instance of one
}

// Replace this with your real tests.
test('it handles empty strings properly', function(assert) {
  // for a string of "" should be 0
 
  // We'll create a new type of object 
  
  assert.equal(
  	makeObjWithString('').get('l'), 0,
  	'Empty string --> zero');

   assert.equal(
  	makeObjWithString(' ').get('l'), 1,
  	'Only space --> 1');
});


test('it handles other strings properly', function(assert) {

  let o = makeObjWithString('lisa');
  
  // make sure everything works w/ initial value
  assert.equal(
  	o.get('l'), 4,
  	'lisa --> 4');

  // change a dependency
  o.set('s', 'michael');
  
  // value should now be updated
  assert.equal(
  	o.get('l'), 7,
  	'michael --> 7');
});
