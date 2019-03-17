import React from "react"


class PlayerCard extends React.Component {
  render () {
    return (
      <div>
      <nav className ="cd-primary-nav">
        <div className="dropdown">
          <button className="dropbtn">Player: {this.props.players.participantId} </button>
          <ul className="dropdown-content">
            <li>championId: {this.props.players.championId}</li>
            <br/>
            <li>Kills: {this.props.players.stats.kills}</li>
            <br/>
            <li>Deaths: {this.props.players.stats.deaths}</li>
            <br/>
            <li>champLevel: {this.props.players.stats.champLevel}</li>
            <br/>
            <li>item0: {this.props.players.stats.item0}</li>
            <br/>
            <li>item1: {this.props.players.stats.item1}</li>
            <br/>
            <li>item2: {this.props.players.stats.item2}</li>
            <br/>
            <li>item3: {this.props.players.stats.item3}</li>
            <br/>
            <li>item4: {this.props.players.stats.item4}</li>
            <br/>
            <li>item5: {this.props.players.stats.item5}</li>
            <br/>
            <li>item6: {this.props.players.stats.item6}</li>
            <br/>
            <li> Winner: {this.props.players.stats.win + ''} </li>
          </ul>
          </div>
        </nav>
        </div>
    )
  }
}

export default PlayerCard
