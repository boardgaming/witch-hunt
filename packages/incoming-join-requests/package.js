Package.describe({
  name: 'incoming-join-requests',
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
  api.use('join-requests', 'client');
  api.use('matches', 'client');
  api.addFiles('__item/incoming-join-requests__item.html', 'client');
  api.addFiles('__item/incoming-join-requests__item.js', 'client');
  api.addFiles('incoming-join-requests.html', 'client');
  api.addFiles('incoming-join-requests.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('incoming-join-requests');
  api.addFiles('incoming-join-requests-tests.js');
});
