Meteor.publish('joinRequests', function() {
  return JoinRequests.find({});
});
