import React from 'react'
import ReactDOM from 'react-dom'
import '../App.css';


class Match extends React.Component {
  render () {
    return this.props.matches.map((match) => (
      <h3>{match.gameId}</h3>
    ))
  }
}

export default Match;
