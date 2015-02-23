Meteor.publish('matchRequests', function() {
  return MatchRequests.find({});
});
