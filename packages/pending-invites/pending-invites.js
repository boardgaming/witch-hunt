Template.pendingInvites.helpers({
  invites: function() {
    return Invites.find({ recipientId: Meteor.userId() });
  }
});
