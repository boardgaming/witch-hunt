Template.incomingJoinRequests__item.events({
  'click .incoming-join-requests__accept': function(e, template) {
    Meteor.call('joinRequests.accept', this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  },
  'click .incoming-join-requests__decline': function(e, template) {
    Meteor.call('joinRequests.destroy', this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  }
});
