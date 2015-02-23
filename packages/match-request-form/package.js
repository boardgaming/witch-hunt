Package.describe({
  name: 'match-request-form',
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
  api.use('match-requests', 'client');
  api.addFiles('match-request-form.html', 'client');
  api.addFiles('match-request-form.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('match-request-form');
  api.addFiles('match-request-form-tests.js');
});