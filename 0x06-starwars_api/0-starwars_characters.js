#!/usr/bin/node

const request = require('request');


if (!process.argv[2]) {
  console.error('Please provide a Movie ID as the first argument.');
  process.exit(1);
}


request(`https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`, function (err, res, body) {
  if (err) {
    console.error('Error fetching movie:', err.message);
    return;
  }
  
  if (res.statusCode !== 200) {
    console.error(`Failed to fetch movie: HTTP ${res.statusCode}`);
    return;
  }


  try {
    const characters = JSON.parse(body).characters;
    printCharactersInOrder(characters, 0);
  } catch (parseError) {
    console.error('Error parsing movie data:', parseError.message);
  }
});


const printCharactersInOrder = (characters, index) => {
  if (index >= characters.length) return;


  request(characters[index], function (err, res, body) {
    if (err) {
      console.error('Error fetching character:', err.message);
      return;
    }

    if (res.statusCode !== 200) {
      console.error(`Failed to fetch character: HTTP ${res.statusCode}`);
      return;
    }

    try {
      console.log(JSON.parse(body).name);
      printCharactersInOrder(characters, index + 1);
    } catch (parseError) {
      console.error('Error parsing character data:', parseError.message);
    }
  });
};
