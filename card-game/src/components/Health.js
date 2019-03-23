import React from "react";

class Health extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commander: props.enemy,
      hand: props.hand
    }
  }
  showAlert () {
    alert("this")
  }
  render () {
    return ( <div> {this.props.commander.health} </div>)
  }
}

export default Health
