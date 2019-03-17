import React, { Component } from 'react';
import './App.css';
import MATCH_DATA from './data/matchHistory.js'
import CHAMPION from './data/champ_two.js'
import Match from './components/Match.js'

console.log(CHAMPION.data)
let match_history = MATCH_DATA.matches

match_history.map(match => match)


class App extends Component {
    state = {
        matches: match_history
      }
  render() {
    return (
      <div >
      <Match matches={this.state.matches} />
      </div>
    );
  }
}

export default App;
