Meteor.methods({
  'matchRequests.create': function() {
    var userId = Meteor.userId();

    if (! userId) {
      throw new Meteor.Error('403', 'Not authorized');
    }

    MatchRequests.upsert({
      userId: userId
    }, {
      userId: userId,
      date: '23.01',
      time: '17:00',
      hosting: true
    });
  },
  'matchRequests.destroy': function() {
    MatchRequests.remove(MatchRequests.activeOneForCurrentUser());
  }
});
