const express = require('express');
const router = express.Router();
const { index, getPokemonJson, getPokemonFilosofia } = require('../controllers/pokemonController');

router.get('/', index);
router.get('/pokemon', getPokemonJson);
router.get('/filosofia', getPokemonFilosofia);

module.exports = router; 