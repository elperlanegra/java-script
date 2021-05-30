

// Clases

class Carro {

    marca:string;
    modelo: number;
    funciona: boolean;


    constructor(marca:string, modelo:number, funciona:boolean){
        this.marca = marca;
        this.modelo = modelo;
        this.funciona = funciona;
    }

}

let miCarro = new Carro('Mazda', 2010, true);
console.log(miCarro);

let miCarro2 = new Carro('Toyota', 2002, false);
console.log(miCarro2);
