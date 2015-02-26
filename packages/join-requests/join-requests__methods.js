Meteor.methods({
  'joinRequests.create': function(requestId, matchId) {
    JoinRequests.insert({
      senderId: Meteor.userId(),
      matchRequestId: requestId,
      matchId: matchId
    });
  },
  'joinRequests.approve': function(id) {
    var joinRequest = JoinRequests.findOne(id);

    Matches.update(joinRequest.matchId, {
      $push: { playerIds: joinRequest.senderId }
    });

    JoinRequests.remove(id);
  },
  'joinRequests.destroy': function(id) {
    JoinRequests.remove(id);
  }
});
