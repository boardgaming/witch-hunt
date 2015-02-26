Template.matchRequestPanel__form.events({
  'submit .match-request-panel__form': function(e, template) {
    e.preventDefault();

    Meteor.call('matchRequests.create', {}, function(error) {
      if (error) {
        throw error;
      }

      Router.go('matches.make');
    });
  }
});
