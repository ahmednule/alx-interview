#!/usr/bin/node
const request = require('request');

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        reject(err);
      } else if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
      } else {
        resolve(body);
      }
    });
  });
};

const main = async () => {
  if (!process.argv[2]) {
    console.error('Please provide a Movie ID as the first argument.');
    process.exit(1);
  }

  try {
    const filmBody = await requestPromise(`https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`);
    const characters = JSON.parse(filmBody).characters;

    for (const characterUrl of characters) {
      const characterBody = await requestPromise(characterUrl);
      const character = JSON.parse(characterBody);
      console.log(character.name);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
};
main();
