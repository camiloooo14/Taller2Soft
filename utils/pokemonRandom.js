const { pokemones } = require('../database/table_pokemones');

function pokemonRandom() {
  const random = Math.floor(Math.random() * pokemones.length);
  return pokemones[random];
}

module.exports = {
  pokemonRandom
}; 