Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 'home');
Router.route('/matches/make', 'matchesMake');
Router.route('/matches/:_id', 'matchesShow');
