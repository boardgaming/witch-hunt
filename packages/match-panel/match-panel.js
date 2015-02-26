Template.matchPanel.helpers({
  players: function() {
    var currentMatch = Matches.current();
    if (currentMatch) {
      return Matches.current().playerIds;
    }
  }
});

Template.matchPanel.events({
  'click .match-panel__approve': function(e, template) {
    Meteor.call('matches.approve', Matches.current()._id, function(error, matchId) {
      if (error) {
        throw error;
      }
      Router.go('matches.show', { _id: matchId });
    });
  }
});
