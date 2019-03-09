import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var request = new XMLHttpRequest();

request.open('GET', 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/bugPPRmcArYxOcbfZxs-g7fwoe9aZHo8ajQJ034e1JAnwQ?api_key=RGAPI-d96c52ad-25cd-497f-8745-5e75a8902ac4', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
    });
  } else {
    console.log('error');
  }
}

request.send();


class App extends Component {
  constructor () {
      super()
      this.state = {

      }
    }
  render() {
    return (
      <div >
      <h1> Nothing here </h1>
      </div>
    );
  }
}

export default App;
