const Pokemon = require('../models/Pokemon');

const pokemones = [
  new Pokemon(1, 'Bulbasaur', 0.7, 'Espesura', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/sapo_verde.png', 'La paciencia es la clave para florecer.'),
  new Pokemon(4, 'Charmander', 0.6, 'Mar Llamas', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/Flamariete.png', 'El fuego interior nunca debe apagarse.'),
  new Pokemon(7, 'Squirtle', 0.5, 'Torrente', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/tortuga_azul.png', 'La flexibilidad te permite superar cualquier obstáculo.'),
  
  new Pokemon(25, 'Pikachu', 0.4, 'Electricidad Estática', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/Electrofuria.png', 'La energía positiva ilumina el camino.'),
  new Pokemon(133, 'Eevee', 0.3, 'Adaptación', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/okidogi.png', 'La versatilidad es el camino a la evolución.'),
  new Pokemon(150, 'Mewtwo', 2.0, 'Presión', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/mariposa_morada.png', 'El verdadero poder viene del autoconocimiento.'),
  new Pokemon(6, 'Charizard', 1.7, 'Mar Llamas', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/dragon_naranja.png', 'Las alturas más grandes se alcanzan con determinación.'),
  new Pokemon(149, 'Dragonite', 2.2, 'Fuerza Interior', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/gusano_verde.png', 'La bondad es la verdadera fuerza.'),
  new Pokemon(94, 'Gengar', 1.5, 'Levitación', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/mariposa_morada.png', 'Las sombras enseñan a valorar la luz.'),
  new Pokemon(143, 'Snorlax', 2.1, 'Inmunidad', 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/sapo_verde.png', 'El descanso es tan importante como la acción.')
];

module.exports = {
  pokemones
}; 