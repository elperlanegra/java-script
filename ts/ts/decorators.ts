
//target hace representacion al elemento que contenga el elemento que estamos extendiendo su funcionalidad "Persona"
//Key hace referencia al metodo

function log(target, key) {
    console.log(key + 'se ha llamado');
  }
  

  // Target hace referencia a la clase humano

class Humano {
    private name: string;

    constructor(name: string) {
        this.name = name
    }
    // Key hace referencia a sayName
    @log
    sayMyName() {
        console.log(this.name)
    }
    // Para evitar el error lo tenemos que activar el acrhivo tsconfig.ts
}

const humano: Humano = new Humano('Manuel')
humano.sayMyName()
