import React, { Component } from 'react';
import './App.css';
import Fireball from './components/Fireball.js'
//
// let fireball = {
//   name: "fireball",
//   cost: 1,
//   attack: 1,
//   health: null,
//   type: "spell"
// }

const hand = []

class Card {
  constructor(name, cost, attack, health, type) {
    this.name = name;
    this.cost = cost;
    this.attack = attack;
    this.health = health;
    this.type = type;
  }
}

class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

let fireball = new Card("fireball", 1, 1, null, "spell");

hand.push(fireball)

class App extends Component {
  constructor() {
    super()
    this.state = {
      fireball: fireball,
      hand: hand
    }
  }
  render() {
    return (
      <div className="component-display">
        <div className="one">
          <p> Commander HP: </p>
        </div>
        <div className="two">
          <p> Commander Hand: </p>
        </div>
        <div className="three">
          <p> Play Area: </p>
        </div>
        <div className="four">
          <p>Your Commander HP: </p>
        </div>
        <div className="five">
          <h3>  Your Commander Hand: </h3>
          <p> Display Cards Here: </p>
          <Fireball fireball={this.state.fireball} />
        </div>
      </div>
    );
  }
}

export default App;
