Template.pendingInvites__item.events({
  'click .pending-invites__accept': function(e, template) {
    Meteor.call('invites.accept', this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  },

  'click .pending-invites__decline': function(e, template) {
    Meteor.call('invites.destroy', this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  }
});
