Template.matchRequestResults__match.events({
  'click .match-request-results__join': function(e, template) {
    Meteor.call('joinRequests.create', MatchRequests.current()._id, this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  }
});
