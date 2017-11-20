import React from 'react';
import ReactDOM from 'react-dom'; // import a package from npm
import { Meteor } from 'meteor/meteor'; // import a package from meteor
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui/App';

// startup을 사용해야 한다. 그래야 dom이 생성이 된 것을 사용한다.
// const players = Tracker.autorun(() => Players.find().fetch()); 이건 안됨.
// const players = Players.find().fetch(); 이건 array <-> ({}) 이거 object

Meteor.startup(() => {
  Tracker.autorun(() => { // 모두 Tracker.autorun 안에 있어야 한다.
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    const title = 'Score Keep';
    ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
  });
});
