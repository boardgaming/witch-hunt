Template.matchRequestResults__player.events({
  'click .match-request-results__invite': function(e, template) {
    Meteor.call('invites.create', Meteor.userId(), this._id, Matches.current()._id, function(error) {
      if (error) {
        throw error;
      }
    });
  }
});
