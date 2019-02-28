import React from "react"


function PlayerCard(props) {
    console.log(props.players)
    return (
      <div>
        <h1> Champion Card {props.players}} </h1>
      </div>
    )
}

export default PlayerCard
