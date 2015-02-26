this.Matches = new Mongo.Collection('matches');

Matches.current = function() {
  var currentRequest = MatchRequests.current();
  if (currentRequest) {
    return Matches.findOne({ matchRequestId: currentRequest._id });
  }
}

Matches.before.remove(function(userId, match) {
  Invites.remove({ matchId: match._id });
});
