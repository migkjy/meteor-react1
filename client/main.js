import React from 'react';
import ReactDOM from 'react-dom'; // import a package from npm
import { Meteor } from 'meteor/meteor'; // import a package from meteor
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';


const renderPlayers = function (playerList) {
  return playerList.map(player =>
  <p key={player._id}>{player.name}! has {player.score} point(s)</p>);
};

const handleSubmit = function (e) {
  const playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    e.target.playerName.target = '';
    Players.insert({
      name: playerName,
      score: 0,
    });
  }
};

// startup을 사용해야 한다. 그래야 dom이 생성이 된 것을 사용한다.
Meteor.startup(() => {
  Tracker.autorun(() => { // 모두 Tracker.autorun 안에 있어야 한다.
    // const players = Tracker.autorun(() => Players.find().fetch()); 이건 안됨.
    // const players = Players.find().fetch(); 아래와 동일하게 작동 ({})
    const players = Players.find({}, { sort: { name: +1 } });
    const name = 'JuneKim';
    const jsx = (
      /* 주석 */
      <div>
        <p>This is from main.js, hello {name}</p>
        <p>This is my second p.</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
