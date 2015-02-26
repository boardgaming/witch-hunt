Template.sentInvites__item.events({
  'click .sent-invites__cancel': function(e, template) {
    Meteor.call('invites.destroy', this._id, function(error) {
      if (error) {
        throw error;
      }
    });
  }
});
