import React from "react";

class Fireball extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: props.fireball,
      hand: props.hand
    }
    console.log(this.props.hand[0].name)
  }
  render () {
    return ( <div> <button onClick={alert} >{this.props.hand[0].name} </button> </div>)
  }
}

export default Fireball
