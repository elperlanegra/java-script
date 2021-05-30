/**
 * Creacion de Clases
 */

class Trasporte {
    private velocidad: number;
    private formaDeMovilidad: string;


    constructor(velocidad: number, formaDeMovilidad: string) {
        this.velocidad = velocidad
        this.formaDeMovilidad = formaDeMovilidad

    }

    getVelocidad() {
        return this.velocidad
    }

    setVelocidad(velocidad: number) {
        this.velocidad = velocidad
    }

    getFormaDeMovilidad() {
        return this.formaDeMovilidad
    }

    setFormaDeMovilidad(formaDeMovilidad: string) {
        this.formaDeMovilidad = formaDeMovilidad
    }
}

const trasporte: Trasporte = new Trasporte(20, 'Suelo')

// TODO: Crear Herencia

// Herencia
class Auto extends Trasporte {
    private cantidadDePuertas: number

    constructor(velocidad: number, formaDeMovilidad: string, cantidadDePuertas) {
        super(velocidad, formaDeMovilidad)
        this.cantidadDePuertas = cantidadDePuertas
    }

    getVelocidad() {
        return super.getVelocidad() + 10;
    }

    getCantidadDePuertas() {
        return this.cantidadDePuertas;
    }

    setCantidadDePuertas(cantidadDePuertas: number) {
        this.cantidadDePuertas = cantidadDePuertas
    }

}

const auto: Auto = new Auto(20, 'Suelo', 4)