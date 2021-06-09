// Arreglos

let juegos = ["Zelda", "NeedFordSpeed", "Mario", "PS21", "Fifa21", "Fornite"];

console.log("Largo", juegos.length); // Para saber el tamaño de arreglo

let first = juegos[3 - 3]; // = 0 entonces se imprime Zelda
let ultimo = juegos[juegos.length - 1];

console.log({ first, ultimo }); // la cantidad del arreglo -1 en ese caso seria fornite

juegos.forEach((element, indice, arr) => {
  console.log({ element, indice, arr });
});

let nuevo = juegos.push("F-Zero");
console.log({ nuevo, juegos });
