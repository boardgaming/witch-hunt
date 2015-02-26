this.MatchRequests = new Mongo.Collection('matchRequests');

MatchRequests.current = function() {
  return MatchRequests.findOne({ userId: Meteor.userId() });
}

MatchRequests.after.insert(function(userId, matchRequest) {
  if (matchRequest.hosting) {
    Matches.insert({
      matchRequestId: matchRequest._id,
      host: matchRequest.userId,
      approved: false
    });
  }
});

MatchRequests.before.remove(function(userId, matchRequest) {
  if (matchRequest.hosting) {
    Matches.remove({
      matchRequestId: matchRequest._id,
      approved: false
    });
  }
});
