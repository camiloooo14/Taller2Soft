const pokemones = [
  {
    id: 1,
    nombre: 'Bulbasaur',
    altura: 0.7,
    habilidad: 'Espesura',
    imagen: 'https://pokemonestaller2.s3.us-east-1.amazonaws.com/1.png',
    frase: 'La paciencia es la clave para florecer.'
  },
  {
    id: 4,
    nombre: 'Charmander',
    altura: 0.6,
    habilidad: 'Mar Llamas',
    imagen: 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/2.png',
    frase: 'El fuego interior nunca debe apagarse.'
  },
  {
    id: 7,
    nombre: 'Squirtle',
    altura: 0.5,
    habilidad: 'Torrente',
    imagen: 'https://pokenea-imagenes14.s3.us-east-1.amazonaws.com/3.png',
    frase: 'La flexibilidad te permite superar cualquier obstáculo.'
  }
];

function getRandomPokemon() {
  const random = Math.floor(Math.random() * pokemones.length);
  return pokemones[random];
}

module.exports = { pokemones, getRandomPokemon }; 