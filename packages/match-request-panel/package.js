Package.describe({
  name: 'match-request-panel',
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
  api.addFiles('__form/match-request-panel__form.html', 'client');
  api.addFiles('__form/match-request-panel__form.js', 'client');
  api.addFiles('__tracker/match-request-panel__tracker.html', 'client');
  api.addFiles('__tracker/match-request-panel__tracker.js', 'client');
  api.addFiles('match-request-panel.html', 'client');
  api.addFiles('match-request-panel.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('match-request-panel');
  api.addFiles('match-request-panel-tests.js');
});
