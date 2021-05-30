

// Clases

class Carro {

    static marca:string = 'Mazda';
    modelo: number;
    funciona: boolean;

    static decirMarca(){
        console.log('Soy un método estático')
    }


    constructor(modelo:number, funciona:boolean){
        this.modelo = modelo;
        this.funciona = funciona;
    }

}

Carro.decirMarca();