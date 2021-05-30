

// Clases

abstract class Producto {


    constructor(private _precio:number){
        
    }

    get precio():number{
        return this._precio;
    }

    set precio(nuevoPrecio:number){
        this._precio = nuevoPrecio;
    }

}

class Bolso extends Producto{

    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string, precio:number){
        super(precio);
        this.marca = marca;
        this.modelo = modelo;
    }

}