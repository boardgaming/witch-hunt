Package.describe({
  name: 'notification-panel',
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
  api.use('notifications', 'client');
  api.addFiles('notification-panel.html', 'client');
  api.addFiles('notification-panel.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('notification-panel');
  api.addFiles('notification-panel-tests.js');
});
