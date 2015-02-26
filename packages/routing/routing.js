Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', 'home', { name: 'home'});
Router.route('/matches/make', 'matchesMake', { name: 'matches.make' });
Router.route('/matches/:_id', 'matchesShow', { name: 'matches.show' });
