import React, { Component } from 'react';
import './App.css';
import MATCH_HISTORY_DATA from './data/matchHistory.js'
import CHAMPIONS from './data/champions.js'
import TIME_DATA from './data/timeframes.js'
import MATCH_DATA from './data/matchData.js'
import MatchID from './components/MatchID.js'
import PlayerCard from './components/PlayerCard.js'

let champ_keys = []
let champ_values = []
let match_history = MATCH_HISTORY_DATA.matches
let match_ids = []
let match = MATCH_DATA.participants
let names_arr = MATCH_DATA.participantIdentities
let red_team = []
let blue_team = []
let summoner_names = []

//need to split match_data into playerIDs
//with participantId, and summonerName
//all stats sent to playerID arrays


console.log(MATCH_DATA)
console.log(TIME_DATA)
console.log(CHAMPIONS)

console.log(match)

match.map(player => player)
//javascript to add match id to an array and place on the state to display
function addMatchIds (id_arr) {
  for (var match_id in id_arr) {
    match_ids.push(match_id)
  }
}

function addSummonerNames (summoner_arr) {
  for (var i = 0; i < summoner_arr.length; i++) {
    //console.log(summoner_arr[i].player.summonerName)
    summoner_names.push(summoner_arr[i].player.summonerName)
  }
}

addMatchIds(match_history);
addSummonerNames(names_arr);
match_history.map(matchID => matchID)

summoner_names.map(names => names)
console.log(summoner_names)

class App extends Component {
    state = {
        matches: match_history,
        players: match,
        match: MATCH_DATA,
        summoner_names: summoner_names
      }
  render() {
    console.log(this.state.summoner_names)
    const playerStats = this.state.players.map(player => <PlayerCard key={player.participantId} players={player}/>)
    return (
      <div className="display-layout" >
        <div className= "all-match-display">
          <p>Match IDs:</p>
          <MatchID  matches={this.state.matches} />
        </div>
        <div className = "player-card-display" >
          <div className ="current-match" >
            <p> Match ID: {this.state.match.gameId} </p>
          </div>
          <div>
          {playerStats}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
