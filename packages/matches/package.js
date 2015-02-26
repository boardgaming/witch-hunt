Package.describe({
  name: 'matches',
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
  api.use('match-requests', 'server', { unordered: true });
  api.use('invites', 'server');
  api.addFiles('matches__collections.js', ['client', 'server']);
  api.addFiles('matches__methods.js', ['client', 'server']);
  api.addFiles('matches__publications.js', 'server');
  api.addFiles('matches__subscriptions.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('matches');
  api.addFiles('matches-tests.js');
});
