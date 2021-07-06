

// Clases

class Carro {

    public decirMarca() {
        console.log(this.mensaje() + this.marca);
    }

    private mensaje() {
        return 'La marca es ';
    }


    constructor(public marca: string, public modelo: number, public funciona: boolean) {

    }

}

let miCarro = new Carro('Mazda', 2010, true);

miCarro.decirMarca();