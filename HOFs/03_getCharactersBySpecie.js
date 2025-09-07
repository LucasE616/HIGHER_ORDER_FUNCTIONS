// Mostre o primeiro personagem de acordo com o id da espécie

const data = require('../database');

function getCharactersBySpecie(id) {
   return data.characters.find((specie) => specie.speciesId === id);
};

console.log(getCharactersBySpecie(1));
