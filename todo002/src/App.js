import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/data.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
        count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log("works")
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  loadData() {

  }

  render() {
      return (
          <div>
              <h1>{this.state.count}</h1>
              <button onClick = {this.handleClick}>Change!</button>
              <input name="enter api key"></input>
          </div>
      )
  }
}


export default App;
