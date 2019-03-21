import React from "react"
import '../App.css'


class PlayerCard extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        ...props
      }
  }
  render () {
    return (
      <div >
        <div className= "player-card" >
          <p>player: {this.props.players.participantId}</p>
          <p>kills: {this.props.players.stats.kills} deaths: {this.props.players.stats.deaths} assists: {this.props.players.stats.assists} </p>
          <p>Winner: {this.props.players.stats.win + ''}</p>
        </div>
      </div>
    )
  }
}

export default PlayerCard
