Package.describe({
  name: 'match-panel',
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
  api.use('matches', 'client');
  api.use('sent-invites', 'client');
  api.addFiles('match-panel.html', 'client');
  api.addFiles('match-panel.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('match-panel');
  api.addFiles('match-panel-tests.js');
});
