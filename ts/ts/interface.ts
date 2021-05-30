type Dni = number // TypeKeywords lo usamos para crear alias 

interface Persona {
    altura?: number // Le estamos diciendo que es opcional
    age: number
    name: string
    lastName: string
    dni: Dni
}

const persona: Persona = {
    altura: 12,
    age: 25,
    name: "Carlos",
    lastName: "Duarte",
    dni: 123534
}