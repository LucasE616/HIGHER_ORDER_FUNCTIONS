// Para cada personagem, imprima uma frase da seguinte forma:
   // Parte 1: {NOME} é da espécie {ID ESPÉCIE}.
   // Parte 2: {NOME} é da espécie {NOME ESPÉCIE}.
   
const data = require('../database');

function informationP1() {
   return data.characters.map((character) => `${character.name} é da espécie ${character.speciesId}`);
}

function informationP2() {
   return data.characters.map((character) => {
      const specieName = data.species.find((specie) => specie.id === character.speciesId);

      return `${character.name} é da espécie ${specieName.name}`;
   });
}

console.log(informationP1());
console.log(informationP2());
