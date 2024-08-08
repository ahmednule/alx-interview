#!/usr/bin/node

const axios = require('axios');

if (!process.argv[2]) {
  console.error('Please provide a film ID as an argument');
  process.exit(1);
}

axios.get('https://swapi-api.alx-tools.com/api/films/' + process.argv[2])
  .then(response => {
    const actors = response.data.characters;
    exactOrder(actors, 0);
  })
  .catch(error => {
    console.error('Failed to fetch film:', error.message);
  });

const exactOrder = (actors, index) => {
  if (index === actors.length) return;

  axios.get(actors[index])
    .then(response => {
      console.log(response.data.name);
      exactOrder(actors, index + 1);
    })
    .catch(error => {
      console.error('Failed to fetch character:', error.message);
    });
};
