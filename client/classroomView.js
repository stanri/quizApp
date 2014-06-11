if (Meteor.isClient) {
  Template.classroomClient.lines = function () {  
      return Questions.find({flagged: true}).fetch(); //find all posts, sorted in ascending order of post time.
  };

}