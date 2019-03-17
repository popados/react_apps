

  var obj = DATA
  var playerID = []
  console.log(DATA)
  console.log(obj.participants[0])

  var participant = obj.participants

  playerID.push(obj.participants[0].stats)
  playerID.push(obj.participants[1])
  playerID.push(obj.participants[2])
  playerID.push(obj.participants[3])
  playerID.push(obj.participants[4])

  console.log(playerID)
var request = new XMLHttpRequest();


  request.open('GET', 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/bugPPRmcArYxOcbfZxs-g7fwoe9aZHo8ajQJ034e1JAnwQ?api_key=[API_KEY]', true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);
  }
  request.send();
