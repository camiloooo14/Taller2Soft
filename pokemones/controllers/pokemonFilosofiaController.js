const { getRandomPokemon } = require('../pokemones');
const os = require('os');
const fs = require('fs');
const path = require('path');

function getPokemonFilosofia(req, res) {
  const pokemon = getRandomPokemon();
  const contenedor_id = os.hostname();
  const filePath = path.join(__dirname, '../views/filosofia.html');

  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      return res.status(500).send('Error al cargar la plantilla HTML');
    }
    // Reemplazar los placeholders
    html = html.replace('{{nombre}}', pokemon.nombre)
               .replace('{{imagen}}', pokemon.imagen)
               .replace('{{nombre}}', pokemon.nombre)
               .replace('{{frase}}', pokemon.frase)
               .replace('{{contenedor_id}}', contenedor_id);
    res.send(html);
  });
}

module.exports = { getPokemonFilosofia }; 