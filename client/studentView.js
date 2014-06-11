Questions = new Meteor.Collection('questions'); //instantiate database

////////////////////////
// CLIENT
////////////////////////

if (Meteor.isClient) {
  
  function getCurrentUser () 
  {
//    return Meteor.user().emails[0].address.split('@')[0]; //take the first part of user email and use it as username in chat client.
      return "alice";
  }
  
  function sendAnswer()
  {
      var currentUser =  getCurrentUser(); 
      var currentContentObject = $('#userAnswerTextarea'); //jQuery
      var currentContent = currentContentObject.val();
      
      if (true) { 
        Questions.insert({questionContent: currentContent, username: currentUser, timestamp: (new Date()).getTime(), flagged: false}); //flagged is false, meaning it won't appear on classroomView until it's approved by the teacher.
      }
      
      $('#userAnswerTextarea').val("");
      
  }

  Template.studentClient.events({
    'click #sendAnswer': function () {            
      sendAnswer();
    },
    
    'keydown #userAnswerTextarea': function(keypressed)
    {
        if (keypressed.which == 13) { //enter/return button.
            event.preventDefault(); //don't print a line break.
            sendAnswer(); //put the chat message into the questions db.
        }
    }    
  });
}