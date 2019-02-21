import React from "react"

function ChampionObjectCard(props) {
    return (
      <div>
        <p> Champion Name: {props.champion.name} </p>
        <p> Champion id: {props.champion.id} </p>
        <p> Role: {props.champion.role} </p>
        <p> Secondary: {props.champion.secondary} </p>
      </div>
    )
}

export default ChampionObjectCard
