

// Clases

class Producto {


    constructor(private _precio: number) {

    }

    get precio(): number {
        return this._precio;
    }

    set precio(nuevoPrecio: number) {
        this._precio = nuevoPrecio;
    }

}

let bolso = new Producto(24.99);

bolso.precio = 30;

console.log(bolso.precio)