this.MatchRequests = new Mongo.Collection('matchRequests');

MatchRequests.activeOneForCurrentUser = function() {
  return MatchRequests.findOne({ userId: Meteor.userId() });
}
