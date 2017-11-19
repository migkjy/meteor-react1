import React from 'react';
import ReactDOM from 'react-dom'; // import a package from npm
import { Meteor } from 'meteor/meteor'; // import a package from meteor
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

// startup을 사용해야 한다. 그래야 dom이 생성이 된 것을 사용한다.
Meteor.startup(() => {
  Tracker.autorun(() => { // 모두 Tracker.autorun 안에 있어야 한다.
    // const players = Tracker.autorun(() => Players.find().fetch()); 이건 안됨.
    // const players = Players.find().fetch(); 이건 array <-> ({}) 이거 object
    const players = Players.find().fetch();
    const title = 'Score Keep';
    const jsx = (
      /* 주석 */
      <div>
        <TitleBar title={title} subTitle="Created by JuneKim" />
        <PlayerList players={players} />
        <AddPlayer score={100} />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
