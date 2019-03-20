import React from "react";

class Fireball extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fireball: props.fireball,
      hand: props.hand
    }
  }
  render () {
    return ( <div> <button onClick={alert} >{this.props.fireball.name} </button> </div>)
  }
}

export default Fireball
