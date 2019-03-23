import React, { Component } from 'react';
import './App.css';
import CardInHand from './components/CardInHand.js'
import Health from './components/Health.js'
//
// let fireball = {
//   name: "fireball",
//   cost: 1,
//   attack: 1,
//   health: null,
//   type: "spell"
// }
//code each card and put into a deck
//draw startHand and display with currentHand
//select card to play/remove from hand
//could add id to card objects
//

const hand = []
const deck = []

let handSize;
class Card {
  constructor(name, cost, attack, health, type) {
    this.name = name;
    this.cost = cost;
    this.attack = attack;
    this.health = health;
    this.type = type;
  }
  dealDamage (target) {
    target.health -= Card.attack;
  }
}

class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

let fireball = new Card("fireball", 1, 1, null, "spell");
let littleDraco = new Card("little draco", 1, 1,1,"creature");
let imp = new Card("imp", 1, 3, 1, "creature");
let flamestrike = new Card("flamestrike", 2, 3, null, "spell");
let spiritOfFire = new Card("spirit of fire", 1, 1, 3, "creature");
let enemyCommander = new Player("Enemy", 20);

deck.push(fireball)
deck.push(littleDraco)
deck.push(imp)
deck.push(flamestrike)
deck.push(spiritOfFire)

class App extends Component {
  constructor() {
    super()
    this.state = {
      handSize: hand.length,
      currentCard: fireball,
      hand: hand,
      enemy: enemyCommander,
      deck, deck,
      card: {
        name: this.name,
        cost: this.cost,
        attack: this.attack,
        health: this.health
      }
    }

    this.addCard = this.addCard.bind(this);
  }
    addCard () {
      this.setState(state => ({
        hand: this.state.hand
        }))
      this.state.deck.push(fireball)
      this.state.enemy.health -= this.state.currentCard.attack;
      if (this.state.enemy.health < 0) {
        alert("you dead")
      }
    }
    render() {
      console.log(this.state.deck)
    return (
      <div className="component-display">
        <div className="enemy-hp">
          <div>Commander HP: </div>
          <Health commander={this.state.enemy} />
        </div>
        <div className="enemy-hand">
          <p> Commander Hand: </p>
        </div>
        <div className="play-area">
          <p> Play Area: </p>
          <button onClick={this.addCard}> add card </button>
        </div>
        <div className="player-hp">
          <div>Your Commander HP: </div>
        </div>
        <div className="player-hand-area">
          <CardInHand currentCard = {this.state.deck[0]}/>
          <CardInHand currentCard = {this.state.deck[1]}/>
          <CardInHand currentCard = {this.state.deck[2]}/>
          <CardInHand currentCard = {this.state.deck[3]}/>
          <CardInHand currentCard = {this.state.deck[4]}/>
        </div>
      </div>
    );
  }
}

export default App;
