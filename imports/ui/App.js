import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created by JuneKim" />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer score={100} />>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array,
};

