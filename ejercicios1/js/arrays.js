let frutas = ['Fresa', 'Limon', 'Naranja', 'Manzana', 'Pera'];

console.log(frutas.length);

// Recorriendo el array con un forEach
frutas.forEach((elemento, indice, arr) => {
  // console.log({elemento, indice, arr});
});

// agrega el un elemento del array
frutas.push('Papaya');

// Agrega un elemento al inicio del array
frutas.unshift('Melon');

// Elimina el primer elemento del array
frutas.shift();

// Recorriendo el array con un for
for (var i = 0; i < frutas.length; i++) {
  // console.log(frutas[i])
}

// Recorriendo el array con un while
var n = 0;
while (n < frutas.length) {
//   console.log(frutas[n]);
  n++;
}

var num1 = 5;
var num2 = 7;
if(num1 < num2){
    console.log("7 es mayor")
}else{
    console.log("5 es mayor")
}

let edad = 18;

if(edad < 12){
    console.log("si")
}else{
    console.log("no")
}