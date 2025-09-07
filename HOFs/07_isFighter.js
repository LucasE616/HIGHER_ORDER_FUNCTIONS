// Verificar se o personagem possui poderes ou não. Adicionar a propriedade isFighter com True(quando tiver poderes) ou False(quando não tiver poderes). Faça isso com todos os personagens.

const data = require('../database');

function isFighter() {
   data.characters.forEach((character) => {
      if (character.powers.length === 0) {
         character.isFighter = false;
      } else {
         character.isFighter = true;
      }
   })
   return data.characters;
}

console.log(isFighter());
