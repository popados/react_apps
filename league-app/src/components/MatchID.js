import React from 'react'
import ReactDOM from 'react-dom'
import '../App.css';


class MatchID extends React.Component {

  handleClick() {
    console.log("Hii")

  }
  render () {
    return this.props.matches.map((match) => (
      <div>
        <button onClick = {this.handleClick}> {match.gameId} </button>
      </div>
    ))
  }
}

export default MatchID;
