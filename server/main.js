import { Meteor } from 'meteor/meteor';
// import './../imports/utils.js';
import anyDefaultValue, { greetUser } from './../imports/utils';
// .js can be ommited

Meteor.startup(() => {
  console.log('Log from /server/main.js');
  console.log(greetUser(), anyDefaultValue);
});
