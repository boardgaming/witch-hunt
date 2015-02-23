Template.matchRequestForm.events({
  'click .match-request-form__submit': function(e, template) {
    e.preventDefault();
    Router.go('/matches/make');
  }
});
