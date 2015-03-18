Package.describe({
  name: 'dnuske:smooth',
  version: '0.1.7',
  // Brief, one-line summary of the package.
  summary: 'Smooth.js functions for interpolation',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dnuske/Smooth.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use('mrt:exports');
  api.addFiles('smooth.js');
  api.export('smooth');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dnuske:smooth');
  api.addFiles('smooth-tests.js');
});
