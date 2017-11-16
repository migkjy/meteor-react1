import React from 'react';
import ReactDOM from 'react-dom'; // import a package from npm
import { Meteor } from 'meteor/meteor'; // import a package from meteor

const players = [{
  _id: '1',
  name: 'Lauren',
  score: 99,
}, {
  _id: '2',
  name: 'Cory',
  score: -1,
}, {
  _id: '303',
  name: 'Andrew',
  score: -12,
}];

const renderPlayers = function (playerList) {
  return playerList.map(player => <p key={player._id}>{player.name} has {player.score} point(s)</p>);

  // const numbers = [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 101 }];
  // const newNumbers = numbers.map(number => <p key={number.val}>{number.val}</p>);
  // console.log(newNumbers);
  // return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">3</p>];
};

// startup을 사용해야 한다. 그래야 dom이 생성이 된 것을 사용한다.
Meteor.startup(() => {
  const name = 'JuneKim';
  const jsx = (
    /* 주석 */
    <div>
      <p>This is from main.js, hello {name}</p>
      <p>This is my second p.</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});

