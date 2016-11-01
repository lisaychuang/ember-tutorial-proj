export default function isInArray(item, listOfItems) {
//return Ember.computed("org.id", "favorites.items.[]", function(){
  return Ember.computed(item, listOfItems + ".[]", function(){
  	let myThing = this.get(item); // this.get('item')
  	let myList = this.get(listOfItems); // this.get('favorites.items')
  	if (Ember.typeOf(myList) !== 'array') {
	  throw "second property must be an array";
	}
  	return myList.includes(myThing);
  });
}

