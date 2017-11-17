import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
// import './../imports/utils.js';

Meteor.startup(() => {
  const obj = {
    name: 'june',
    printName() {
      console.log(`Name: ${this.name}`);
    },
  };
  setTimeout(obj.printName.bind(obj), 1000);
//   obj.printName();
});
