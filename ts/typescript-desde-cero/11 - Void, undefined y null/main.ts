
// Tipos de datos

// Booleanos
let esBueno:boolean = true;
let esMalo:boolean = false;
let esNeutral:boolean;

// Numeros
let numero:number = 10;
let numero2:number;

numero2 = 20;

// Cadenas de caracteres
let nombre:string = "Sergio";
let apellido: string = 'Agamez';
let segundoApellido: string = 'Negrete';


let nombreCompleto:string = `${nombre} ${apellido} ${segundoApellido}`;


// Arreglos

let nombres:string[] = ['Sergio', 'Maria', 'Pedro'];

nombres.push('5');

// Tuplas

let arreglo:[boolean, string] = [true, 'Hola'];


// Enums

enum Roles { Admin = 1, User, Guest };

let usuario:Roles = Roles.Guest;

console.log(usuario);


// Void, undefined y null


// function saludar():void{

//     alert('Hola');

// }

let identificacion:undefined = undefined;
let identificacion2:null = null;



