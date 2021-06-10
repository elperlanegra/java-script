// Decoradores

function hola(constructor: Function) {
    constructor();
}

@hola
class Carro {
    constructor() {
        console.log("Hola carro");
    }
}
