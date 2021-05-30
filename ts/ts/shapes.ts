class Person {
    edad: number;
    height: number;
    id: string;

    constructor(edad: number, height: number, id: string) {
        this.edad = edad
        this.height = height
        this.id = id
    }

}

class Alumno extends Person {
    matricula: string

    constructor(edad: number, height: number, id: string, matricula: string) {
        super(edad, height, id)
        this.matricula = matricula
    }
}

let person: Person = new Person(12, 23, "Carlos")
let alumno: Alumno = new Alumno(12, 23, "Carlos", "22358")

