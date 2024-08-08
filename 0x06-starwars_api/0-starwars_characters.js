#!/usr/bin/node

const request = require('request');

request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], function (err, res, req) {
  if (err) throw err;
  const actors = JSON.parse(req).characters;
  exactOrder(actors, 0);
});
const exactOrder = (actors, x) => {
  if (x === actors.length) return;
  request(actors[x], function (err, res, req) {
    if (err) throw err;
    console.log(JSON.parse(body).name);
    exactOrder(actors, x + 1);
  });
};