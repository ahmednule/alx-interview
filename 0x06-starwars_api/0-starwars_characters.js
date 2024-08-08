#!/usr/bin/node

const request = require('request');

request('https://swapi-api.alx-tools.com/api/people/' + process.argv[2], function (err, res, body) {
  if (err) {
    console.error(err);
    return;
  }
  
  if (res.statusCode !== 200) {
    console.error(`Failed to fetch data: ${res.statusCode}`);
    return;
  }

  const actors = JSON.parse(body).characters;
  exactOrder(actors, 0);
});

const exactOrder = (actors, x) => {
  if (x === actors.length) return;

  request(actors[x], function (err, res, body) {
    if (err) {
      console.error(err);
      return;
    }

    if (res.statusCode !== 200) {
      console.error(`Failed to fetch character: ${res.statusCode}`);
      return;
    }

    console.log(JSON.parse(body).name);
    exactOrder(actors, x + 1);
  });
}