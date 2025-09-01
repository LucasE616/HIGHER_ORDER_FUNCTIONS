# HOF (Higher Order Functions)
As Higher-Order Functions (HOFs) em JavaScript são funções que recebem outras funções como parâmetro ou retornam funções como resultado. Elas permitem escrever código mais flexível e reutilizável, sendo muito usadas em arrays com métodos como map, filter, reduce e forEach. Essas funções tornam o código mais declarativo e são fundamentais na programação funcional em JavaScript.

## Exemplos de HOFs em JavaScript:

### SOME()
[🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🍎].some(🍕) -> true

### EVERY()
[🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🍎].every(🍎) -> false;

### FIND()
[🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🥝, 🍎].find(🥝) -> 🥝;

### FILTER()
[🏀, 🍕, 🍎, 🍕, 🍕, 🐳, 🍎].filter(🍕) -> [🍕, 🍕, 🍕];

### FOREACH()
[2, 4, 6, 8, 10].forEach(* 2) -> [4, 8, 12, 16, 20]

### SORT()
[7, 5, 8, 3, 2, 1, 4, 6].sort() -> [1, 2, 3, 4, 5, 6, 7, 8]

### MAP()
[🐮, 🥔, 🌽, 🪵, 🍎].map(🏭) -> [🍔, 🍟, 🍿, 🪑, 🥧]

### REDUCE()
[🍔, 🍟, 🍿, 🥧, 🍩].reduce(🍽) -> 💩


## OBS:
- As HOFs esperam uma função de callback como parâmetro, geralmente uma arrow function;
- A função de callback pode receber até três parâmetros: o valor atual, o índice e o array original;
- A maioria das HOFs não modifica o array original, exceto o sort();
- Muito usadas em arrays, eventos, promises e callbacks;
- Tornam o código mais funcional, limpo e reutilizável;
