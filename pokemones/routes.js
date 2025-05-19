const express = require('express');
const router = express.Router();
const { getPokemonJson } = require('./controllers/pokemonJsonController');
const { getPokemonFilosofia } = require('./controllers/pokemonFilosofiaController');
const { getBienvenida } = require('./controllers/bienvenidaController');

router.get('/', getBienvenida);
router.get('/pokemon', getPokemonJson);
router.get('/filosofia', getPokemonFilosofia);

module.exports = router; 