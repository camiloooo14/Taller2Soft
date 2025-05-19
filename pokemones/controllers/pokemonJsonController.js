const { getRandomPokemon } = require('../pokemones');
const os = require('os');

function getPokemonJson(req, res) {
  const pokemon = getRandomPokemon();
  res.json({
    id: pokemon.id,
    nombre: pokemon.nombre,
    altura: pokemon.altura,
    habilidad: pokemon.habilidad,
    contenedor_id: os.hostname()
  });
}

module.exports = { getPokemonJson }; 