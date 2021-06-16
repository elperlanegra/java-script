console.log('Objetos');

let jugador = {
  name: 'Messi',
  balosnesDeOro: 6,
  botasDeOro: 6,
  champios: 4,
  ligas: 27,
  copas: 34,
  salario: 12.334,
  club: 'Barcelona',
  liga: 'Santander',
  dorsal: 10,
  resisencia: {
    pais: 'España',
    capital: 'Madrid',
    ciudad: 'Barcelona',
    estadio: 'Cap Nou',
  },
  direccion: {
    pais: 'Argentina',
    capital: 'Buenos Aires',
    ciudad: 'Rosario',
    estadio: 'Bombonera',
    club: {
        name: 'Nuwels',
        fundacion: '1500',
        dorsal: 10
    }
  },
};

var jugadores = 'name';

console.log(jugador);

// Anotación por puntos
console.log(jugador.name);

// Anotación por coerchetes
console.log(jugador[jugadores]);
