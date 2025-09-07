# HOF (Higher Order Functions)
As Higher-Order Functions (HOFs) em JavaScript são funções que recebem outras funções como parâmetro ou retornam funções como resultado. Elas permitem escrever código mais flexível e reutilizável, sendo muito usadas em arrays com métodos como map, filter, reduce e forEach. Essas funções tornam o código mais declarativo e são fundamentais na programação funcional em JavaScript.

## Exemplos de HOFs em JavaScript:

### SOME( )
- A função some() verifica se <strong>pelo menos um elemento atende a uma condição</strong> passada como parâmetro. <br>
[🏀, 🏓, 🧪, 🤖, ⚙️, 🐳, 🚗].some(🤖) ➔ true <br>
[🏀, 🏓, 🧪, 🤖, ⚙️, 🐳, 🚗].some(🏈) ➔ false

### EVERY( )
- A função every() é usada quando queremos garantir que <strong>todos os itens</strong> de um array atendam a uma condição passada como parâmetro. <br>
[🏀, 🏓, 🚗, ⚽, ⚙️, 🐳, 🚗].every(🚗) ➔ false; <br>
[🕹️, 🕹️, 🕹️].every(🕹️) ➔ true;

### FIND( )
- A função find() retorna <strong>o primeiro elemento</strong> que atenda a condição passada como parâmetro. <br>
[🏀, 💻, 💡, 🔧, 💣, 🐳, 💣, 💡].find(💣) ➔ 💣;

### FILTER( )
- A função filter() retorna um array <strong>apenas com os elementos que passam em uma condição</strong> passada como parâmetro. <br>
[🏀, ⚠️, 🛰️, ⚠️, ⚠️, 🐳, 🛰️].filter(⚠️) ➔ [⚠️, ⚠️, ⚠️];

### FOREACH( )
- A função forEach() executa uma ação <strong>PARA CADA</strong> elemento do array. <br>
[2, 4, 6, 8, 10].forEach(* 2) ➔ [4, 8, 12, 16, 20]

### SORT( )
- A função sort() serve para <strong>ordenar elementos</strong> de um array. <br>
[7, 5, 8, 3, 2, 1, 4, 6].sort() ➔ [1, 2, 3, 4, 5, 6, 7, 8] <br>
['C', 'A', 'B', 'F', 'E', 'D'].sort() ➔ ['A', 'B', 'C', 'D', 'E', 'F']

### MAP( )
- A função map() <strong>cria um novo array</strong> com o resultado da aplicação de uma função em cada elemento do array original. <br>
[🐮, 🥔, 🌽, 🪵, 🍎].map(🏭) ➔ [🍔, 🍟, 🍿, 🪑, 🥧]

### REDUCE( )
- A função reduce() <strong>reduz todos os elementos a um único valor</strong>, de acordo com a condição passada como parâmetro. <br>
[🧰, 🛢️, 🔧, 🔩, ⚙️].reduce(🛠️) ➔ 🏎️ <br>
[🍔, 🍟, 🍿, 🥧, 🍩].reduce(🍽) ➔ 💩


## Algumas características:
- As HOFs esperam uma função de callback como parâmetro, geralmente uma arrow function;
- A função de callback pode receber até três parâmetros: o valor atual, o índice e o array original;
- A maioria das HOFs não modifica o array original;
- Muito usadas em arrays, eventos, promises e callbacks;
- Tornam o código mais funcional, limpo e reutilizável;
- Podem retornar funções como resultado;
- Permitem aplicar programação funcional em JavaScript.
