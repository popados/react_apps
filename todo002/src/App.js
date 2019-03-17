import React, { Component } from 'react';
import './App.css';
import DATA from './components/data.js'
import PlayerCard from './components/PlayerCard'
import TestComponent from './components/TestComponent'


let arr_data = []
let string_key = []
let summon_name = []
let i = 0
const players = DATA.participants
const summonerName = DATA.participantIdentities
const data_arr = DATA

const map1 = players.map(player => player)
console.log(map1)
for (const player of map1) {
  console.log(player.stats)
  arr_data.push(player.stats)
}
console.log(map1[0].championId)

const player_name = summonerName.map(nameID => nameID )
console.log(player_name[0].player)

while(i < player_name.length) {
  summon_name.push(player_name[i].player)
  i++
}
console.log(summon_name)
for(const participant in map1) {
  console.log(participant)
}

const mapped_names = player_name.map(sum_name => sum_name)

console.log(mapped_names)
let player_keys = Object.keys(arr_data[0])
let len = arr_data.length



// let list = arr_data.map(obj => {
//   var newObj = {}
//   newObj[arr_data.key] = obj.value
//   console.log(newObj)
//   return newObj
// })

//

// while(i < arr_data.length ) {
//   console.log(arr_data[i].participantId)
//   i++
// }

for (const name_key of player_keys) {
  string_key.push(name_key)
  //console.log(name_key)
}
debugger;
console.log(arr_data)


console.log(arr_data[0].win)

class App extends Component {
  constructor() {
    super()
    this.state = {
        data: DATA,
        count: 0,
        kills: 0,
        players: arr_data,
        partcipants: "",
        mapped_arr: map1,
        summoner_name: summon_name
    }
    this.handleClick = this.handleClick.bind(this)
    this.loadData = this.loadData.bind(this)
  }
  handleClick() {
    console.log("works")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  loadData() {

    this.setState(prevState => {
      return {
        kills: prevState.kills + 1
      }
    })
    //console.log(DATA.participants)
    console.log(this.state.players)

  }

  render() {
    console.log(this.state.data.participantIdentities)
    console.log(this.state.players)
    //console.log(this.state.data.partcipants[0])
    const todoItems = this.state.mapped_arr.map(player => <PlayerCard key={player.participantId} players={player}/>)
      return (
          <div>
              <TestComponent />
              <h1>Match ID: {this.state.data.gameId}</h1>
              {todoItems}
              <button onClick = {this.handleClick}>Change!</button>
              <input placeholder="enter api key"></input>
              <button onClick = {this.loadData}>console log data</button>
              <div>
              </div>
          </div>
      )
  }
}


export default App;
