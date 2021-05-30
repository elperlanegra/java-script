

// Clases

class Vehiculo {

    private alertarSobreElTipo(){
        alert(this.tipo)
    }
    
    protected obtenerTipo(){
        return this.tipo;
    }

    constructor(public tipo:string){
        
    }

}

class Carro extends Vehiculo {

    constructor(tipo:string, public capacidad:number){
        super(tipo);

        console.log(super.obtenerTipo())
    }

}

let carro1 = new Carro('Terrestre', 5);

