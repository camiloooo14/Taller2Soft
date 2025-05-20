const { pokemones } = require('../database/pokemones');

function getRandomPokemon() {
  const random = Math.floor(Math.random() * pokemones.length);
  return pokemones[random];
}

module.exports = {
  getRandomPokemon
}; 