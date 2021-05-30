// Definir una interface llamada Punto que declare un método llamado imprimir. Luego declarar dos clases que la implementen.

interface Punto {
    imprimir(): void;
}

class PuntoPlano implements Punto {
    constructor(private x: number, private y: number) { }

    imprimir() {
        console.log(`Punto en el plano: (${this.x},${this.y})`);
    }
}

class PuntoEspacio implements Punto {
    constructor(private x: number, private y: number, private z: number) { }

    imprimir() {
        console.log(`Punto en el espacio: (${this.x},${this.y},${this.z})`);
    }
}


let puntoPlano1: PuntoPlano;
puntoPlano1 = new PuntoPlano(10, 4);
puntoPlano1.imprimir();

let puntoEspacio1: PuntoEspacio;
puntoEspacio1 = new PuntoEspacio(20, 50, 60);
puntoEspacio1.imprimir();

/**
    Para declarar una interface en TypeScript utilizamos la palabra clave interface y seguidamente su nombre. 
    Luego entre llaves indicamos todas las cabeceras de métodos y propiedades. 
    En nuestro ejemplo declaramos la interface Punto e indicamos que quien la implemente debe definir un método 
    llamado imprimir sin parámetros y que no retorna nada:
 */