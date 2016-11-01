import {
	test
} from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

moduleForAcceptance('Acceptance | index');

function json(obj, status = 200) {
	return [status, {
		'Content-Type': 'text/json'
	}, JSON.stringify(obj)];
}

test('visiting /index', function(assert) {

	var server = new Pretender(function() {
		this.get('https://api.github.com/orgs/:id', () => json({
			id: 99,
			login: 'emberjs',
			name: 'Ember.js'
		}));
		this.get('https://api.github.com/orgs/:id/repos', () => json([{
			id: 123,
			name: 'data'
		}]));
		this.get('https://api.github.com/repos/:id/:repoid', () => json({
			id: 123,
			name: 'data'
		}));
		this.get('https://api.github.com/repos/:id/:repoid/issues', () => json([{
			id: 1,
			title: 'Issue 1'
		}, {
			id: 2,
			title: 'Issue 2'
		}]));
		this.get('https://api.github.com/repos/:id/:repoid/contributors', () => json([{
			id: 1,
			login: 'contributor1'
		}, {
			id: 2,
			login: 'contributor2'
		}]));
	});



	visit('/');

	andThen(function() {
		assert.equal(currentRouteName(), 'orgs.index', 'route name is correct for app entry at /');
	});

	click('.github-org[github-org-name="emberjs"] a');

	andThen(function() {
		assert.equal(currentURL(), '/org/emberjs/repos', 'url is correct for clicking on an org');
	});

	click('.github-repo[github-repo-id="data"] a');

	andThen(function() {
		assert.equal(currentURL(), '/org/emberjs/data/issues', 'url is correct for clicking on a repo');
		let issueCount = find('.issue-list li').length;
		assert.equal(issueCount > 0, true, 'More than 0 issues');
	});

	click('a[href="/org/emberjs/data/contributors"]');

	andThen(function() {
		assert.equal(currentURL(), '/org/emberjs/data/contributors');
		assert.equal(find('.contributor-list li').length > 0, true, 'more than 0 contributors');
	});
});