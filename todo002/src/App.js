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





class App extends Component {
  constructor() {
    super()
    this.state = {
        count: 0,
        kills: 0,
        players: arr_data

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
    console.log(arr_data)

  }

  render() {
    console.log(this.state.players[0])
    const todoItems = this.state.players.map(player => <PlayerCard key={player.participantId} players={player}/>)
      return (
          <div>
              <h1>{this.state.count}</h1>
              <h1>{this.state.kills}</h1>
              <button onClick = {this.handleClick}>Change!</button>
              <input placeholder="enter api key"></input>
              <button onClick = {this.loadData}>console log data</button>
              <PlayerCard />
          </div>
      )
  }
}


export default App;
