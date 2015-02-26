Meteor.methods({
  'matchRequests.create': function() {
    var userId = Meteor.userId();

    if (! userId) {
      throw new Meteor.Error('403', 'Not authorized');
    }

    MatchRequests.remove({userId: userId});

    MatchRequests.insert({
      userId: userId,
      date: '23.01',
      time: '17:00',
      hosting: false
    });
  },
  'matchRequests.destroy': function() {
    MatchRequests.remove(MatchRequests.current());
  }
});
