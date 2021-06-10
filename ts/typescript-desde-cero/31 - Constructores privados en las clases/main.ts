// Clases

class CarroUnico {
    static instancia: CarroUnico;

    private constructor(public marca: string, public modelo: number) { }

    static crearCarroUnico(marca: string, modelo: number) {
        if (!CarroUnico.instancia) {
            CarroUnico.instancia = new CarroUnico(marca, modelo);
        }

        return CarroUnico.instancia;
    }
}

let miCarroUnico = CarroUnico.crearCarroUnico("Mazda", 2100);

let miCarroUnicoCopia = CarroUnico.crearCarroUnico("Toyota", 2030);

console.log(miCarroUnicoCopia);
