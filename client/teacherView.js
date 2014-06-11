if (Meteor.isClient) {
  Template.teacherClient.lines = function () {  
      return Questions.find({}, {sort: {timestamp: 1}}).fetch(); //find all posts, sorted in ascending order of post time.
  };


  Template.teacherClient.events({
    'click .flagMessage': function () {
        Questions.update(this._id, {$set:{flagged:true}});
        var ansHistory = $('#ansHistory')
        ansHistory[0].scrollTop= ansHistory[0].scrollHeight; //scroll to bottom of chatHistory when a new message is inserted.
        //TODO: need to erase the line that is set to flagged from teacherView.
    }
  });
}