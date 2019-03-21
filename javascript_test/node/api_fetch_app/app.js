const https = require('https');
var fs = require('fs');


let summonerUid = '';
let summonerInfo = '';
let url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Kiting%20Since%2090?api_key=RGAPI-907dfd25-3e8c-4651-b8c3-7ddf96d2d8c0'


let call = https.get(url, function (resp) {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    //data += chunk;
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    //console.log(JSON.parse(data));
    let info = JSON.parse(data);
    fs.appendFile('Kiting_Info.json', data, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
