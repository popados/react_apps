const request = require('request');

let url = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/bugPPRmcArYxOcbfZxs-g7fwoe9aZHo8ajQJ034e1JAnwQ?api_key=RGAPI-907dfd25-3e8c-4651-b8c3-7ddf96d2d8c0'

request(url, { json: true }, (err, res, data) => {
  if (err) { return console.log(err); }
  let match_history = data;
  console.log(data);
});
