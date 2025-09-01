// 06 - Imprima todos os nomes das espécies

const data = require('../database');

function speciesNames() {
   return data.species.reduce((prev, curr) => {
      return [...prev, curr.name]; // Os três pontos(...) significam Spread Operator (espalhar os elementos "na mesa")
   }, [])
}

console.log(speciesNames());
