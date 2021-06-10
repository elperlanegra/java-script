// JavaScript POO

/*
const s = "Hola"
console.log(typeof(s))

const s2 = new String("Hola")
console.log(typeof(s2))

console.log(window)
window.alert(1)
*/

// Objetos literales

const libro = {
    title: "Libros 1",
    author: "Manuel Duarte",
    year: 2021,
    editorial: "TheCodeMonsters",
    getResumen: function(){
        return `${this.title} fue escrito por ${this.author} en el año ${this.year}`
    }
}

const libro2 = {
    title: "Libro 2",
    author: "Manuel López",
    year: 2021,
    editorial: "TheCodeMonsters"
}

console.log(libro.getResumen()) // De esta forma lo muestra de forma de json
console.log(Object.values( libro ) )
console.log(Object.keys( libro ) )
