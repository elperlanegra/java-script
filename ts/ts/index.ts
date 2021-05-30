let a: string = "Hola"

a = 'Hola que tal'

// Esto no lo permite ts, por que es otro tipo de dato
// a = 2

let b: number = 10

b = 10 + 10

const num1 = 2
const num2 = 4

b = num1 + num2

// Usando TS
function suma(num1: number, num2: number): number {
    return num1 + num2
}

// Usando JS
function sumaJS(num1, num2) {
    return num1 + num2
}

// Type keyword
type dni = number;
let dniNumber: dni = 2123
let dniNumber2: dni = 2123