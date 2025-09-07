// Ordenar os personagens através de um parâmetro

const data = require('../database')

const orderedName = data.characters.sort((a, b) => a.name.localeCompare(b.name));
const orderedGender = data.characters.sort((a, b) => a.gender.localeCompare(b.gender));

console.log(orderedName);
