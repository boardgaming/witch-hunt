Meteor.methods({
  'invites.create': function(senderId, recipientId, matchId) {
    return Invites.insert({
      senderId: senderId,
      recipientId: recipientId,
      matchId: matchId
    });
  },
  'invites.destroy': function(id) {
    return Invites.remove(id);
  },
  'invites.accept': function(id) {
    var invite = Invites.findOne(id);

    Matches.update(invite.matchId, {
      $push: { playerIds: invite.recipientId }
    });

    Invites.remove(id);
  }
});
