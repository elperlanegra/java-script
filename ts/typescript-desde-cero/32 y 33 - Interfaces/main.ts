// Interfaces

interface Vehiculo {
    tipo: string;
    capacidad: number;
    avanzar(funciona: boolean): string;
}

let carro: Vehiculo = {
    tipo: "Terrestre",
    capacidad: 5,
    avanzar(estaFuncionando: boolean) {
        if (estaFuncionando) {
            return "Estoy avanzando";
        } else {
            return "No funciona";
        }
    },
};

// interface Vehiculo {

//     tipo: string;
//     capacidad?: number;
//     avanzar(funciona:boolean):string;

// }

// class Carro implements Vehiculo {

//     avanzar(){
//         return 'Estoy avanzando'
//     }

//     constructor(public tipo:string){

//     }

// }

interface Correr {
    (): string;
}

let quieroCorrer: Correr;

quieroCorrer = function () {
    return "Si quiero correr";
};
