let nombre = new Array(5);

nombre[0] = "Juan"
nombre[1] = "Pedro"
nombre[2] = "Simon"
nombre[3] = "Juanito"
nombre[4] = "Lucas"

// asi podemos recorrer un arreglo en js
for (var i = 0; i < nombre.length; i++) {
    //  console.log(i)
}

// console.log(nombre)


var obj = null,
    data = ['platano', 'manzana', 'papaya'];

for (var i = 0; i <= data.length - 1; i++) {
    if (data[i] === 'platano') {
        obj = data[i];
    }
}

// console.log(obj)


// Crear un Array
let calificaciones = [56, 57, 78, 99, 12]

calificaciones.forEach((cal, index, calificaciones) => {
    // console.log({ cal, index, calificaciones })
})

// Acceder a un elemento de Array mediante su índice

let frutas = ['Manzana', "Banana", 'Limon']
// console.log(frutas.length) // Esto imprime el tamaña del arreglo

let primero = frutas[0]
// console.log(primero) // Esto imprime el primer valor de l arreg

let ultimo = frutas[frutas.length - 1] // Esto muestra el ultimo valor del arreglo
// console.log(ultimo)

// Recorrer un Array

frutas.forEach((elemento, indice, array) => {
    // console.log(elemento, indice)
})

// Añadir un elemento al final de un Array
let nuevaLongitud = frutas.push('Mandarina') // Añade 'Mandarina" al final
// console.log(frutas)

// Eliminar el último elemento de un Array
let ultimoBorrar = frutas.pop(); // Elimina Mandarina del final
// ["Manzana", "Banana"]
console.log(frutas)

// Añadir un elemento al principio de un Array
let newLongitud = frutas.unshift('Fresa'); // Añade Fresa al inicio
// ["Fresa", "Manzana", "Banana"]
console.log(frutas)

// Eliminar el primer elemento de un Array
let firstDelete = frutas.shift() // Elimina el primer elemento que en este seria "Fresa"
console.log(frutas)

frutas.forEach((elemento, indice, arr) => {
    console.log(elemento, indice)
})