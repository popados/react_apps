const express = require('express');
const MATCH_DATA = require('./matchData.js')

let cards = {
  fireball: 1,
  little_draco: 1,
  flame_strike: 2,
  imp: 1,
  spirtfire: 2
}

const app = express();
const server = app.listen(8000, listening);
console.log("server is starting");


function listening() {
  console.log("listening")
}

app.use(express.static('website'));

app.get('/search/:card/:num', sendCard);

function sendCard(request, response) {
  let data = request.params;
  let num = data.num;
  let reply = "";
  for (var i = 0; i < num; i++) {
    reply += "I love " + data.card + " too<br/>";
  }
  response.send(reply)
}

app.get('/all', sendAll);

function sendAll (request, response) {
  response.send(cards)
}
