import React from "react";
let handSize = 0;


class CardInHand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handSize: props.handSize,
      currentCard: props.currentCard,
      hand: props.hand,
      enemy: props.enemy
    }
  }
  
  showAlert () {
    alert("this")
  }
  render () {
    return ( <div className ="card"> 
              {this.props.currentCard.name} <br />
              <button onClick={this.showAlert} > Select Card </button>
            </div>)
  }
}

export default CardInHand
