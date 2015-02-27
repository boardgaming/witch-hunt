Template.incomingJoinRequests.helpers({
  incomingRequests: function() {
    var currentMatch = Matches.current();
    if (currentMatch) {
      return JoinRequests.find({
        matchId: currentMatch._id
      });
    }
  }
});
