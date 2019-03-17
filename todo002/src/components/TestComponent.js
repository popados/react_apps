import React from 'react'
import ReactDOM from 'react-dom'
import '../App.css';


class TestComponent extends React.Component {
  render () {
    return (
      <div>
      //undefined object??
      <h1> Champion Card Hard Code Test {this.props.players} </h1>
      </div>
    )
  }
}

export default TestComponent;
