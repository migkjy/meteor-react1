import React from 'react';
import { Players } from './../api/players';


export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    this.playerName = e.target.playerName.value;

    e.preventDefault();

    if (this.playerName) {
      e.target.playerName.target = '';
      Players.insert({
        name: this.playerName,
        score: this.props.score,
      });
    }
    e.target.playerName.value = '';
  }
  render() {
    return (
    // <form onSubmit={() => {})}> 이것도 가능
    // bind() 를 통해서 시간이 흘렀을 때 변수간에 관계가 끊어지는 것을 막는다.
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player name" />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
