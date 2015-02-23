Package.describe({
  name: 'match-request-results',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('frontend-base', 'client');
  api.use('users', 'client');
  api.addFiles('__player/match-request-results__player.html', 'client');
  api.addFiles('__player/match-request-results__player.js', 'client');
  api.addFiles('match-request-results.html', 'client');
  api.addFiles('match-request-results.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('match-request-results');
  api.addFiles('match-request-results-tests.js');
});
