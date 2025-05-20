const Pokemon = require('../models/Pokemon');

const pokemones = [
  new Pokemon(1, 'Bulbasaur', 0.7, 'Espesura', 'https://pokemonestaller2.s3.us-east-1.amazonaws.com/1.png', 'La paciencia es la clave para florecer.'),
  new Pokemon(4, 'Charmander', 0.6, 'Mar Llamas', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/2.png', 'El fuego interior nunca debe apagarse.'),
  new Pokemon(7, 'Squirtle', 0.5, 'Torrente', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/3.png', 'La flexibilidad te permite superar cualquier obstáculo.')
];

module.exports = {
  pokemones
}; 