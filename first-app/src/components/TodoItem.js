import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(props) {
//these are where my objects will go


  return (
    <div className="todo-item">
      <p>{props.item.text}</p>
      <input type="checkbox"
      checked={props.item.completed}
      onChange={() => console.log("Changed!")} 
      />
    </div>
  );

}

export default MyInfo
