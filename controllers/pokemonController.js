const { pokemones } = require('../database/pokemones');
const { getRandomPokemon } = require('../utils/pokemonUtils');
const os = require('os');
const fs = require('fs');
const path = require('path');

function index(req, res) {
  const filePath = path.join(__dirname, '../views/bienvenida.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error al cargar la página de bienvenida');
    }
    res.send(html);
  });
}

function getPokemonJson(req, res) {
  const pokemon = getRandomPokemon();
  res.json({
    id: pokemon.getId(),
    nombre: pokemon.getNombre(),
    altura: pokemon.getAltura(),
    habilidad: pokemon.getHabilidad(),
    contenedor_id: os.hostname()
  });
}

function getPokemonFilosofia(req, res) {
  const pokemon = getRandomPokemon();
  const contenedor_id = os.hostname();
  const filePath = path.join(__dirname, '../views/filosofia.html');

  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error al cargar la plantilla HTML');
    }
    html = html.replace('{{nombre}}', pokemon.getNombre())
               .replace('{{imagen}}', pokemon.getImagen())
               .replace('{{frase}}', pokemon.getFrase())
               .replace('{{contenedor_id}}', contenedor_id);
    res.send(html);
  });
}

module.exports = { index, getPokemonJson, getPokemonFilosofia }; 