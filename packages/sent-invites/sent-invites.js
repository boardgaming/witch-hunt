Template.sentInvites.helpers({
  invites: function() {
    var currentMatch = Matches.current();
    if (currentMatch) {
      return Invites.find({ matchId: currentMatch._id });
    }
  }
});
