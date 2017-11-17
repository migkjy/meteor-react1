import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
// import './../imports/utils.js';

Meteor.startup(() => {
  Players.insert({
    name: 'vikram',
    score: 99,
  });
  console.log(Players.find().fetch());
});
