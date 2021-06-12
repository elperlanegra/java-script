// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

// let frutas = []; // Array Literal Syntax

let frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
// console.log(frutas);
// console.log(frutas.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
// console.log(frutas[0]); // Los arrays iician en "0"

// === Metodos para mutar arrays ===

// .push();

let masFrutas = frutas.push("Uvas"); // Esté metodo añadirá "Uvas" añ final del array
// console.log(frutas);

// .pop();

var utlimo = frutas.pop("Uvas"); // Eliminará "Uvas" del final
// console.log(frutas);

// unshift()

var nuevaLogitud = frutas.unshift("Uvas"); // Añade "Uvas" al inicio
// console.log(frutas);

// shift()

var borrarFruta = frutas.shift("Manzana"); // Elimina "Manzana" del inico
// console.log(frutas);

// .indexOf();

var posicion = frutas.indexOf("Platano"); // te dará la posición de ese item en el array
// console.log(frutas);

frutas.forEach((elemento, indice, arr) => {
  // console.log({ elemento, indice });
});

for (var i = 0; i < frutas.length; i++) {
  // Con el ciclo for podemos recorrer los arreglos
  console.log(frutas[i]);
}
