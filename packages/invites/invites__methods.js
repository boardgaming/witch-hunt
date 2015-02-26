Meteor.methods({
  'invites.create': function(senderId, recipientId, matchId) {
    return Invites.insert({
      senderId: senderId,
      recipientId: recipientId,
      matchId: matchId
    });
  }
});
