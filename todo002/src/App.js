import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DATA from './components/data.js'
import PlayerCard from './components/PlayerCard'


let arr_data = []
let string_key = []
const players = DATA.participants
const map1 = players.map(player => player)
console.log(map1)
for (const player of map1) {
  console.log(player.stats)
  arr_data.push(player.stats)
}

for(const participant in map1) {
  console.log(participant)
}

let player_keys = Object.keys(arr_data[0])
let i = 0
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
        players: [arr_data],
        partcipants: ""
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
    console.log(this.state.players[0])
    const todoItems = this.state.players.map(player => <PlayerCard key={player.participantId} players={player}/>)
      return (
          <div>
          <div>
          <nav className ="cd-primary-nav">
              <ul>
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
              </div>
              </ul>
            </nav>
            </div>
              <h1>{this.state.count}</h1>
              <h1>{this.state.kills}</h1>
              <div>
                <p>Player number: {arr_data[0].participantId}</p>
                <ul>
                  <li>Kills: {arr_data[0].kills}</li>
                  <br>
                  </br>
                  <li>Deaths: {arr_data[0].deaths}</li>
                </ul>
                <p>Player number: {arr_data[1].participantId}</p>
                <p>Player number: {arr_data[2].participantId}</p>
                <p>Player number: {arr_data[3].participantId}</p>
                <p>Player number: {arr_data[4].participantId}</p>
                <p>Player number: {arr_data[5].participantId}</p>
              </div>
              <button onClick = {this.handleClick}>Change!</button>
              <input placeholder="enter api key"></input>
              <button onClick = {this.loadData}>console log data</button>
              <PlayerCard />
          </div>
      )
  }
}


export default App;
