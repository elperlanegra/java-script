let results;

// results = (2 + 3) * 5 // 25
// results = 2 + 3 * 5 // 17
results = (25 % 7) * 3; // 12

// console.log(results);

let precioConDescuento, precio, descuento;
precio = 15.69; // En Cordobas
descuento = 7; // tanto por ciento
precioConDescuento = precio - (precio * descuento) / 100;

// console.log(precioConDescuento);

class Carro {
  marca;
  modelo;
  funciona;

  constructor(marca, modelo, funciona) {
    this.marca = marca;
    this.modelo = modelo;
    this.funciona = funciona;
  }
}

let miCarro = new Carro("Mazda", 2021, true);
// console.log(miCarro)

class Persona {
  nombre;
  apellido;
  edad;
  direccion;
  correo;

  constructor(nombre, apellido, edad, direccion, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
    this.correo = correo;
  }
}

let person = new Persona("Manuel", "Duarte", 20, "Bilwi", "manuel@duarte.com");
// console.log(person)

/**
 * Constructor
 *
 * Mediante el método constructor declaramos los nombres de las propiedades que compartirán todas las instancias
 * precedidas por la palabra clave this asignándoles a través de los parámetros los valores específicos de cada instancia:
 *
 */

class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

let user1 = new User("Jose", "Moncada");
let user2 = new User("Manuel", "Duarte");

// console.log(user1)
// console.log(user2)

class Factura {
  constructor(numero, cliente, divisa, subtotal, IVA) {
    this.numero = numero;
    this.cliente = cliente;
    this.divisa = divisa;
    this.subtotal = subtotal;
    this.IVA = IVA;
  }
}

const factura1 = new Factura(201, "Transportes SA", "eur", 542, 113);
const factura2 = new Factura(202, "Mudanzas SA", "eur", 100, 21);

console.log(
  "La factura " + factura1.numero + " está en divisa " + factura1.divisa
);
// La factura 201 está en divisa eur
