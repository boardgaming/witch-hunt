Template.matchRequestResults.helpers({
  suitablePlayers: function() {
    return Meteor.users.find({});
  },

  suitableMatches: function() {
    return Matches.find({});
  }
});
