Template.matchRequestResults.helpers({
  suitablePlayers: function() {
    return Meteor.users.find({});
  }
});
