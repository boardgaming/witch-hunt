Meteor.publish('invites', function() {
  return Invites.find({});
});
