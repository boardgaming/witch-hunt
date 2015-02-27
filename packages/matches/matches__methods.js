Meteor.methods({
  'matches.approve': function(id) {
    var match = Matches.findOne(id);

    Matches.update(id, { $set: { ready: true} });

    MatchRequests.remove(match.matchRequestId);

    return id;
  }
});
