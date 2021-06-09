const nameCourse = "JavaScript";

console.log("hello world");

console.log("Curso de " + nameCourse);

// Tipos de datos en JS
// string:  es una cadena de caractere. 'a' = caracter 'Hola Mundo' = string
// Boolean: true false.
// Null: nulo.
// Number: 12345
// "123" = string 123 = number
// Undefined
// Object: objeto
// Primera Variable
// var = la forma vieja de como se declaraban las variables
// let
// const

// Mi primera variable

var miPrimeraVariable = "var";
console.log(miPrimeraVariable);

let miSegundaVariable = "Let";
console.log(miSegundaVariable);

// Mutabilidad
miSegundaVariable = "Cambio de valor en el string";
console.log(miSegundaVariable);

// Boolean
let miBoolean = true;
let miOtroBool = false;

// Number
let miNumero = 0;
let miNumero2 = 123;
let miNumero3 = -342;

console.log(miBoolean, miOtroBool, miNumero, miNumero2, miNumero3);

let undef;
console.log(undef);

let nulo = null;
console.log(nulo);

console.log(typeof nulo);

// Objeto
// Es una agrupación de datos
// Hacen sentido entre si

console.log("#############################################");

// Objeto vacio
const miPrimerObjeto = {};

// Objeto
const miOBjeto = {
  // Los objeto no tienen variables tienen Propiedades
  name: "Carlos",
  lastName: "Duarte",
  age: 20,
  direction: {
    street: "Avenida rosales",
    barrio: "Spanistown",
    city: "Nicaragua",
    country: "Bilwi",
  },
};

console.log(miOBjeto); // Este imprimi todo el objeto
console.log(miOBjeto.direction.street); // De esta manera podemos ir directamente a una de las propiedades

console.log("###################### Arreglos ######################");
// Arreglos
const arrEmpty = [];
const arrConDatos = [1, 2, 3, "Manuel", miOBjeto];

// console.log(arrEmpty);
// console.log(arrConDatos);

// arrConDatos.push(5);
// console.log(arrConDatos);

arrEmpty.push(5);
console.log(arrEmpty);
