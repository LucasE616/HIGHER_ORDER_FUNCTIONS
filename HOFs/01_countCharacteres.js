// Criando uma função que mostre a quantidade de personagens

const data = require('../database');

function countCharacters() {
   return data.characters.length;
};

console.log(countCharacters());
