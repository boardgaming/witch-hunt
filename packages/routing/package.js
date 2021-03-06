Package.describe({
  name: 'routing',
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
  api.use('iron:router@1.0.7');
  api.imply('iron:router@1.0.7', ['client', 'server']);
  api.use('layout', 'client');
  api.use('home', 'client');
  api.use('matches-make', 'client');
  api.use('matches-show', 'client');
  api.addFiles('routing.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('routing');
  api.addFiles('routing-tests.js');
});
