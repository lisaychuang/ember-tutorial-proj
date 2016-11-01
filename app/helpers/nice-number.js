import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function niceNumber(params/*, hash*/) {

const [count] = params; 
// take in number  repo.forks_count , repo.watchers_count

if (count >1000) { // if fork_count or watchers_count is larger than 1000
	const rounded = Math.round(count/100); // divide by 100, round up
	return rounded/10 + ' k'; // divide 10 to get decimal, add string 'k' to end
	} else {
		return count;
	}
}

export default Ember.Helper.helper(niceNumber);
