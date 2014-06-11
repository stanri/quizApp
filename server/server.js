Questions = new Meteor.Collection('questions'); //instantiate database

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
