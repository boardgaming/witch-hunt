Package.describe({
  name: 'match-requests',
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
  api.use('backend-base', ['client', 'server']);
  api.use('matches', 'server', { unordered: true });
  api.addFiles('match-requests__collections.js', ['client', 'server']);
  api.addFiles('match-requests__methods.js', ['client', 'server']);
  api.addFiles('match-requests__publications.js', 'server');
  api.addFiles('match-requests__subscriptions.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('match-requests');
  api.addFiles('match-requests-tests.js');
});
