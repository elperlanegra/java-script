// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, al momento de qe se genere el hosting, las funciones se declarán primero, y despues las variables.

// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);

let miNombre = "Manuel";

// Lo que sucede con el hoisting
let miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Manuel";

// ===  Hoisting con funcionts  ===

hey();

function hey() {
  console.log("Hola " + miNombre);
}

let miNombre = "Manuel";

// Lo que sucede con hoisting

function hey() {
  //La función se declara hasta arriba, y después se declaran las variables.
  console.log("Hola " + miNombre);
}

let miNombre;

hey();

miNombre = "Manuel";

