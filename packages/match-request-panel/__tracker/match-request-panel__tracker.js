Template.matchRequestPanel__tracker.events({
  'submit .match-request-panel__tracker': function(e, template) {
    e.preventDefault();

    Meteor.call('matchRequests.destroy', this._id, function(error) {
      if (error) {
        throw error;
      }
      Router.go('home');
    });
  }
});
