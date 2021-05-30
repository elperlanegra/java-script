/**
 * Crear una interface en TypeScript a partir de este código JavaScript
 */

var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};


// TS


interface Hero {
    nombre: string,
    poderes: string[]

}

const trepaMuros: Hero = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
}

const hulk: Hero = {
    nombre: "Hulk",
    poderes: ['Fuerza', 'Color Verde', 'Super Fuerte']
}

const thor: Hero = {
    nombre: "Thor",
    poderes: ['Hijo de odin', 'Tira rayos', 'Super Fuerza', 'Mato a thanos']
}

