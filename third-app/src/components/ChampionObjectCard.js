import React from "react"

function Champion(props) {
    return (
      <div>
        <p> Champion name: {props.champ.name} </p>
        <p> Champion id: {props.champ.id} </p>
        <p> Role: {props.champ.role} </p>
        <p> Description: {props.champ.description} </p>
        <input type="Button" value="Select this champion" />
      </div>
    )
}

export default Champion
