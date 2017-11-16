// import './../imports/utils.js';
import someDefault, { greetUser, name } from './../imports/utils';

import './main.html';

console.log('Log from /client/main.js');
console.log(greetUser(), name);
console.log(someDefault);

