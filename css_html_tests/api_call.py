import requests

r = requests.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Kiting%20Since%2090?api_key=RGAPI-de40982d-f9be-4567-8cdc-3ef1c2657a94')

r.status_code
