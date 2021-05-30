
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


// Never

function cicloInfinito():never{

        while(true){
            //
        }

}


// Any

let variable:any = 'hola mundo';

(<string>variable).toUpperCase();


// Funciones

function saludar(nombre:string){
    return 'Hola ' + nombre;
}

function alertar(){
    alert('Esto es una alerta');
}

let miFuncion1: () => void;

miFuncion1 = alertar;


// Funciones - Parámetros obligatorios
// function crearPersona(nombre:string, apellido:string){
    
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }

// }

// let persona1 = crearPersona('Sergio');


// Funciones - Parámetros opcionales

function crearPersona(nombre:string, apellido?:string){
    
    return {
        nombre,
        apellido
    }

}

let persona1 = crearPersona('Sergio');


// Objetos

let persona2 = {
    nombre: 'Juan',
    edad: 20
}

persona2 = {
    nombre: 'Laura',
    edad: 21
}

let persona3: {nombre:string, edad:number, decirEdad:() => string} = {
    nombre: 'Juan',
    edad: 20,
    decirEdad(){
        return 'Mi edad es ' + this.edad;
    }
}


// Creando un tipo de objeto personalizado

type Persona = {

    nombre:string;
    edad:number;
    altura?:number;
    decirNombre:() => string;

}

let persona4:Persona = {

    nombre: 'Luis',
    edad: 24,
    decirNombre(){
        return this.nombre;
    }

}