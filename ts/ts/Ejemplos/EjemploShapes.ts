interface Mamifero {
    cantidad: number
}

interface Comedor {
    comida: string,
    comer(): number
}
class Animal implements Mamifero, Comedor {
    comer(): number {
        throw new Error("Method not implemented.");
    }
    cantidad: number;
    comida: string;


}

class Perro {
    cantidad: number
    comida: string;
    // comer(): number {
    //     throw new Error("Method not implemented.");
    // }
}

let x = new Animal();
let y = new Perro();
x = y;  //Error si NO descomentan el metodo comer, es decir si la clase perro no implementa comer
y = x; //Esta asignacion es posible incluso aunque ambos objetos sean instanciados de clases diferentes